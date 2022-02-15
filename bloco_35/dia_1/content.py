# def multiply_arrays(array1, array2, array3):
#     result = []
#     number_of_iterations = 0

#     for number1 in array1:
#         for number2 in array2:
#             for number3 in array3:
#                 result.append(number1 * number2 * number2)
#                 number_of_iterations += 1

#     print(f'{number_of_iterations} iterações!')
#     return result


# meu_array = list(range(1, 1000))

# multiply_arrays(meu_array, meu_array, meu_array)
# A estrutura deve estar ordenada para que a busca binária funcione
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


def binary_search_iterative(array, element):
    mid = 0
    start = 0
    end = len(array)
    step = 0

    while (start <= end):
        print("Subarray in step {}: {}".format(
          step, str(array[start: end + 1])
        ))
        step = step + 1
        mid = (start + end) // 2
        print(mid)
        if element == array[mid]:
            return mid

        if element < array[mid]:
            end = mid - 1
        else:
            start = mid + 1

    return - 1


print(binary_search_iterative(data, 2))