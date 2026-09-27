-- OMNILIFE × SEYTÚ · Base de datos integrada
-- MariaDB 10.4+ / PHP 8+
CREATE DATABASE IF NOT EXISTS `omnilife_seytu` CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `omnilife_seytu`;
SET FOREIGN_KEY_CHECKS=0;

CREATE TABLE IF NOT EXISTS usuarios (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  nombres VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  usuario VARCHAR(30) NULL,
  correo VARCHAR(150) NOT NULL,
  clave VARCHAR(255) NOT NULL,
  rol VARCHAR(20) NOT NULL DEFAULT 'cliente',
  reset_codigo VARCHAR(10) DEFAULT NULL,
  reset_expira DATETIME DEFAULT NULL,
  telefono VARCHAR(20) DEFAULT NULL,
  fecha_registro DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_usuario), UNIQUE KEY correo (correo), UNIQUE KEY uq_usuarios_usuario (usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS productos (
  id_producto INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(150) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  descripcion TEXT DEFAULT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL DEFAULT 0,
  imagen VARCHAR(255) DEFAULT NULL,
  estado VARCHAR(20) DEFAULT 'Disponible',
  PRIMARY KEY (id_producto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS pedidos (
  id_pedido INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
  total DECIMAL(10,2) NOT NULL DEFAULT 0.00,
  estado VARCHAR(30) DEFAULT 'Pendiente',
  metodo_pago VARCHAR(30) DEFAULT NULL,
  correo_comprobante VARCHAR(150) DEFAULT NULL,
  visto TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id_pedido), KEY fk_pedidos_usuarios (id_usuario),
  CONSTRAINT fk_pedidos_usuarios FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS detalle_pedido (
  id_detalle INT NOT NULL AUTO_INCREMENT,
  id_pedido INT NOT NULL,
  id_producto INT NOT NULL,
  cantidad INT NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id_detalle), KEY fk_detalle_pedidos (id_pedido), KEY fk_detalle_productos (id_producto),
  CONSTRAINT fk_detalle_pedidos FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_detalle_productos FOREIGN KEY (id_producto) REFERENCES productos(id_producto) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS favoritos (
  id_favorito INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  id_producto INT NOT NULL,
  fecha_guardado DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_favorito), UNIQUE KEY uq_favorito (id_usuario,id_producto),
  CONSTRAINT fk_favoritos_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT fk_favoritos_producto FOREIGN KEY (id_producto) REFERENCES productos(id_producto) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS usuario_estado (
  id_usuario INT NOT NULL PRIMARY KEY,
  estado_json LONGTEXT NOT NULL,
  actualizado DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_usuario_estado_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS recuperacion_clave (
  id_recuperacion INT NOT NULL AUTO_INCREMENT,
  id_usuario INT NOT NULL,
  token_hash CHAR(64) NOT NULL,
  expira_en DATETIME NOT NULL,
  creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_recuperacion), UNIQUE KEY token_hash (token_hash), KEY fk_rec_usuario (id_usuario),
  CONSTRAINT fk_rec_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Compatibilidad con una instalación que ya tenga las tablas originales.
-- Ejecuta estas dos líneas solo si columnas todavía no existen:
-- ALTER TABLE pedidos ADD COLUMN metodo_pago VARCHAR(30) DEFAULT NULL, ADD COLUMN correo_comprobante VARCHAR(150) DEFAULT NULL;

INSERT INTO productos (id_producto,nombre,categoria,descripcion,precio,stock,imagen,estado) VALUES
(1,'Agua Blu','Bebidas Refrescantes','Agua mineral natural de manantial.',5.90,18,'','Disponible'),
(2,'Aloe Beta','Nutrición Especializada','Producto a base de gel de aloe vera, sabor piña.',82,14,'','Disponible'),
(3,'Aqtúa Supreme','Bienestar General','Fórmula con coenzima Q10 y magnesio, sabor mandarina.',230,9,'','Disponible'),
(4,'Cafezzino Plus','Nutrición Ligera','Bebida de café colombiano para acompañar tu rutina.',149,12,'','Disponible'),
(5,'Dolce Vita Evolución','Nutrición Ligera','Producto con extracto de café verde y sabor toronja.',191,11,'','Disponible'),
(6,'Ego 10 Evolución','Bebidas Refrescantes','Bebida energizante sabor maracuyá.',17,20,'','Disponible'),
(7,'Fiber\'N Plus Evolución','Bienestar General','Fibra y apoyo al tránsito intestinal, sabor durazno.',206,10,'','Disponible'),
(8,'Undú','Vitalidad','Suplemento con condroitina, glucosamina, extracto de aceituna, aminoácidos, vitaminas y minerales',241,8,'assets/IMG/Undú.png','Disponible'),
(9,'Omniplus','Bienestar General','Producto nutricional micelizado con vitaminas, minerales y extractos herbales.',218,13,'','Disponible'),
(10,'Power Maker','Vitalidad','Nutrición muscular con aminoácidos, vitaminas y minerales, sabor naranja.',254,7,'','Disponible'),
(11,'Optimus','Vitalidad','Nutrición mental con sabor lima-limón.',167,9,'','Disponible'),
(12,'Teatino de Limón','Nutrición Ligera','Bebida con té negro y cromo.',159,12,'','Disponible'),
(13,'Espuma Limpiadora Facial','Facial','Limpieza profunda con sensación de frescura para la rutina diaria.',104,15,'','Disponible'),
(14,'Tónico Hidratante','Facial','Tónico en spray para usar de día y de noche.',135,10,'','Disponible'),
(15,'Crema Limpiadora Facial','Facial','Rutina de cuidado diario para remover suavemente impurezas y maquillaje.',89,9,'','Disponible'),
(16,'Micro-Exfoliante Facial','Facial','Textura granulosa para una exfoliación facial de uso semanal.',89,8,'','Disponible'),
(17,'Mascarilla Facial','Facial','Mascarilla a base de arcilla para complementar la limpieza facial.',108,7,'','Disponible'),
(18,'Gel Anti-Manchas','Línea System','Cuidado nocturno para mejorar progresivamente la apariencia de manchas.',157,6,'','Disponible'),
(19,'Crema para Manos, Cuello y Escote','Línea System','Tratamiento cosmético de la línea System para esas zonas de la piel.',133,8,'','Disponible'),
(20,'Crema de Día FPS 30','Línea System','Cuidado diario anti-edad con FPS 30.',168,8,'','Disponible'),
(21,'Suero de Noche','Línea System','Cuidado nocturno anti-edad para la rutina facial.',183,7,'','Disponible'),
(22,'INCA FX','Vitalidad','Contiene vitamina C y fibra dietética, endulzado con frutos de monje y stevia.',46,20,'assets/IMG/INCA FX.png','Disponible'),
(23,'Loción Corporal Coco Vainilla','Corporal','Hidrata y protege la piel, brindando una sensación de suavidad.',72,10,'','Disponible'),
(24,'Shampoo Color Protect','Capilar','Shampoo pensado para ayudar a mantener el tono del cabello teñido.',75,10,'','Disponible')
ON DUPLICATE KEY UPDATE nombre=VALUES(nombre),categoria=VALUES(categoria),descripcion=VALUES(descripcion),precio=VALUES(precio),imagen=VALUES(imagen),estado=VALUES(estado);

SET FOREIGN_KEY_CHECKS=1;
