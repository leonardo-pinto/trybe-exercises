-- Monte uma query que exiba o id do ator , nome do ator e id do filme em 
-- que ele já atuou usando as tabelas actor e film_actor .

-- SELECT 
-- 	a.actor_id, a.first_name, f.film_id
-- FROM 
-- 	sakila.actor AS a
-- 		INNER JOIN 
--         sakila.film_actor AS f ON a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. 
-- Use as tabelas staff e address .

-- SELECT
-- 	S.first_name, S.last_name, S.address_id, A.address
-- FROM 
-- 	sakila.staff AS S
-- 		INNER JOIN
-- 	sakila.address AS A ON S.address_id = A.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, 
-- juntamente com o id do endereço e o nome da rua onde o cliente mora. 
-- Essas informações podem ser encontradas nas tabelas customer e address .

-- SELECT
-- 	C.customer_id, C.first_name, C.email, C.address_id, A.address
-- FROM 
-- 	sakila.customer AS C
-- 		INNER JOIN
-- 	sakila.address AS A ON C.address_id = A.address_id
-- ORDER BY C.first_name DESC
-- LIMIT 100;

-- Exiba o nome , email , id do endereço , endereço e 
-- distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. 
-- As informações podem ser encontradas nas tabelas address e customer.

-- SELECT 
-- 	C.first_name,
--     C.email,
--     C.address_id,
--     A.address,
--     A.district
-- FROM 
-- 	sakila.customer AS C
-- 		INNER JOIN
-- 	sakila.address AS A ON C.address_id = A.address_id
-- WHERE district = 'California' AND first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. 
-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
-- SELECT 
-- 	C.first_name, 
--     COUNT(A.address)
-- FROM 
-- 	sakila.customer AS C
-- 		INNER JOIN
-- 	sakila.address AS A ON A.address_id = C.address_id
-- WHERE C.active = 1
-- GROUP BY C.first_name 
-- ORDER BY first_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. 
-- Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
-- SELECT s.first_name, s.last_name, AVG(P.amount) AS media
-- FROM sakila.staff AS s
-- 	INNER JOIN
--     sakila.payment AS P ON s.staff_id = P.staff_id
-- WHERE YEAR(P.payment_date) = 2006
-- GROUP BY s.first_name, s.last_name;

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme 
-- , usando as tabelas actor , film_actor e film . 
-- Dica: você precisará fazer mais de um JOIN na mesma query .
-- SELECT 
-- 	A.actor_id,
--     A.first_name,
--     F.film_id,
--     title
-- FROM 
-- 	sakila.actor as A
-- 		INNER JOIN
-- 	sakila.film_actor AS F ON A.actor_id = F.actor_id
-- 		INNER JOIN
-- 	sakila.film AS f ON F.film_id = f.film_id;

-- USE sakila;
-- SELECT
--     c.customer_id,
--     c.first_name,
--     c.last_name,
--     a.actor_id,
--     a.first_name,
--     a.last_name
-- FROM customer AS c
-- INNER JOIN actor AS a
-- ON c.last_name = a.last_name
-- ORDER BY c.last_name;

-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição
-- SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
-- FROM sakila.film AS t1, sakila.film AS t2
-- WHERE t1.replacement_cost = t2.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. 
-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
-- SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
-- FROM sakila.film AS t1, sakila.film AS t2
-- WHERE t1.length = t2.length
-- HAVING t1.rental_duration BETWEEN 2 AND 4;


-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a 
-- tabela actor , exibindo apenas o nome e o sobrenome . 
-- Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
-- SELECT first_name, last_name FROM sakila.staff
-- UNION ALL
-- SELECT first_name, last_name FROM sakila.actor;

-- Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra 
-- "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
-- SELECT first_name FROM sakila.actor WHERE first_name LIKE '%tracy%'
-- UNION ALL
-- SELECT first_name FROM sakila.customer WHERE first_name LIKE '%je%';

-- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff
-- e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. 
-- Ordene os resultados em ordem alfabética.
-- (SELECT
-- 	first_name
-- FROM 
-- 	sakila.actor
-- ORDER BY first_name DESC
-- LIMIT 5)
-- UNION
-- (SELECT
-- 	first_name
-- FROM
-- 	sakila.staff
-- LIMIT 1)
-- UNION
-- (SELECT
-- 	first_name
-- FROM sakila.customer
-- LIMIT 5
-- OFFSET 15
-- )
-- ORDER BY first_name;

-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados,
--  em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. 
--  Monte uma query que simule esse cenário.
-- (SELECT
-- 	first_name, last_name
-- FROM
-- 	sakila.actor
-- LIMIT 60    
-- )
-- UNION 
-- (SELECT
-- 	first_name, last_name
-- FROM 
-- 	sakila.customer
-- LIMIT 60
-- )
-- ORDER BY first_name, last_name
-- LIMIT 15 OFFSET 45;

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
-- SELECT Id, Title FROM hotel.Books AS b
-- WHERE NOT EXISTS (
-- 	SELECT * FROM hotel.Books_Lent
--     WHERE book_id = b.Id
-- );

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que 
-- contêm a palavra "lost" no título.
-- SELECT id, title FROM hotel.Books AS b
-- WHERE EXISTS (
-- 	SELECT * FROM hotel.Books_Lent
-- 		WHERE returned = 0 AND b.title LIKE '%lost%'
-- );

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
-- SELECT name FROM hotel.Customers AS c
-- WHERE NOT EXISTS (
-- 	SELECT * FROM hotel.CarSales
-- 		WHERE customerid = c.customerid
-- );

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente 
-- e o modelo do carro de todos os clientes que fizeram compras de carros.
-- SELECT cust.name, car.name
-- FROM 
-- 	hotel.Customers AS cust
-- 		INNER JOIN
-- 	hotel.Cars AS car
-- WHERE
-- 	EXISTS (
-- 		SELECT * FROM hotel.CarSales
--         WHERE carid = car.id AND customerid = cust.customerid
--     );
