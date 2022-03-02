def count_words(words, chars):
  chars_frequency = {}
  for char in chars:
      if char not in chars_frequency:
        chars_frequency[char] = 1
      else:
        chars_frequency[char] += 1

  ans = 0
  for word in words:
    word_dict = {}
    for letter in word:
      if letter not in chars_frequency:
        break

      if letter not in word_dict:
        word_dict[letter] = 1
        
      else:
        word_dict[letter] += 1

        if word_dict[letter] > chars_frequency[letter]:
          break
    else: 
      ans += len(word)
  
  return ans

words = ["cat", "bt", "hat", "tree"]
chars = "atach"     

print(count_words(words, chars))