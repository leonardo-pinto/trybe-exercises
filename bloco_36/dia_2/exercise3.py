def products_combination(arr):
  good_combination = 0
  for i in range(len(arr)):
    for j in range(i + 1, len(arr)):
      if ((arr[i] == arr[j])):
        good_combination += 1
  return good_combination


produtos1 = [1, 3, 1, 1, 2, 3]
produtos2 = [1, 1, 2, 3]

print(products_combination(produtos1)) # 4
print(products_combination(produtos2)) # 1