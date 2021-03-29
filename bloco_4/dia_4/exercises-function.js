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

// Exercício 2.

function maxValueOfArray (listOfNumbers) {
  for (i = 0; i < listOfNumbers.length; i += 1) {
    let higherThan =0;
    let number = listOfNumbers[i];
    for (j = 0; j < listOfNumbers.length; j += 1) {
      compNumber = listOfNumbers[j];
      if (number >= compNumber) {
        higherThan += 1;
      }
    }
    if (higherThan === listOfNumbers.length) {
      console.log(number);
    }
  }
}

maxValueOfArray([2,3,6,70,10,1]);