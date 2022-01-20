# Exercício 1: Faça um programa que receba um nome e imprima
# o mesmo na vertical em escada invertida.
def vertical_inverted_ladder(word):
    for index in range(len(word)):
        print(word[0:(len(word) - index)])


if __name__ == "__main__":
    name = input('Digite seu nome: ')
    vertical_inverted_ladder(name)
