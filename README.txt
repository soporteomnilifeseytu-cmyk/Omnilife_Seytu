OMNILIFE × SEYTÚ · WEB + BASE DE DATOS + RECUPERACIÓN DE CONTRASEÑA

INCLUYE
- index.html, style.css y script.js: la página actual.
- assets/: logo y productos.
- database_onmilife_integrada.sql: tablas de usuarios, productos, pedidos, detalle, favoritos y recuperación de contraseña, con los productos del catálogo.
- backend/api.php: conexión PDO a MariaDB y endpoints de login, registro, productos, pedidos y recuperación.
- reset-password.html: pantalla para crear una nueva contraseña desde el enlace recibido por correo.

INSTALACIÓN LOCAL (XAMPP) — CONEXIÓN REAL A MYSQL/MARIADB
1. Copia la carpeta completa `final_omnilife` dentro de `C:\xampp\htdocs\`.
   Debe quedar: `C:\xampp\htdocs\final_omnilife\index.html`.
2. Abre XAMPP y enciende **Apache** y **MySQL**.
3. Entra a `http://localhost/phpmyadmin/`.
4. Importa y ejecuta `database_onmilife_integrada.sql`.
   El script crea/usa la base de datos `omnilife_seytu` y las tablas de usuarios,
   productos, pedidos, detalle_pedido, favoritos y recuperación.
5. Abre: `http://localhost/final_omnilife/`.
6. Para comprobar directamente la conexión de PHP con MySQL abre:
   `http://localhost/final_omnilife/backend/api.php?action=health`
   Debe responder JSON con `ok: true`, el nombre `omnilife_seytu` y el conteo de las tablas.
7. Si tu MySQL de XAMPP tiene contraseña para `root`, cambia la configuración
   en `backend/api.php` (DB_PASS) o usa variables de entorno. Por defecto
   XAMPP suele trabajar con root sin contraseña.

RECUPERACIÓN POR CORREO
La interfaz ya está conectada al endpoint de recuperación. El servidor crea un token de un solo uso con 30 minutos de validez y genera el enlace a reset-password.html.

Para que el correo salga realmente por Gmail, el servidor debe tener un método de envío de correo configurado. El código usa la función mail() de PHP y toma MAIL_FROM y APP_BASE_URL de variables de entorno. Si XAMPP no tiene correo configurado, el sitio mostrará el aviso correspondiente en vez de fingir que el mensaje fue enviado.

SEGURIDAD
- Las contraseñas nuevas se guardan con password_hash().
- Los tokens de recuperación se guardan como SHA-256 y expiran.
- El backend valida stock dentro de una transacción al registrar una compra.
- Nunca coloques una contraseña real de Gmail dentro de index.html o script.js.

NOTA
El modo invitado sigue funcionando para explorar, favoritos y carrito. El pago y las acciones protegidas requieren iniciar sesión.


ACTUALIZACIÓN
- Carrito reforzado: controles +, − y eliminar funcionan desde la ventana emergente y mantienen el total sincronizado.
- Inicio ampliado con accesos por categoría, beneficios, bloques informativos, CTA y tips interactivos.

SESION 04 - DML
- data.sql: script de INSERT y SELECT solicitado para la actividad.
- Incluye usuarios, productos, pedidos y detalle_pedido de prueba.
- Incluye SELECT con proyección, ORDER BY, WHERE, LIKE e INNER JOIN.
- Los usuarios de prueba tienen contraseña 123456.


CAMBIO SESIÓN 04 — REGISTRO + LOGIN + MODO OSCURO
- Crear cuenta ya NO inicia sesión automáticamente.
- Después de registrarse, la pantalla vuelve a “Iniciar sesión” y coloca el usuario y contraseña recién registrados para que el cliente confirme el acceso.
- El usuario personalizado ahora se guarda en MySQL y puede utilizarse para iniciar sesión junto con el correo.
- Si la columna `usuario` no existe en una base anterior, `backend/api.php` la crea automáticamente y asigna como usuario inicial la parte anterior al @.
- El modo oscuro se guarda en localStorage y se aplica de forma global a autenticación, catálogo, carrito, cuenta, configuración, modales, pagos e intranet.
- Se agregó un botón de modo oscuro también en la pantalla de inicio de sesión; el estado se conserva al cerrar sesión y volver a entrar.


CONEXIÓN DE DATOS — CAMBIO REALIZADO
- Productos: se leen desde MySQL mediante `action=products`.
- Registro e inicio de sesión: se validan contra MySQL.
- Pedidos: se guardan en `pedidos` y `detalle_pedido` y se vuelven a cargar desde MySQL.
- Favoritos: ahora se guardan en la tabla `favoritos`; una cuenta autenticada ya no usa
  localStorage como almacenamiento permanente de favoritos.
- Al iniciar sesión, los favoritos se recuperan desde MySQL.
- Al salir de la cuenta, el navegador se limpia para que el modo invitado empiece en 0.
- El carrito y las preferencias visuales siguen siendo locales porque el SQL actual no
  tiene tablas para sesiones/carritos/preferencias. Si quieres que también sean multi-dispositivo,
  hay que añadir esas tablas y una identificación de sesión/cuenta.

PRUEBA PASO A PASO
A) Prueba de servidor:
   1. XAMPP: Apache verde y MySQL verde.
   2. Abre `http://localhost/final_omnilife/`.
   3. Abre `http://localhost/final_omnilife/backend/api.php?action=health`.
   4. Si devuelve `ok:true`, PHP sí está llegando a MySQL.

B) Prueba de cuenta y favoritos:
   1. En la web crea una cuenta nueva.
   2. Inicia sesión con esa cuenta.
   3. En Catálogo pulsa ☆ en un producto.
   4. Entra a Favoritos y confirma que aparece.
   5. En phpMyAdmin abre `omnilife_seytu` → `favoritos` y comprueba la fila.
   6. Cierra sesión y vuelve a iniciar sesión con la misma cuenta.
   7. El favorito debe reaparecer porque se carga desde MySQL.
   8. Entra como invitado: favoritos, carrito y contadores empiezan en 0.

C) Prueba de pedido:
   1. Inicia sesión.
   2. Agrega un producto al carrito.
   3. Completa el pedido.
   4. Revisa `pedidos` y `detalle_pedido` en phpMyAdmin.
   5. El stock del producto debe disminuir en `productos`.

IMPORTANTE
- No abras `index.html` con doble clic (`file:///...`). Usa Apache:
  `http://localhost/final_omnilife/`.
- Si utilizas Live Server en 5500/5501, el catálogo intenta conectarse a
  `http://localhost/final_omnilife/backend/api.php`; Apache y MySQL deben seguir encendidos.

ACTUALIZACIÓN FINAL — ADMINISTRACIÓN + SINCRONIZACIÓN
- Se eliminó del panel de administración la navegación de configuración/internet; quedan Resumen, Productos, Pedidos y Usuarios.
- “Agregar producto” abre un cuadro presentable y guarda nombre, categoría, descripción, precio, stock, imagen y estado en MySQL.
- “Editar todo” abre un cuadro para modificar esos mismos campos.
- “Actualizar” guarda precio/stock directamente en MySQL.
- El catálogo consulta `action=products` y se actualiza periódicamente; además se envía una señal a otras pestañas del navegador para reflejar cambios rápidamente.
- El panel ahora incluye “Añadir usuario” con formulario para nombres, apellidos, usuario, correo, teléfono y contraseña. La cuenta queda guardada en `usuarios`.
- Se conservan las 60 imágenes normalizadas `assets/IMG/imagen-01.png` hasta `imagen-60.png`; el backend las resuelve por ID para que los nombres con tildes no afecten la carga.

RECUPERACIÓN DE CONTRASEÑA — PRUEBA LOCAL
- En “¿Olvidaste tu contraseña?” se solicita el correo, se genera un código de 6 dígitos y se guarda en MySQL durante 15 minutos.
- Como XAMPP normalmente no trae SMTP listo, `backend/config.php` deja `dev_reset_code=true`: si el correo no puede salir, la página muestra el código de prueba y permite completar todo el proceso.
- Para Gmail real, configura `smtp_enabled=true`, `smtp_user` y `smtp_pass` con una contraseña de aplicación de Gmail. Nunca coloques esa contraseña en HTML o JavaScript.

ACCESO DE ADMINISTRADOR PARA LA DEMOSTRACIÓN LOCAL
- Usuario: `admin`
- Contraseña: `admin`
- En producción se recomienda cambiar este mecanismo por autenticación administrativa real del servidor.


GMAIL - RECUPERACIÓN DE CONTRASEÑA
1. En tu cuenta de Gmail activa la verificación en dos pasos.
2. Crea una contraseña de aplicación para este proyecto.
3. Abre backend/config.php y coloca smtp_enabled=true, smtp_user=tu Gmail y smtp_pass=la contraseña de aplicación de 16 caracteres.
4. No uses tu contraseña normal de Gmail.
5. Guarda el archivo y prueba '¿Olvidaste tu contraseña?' desde la pantalla de inicio.

ADMINISTRACIÓN
- No existe un botón 'Sincronizar ahora': guardar un producto escribe directamente en MySQL.
- El catálogo consulta MySQL automáticamente cada pocos segundos.
- Agregar producto permite nombre, categoría, descripción, precio, stock, estado y cargar una imagen PNG/JPG/WEBP/GIF.
- Añadir usuario permite elegir Cliente o Administrador.


VERIFICACION ADMIN - 24/09/2026
- La carpeta del proyecto debe llamarse final_omnilife dentro de C:\xampp\htdocs\.
- Los dos botones de Agregar producto abren el mismo formulario.
- Añadir usuario abre el formulario de usuario.
- Guardar producto y Crear usuario llaman a MySQL y luego consultan nuevamente la API para verificar que el registro exista antes de mostrar el mensaje de éxito.
- Se agregó versionado del script para evitar caché del navegador.
- No se modifica ni importa data.sql automáticamente. La base omnilife_seytu se conserva.
