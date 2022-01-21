# Exercício 1: Escreva um programa que retorne uma lista com os valores
# numéricos de 1 a N, mas com as seguintes exceções :
# Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés
# do número';
# Ex: 3 -> [1, 2, "Fizz"] .

def fizz_buzz(number):
    numbers_array = []
    for n in range(1, number + 1):
        if (n % 3 == 0) and (n % 5 == 0):
            numbers_array.append('FizzBuzz')
        elif (n % 3 == 0) and (n % 5 != 0):
            numbers_array.append('Fizz')
        elif (n % 3 != 0) and (n % 5 == 0):
            numbers_array.append('Buzz')
        else:
            numbers_array.append(n)
    return numbers_array


if __name__ == "__main__":
    print(fizz_buzz('15'))
