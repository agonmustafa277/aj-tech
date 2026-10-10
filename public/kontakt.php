<?php
/**
 * Kontaktformular von www.aj-tech.de
 *
 * Nimmt die Anfrage aus dem Formular entgegen und schickt sie als gestaltete
 * E-Mail an EMPFAENGER. Antwortet immer mit JSON: {"ok": true} oder
 * {"ok": false, ...}.
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

function h(string $wert): string
{
    return htmlspecialchars($wert, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
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

/* ----------------------------- Aufbereiten ----------------------------- */

// Telefonnummer für tel:-Links (nur Ziffern und ein führendes Plus)
$telefonLink = preg_replace('/(?!^\+)[^0-9]/', '', str_replace(' ', '', $telefon)) ?? '';

// Website zu einer anklickbaren Adresse machen. http und https bleiben
// erhalten, jedes andere Schema wird verworfen und durch https ersetzt.
$websiteLink = '';
if ($website !== '') {
    $websiteLink = preg_match('#^https?://#i', $website)
        ? $website
        : 'https://' . preg_replace('#^[a-z][a-z0-9+.\-]*:/*#i', '', $website);

    // Muss wie ein echter Hostname aussehen, sonst lieber gar kein Link.
    if (!filter_var($websiteLink, FILTER_VALIDATE_URL)
        || !preg_match('#^https?://[a-z0-9]([a-z0-9\-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9\-]*[a-z0-9])?)*\.[a-z]{2,}([/:?\#].*)?$#i', $websiteLink)
    ) {
        $websiteLink = '';
    }
}

$seiteLink = preg_match('#^https?://#i', $seite) && filter_var($seite, FILTER_VALIDATE_URL)
    ? $seite
    : '';

$zeitpunkt = date('d.m.Y') . ' um ' . date('H:i') . ' Uhr';
$betreff   = 'Neue Anfrage von ' . $name . ($thema !== '' ? ' – ' . $thema : '');

/* ------------------------------ Nur-Text ------------------------------- */

$zeilen = [
    'NEUE ANFRAGE ÜBER AJ-TECH.DE',
    str_repeat('=', 56),
    '',
    'Name:      ' . $name,
    'E-Mail:    ' . $email,
    'Telefon:   ' . ($telefon !== '' ? $telefon : '–'),
    'Thema:     ' . ($thema !== '' ? $thema : '–'),
    'Website:   ' . ($websiteLink !== '' ? $websiteLink : '–'),
    '',
    'NACHRICHT',
    str_repeat('-', 56),
    $nachricht !== '' ? $nachricht : '(keine Nachricht eingegeben)',
    '',
    str_repeat('=', 56),
    'Eingegangen am ' . $zeitpunkt,
    'Formularsprache: ' . ($sprache !== '' ? $sprache : 'de'),
    'Gesendet von: ' . ($seite !== '' ? $seite : 'www.aj-tech.de'),
    '',
    'Auf diese E-Mail antworten schreibt direkt an ' . $name . '.',
];
$text = implode("\r\n", $zeilen);

/* -------------------------------- HTML --------------------------------- */

$html = baue_html(
    $name,
    $email,
    $telefon,
    $telefonLink,
    $thema,
    $websiteLink,
    $nachricht,
    $sprache,
    $seiteLink,
    $zeitpunkt
);

/* ------------------------------- Versand ------------------------------- */

$konfigDatei = __DIR__ . '/kontakt-config.php';
$konfig = is_file($konfigDatei) ? require $konfigDatei : null;

$gesendet = is_array($konfig) && !empty($konfig['smtp_host'])
    ? sende_smtp($konfig, $betreff, $text, $html, $name, $email)
    : sende_mail($betreff, $text, $html, $name, $email);

if (!$gesendet) {
    error_log('aj-tech kontakt.php: Versand fehlgeschlagen');
    antwort(500, ['ok' => false, 'fehler' => 'versand']);
}

antwort(200, ['ok' => true]);

/* ---------------------------------------------------------------------- */

/**
 * Gestaltete HTML-Mail. Bewusst mit Tabellen und Inline-Styles gebaut,
 * damit sie auch in Outlook und in Handy-Apps richtig dargestellt wird.
 */
function baue_html(
    string $name,
    string $email,
    string $telefon,
    string $telefonLink,
    string $thema,
    string $websiteLink,
    string $nachricht,
    string $sprache,
    string $seite,
    string $zeitpunkt
): string {
    $schrift = "font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;";
    $initial = function_exists('mb_strtoupper')
        ? mb_strtoupper(mb_substr($name, 0, 1, 'UTF-8'), 'UTF-8')
        : strtoupper(substr($name, 0, 1));

    // Schaltflächen zum sofortigen Antworten. Jede Schaltfläche ist eine
    // eigene, linksbündig schwebende Tabelle: nebeneinander, wenn Platz ist,
    // sonst umbrechend. So passt es auch auf schmale Handy-Displays.
    $knopf = static function (string $link, string $text, string $bg, string $farbe, string $rand): string {
        return '<table cellpadding="0" cellspacing="0" border="0" align="left"'
            . ' style="border-collapse:separate;float:left;margin:0 8px 8px 0;">'
            . '<tr><td bgcolor="' . $bg . '" style="border-radius:8px;border:1px solid ' . $rand . ';">'
            . '<a href="' . h($link) . '" style="display:block;padding:11px 20px;'
            . "font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:14px;line-height:16px;"
            . 'font-weight:bold;white-space:nowrap;color:' . $farbe . ';text-decoration:none;">' . h($text) . '</a>'
            . '</td></tr></table>';
    };

    $knoepfe = $knopf('mailto:' . $email, 'Antworten', '#2563eb', '#ffffff', '#2563eb');
    if ($telefonLink !== '') {
        $knoepfe .= $knopf('tel:' . $telefonLink, 'Anrufen', '#ffffff', '#0f172a', '#cbd5e1');
    }
    if ($websiteLink !== '') {
        $knoepfe .= $knopf($websiteLink, 'Website', '#ffffff', '#0f172a', '#cbd5e1');
    }
    $knoepfe .= '<div style="clear:both;font-size:0;line-height:0;height:0;">&nbsp;</div>';

    // Datenzeilen
    $zeile = static function (string $label, string $wert, string $link = '') use ($schrift): string {
        $inhalt = $link !== ''
            ? '<a href="' . h($link) . '" style="color:#2563eb;text-decoration:none;font-weight:600;">' . h($wert) . '</a>'
            : '<span style="color:#0f172a;font-weight:600;">' . h($wert) . '</span>';

        return '<tr>'
            . '<td style="padding:10px 0;border-bottom:1px solid #e2e8f0;' . $schrift
            . 'font-size:12px;line-height:16px;color:#64748b;text-transform:uppercase;'
            . 'letter-spacing:.06em;" valign="top" width="86">' . h($label) . '</td>'
            . '<td style="padding:10px 0 10px 16px;border-bottom:1px solid #e2e8f0;' . $schrift
            . 'font-size:15px;line-height:21px;word-break:break-word;" valign="top">' . $inhalt . '</td>'
            . '</tr>';
    };

    $zeilen = $zeile('E-Mail', $email, 'mailto:' . $email);
    if ($telefon !== '') {
        $zeilen .= $zeile('Telefon', $telefon, $telefonLink !== '' ? 'tel:' . $telefonLink : '');
    }
    if ($websiteLink !== '') {
        $zeilen .= $zeile('Website', $websiteLink, $websiteLink);
    }

    // Themen-Markierung neben dem Namen
    $themaChip = $thema === '' ? '' :
        '<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:separate;margin-top:10px;">'
        . '<tr><td bgcolor="#dbeafe" style="border-radius:999px;padding:5px 14px;' . $schrift
        . 'font-size:13px;line-height:17px;font-weight:bold;color:#1d4ed8;">' . h($thema) . '</td></tr></table>';

    $nachrichtHtml = $nachricht !== ''
        ? nl2br(h($nachricht))
        : '<span style="color:#94a3b8;font-style:italic;">Keine Nachricht eingegeben.</span>';

    $herkunft = $seite !== ''
        ? 'Gesendet von <a href="' . h($seite) . '" style="color:#64748b;">' . h($seite) . '</a>'
        : 'Gesendet von www.aj-tech.de';

    // Alles, was in die Vorlage unten eingesetzt wird, muss maskiert sein.
    $name = h($name);
    $initial = h($initial);

    $spracheHinweis = ($sprache !== '' && $sprache !== 'de')
        ? ' &nbsp;·&nbsp; <strong style="color:#b45309;">Formular war auf „' . h($sprache) . '“ eingestellt</strong>'
        : '';

    return <<<HTML
<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="light only" />
<meta name="supported-color-schemes" content="light only" />
<title>Neue Anfrage über aj-tech.de</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">
  {$name} hat das Kontaktformular auf aj-tech.de ausgefüllt.
</div>

<table cellpadding="0" cellspacing="0" border="0" width="100%" bgcolor="#f1f5f9" style="background-color:#f1f5f9;">
<tr><td align="center" style="padding:24px 12px;">

  <!--[if mso]><table cellpadding="0" cellspacing="0" border="0" width="580"><tr><td><![endif]-->
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="width:100%;max-width:580px;border-collapse:collapse;">

    <!-- Kopfzeile -->
    <tr>
      <td bgcolor="#0f172a" style="background-color:#0f172a;border-radius:14px 14px 0 0;padding:20px 28px;{$schrift}">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="{$schrift}font-size:13px;line-height:18px;font-weight:bold;color:#93c5fd;letter-spacing:.08em;text-transform:uppercase;">
              Neue Anfrage
            </td>
            <td align="right" style="{$schrift}font-size:13px;line-height:18px;color:#94a3b8;">
              aj-tech.de
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Absender -->
    <tr>
      <td bgcolor="#ffffff" style="background-color:#ffffff;padding:28px 28px 20px 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td width="54" valign="top" style="padding-right:16px;">
              <table cellpadding="0" cellspacing="0" border="0" width="54" height="54" style="width:54px;height:54px;">
                <tr><td bgcolor="#2563eb" align="center" valign="middle" height="54"
                  style="background-color:#2563eb;border-radius:27px;height:54px;{$schrift}
                  font-size:22px;line-height:54px;font-weight:bold;color:#ffffff;">{$initial}</td></tr>
              </table>
            </td>
            <td valign="top">
              <div style="{$schrift}font-size:22px;line-height:28px;font-weight:bold;color:#0f172a;">{$name}</div>
              {$themaChip}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Schnell antworten -->
    <tr>
      <td bgcolor="#ffffff" style="background-color:#ffffff;padding:0 28px 18px 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        {$knoepfe}
      </td>
    </tr>

    <!-- Kontaktdaten -->
    <tr>
      <td bgcolor="#ffffff" style="background-color:#ffffff;padding:0 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;border-top:1px solid #e2e8f0;">
          {$zeilen}
        </table>
      </td>
    </tr>

    <!-- Nachricht -->
    <tr>
      <td bgcolor="#ffffff" style="background-color:#ffffff;padding:22px 28px 28px 28px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
        <div style="{$schrift}font-size:12px;line-height:16px;color:#64748b;text-transform:uppercase;letter-spacing:.06em;padding-bottom:10px;">
          Nachricht
        </div>
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td bgcolor="#f8fafc" style="background-color:#f8fafc;border-radius:10px;border-left:3px solid #2563eb;padding:16px 18px;{$schrift}font-size:15px;line-height:23px;color:#1e293b;">
              {$nachrichtHtml}
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Fußzeile -->
    <tr>
      <td bgcolor="#f8fafc" style="background-color:#f8fafc;border-radius:0 0 14px 14px;border:1px solid #e2e8f0;border-top:0;padding:18px 28px;{$schrift}font-size:12px;line-height:19px;color:#64748b;">
        Eingegangen am {$zeitpunkt}{$spracheHinweis}<br />
        {$herkunft}<br />
        <span style="color:#0f172a;">Eine Antwort auf diese E-Mail geht direkt an {$name}.</span>
      </td>
    </tr>

  </table>
  <!--[if mso]></td></tr></table><![endif]-->

</td></tr>
</table>
</body>
</html>
HTML;
}

function kodiere(string $text): string
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

/**
 * Baut den Nachrichtenkörper als multipart/alternative:
 * Nur-Text für einfache Programme, HTML für alle anderen.
 */
function baue_koerper(string $text, string $html, string $grenze): string
{
    return implode("\r\n", [
        'This is a multi-part message in MIME format.',
        '',
        '--' . $grenze,
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        chunk_split(base64_encode($text)),
        '--' . $grenze,
        'Content-Type: text/html; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        '',
        chunk_split(base64_encode($html)),
        '--' . $grenze . '--',
        '',
    ]);
}

function sende_mail(string $betreff, string $text, string $html, string $name, string $email): bool
{
    $grenze = 'ajtech-' . bin2hex(random_bytes(12));

    $header = [
        'From: ' . kodiere(ABSENDER_NAME) . ' <' . ABSENDER . '>',
        'Reply-To: ' . kodiere($name) . ' <' . $email . '>',
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $grenze . '"',
        'X-Mailer: aj-tech-kontakt',
    ];

    return mail(
        EMPFAENGER,
        kodiere($betreff),
        baue_koerper($text, $html, $grenze),
        implode("\r\n", $header),
        '-f' . ABSENDER
    );
}

/**
 * Minimaler SMTP-Versand (SSL auf Port 465 oder STARTTLS auf Port 587),
 * ohne zusätzliche Bibliothek.
 */
function sende_smtp(array $k, string $betreff, string $text, string $html, string $name, string $email): bool
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

    $grenze = 'ajtech-' . bin2hex(random_bytes(12));
    $nachricht = implode("\r\n", [
        'Date: ' . date('r'),
        'From: ' . kodiere(ABSENDER_NAME) . ' <' . ABSENDER . '>',
        'To: <' . EMPFAENGER . '>',
        'Reply-To: ' . kodiere($name) . ' <' . $email . '>',
        'Subject: ' . kodiere($betreff),
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@aj-tech.de>',
        'MIME-Version: 1.0',
        'Content-Type: multipart/alternative; boundary="' . $grenze . '"',
        '',
        baue_koerper($text, $html, $grenze),
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
