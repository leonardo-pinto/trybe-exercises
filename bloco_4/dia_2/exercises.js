// Exercício 1.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Exercício 2.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
}
console.log(sum);

// Exercício 3.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
}
console.log(sum/numbers.length);

// Exercício 4.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
for (index = 0; index < numbers.length; index += 1) {
  sum = sum + numbers[index];
}

if (sum/numbers.length > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

// Exercício 5.

let numbers = [5, 9, 3, 19, 700, 8, 101, 2, 35, 27];
for (index = 0; index < numbers.length; index += 1) {
  let timesHigh = 0;
  let comparedNumber = numbers[index];
  for (j = 0; j < numbers.length; j += 1) {
    let arrayNumber = numbers[j];
    if (comparedNumber > arrayNumber) {
      timesHigh += 1;
    }
  }
  if (timesHigh === 9) {
    console.log (numbers[index]);
  }
}

// Exercício 6.

let numbers = [5, 9, 30, 190, 700, 8, 101, 2, 35, 27];
let odd = 0;
for (index = 0; index < numbers.length; index += 1) {
  let number = numbers[index];
  if (number % 2 != 0) {
    odd +=1;
  }
}

if (odd != 0) {
  console.log(odd);
} else {
  console.log("nenhum valor ímpar encontrado");
}

// Exercício 7.

let numbers = [5, 9, 1, 19, 700, 8, 101, 2, 35, 27];
for (index = 0; index < numbers.length; index += 1) {
  let timesHigh = 0;
  let comparedNumber = numbers[index];
  for (j = 0; j < numbers.length; j += 1) {
    let arrayNumber = numbers[j];
    if (comparedNumber < arrayNumber) {
      timesHigh += 1;
    }
  }
  if (timesHigh === 9) {
    console.log (numbers[index]);
  }
}