def even_numbers(n):
    even_numbers = 0
    for x in range(1, n + 1):
        if x % 2 == 0 and x != 0:
            even_numbers += 1
    return even_numbers


print(even_numbers(10))