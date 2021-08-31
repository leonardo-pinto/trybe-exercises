USE albuns;

CREATE TABLE estilo_musical(
	estilo_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE artist(
	artist_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE album(
	album_id INT AUTO_INCREMENT PRIMARY KEY,
    artist_id INT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    preco decimal(5,2) NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artist_id) REFERENCES artist(artist_id),
    FOREIGN KEY (estilo_id) REFERENCES estilo_musical(estilo_id)
) ENGINE = InnoDB;