def fibonacci(n):
    values = [0, 1]
    for x in range(0, n):
        current_value = values[x] + values[x+1]
        values.append(current_value)
    return values[n]


def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]

print(fibonacci(15))
print(fibonacci_iter(15))
