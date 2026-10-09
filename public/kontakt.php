<?php
/**
 * Kontaktformular von www.aj-tech.de
 *
 * Nimmt die Anfrage aus dem Formular entgegen und schickt sie per E-Mail an
 * EMPFAENGER. Antwortet immer mit JSON: {"ok": true} oder {"ok": false, ...}.
 *
 * Versand: standardmäßig über PHP mail(). Liegt neben dieser Datei eine
 * kontakt-config.php (Vorlage: kontakt-config.example.php), wird stattdessen
 * per SMTP über das eigene Postfach versendet. Das ist zuverlässiger, falls
 * Mails über mail() im Spam landen oder gar nicht ankommen.
 */

declare(strict_types=1);

const EMPFAENGER = 'agon.mustafa@aj-tech.de';
const ABSENDER = 'agon.mustafa@aj-tech.de';   // muss eine Adresse der eigenen Domain sein
const ABSENDER_NAME = 'AJ-Tech Website';
const MIN_SEKUNDEN = 3;                          // schneller ausgefüllt = Bot
const MAX_ANFRAGEN_PRO_STUNDE = 5;               // je IP-Adresse

date_default_timezone_set('Europe/Berlin');

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function antwort(int $status, array $daten): void
{
    http_response_code($status);
    echo json_encode($daten, JSON_UNESCAPED_UNICODE);
    exit;
}

function feld(string $name, int $max): string
{
    $wert = isset($_POST[$name]) && is_string($_POST[$name]) ? $_POST[$name] : '';
    $wert = str_replace("\0", '', $wert);
    $wert = trim($wert);
    return function_exists('mb_substr')
        ? mb_substr($wert, 0, $max, 'UTF-8')
        : substr($wert, 0, $max);
}

function einzeilig(string $wert): string
{
    // Verhindert, dass jemand über Zeilenumbrüche eigene Mail-Header einschleust.
    return trim(preg_replace('/[\r\n\t]+/', ' ', $wert) ?? '');
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    antwort(405, ['ok' => false, 'fehler' => 'methode']);
}

// Spam-Falle: Das unsichtbare Feld füllen nur Bots aus. Wir tun so, als sei
// alles gut, damit der Bot nichts lernt.
if (feld('firma_url', 200) !== '') {
    antwort(200, ['ok' => true]);
}

$dauer = (int) feld('dauer', 10);
if ($dauer < MIN_SEKUNDEN) {
    antwort(200, ['ok' => true]);
}

$name      = einzeilig(feld('name', 120));
$email     = einzeilig(feld('email', 200));
$telefon   = einzeilig(feld('telefon', 40));
$thema     = einzeilig(feld('thema', 80));
$website   = einzeilig(feld('website', 200));
$nachricht = feld('nachricht', 5000);
$sprache   = einzeilig(feld('sprache', 5));
$seite     = einzeilig(feld('seite', 300));

if ($name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    antwort(422, ['ok' => false, 'fehler' => 'pflichtfelder']);
}

// Einfache Begrenzung: höchstens MAX_ANFRAGEN_PRO_STUNDE je IP und Stunde.
// Gespeichert wird nur eine Prüfsumme der IP, keine IP-Adresse im Klartext.
$limitOrdner = rtrim(sys_get_temp_dir(), '/\\') . '/aj-tech-kontakt';
if (is_dir($limitOrdner) || @mkdir($limitOrdner, 0700, true)) {
    foreach (glob($limitOrdner . '/*') ?: [] as $alt) {
        if (filemtime($alt) < time() - 86400) {
            @unlink($alt);
        }
    }
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unbekannt';
    $datei = $limitOrdner . '/' . hash('sha256', $ip . date('Y-m-d') . __FILE__);
    $zeiten = is_file($datei)
        ? array_filter(
            array_map('intval', explode(',', (string) file_get_contents($datei))),
            static fn (int $zeit): bool => $zeit > time() - 3600
        )
        : [];
    if (count($zeiten) >= MAX_ANFRAGEN_PRO_STUNDE) {
        antwort(429, ['ok' => false, 'fehler' => 'zu_viele']);
    }
    $zeiten[] = time();
    @file_put_contents($datei, implode(',', $zeiten), LOCK_EX);
}

$betreff = 'Neue Anfrage über aj-tech.de: ' . ($thema !== '' ? $thema : 'Kontakt') . ' – ' . $name;

$zeilen = [
    'Neue Anfrage über das Kontaktformular auf www.aj-tech.de',
    str_repeat('-', 56),
    'Name:      ' . $name,
    'E-Mail:    ' . $email,
    'Telefon:   ' . ($telefon !== '' ? $telefon : '–'),
    'Thema:     ' . ($thema !== '' ? $thema : '–'),
    'Website:   ' . ($website !== '' ? $website : '–'),
    'Sprache:   ' . ($sprache !== '' ? $sprache : 'de'),
    '',
    'Nachricht:',
    $nachricht !== '' ? $nachricht : '–',
    '',
    str_repeat('-', 56),
    'Gesendet am ' . date('d.m.Y \u\m H:i') . ' Uhr von ' . ($seite !== '' ? $seite : 'aj-tech.de'),
    'Einfach auf diese E-Mail antworten, um ' . $name . ' zu schreiben.',
];
$text = implode("\r\n", $zeilen);

$konfigDatei = __DIR__ . '/kontakt-config.php';
$konfig = is_file($konfigDatei) ? require $konfigDatei : null;

$gesendet = is_array($konfig) && !empty($konfig['smtp_host'])
    ? sende_smtp($konfig, $betreff, $text, $name, $email)
    : sende_mail($betreff, $text, $name, $email);

if (!$gesendet) {
    error_log('aj-tech kontakt.php: Versand fehlgeschlagen');
    antwort(500, ['ok' => false, 'fehler' => 'versand']);
}

antwort(200, ['ok' => true]);

/* ---------------------------------------------------------------------- */

function kodiere(string $text): string
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

function sende_mail(string $betreff, string $text, string $name, string $email): bool
{
    $header = [
        'From: ' . kodiere(ABSENDER_NAME) . ' <' . ABSENDER . '>',
        'Reply-To: ' . kodiere($name) . ' <' . $email . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        'X-Mailer: aj-tech-kontakt',
    ];

    return mail(
        EMPFAENGER,
        kodiere($betreff),
        chunk_split(base64_encode($text)),
        implode("\r\n", $header),
        '-f' . ABSENDER
    );
}

/**
 * Minimaler SMTP-Versand (SSL auf Port 465 oder STARTTLS auf Port 587),
 * ohne zusätzliche Bibliothek.
 */
function sende_smtp(array $k, string $betreff, string $text, string $name, string $email): bool
{
    $host = (string) $k['smtp_host'];
    $port = (int) ($k['smtp_port'] ?? 465);
    $user = (string) ($k['smtp_user'] ?? ABSENDER);
    $pass = (string) ($k['smtp_pass'] ?? '');
    $ssl  = $port === 465;

    $verbindung = @stream_socket_client(
        ($ssl ? 'ssl://' : 'tcp://') . $host . ':' . $port,
        $fehlerNr,
        $fehlerText,
        15
    );
    if (!$verbindung) {
        error_log("aj-tech kontakt.php: SMTP-Verbindung fehlgeschlagen ($fehlerText)");
        return false;
    }
    stream_set_timeout($verbindung, 15);

    $lies = static function () use ($verbindung): string {
        $antwort = '';
        while (($zeile = fgets($verbindung, 515)) !== false) {
            $antwort .= $zeile;
            if (strlen($zeile) < 4 || $zeile[3] === ' ') {
                break;
            }
        }
        return $antwort;
    };
    $schreib = static function (string $befehl, array $erwartet) use ($verbindung, $lies): bool {
        fwrite($verbindung, $befehl . "\r\n");
        $antwort = $lies();
        if (!in_array((int) substr($antwort, 0, 3), $erwartet, true)) {
            error_log('aj-tech kontakt.php: SMTP-Fehler: ' . trim($antwort));
            return false;
        }
        return true;
    };

    $lies();
    $ok = $schreib('EHLO aj-tech.de', [250]);
    if ($ok && !$ssl) {
        $ok = $schreib('STARTTLS', [220])
            && stream_socket_enable_crypto($verbindung, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)
            && $schreib('EHLO aj-tech.de', [250]);
    }

    $nachricht = implode("\r\n", [
        'Date: ' . date('r'),
        'From: ' . kodiere(ABSENDER_NAME) . ' <' . ABSENDER . '>',
        'To: <' . EMPFAENGER . '>',
        'Reply-To: ' . kodiere($name) . ' <' . $email . '>',
        'Subject: ' . kodiere($betreff),
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@aj-tech.de>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        chunk_split(base64_encode($text)),
    ]);

    $ok = $ok
        && $schreib('AUTH LOGIN', [334])
        && $schreib(base64_encode($user), [334])
        && $schreib(base64_encode($pass), [235])
        && $schreib('MAIL FROM:<' . ABSENDER . '>', [250])
        && $schreib('RCPT TO:<' . EMPFAENGER . '>', [250, 251])
        && $schreib('DATA', [354])
        && $schreib($nachricht . "\r\n.", [250]);

    @fwrite($verbindung, "QUIT\r\n");
    fclose($verbindung);
    return $ok;
}
