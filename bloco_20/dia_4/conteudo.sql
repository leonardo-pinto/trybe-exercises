USE sakila;

-- Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('Leonardo', 'Pinto', 3, 2, 1, 'leonardoan');

--  Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES
  ('Ray', 'Dalio', 2, 'dalio@gmail.com', 1, 1, 'littleray', '1234'),
  ('Elon', 'Musk', 2, 'musk.22@gmail.com', 1, 1, 'muskzera', 'user');

--  Selecione os cinco primeiros
 nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor(first_name, last_name)
    SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 10;

-- Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO category (name) 
VALUES  
  ('Horror'),
  ('Sci-Fi'),
  ('Economy');


-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);

SET SQL_SAFE_UPDATES = 0;
--  Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES"
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".
UPDATE category
SET name = 'Sci-Fi'
WHERE name = 'Science Fiction';

-- Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.
UPDATE film
SET rental_rate = 25
WHERE length > 100 
AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13' )
AND replacement_cost > 20;

-- Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

UPDATE film
SET rental_rate = (
  CASE 
      WHEN length BETWEEN 1 AND 100 THEN 10
      WHEN length > 100 THEN 20
  END
);


SET SQL_SAFE_UPDATES = 0;
DELETE FROM film
WHERE title = 'ACE GOLDFINGER';

SET SQL_SAFE_UPDATES = 0;
DELETE FROM film_text
WHERE title = 'ACE GOLDFINGER';

DELETE FROM actor
WHERE first_name = 'GRACE';

DELETE FROM film_actor
WHERE actor_id = 7;

DELETE FROM actor
WHERE first_name = 'GRACE';

-- Exclua do banco de dados o ator com o nome de "KARL".

SELECT actor_id FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';


-- Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT actor_id FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN (8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM film_text
WHERE description LIKE '%saga%';

-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
TRUNCATE film_actor;
TRUNCATE film_category;

