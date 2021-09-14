// Exercício 1

let n = 5;

for (let index = 0; index < n; index += 1) {
  console.log('*****');
}

// Exercício 2

let n = 5;

for (let index = 0; index <= n; index += 1) {
  console.log('*'.repeat(index));
}


// Exercício 3

let n = 5;

for (let index = 0; index <= n; index += 1) {
  console.log(' '.repeat(n-index), '*'.repeat(index));
}

// Exercício 4

let n = 5;

for (let index = 0; index <= n; index += 1) {
  if (index % 2 != 0) {
    console.log(' '.repeat((n-index)/2), '*'.repeat(index), ' '.repeat((n-index)/2));
  }
}

// Exercício 5

let n = 5;

for (let index = 0; index <= n; index += 1) {
  if (index % 2 != 0) {
    console.log(' '.repeat((n-index)/2), '*'.repeat(index), ' '.repeat((n-index)/2));
  }
}

// Exercício 6

let n = 20;
let numberOfDiv = 0;

for (let index = 1; index <= n; index += 1) {
  if (n % index === 0) {
    numberOfDiv += 1;
  }
}

if (numberOfDiv <= 3) {
  console.log(n, "é um número primo !!!");
} else {
  console.log(n, "não é um número primo :(");
}
