from personagem import Personagem
from jedi_sith import Jedi, Sith


personagem1 = Personagem("Padme", "Humana", 50, 160, 40)
personagem2 = Jedi("Luke", "Humano", 75, 172, 100)
personagem3 = Sith("Vader", "Humano", 130, 203, 150)

print(personagem1.get_peso())
print(f"{personagem1.nome}, HP{personagem1.get_hp()}, {personagem1.falar()}")
print(f"{personagem2.nome}, HP{personagem2.get_hp()}, {personagem2.falar()}")
print(f"{personagem3.nome}, HP{personagem3.get_hp()}, {personagem3.falar()}")
