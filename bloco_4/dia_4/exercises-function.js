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


