def count_letters(string):
  dict = {}
  for letter in string:
      if letter not in dict:
        dict[letter] = 1
      else:
        dict[letter] += 1
  return dict 


def odd_even_dict():
  dict = {}
  for i in range(3,21):
    if i % 2 != 0:
      dict[i] = i * 3
    else:
      dict[i] = i * 2
  return dict

print(odd_even_dict())