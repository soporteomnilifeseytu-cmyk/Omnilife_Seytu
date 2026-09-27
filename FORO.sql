-- Foro público OMNILIFE × SEYTÚ
USE omnilife_seytu;
CREATE TABLE IF NOT EXISTS foro (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario INT NOT NULL,
  comentario TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_foro_usuario (id_usuario),
  CONSTRAINT fk_foro_usuario FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
