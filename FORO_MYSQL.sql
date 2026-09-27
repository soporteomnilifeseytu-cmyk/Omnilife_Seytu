-- Foro OMNILIFE x SEYTU
-- La API tambien crea esta tabla automaticamente si no existe.
CREATE TABLE IF NOT EXISTS foro (
  id_foro INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  usuario VARCHAR(80) NOT NULL,
  telefono VARCHAR(20) NULL,
  titulo VARCHAR(120) NOT NULL DEFAULT 'Opinión',
  comentario TEXT NOT NULL,
  valoracion TINYINT UNSIGNED NOT NULL DEFAULT 5,
  tipo VARCHAR(60) NOT NULL DEFAULT 'Experiencia general',
  aspecto VARCHAR(100) NOT NULL DEFAULT 'Experiencia general',
  recomendaria VARCHAR(10) NOT NULL DEFAULT 'sin',
  utiles INT NOT NULL DEFAULT 0,
  fecha DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_foro_fecha (fecha),
  INDEX idx_foro_usuario (id_usuario),
  CONSTRAINT fk_foro_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
