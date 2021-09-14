const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

/* repeat(5, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even')
  }
}); */

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
};

const isOdd = (number) => {
  if (number % 2 !== 0) {
    console.log(number, 'is odd');
  }
};

repeat(9, isEven);
repeat(9, isOdd);

// Crie uma função de primeira classe que tenha o retorno console.log('Acordando!!') ;
const wakingUp = () => {
  console.log('Acordando!!');
}
//wakingUp();

//Crie outra função de primeira classe que tenha o retorno console.log('Bora tomar café!!') ;
const drinkCoffee = () => {
  console.log('Bora tomar café!!');
}
//drinkCoffee();

//Crie mais uma função de primeira classe que tenha o retorno console.log('Partiu dormir!!') ;
const sleep = () => {
  console.log('Partiu dormir!!');
}
//sleep();

//Desenvolva uma HOF chamada doingThings e configure esta função para que retorne a execução das funções de primeira classe que você criou nos exemplos anteriores.
const doingThings = (input) => {
  return input();
}

doingThings(wakingUp);

/* https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/ */

const stocks = [
  {
    ticker: 'FB',
    company: 'Facebook Inc.'
  },
  {
    ticker: 'MU',
    company: 'Micron Technology'
  },
  {
    ticker: 'CL',
    company: 'Colgate-Palmolive'
  }
];
/*
const stockList = () => {
  let companies = [];
  for (let index = 0; index < stocks.length; index += 1) {
    companies.push(stocks[index].company);
  }
  return companies
};
console.log(stockList(stocks));*/

const getName = (arr) => arr.company
companiesName = stocks.map(arg => arg.company);
console.log(companiesName); 
/////////////////////////////////////////////


const valueStocks = [
  {
    ticker: 'BRK.b',
    company: 'Berkshire Hathaway Inc.'
  },
  {
    ticker: 'KO',
    company: 'Coca-Cola Company'
  },
  {
    ticker: 'GS',
    company: 'Goldman Sachs'
  }
];

const startsWithG = (str) => str.toLowerCase().startsWith('g');
//companyStartingWithG = [];

/*for (let index = 0; index < valueStocks.length; index += 1) {
  if (startsWithG(valueStocks[index].company)) {
    companyStartingWithG.push(valueStocks[index]);
  }
}

console.log(companyStartingWithG)*/

companyStartingWithG = valueStocks.filter((strzzzz) => startsWithG(strzzzz.company));
console.log(companyStartingWithG);

//////////////////////////////////////////
birthDates = [1990, 1993, 2001];
const years = birthDates.map(item => 2021-item);
console.log(years);