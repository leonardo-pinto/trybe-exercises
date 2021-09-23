const readline = require('readline-sync');


function imc() {
  const peso = readline.questionFloat('Qual seu peso em kg?');
  const altura = readline.questionInt('Qual sua altura em cm?')
  const imc = (peso / Math.pow(altura/100, 2)).toFixed(2);

  console.log(`Uma pessoa de ${peso}kg e ${altura/100}m possui um IMC de ${imc}`)

  if (imc < 18.5) {
    console.log('De acordo com o valor de IMC, você está Abaixo do peso (magreza)')
  } else if (imc >= 18.5 && imc < 24.9) {
    console.log('De acordo com o valor de IMC, você está com Peso normal')
  } else {
    console.log('De acordo com o valor de IMC, você está acima do peso')
  }
};

imc();