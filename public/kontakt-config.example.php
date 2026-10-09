<?php
/**
 * Optional: SMTP-Versand für das Kontaktformular.
 *
 * Nur nötig, wenn Anfragen über das Formular nicht ankommen oder im Spam
 * landen. Dann diese Datei auf dem Server in "kontakt-config.php" umbenennen
 * und die Zugangsdaten des Postfachs agon.mustafa@aj-tech.de eintragen
 * (stehen im hosting.de-Kundenbereich unter E-Mail).
 *
 * Diese Datei NICHT mit echtem Passwort ins GitHub-Repository hochladen.
 */
return [
    'smtp_host' => '',      // SMTP-Server laut hosting.de, z. B. aus den Postfach-Einstellungen
    'smtp_port' => 465,     // 465 = SSL, 587 = STARTTLS
    'smtp_user' => 'agon.mustafa@aj-tech.de',
    'smtp_pass' => '',
];
