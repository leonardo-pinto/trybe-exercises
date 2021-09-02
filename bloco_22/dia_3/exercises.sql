-- USE sakila;
-- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e 
-- film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e 
-- o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

-- CREATE VIEW film_with_categorias AS
-- SELECT f.title, c.category_id, c.name
-- FROM sakila.film_category AS fc
-- INNER JOIN sakila.category AS c ON c.category_id = fc.category_id
-- INNER JOIN sakila.film AS f ON f.film_id = fc.film_id
-- ORDER BY title;

-- SELECT * FROM film_with_categorias;

-- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila.
-- Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor 
-- e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. 
-- CREATE VIEW film_info AS
-- SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS 'actor', f.title
-- FROM actor AS a
-- INNER JOIN film_actor AS fa ON fa.actor_id = a.actor_id
-- INNER JOIN film AS f ON f.film_id = fa.film_id
-- ORDER BY CONCAT(first_name, ' ', last_name);

-- SELECT * FROM film_info;

-- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila.
-- Sua view deve exibir o address_id , o address , o district , o city_id e a city.
-- Os resultados devem ser ordenados pelo nome das cidades. 

-- CREATE VIEW address_info AS
-- SELECT a.address_id, a.address, a.district, c.city_id, c.city
-- FROM address AS a
-- INNER JOIN city AS c ON c.city_id = a.city_id
-- ORDER BY city;

-- SELECT * FROM address_info;

-- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila.
-- Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.

-- CREATE VIEW movies_languagues AS
-- SELECT f.title, l.language_id, l.name
-- FROM film as f
-- INNER JOIN language as l ON l.language_id = f.language_id;

-- SELECT * FROM movies_languagues;

-- Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o 
-- na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , 
-- como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e 
-- mensure novamente esse custo.
-- CREATE FULLTEXT INDEX index_name ON category(name);
-- SELECT * FROM category WHERE MATCH(name) AGAINST('action'); 0.35

-- DROP INDEX index_name ON category;

-- SELECT * FROM category WHERE name LIKE '%action%'; 1.85

-- CREATE INDEX index_address_ex ON address(postal_code);
-- SELECT * FROM address WHERE postal_code = '36693'; 0.95
-- DROP INDEX index_address_ex ON address;
-- SELECT * FROM address WHERE postal_code = '36693'; 65.40

-- Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , 
-- mantendo o mesmo tipo e tamanho de dados.

-- USE hr;
-- ALTER TABLE locations CHANGE COLUMN street_address address VARCHAR(40);

-- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e
--  tamanho de dados.
-- ALTER TABLE regions CHANGE COLUMN region_name region VARCHAR(25);


-- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e 
-- tamanho de dados.
-- ALTER TABLE countries CHANGE COLUMN country_name country VARCHAR(40);
