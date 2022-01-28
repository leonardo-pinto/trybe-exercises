class Television:
    def __init__(self, tamanho):
        self._volume = 50
        self._canal = 1
        self._tamanho = tamanho
        self._ligada = False

    def aumentar_volume(self):
        if self._volume < 99:
            self._volume += 1

    def diminuir_volume(self):
        if self._volume > 0:
            self._volume -= 1

    def modificar_canal(self, canal):
        if canal <= 1 or canal >= 99:
            raise ValueError('Canal indisponível')
        self._canal = canal

    def ligar_desligar(self):
        self._ligada = not self._ligada


minha_tv = Television(150)
minha_tv.modificar_canal(10)
minha_tv.aumentar_volume()
print(minha_tv._volume)
