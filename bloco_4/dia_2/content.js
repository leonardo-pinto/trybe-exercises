// Conteúdo Arrays

let menu = ['Home','Serviços','Portfólio','Links'];
let menuServices = menu [1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato');

console.log(menu);

// Conteúdo For

let groceryList = ['Arroz','Feijão','Alface','Melancia'];

for (let index = 0; index < groceryList.length; index +=1) {
  console.log(groceryList[index]);
}

// Conteúdo For of

let numeros = [1,2,3,4,5,6];
for (let numero of numeros) {
  console.log(numero)
}

let word = 'Xablau';
for (let letter of word) {
  console.log(letter);
}

let arrOfNumbers = [10,20,30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}

let names = ['João','Maria','Antônio','Margarida'];
for (let nameList of names) {
  console.log(nameList);
}