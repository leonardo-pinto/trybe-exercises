# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuário e
# imprima-o na vertical.

name = input('Digite seu nome: ')
for letter in name:
    print(letter)

raw_numbers_list = input('Digite apenas números naturais espaçados:')
numbers_list = raw_numbers_list.split()
sum = 0
for number in numbers_list:
    if number.isdigit() is False:
        print(f"Erro ao somar valores, {number} é um valor inválido!")
    else:
        sum += int(number)

print(sum)
