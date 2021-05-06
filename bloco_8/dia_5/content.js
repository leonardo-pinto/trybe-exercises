// Spread operator

const numbers = [1, 2, 3];
const numbersArray = [...numbers, 4, 5,6 ];
console.log(numbersArray)
//-----------------------------------------------//
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [60, 1.7];

console.log(imc(...patientInfo)); // 20.76
//---------------------------------------------------//

//Parâmetro rest
//Criar funções com um número variável de argumentos
//Para isso, utilizar o spread operator
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

//Object destructuring
const product = {
  name: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { lastName } = product;
const { price: preço, seller: vendedor} = product;
console.log(preço);
console.log(vendedor)
console.log(lastName);
//---------------------------------------------//
//Array destructuring
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry); // Brazil
console.log(secondCountry); // Japan
console.log(thirdCountry); // China
console.log(fourthCountry); // Canada


//-------------------------------------------//
//Default destructuring
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian

//-------------------------------------------------//
// Object property shorthand
// Permite não passar valor quando este é igual a chave
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

//----------------------------------------------------//
//Default parameters
//Define um parâmetro como default
const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!