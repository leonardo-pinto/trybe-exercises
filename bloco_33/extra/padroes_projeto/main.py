lista = ["Eli", "Isaac", "Rahel"]


class Iteravel:
    def __init__(self, lista):
        self.lista = lista

    def __iter__(self):
        return Iterador(self.lista)


class Iterador:
    def __init__(self, iteravel):
        self.iteravel = iteravel
        self.index = 0

    def __next__(self):
        try:
            nome = self.iteravel[self.index]
            self.index += 1
            return nome
        except IndexError:
            raise StopIteration


exemplo = Iteravel(lista)

for nome in exemplo:
    print(nome)
