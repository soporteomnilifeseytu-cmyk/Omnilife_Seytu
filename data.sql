-- ============================================================
-- OMNILIFE × SEYTÚ
-- SESIÓN 04 - Gestión y manipulación de datos en MySQL
-- INSERT + SELECT
-- Base de datos: omnilife_seytu
-- ============================================================

CREATE DATABASE IF NOT EXISTS `omnilife_seytu`
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE `omnilife_seytu`;

SET FOREIGN_KEY_CHECKS = 0;

-- ============================================================
-- 1. USUARIOS DE PRUEBA
-- Contraseña de prueba para estas cuentas: 123456
-- ============================================================

INSERT INTO usuarios
    (nombres, apellidos, correo, clave, telefono)
SELECT 'Ana', 'Sánchez', 'ana.prueba@omnilife.local', '123456', '999111222'
WHERE NOT EXISTS (
    SELECT 1 FROM usuarios WHERE correo = 'ana.prueba@omnilife.local'
);

INSERT INTO usuarios
    (nombres, apellidos, correo, clave, telefono)
SELECT 'Carlos', 'Ramírez', 'carlos.prueba@omnilife.local', '123456', '999333444'
WHERE NOT EXISTS (
    SELECT 1 FROM usuarios WHERE correo = 'carlos.prueba@omnilife.local'
);

INSERT INTO usuarios
    (nombres, apellidos, correo, clave, telefono)
SELECT 'María', 'García', 'maria.prueba@omnilife.local', '123456', '999555666'
WHERE NOT EXISTS (
    SELECT 1 FROM usuarios WHERE correo = 'maria.prueba@omnilife.local'
);

-- ============================================================
-- 2. PRODUCTOS DEL CATÁLOGO OMNILIFE × SEYTÚ
-- Los ID coinciden con los productos que utiliza la página.
-- ============================================================

INSERT INTO productos
    (id_producto, nombre, categoria, descripcion, precio, stock, imagen, estado)
VALUES
(1,'Agua Blu','Bebidas Refrescantes','Agua mineral natural de manantial.',5.9,18,'','Disponible'),
(2,'Aloe Beta','Nutrición Especializada','Producto a base de gel de aloe vera, sabor piña.',82,14,'','Disponible'),
(3,'Aqtúa Supreme','Bienestar General','Fórmula con coenzima Q10 y magnesio, sabor mandarina.',230,9,'','Disponible'),
(4,'Cafezzino Plus','Nutrición Ligera','Bebida de café colombiano para acompañar tu rutina.',149,12,'','Disponible'),
(5,'Dolce Vita Evolución','Nutrición Ligera','Producto con extracto de café verde y sabor toronja.',191,11,'','Disponible'),
(6,'Ego 10 Evolución','Bebidas Refrescantes','Bebida energizante sabor maracuyá.',106,20,'','Disponible'),
(7,'Fiber''N Plus Evolución','Bienestar General','Fibra y apoyo al tránsito intestinal, sabor durazno.',206,10,'','Disponible'),
(8,'Undú','Vitalidad','Suplemento con condroitina, glucosamina, extracto de aceituna, aminoácidos, vitaminas y minerales',241,8,'assets/IMG/Undú.png','Disponible'),
(9,'Omniplus','Bienestar General','Producto nutricional micelizado con vitaminas, minerales y extractos herbales.',218,13,'','Disponible'),
(10,'Power Maker','Vitalidad','Nutrición muscular con aminoácidos, vitaminas y minerales, sabor naranja.',254,7,'','Disponible'),
(11,'Optimus','Vitalidad','Nutrición mental con sabor lima-limón.',167,9,'','Disponible'),
(12,'Teatino de Limón','Nutrición Ligera','Bebida con té negro y cromo.',159,12,'','Disponible'),
(13,'Espuma Limpiadora Facial','Facial','Limpieza profunda con sensación de frescura para la rutina diaria.',104.00,15,'','Disponible'),
(14,'Tónico Hidratante','Facial','Tónico en spray para usar de día y de noche.',198,10,'','Disponible'),
(15,'Crema Limpiadora Facial','Facial','Rutina de cuidado diario para remover suavemente impurezas y maquillaje.',198,9,'','Disponible'),
(16,'Micro-Exfoliante Facial','Facial','Textura granulosa para una exfoliación facial de uso semanal.',290,8,'','Disponible'),
(17,'Mascarilla Facial','Facial','Mascarilla a base de arcilla para complementar la limpieza facial.',135,7,'','Disponible'),
(18,'Gel Anti-Manchas','Línea System','Cuidado nocturno para mejorar progresivamente la apariencia de manchas.',201,6,'','Disponible'),
(19,'Crema para Manos, Cuello y Escote','Línea System','Tratamiento cosmético de la línea System para esas zonas de la piel.',164,8,'','Disponible'),
(20,'Crema de Día FPS 30','Línea System','Cuidado diario anti-edad con FPS 30.',545,8,'','Disponible'),
(21,'Suero de Noche','Línea System','Cuidado nocturno anti-edad para la rutina facial.',85,7,'','Disponible'),
(22,'INCA FX','Vitalidad','Contiene vitamina C y fibra dietética, endulzado con frutos de monje y stevia.',46,20,'assets/IMG/INCA FX.png','Disponible'),
(23,'Loción Corporal Coco Vainilla','Corporal','Hidrata y protege la piel, brindando una sensación de suavidad.',17,10,'','Disponible'),
(24,'Shampoo Color Protect','Capilar','Shampoo pensado para ayudar a mantener el tono del cabello teñido.',185,10,'','Disponible')
ON DUPLICATE KEY UPDATE
    nombre = VALUES(nombre),
    categoria = VALUES(categoria),
    descripcion = VALUES(descripcion),
    precio = VALUES(precio),
    imagen = VALUES(imagen),
    estado = VALUES(estado);

-- ============================================================
-- 3. PEDIDOS DE PRUEBA
-- Se insertan solo si todavía no existen para esos usuarios.
-- ============================================================

INSERT INTO pedidos
    (id_usuario, fecha_pedido, total, estado, metodo_pago, correo_comprobante)
SELECT u.id_usuario, '2026-09-10 10:30:00', 87.90, 'Confirmado', 'Yape', u.correo
FROM usuarios u
WHERE u.correo = 'ana.prueba@omnilife.local'
  AND NOT EXISTS (
      SELECT 1
      FROM pedidos p
      WHERE p.id_usuario = u.id_usuario
        AND p.fecha_pedido = '2026-09-10 10:30:00'
  );

INSERT INTO pedidos
    (id_usuario, fecha_pedido, total, estado, metodo_pago, correo_comprobante)
SELECT u.id_usuario, '2026-09-11 15:45:00', 218.00, 'Confirmado', 'Plin', u.correo
FROM usuarios u
WHERE u.correo = 'carlos.prueba@omnilife.local'
  AND NOT EXISTS (
      SELECT 1
      FROM pedidos p
      WHERE p.id_usuario = u.id_usuario
        AND p.fecha_pedido = '2026-09-11 15:45:00'
  );

INSERT INTO pedidos
    (id_usuario, fecha_pedido, total, estado, metodo_pago, correo_comprobante)
SELECT u.id_usuario, '2026-09-12 18:20:00', 193.00, 'Confirmado', 'Transferencia bancaria', u.correo
FROM usuarios u
WHERE u.correo = 'maria.prueba@omnilife.local'
  AND NOT EXISTS (
      SELECT 1
      FROM pedidos p
      WHERE p.id_usuario = u.id_usuario
        AND p.fecha_pedido = '2026-09-12 18:20:00'
  );

-- ============================================================
-- 4. DETALLE DE LOS PEDIDOS
-- ============================================================

INSERT INTO detalle_pedido
    (id_pedido, id_producto, cantidad, precio_unitario, subtotal)
SELECT p.id_pedido, pr.id_producto, 1, pr.precio, pr.precio
FROM pedidos p
JOIN usuarios u ON u.id_usuario = p.id_usuario
JOIN productos pr ON pr.id_producto = 1
WHERE u.correo = 'ana.prueba@omnilife.local'
  AND p.fecha_pedido = '2026-09-10 10:30:00'
  AND NOT EXISTS (
      SELECT 1 FROM detalle_pedido d
      WHERE d.id_pedido = p.id_pedido AND d.id_producto = pr.id_producto
  );

INSERT INTO detalle_pedido
    (id_pedido, id_producto, cantidad, precio_unitario, subtotal)
SELECT p.id_pedido, pr.id_producto, 1, pr.precio, pr.precio
FROM pedidos p
JOIN usuarios u ON u.id_usuario = p.id_usuario
JOIN productos pr ON pr.id_producto = 6
WHERE u.correo = 'ana.prueba@omnilife.local'
  AND p.fecha_pedido = '2026-09-10 10:30:00'
  AND NOT EXISTS (
      SELECT 1 FROM detalle_pedido d
      WHERE d.id_pedido = p.id_pedido AND d.id_producto = pr.id_producto
  );

INSERT INTO detalle_pedido
    (id_pedido, id_producto, cantidad, precio_unitario, subtotal)
SELECT p.id_pedido, pr.id_producto, 1, pr.precio, pr.precio
FROM pedidos p
JOIN usuarios u ON u.id_usuario = p.id_usuario
JOIN productos pr ON pr.id_producto = 9
WHERE u.correo = 'carlos.prueba@omnilife.local'
  AND p.fecha_pedido = '2026-09-11 15:45:00'
  AND NOT EXISTS (
      SELECT 1 FROM detalle_pedido d
      WHERE d.id_pedido = p.id_pedido AND d.id_producto = pr.id_producto
  );

INSERT INTO detalle_pedido
    (id_pedido, id_producto, cantidad, precio_unitario, subtotal)
SELECT p.id_pedido, pr.id_producto, 1, pr.precio, pr.precio
FROM pedidos p
JOIN usuarios u ON u.id_usuario = p.id_usuario
JOIN productos pr ON pr.id_producto = 13
WHERE u.correo = 'maria.prueba@omnilife.local'
  AND p.fecha_pedido = '2026-09-12 18:20:00'
  AND NOT EXISTS (
      SELECT 1 FROM detalle_pedido d
      WHERE d.id_pedido = p.id_pedido AND d.id_producto = pr.id_producto
  );

INSERT INTO detalle_pedido
    (id_pedido, id_producto, cantidad, precio_unitario, subtotal)
SELECT p.id_pedido, pr.id_producto, 1, pr.precio, pr.precio
FROM pedidos p
JOIN usuarios u ON u.id_usuario = p.id_usuario
JOIN productos pr ON pr.id_producto = 14
WHERE u.correo = 'maria.prueba@omnilife.local'
  AND p.fecha_pedido = '2026-09-12 18:20:00'
  AND NOT EXISTS (
      SELECT 1 FROM detalle_pedido d
      WHERE d.id_pedido = p.id_pedido AND d.id_producto = pr.id_producto
  );

-- ============================================================
-- 5. CONSULTAS SELECT DE VERIFICACIÓN
-- Estas consultas demuestran los criterios solicitados.
-- ============================================================

-- 5.1 Proyección: columnas específicas de productos
SELECT
    id_producto,
    nombre,
    categoria,
    precio,
    stock
FROM productos;

-- 5.2 ORDER BY: productos ordenados por precio ascendente
SELECT
    nombre,
    categoria,
    precio
FROM productos
ORDER BY precio ASC;

-- 5.3 WHERE: productos disponibles con stock
SELECT
    id_producto,
    nombre,
    precio,
    stock,
    estado
FROM productos
WHERE estado = 'Disponible'
  AND stock > 0;

-- 5.4 LIKE: buscar productos cuyo nombre contenga "crema"
SELECT
    id_producto,
    nombre,
    categoria,
    precio
FROM productos
WHERE nombre LIKE '%Crema%';

-- 5.5 LIKE: buscar productos de la línea facial
SELECT
    id_producto,
    nombre,
    descripcion,
    precio
FROM productos
WHERE categoria LIKE '%Facial%';

-- 5.6 INNER JOIN: historial de pedidos por cliente
SELECT
    p.id_pedido,
    u.nombres,
    u.apellidos,
    u.correo,
    p.fecha_pedido,
    p.total,
    p.estado,
    p.metodo_pago
FROM pedidos p
INNER JOIN usuarios u
    ON p.id_usuario = u.id_usuario
ORDER BY p.fecha_pedido DESC;

-- 5.7 INNER JOIN múltiple: detalle del historial de compras
SELECT
    p.id_pedido,
    u.nombres,
    u.apellidos,
    pr.nombre AS producto,
    pr.categoria,
    d.cantidad,
    d.precio_unitario,
    d.subtotal,
    p.metodo_pago,
    p.fecha_pedido
FROM pedidos p
INNER JOIN usuarios u
    ON p.id_usuario = u.id_usuario
INNER JOIN detalle_pedido d
    ON p.id_pedido = d.id_pedido
INNER JOIN productos pr
    ON d.id_producto = pr.id_producto
ORDER BY p.fecha_pedido DESC, p.id_pedido DESC;

-- 5.8 Historial filtrado de un cliente específico
SELECT
    u.nombres,
    u.apellidos,
    p.id_pedido,
    p.fecha_pedido,
    p.total,
    p.metodo_pago
FROM usuarios u
INNER JOIN pedidos p
    ON u.id_usuario = p.id_usuario
WHERE u.correo = 'ana.prueba@omnilife.local'
ORDER BY p.fecha_pedido DESC;

-- 5.9 Resumen de ventas por cliente
SELECT
    u.id_usuario,
    u.nombres,
    u.apellidos,
    COUNT(p.id_pedido) AS cantidad_pedidos,
    SUM(p.total) AS total_compras
FROM usuarios u
INNER JOIN pedidos p
    ON u.id_usuario = p.id_usuario
GROUP BY u.id_usuario, u.nombres, u.apellidos
ORDER BY total_compras DESC;

SET FOREIGN_KEY_CHECKS = 1;

-- ============================================================
-- FIN DE data.sql
-- ============================================================
