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
