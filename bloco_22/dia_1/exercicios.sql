-- CREATE DATABASE IF NOT EXISTS zoo;
-- USE zoo;

-- CREATE TABLE Gerente (
-- 	gerente_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- 	nome VARCHAR(50) NOT NULL
-- );
	
-- CREATE TABLE Cuidador (
-- 	cuidador_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(50) NOT NULL,
--     gerente_id INT NOT NULL,
--     FOREIGN KEY (gerente_id) REFERENCES Gerente(gerente_id)
-- );

-- CREATE TABLE Animal (
-- 	animal_id INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(50) NOT NULL,
--     especie VARCHAR(50) NOT NULL,
--     sexo VARCHAR(50) NOT NULL,
--     idade INT NOT NULL,
--     localizacao VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE Animal_Cuidador (
-- 	animal_id INT NOT NULL,
--     cuidador_id INT NOT NULL,
--     CONSTRAINT PRIMARY KEY (animal_id, cuidador_id),
--     FOREIGN KEY (animal_id) REFERENCES Animal(animal_id),
--     FOREIGN KEY (cuidador_id) REFERENCES Cuidador(cuidador_id)
-- );
        