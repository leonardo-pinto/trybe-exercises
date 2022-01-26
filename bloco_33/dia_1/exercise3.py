class Circulo:
  PI = 3.14159

  def __init__(self, raio):
    self.raio = raio

  def area(self):
    return self.PI * self.raio ** 2

  def perimetro(self):
    return 2 * self.PI * self.raio


circulo_1 = Circulo(10)
print(circulo_1.area())
print(circulo_1.perimetro())
