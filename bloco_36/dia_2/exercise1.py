def stable_time(arr):
  time_sequence = []
  system_ok = 0
  for i in range(len(arr)):
    if (arr[i] == 1):
      system_ok += 1
    else:
      time_sequence.append(system_ok)
      system_ok = 0
  return max(time_sequence)



arr1 = [0, 1, 1, 1, 0, 0, 1, 1]
arr2 = [1, 1, 1, 1, 0, 0, 1, 1]

print(stable_time(arr1)) # 3
print(stable_time(arr2)) # 4