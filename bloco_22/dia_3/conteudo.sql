-- USE albuns;
-- CREATE TABLE dolly LIKE sakila.actor;

-- USE sakila;
-- CREATE INDEX index_first_name ON sakila.actor(first_name);

-- SELECT * FROM sakila.actor WHERE first_name = 'RITA';

-- DROP INDEX index_first_name ON sakila.actor;

-- SELECT * FROM sakila.actor WHERE first_name = 'RITA';

-- CREATE FULLTEXT INDEX index_address ON sakila.address(address);

-- SELECT * FROM sakila.address WHERE MATCH(address) AGAINST('drive');

-- SELECT * FROM sakila.address WHERE address LIKE '%drive%';

-- CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

-- SELECT * FROM sakila.language WHERE name = 'Mandarin';

-- DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language WHERE Name = 'Mandarin';