USE sakila;
-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. 
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id 
-- do ator ou atriz e a quantidade de filmes em que atuaram.
-- DELIMITER $$

-- CREATE PROCEDURE popularActorsByMovieAmount()
-- BEGIN
-- 	SELECT actor_id, COUNT(actor_id) AS movie_amount FROM film_actor
-- 	GROUP BY actor_id
-- 	ORDER BY movie_amount DESC
-- 	LIMIT 10;
-- END $$
-- DELIMITER ;
-- CALL popularActorsByMovieAmount();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e 
-- que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. 
-- Use as tabelas film , film_category e category para montar essa procedure.
-- DELIMITER $$
-- CREATE PROCEDURE movieInformation(IN selectedCategory VARCHAR(100))
-- BEGIN
-- 	SELECT mov.film_id, mov.title, mov_cat.category_id, cat.name
--     FROM film AS mov
-- 		INNER JOIN
-- 	film_category AS mov_cat ON mov.film_id = mov_cat.film_id
-- 		INNER JOIN
-- 	category AS cat ON cat.category_id = mov_cat.category_id
--     WHERE cat.name = selectedCategory;
-- END $$
-- DELIMITER ;
-- CALL movieInformation('Action');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está 
-- ou não ativo, através de um parâmetro de saída.
-- DELIMITER $$

-- CREATE PROCEDURE isActive (IN customerEmail VARCHAR(100), OUT customerStatus BOOL)
-- BEGIN
-- 	SET customerStatus = (
-- 		SELECT active
--         FROM customer
--         WHERE email = customerEmail
--     );
-- END $$
-- DELIMITER ;
-- SELECT @ActiveStatus;
-- CALL isActive('MARY.SMITH@sakilacustomer.org', @ActiveStatus);
-- SELECT @ActiveStatus;

-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos 
-- feitos até o momento por um determinado customer_id .
-- DELIMITER $$

-- CREATE FUNCTION CalculateNumberOfPaymentsByCustomerId(customer_id INT)
-- RETURNS INT READS SQL DATA
-- BEGIN
-- 	DECLARE payment_total INT;
--     SELECT COUNT(*)
--     FROM payment
--     WHERE payment.customer_id = customer_id INTO payment_total;
-- 	RETURN payment_total;
-- END $$
-- DELIMITER ;

-- SELECT CalculateNumberOfPaymentsByCustomerId(2);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao 
-- registro de inventário com esse id.
-- DELIMITER $$
-- CREATE FUNCTION showMovieByInventoryId(inv_id int)
-- RETURNS VARCHAR(50) READS SQL DATA
-- BEGIN 
-- 	DECLARE movie_name VARCHAR(50);
--     SELECT title FROM film AS mov
--     INNER JOIN
--     inventory AS inv ON mov.film_id = inv.film_id 
--     WHERE inv.inventory = inv_id INTO movie_name;
--     RETURN movie_name;
-- END $$

-- DELIMITER ;showMovieByInventoryId
-- SELECT showMovieByInventoryId(1);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' )
--  e retorna a quantidade total de filmes registrados nessa categoria.
-- DELIMITER $$

-- CREATE FUNCTION movieAmountByCategory(selectedCategory VARCHAR(50))
-- RETURNS INT READS SQL DATA
-- BEGIN
-- 	DECLARE movie_amount INT;
--     SELECT COUNT(*)
--     FROM film_category AS film
--     INNER JOIN category AS cat
--     ON cat.category_id = film_category.category_id
--     WHERE cat.name = selectedCategory INTO movie_amount;
--     RETURN movie_amount;
-- END $$
-- DELIMITER ;

-- SELECT movieAmountByCategory('Horror');

-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna 
-- data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
-- DELIMITER $$
-- CREATE TRIGGER trigger_carros_insert
-- 	BEFORE INSERT ON carros
--     FOR EACH ROW
-- BEGIN
-- 	SET NEW.data_atualizacao = NOW(), 
--     NEW.acao = 'INSERÇÃO', 
--     NEW.disponivel_em_estoque = 1; 
-- END $$

-- DELIMITER ;

-- Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao 
-- para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .
-- DELIMITER $$
-- CREATE TRIGGER trigger_carros_updates
-- 	BEFORE UPDATE ON carros
--     FOR EACH ROW
-- BEGIN
-- 	SET NEW.data_atualizacao = NOW(),
--     NEW.acao = 'ATUALIZACAO';
-- END $$

-- DELIMITER ;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações 
-- do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.
-- DELIMITER $$
-- CREATE TRIGGER trigger_carros_delete
-- 	AFTER DELETE ON carros
-- 	FOR EACH ROW
-- BEGIN
-- 	INSERT INTO log_operacoes (tipo_operacao, data_ocorrido)
--     VALUES (tipo_operacao, NOW());
-- END $$

-- DELIMITER ;