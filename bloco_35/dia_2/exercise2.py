def even_numbers(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + even_numbers(n - 1)
    else:
        return even_numbers(n - 1)


print(even_numbers(10))
