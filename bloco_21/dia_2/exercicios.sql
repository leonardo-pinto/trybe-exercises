-- USE Pixar;
-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e 
-- internacionais ( international_sales ) de cada filme.
-- SELECT mov.title, box.domestic_sales, box.international_sales 
-- FROM Pixar.Movies AS mov
-- INNER JOIN Pixar.BoxOffice AS box 
-- ON mov.id = box.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para 
-- cada filme que possui um número maior de vendas internacionais ( international_sales ) do 
-- que vendas nacionais ( domestic_sales ).
-- SELECT mov.title, box.domestic_sales, box.international_sales 
-- FROM Pixar.Movies AS mov
-- INNER JOIN Pixar.BoxOffice AS box 
-- ON mov.id = box.movie_id
-- WHERE box.international_sales > box.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação 
-- ( rating ) em ordem decrescente.
-- SELECT mov.title, box.rating
-- FROM Movies AS mov
-- INNER JOIN BoxOffice AS box
-- ON mov.id = box.movie_id
-- ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, 
-- mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em 
-- cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
-- SELECT * FROM Theater AS cine
-- LEFT JOIN Movies AS mov ON mov.theater_id = cine.id
-- ORDER BY  cine.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, 
-- mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes 
-- filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
-- SELECT * FROM Movies AS mov
-- RIGHT JOIN Theater AS cine ON mov.theater_id = cine.id
-- ORDER BY cine.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que 
-- retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- SELECT mov.title, box.rating
-- FROM Movies AS mov
-- INNER JOIN BoxOffice AS box ON box.movie_id = mov.id
-- WHERE rating > 7.5

-- SELECT title
-- FROM Movies
-- WHERE id IN (
-- 	SELECT movie_id FROM BoxOffice
--     WHERE rating > 7.5
-- );

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que 
-- retornem as avaliações dos filmes lançados depois de 2009.
-- SELECT box.rating 
-- FROM BoxOffice AS box
-- INNER JOIN Movies AS mov ON mov.id = box.movie_id
-- WHERE mov.year > 2009;

-- SELECT rating
-- FROM BoxOffice
-- WHERE movie_id IN (
-- 	SELECT id FROM Movies
--     WHERE year > 2009
-- );


-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
-- SELECT cine.name, cine.location FROM Theater AS cine
-- WHERE EXISTS (
-- 	SELECT * FROM Movies
--     WHERE Movies.theater_id = cine.id
-- );

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
-- SELECT cine.name, cine.location FROM Theater AS cine
-- WHERE NOT EXISTS (
-- 	SELECT * FROM Movies
-- 	WHERE Movies.theater_id = cine.id
-- );

-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que 
-- estejam em cartaz.
-- SELECT mov.title, mov.director, mov.year, mov.length_minutes FROM Movies As mov
-- INNER JOIN BoxOffice AS box ON box.movie_id = mov.id
-- WHERE box.rating > 8 AND mov.theater_id IS NOT NULL;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
-- SELECT t1.title, t1.length_minutes, t2.title, t2.length_minutes
-- FROM Movies AS t1, Movies AS t2
-- WHERE t1.director = t2.director;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos
--  filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
-- SELECT mov.title 
-- FROM Movies AS mov
-- INNER JOIN BoxOffice AS box ON mov.id = box.movie_id
-- WHERE box.international_sales >= 500000000 AND mov.length_minutes > 110; 
-- SELECT title FROM Movies AS mov
-- WHERE mov.id IN (
-- 	SELECT box.movie_id FROM BoxOffice AS box
--     WHERE box.international_sales >= 500000000
-- ) AND mov.length_minutes > 110;


