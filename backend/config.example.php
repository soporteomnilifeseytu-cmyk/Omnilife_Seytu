<?php
// Alternativa a variables de entorno para instalaciones locales.
// No subas este archivo con contraseñas reales a repositorios públicos.
return [
  'DB_HOST' => '127.0.0.1',
  'DB_NAME' => 'omnilife_seytu',
  'DB_USER' => 'root',
  'DB_PASS' => '',
  'MAIL_FROM' => 'no-reply@tu-dominio.com',
  'APP_BASE_URL' => 'http://localhost/omnilife/'
];

// Recuperación de contraseña: en XAMPP, PHP mail() necesita un servidor SMTP configurado.
// Para Gmail usa una cuenta propia con verificación en dos pasos y una contraseña de aplicación; no publiques esa clave.
