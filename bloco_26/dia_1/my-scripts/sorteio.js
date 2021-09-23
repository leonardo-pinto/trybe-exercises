const readline = require('readline-sync');

function sorteio() {
  const palpite = readline.questionInt('Digite um número de 0 a 10: ');
  const randomNumber = Math.floor(Math.random() * 10);

  if (palpite === randomNumber) {
    return onsole.log('Parabéns, número correto!')
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);
  };

  const playAgain = readline.question('Quer tentar novamente? Se sim, digite "sim"');
  if (playAgain === 'sim') {
    sorteio();
  }
}

sorteio();
