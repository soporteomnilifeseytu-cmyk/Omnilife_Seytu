-- OMNILIFE x SEYTU - actualización 25/09/2026
USE `omnilife_seytu`;

CREATE TABLE IF NOT EXISTS categorias_producto (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(20) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  UNIQUE KEY uq_categoria_marca (marca,nombre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE productos ADD COLUMN marca VARCHAR(20) NOT NULL DEFAULT 'OMNILIFE' AFTER nombre;

CREATE TABLE IF NOT EXISTS favoritos (
  id_favorito INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  id_producto INT NOT NULL,
  fecha_guardado DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uq_favorito (id_usuario,id_producto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

UPDATE productos SET marca=CASE WHEN id_producto BETWEEN 1 AND 30 THEN 'OMNILIFE' WHEN id_producto BETWEEN 31 AND 60 THEN 'SEYTÚ' ELSE marca END
WHERE id_producto BETWEEN 1 AND 60 OR marca IS NULL OR marca='';

INSERT IGNORE INTO categorias_producto(marca,nombre)
SELECT DISTINCT marca,categoria FROM productos
WHERE categoria IS NOT NULL AND TRIM(categoria)<>'';

-- Los productos 1..30 son OMNILIFE y 31..60 son SEYTÚ según el catálogo actual.
-- Los productos nuevos conservan la marca elegida por el administrador.
-- La cuenta admin se crea/normaliza automáticamente por backend/api.php.
