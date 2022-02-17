def reverse(list):
    reverse_list = []
    for x in range(len(list), 0, -1):
        reverse_list.append(x)
    return reverse_list


print(reverse([1, 2, 3, 4, 5]))