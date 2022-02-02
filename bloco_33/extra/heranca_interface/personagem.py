from personagem_interface import PersonagemInterface


class Personagem(PersonagemInterface):
    def __init__(self, nome, especie, peso, altura, hp):
        self.nome = nome
        self.especie = especie
        self.__peso = peso
        self.__altura = altura
        self.__hp = hp

    def get_peso(self):
        return self.__peso

    def set_peso(self, novo_peso):
        self.__peso = novo_peso

    def get_altura(self):
        return self.__altura

    def get_hp(self):
        return self.__hp

    def set_hp(self, dano):
        self.__hp -= dano

    def falar(self):
        return "Que a força esteja com você!"
