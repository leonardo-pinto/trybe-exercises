const readline = require('readline-sync');

const scripts = [
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
];

let mensagem = scripts.map((script, index) => `${index} - ${script.name}`);

const scriptNumber = readline.questionInt(mensagem);

const script = scripts[scriptNumber];

if (!script) return console.log('O número selecionado é invalido.');

require(script.script);
