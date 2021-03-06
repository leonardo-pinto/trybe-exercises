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

function indiceDoMaior(numeros) {
  let indiceMaior = 0;
  for (let indice in numeros) {
    if (numeros[indiceMaior] < numeros[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;
}

console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4

// Exercício 3.

function indiceMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros [indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceMenor([2, 4, 6, -7, 10, 0, -3])); //6

// Exercício 4.

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorCaract (nomes) {
  let indiceMaior = 0;
  for (let indice in nomes) {
    if (nomes[indice].length > nomes[indiceMaior].length) {
      indiceMaior = indice;
    }
  }
  return nomes[indiceMaior]
}

console.log(maiorCaract(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

// Exercício 5. 
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.


// varrer o array
// contar caso tenha um número igual

function repeatedNumber (numbers) {
  //let indexToCompare = 0;
  
  let contRepeat = 0;
  let indexRepeat = 0;
  let repetitions = 0;
  for (let i in numbers) {
    let number = numbers[i];
    for (let j in numbers) {
      if (number === numbers[j]){
        repetitions += 1;
      }
    }
    if (repetitions > contRepeat) {
      contRepeat = repetitions;
      indexRepeat = i;
    }
    repetitions = 0;
  }
  return numbers[indexRepeat];
 
}

console.log(repeatedNumber([2, 3, 3, 3, 3, 2, 7]))


// Exercício 6.
//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function summatory (n) {
  let sum = 0;
  for (index = 1; index <= n; index += 1) {
    sum = sum + index;
  }
  return sum
}

console.log(summatory(4));

// Exercício 7.
// Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function wordEnding (word,ending) {


  let wordSize = word.length; // trybe = 5
  let endingSize = ending.length; // be = 2
  let equal = 0;
  let isEqual = true;
  for (let index = 1; index <= ending.length; index += 1) { // index 1
    if (word[wordSize - index] === ending[endingSize - index]){
      equal = equal + 1; 
    }   // trybe[4] = e  === be[2]
  }
  if (equal === endingSize) {
    isEqual = true;
  } else {
    isEqual = false;
  }
  return isEqual
  //return endingS;
}

console.log(wordEnding('joaofernando','fernan'));

