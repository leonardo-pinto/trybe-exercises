// Exercício 1.

function verifyPalindrome (word) {
  let forward = [];
  let backward = [];
  let equals = 0
  for (i = 0; i < word.length; i +=1) {
    forward.push(word[i]);
  }

  for (j = word.length -1; j >= 0; j --) {
    backward.push(word[j]);
  }
  
  for (k = 0; k < word.length; k += 1) {
    if (forward[k] === backward [k]) {
      equals += 1;
    }
  }

  if (equals === word.length) {
    palindrome = true;
  } else {
    palindrome = false;
  }

  console.log(palindrome);
}

verifyPalindrome('jose');

