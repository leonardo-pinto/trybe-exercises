const readline = require('readline-sync');

function velocidadeMedia() {
  const distancia = readline.questionFloat('Digite a distância percorrida em m: ');
  const tempo = readline.questionFloat('Digite o tempo para percorrer a velocidade em segundos: ');
  const velocidade = (distancia/tempo).toFixed(2);
  console.log(`Velocidade média: ${velocidade} m/s`)
};

velocidadeMedia();
