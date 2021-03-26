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

