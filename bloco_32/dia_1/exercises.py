import math


def exercise1(a, b):
    if a > b:
        return a
    elif a < b:
        return b
    else:
        return 'Os dois números são iguais!'


print(exercise1(10, 2))


def exercise2(list):
    sum = 0
    for n in list:
        sum += n
    return sum/len(list)


print(exercise2([3, 5, 10]))


def exercise3(n):
    for row in range(n):
        print('*' * n)


print(exercise3(5))


def exercise4(names_list):
    BIGGEST_NAME_LEN = ''
    for name in names_list:
        if(len(name) > len(BIGGEST_NAME_LEN)):
            BIGGEST_NAME_LEN = name  
    return BIGGEST_NAME_LEN


print(exercise4(["José", "Lucas", "Nádiaa", "Fernanda", "Cairo", "Joana"]))


def exercise5(area):
    LITROS_DE_TINTA = area / 3
    QTD_LATAS = math.ceil(LITROS_DE_TINTA / 18)
    return (QTD_LATAS, QTD_LATAS * 80)


print(exercise5(200))

