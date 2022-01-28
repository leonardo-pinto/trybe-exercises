from collections import Counter
import numbers


class Estatistica:
    @classmethod
    def media(cls, lista_de_numeros):
        return sum(lista_de_numeros)/len(lista_de_numeros)

    @classmethod
    def mediana(cls, lista_de_numeros):
        index = len(lista_de_numeros) // 2
        if len(lista_de_numeros) % 2 == 0:
            return ((lista_de_numeros[index - 1] + lista_de_numeros[index]))/2
        return lista_de_numeros[index]

    @classmethod
    def moda(cls, lista_de_numeros):
        number, _ = Counter(numbers).most_common()[0]
        return number


print(Estatistica.mediana([10, 20, 90]))
