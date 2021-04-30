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