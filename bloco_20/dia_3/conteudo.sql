USE sakila;

SELECT * FROM payment
WHERE amount = 0.99 OR amount = 4.99 AND staff_id = 1;

SELECT * FROM payment
WHERE (amount = 0.99 OR amount = 2.99) AND staff_id = 1;

SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT CONCAT(first_name, ' ' ,last_name) AS clients FROM customer
WHERE active = 0 AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name ASC;

SELECT COUNT(*) FROM customer
WHERE active = 1;

SELECT * FROM customer
WHERE active = 0;

SELECT * FROM film
WHERE title LIKE '%ace%';

SELECT * FROM film
WHERE description LIKE '%china';

SELECT * FROM film
WHERE description LIKE '%girl%' AND title LIKE '%lord';

SELECT * from film
WHERE title LIKE '___gon%';

SELECT * FROM film
WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');

SELECT email from customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;

SELECT COUNT(payment_date) FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT * FROM payment
WHERE DATE(payment_date) = '2005-07-31';
