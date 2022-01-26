class Rectangle:
  def __init__(self, base, altura):
    self.base = base
    self.altura = altura

  def area(self):
    return self.base * self.altura

  def perimeter(self):
    return self.base * 2 + self.altura * 2


retangulo_1 = Rectangle(3, 4)
print(retangulo_1.area())
print(retangulo_1.perimeter())
