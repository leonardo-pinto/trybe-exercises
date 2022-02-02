from personagem import Personagem
from light_saber import SabreDeLuz
from random import choice


class Jedi(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.light_saber = SabreDeLuz("verde", 50)

    def defender(self):
        defesa = choice([True, False])
        if defesa:
            print(f"{self.nome} defendeu!")
        return defesa

    def contra_atacar(self, personagem):
        personagem.set_hp(self.light_saber.forca)

    def falar(self):
        if (self.get_hp() <= 0):
            print(f"{self.nome} morreu")
        return "NOOOOOOOOOO!"


class Sith(Personagem):
    def __init__(self, nome, especie, peso, altura, hp):
        super().__init__(nome, especie, peso, altura, hp)
        self.light_saber = SabreDeLuz("vermelho", 50)

    def atacar(self, personagem):
        if not personagem.defender():
            personagem.set_hp(self.light_saber.forca)

    def falar(self):
        if (self.get_hp() <= 0):
            print(f"{self.nome} morreu")
        return "EU SOU SEU PAI!"
