-- USE normalization;

-- CREATE TABLE setor(
-- 	setor_id INT PRIMARY KEY,
--     nome VARCHAR(100)
-- ) engine=InnoDB;

-- INSERT INTO setor(setor_id, nome) VALUES(1, 'Administração');
-- INSERT INTO setor(setor_id, nome) VALUES(2, 'Operacional');
-- INSERT INTO setor(setor_id, nome) VALUES(3, 'Estratégico');
-- INSERT INTO setor(setor_id, nome) VALUES(4, 'Vendas');
-- INSERT INTO setor(setor_id, nome) VALUES(5, 'Marketing');

-- CREATE TABLE funcionario(
-- 	funcionario_id INT PRIMARY KEY,
--     nome VARCHAR(100) NOT NULL,
--     sobrenome VARCHAR(100) NOT NULL,
--     email VARCHAR(100) NOT NULL,
-- 	telefone VARCHAR(100) NOT NULL,
--     data_cadastro VARCHAR(100) NOT NULL
-- ) engine=InnoDB;

-- INSERT INTO funcionario(funcionario_id, nome, sobrenome, email, telefone, data_cadastro) VALUES (12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
-- INSERT INTO funcionario(funcionario_id, nome, sobrenome, email, telefone, data_cadastro) VALUES (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
-- INSERT INTO funcionario(funcionario_id, nome, sobrenome, email, telefone, data_cadastro) VALUES (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
-- INSERT INTO funcionario(funcionario_id, nome, sobrenome, email, telefone, data_cadastro) VALUES (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40'); 

-- CREATE TABLE funcionario_setor(
-- 	funcionario_id INT NOT NULL,
--     setor_id INT NOT NULL,
--     FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
--     FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
-- );

-- INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES (12, 1);
-- INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES (12, 4);
-- INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES (13, 2);
-- INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES (14, 3);
-- INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES (14, 4);
-- INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES (15, 5);