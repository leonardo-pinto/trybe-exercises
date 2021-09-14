const fatorial = number => {
  let result = 1;
  for (let index = 1; index <= number; index += 1) {
    result = result * index;
  }
  return result;
}
console.log(fatorial(5));



const longestWord = word => {
  let palavras = word.split(' ');
  let maxLength = 0;
  let result = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index].length > maxLength) {
      result = palavras[index];
    }
  }
  return result;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

const button = document.getElementById('botao');
let count = 0;
let contador = document.getElementById('contador')
button.addEventListener('click', () => contador.innerHTML = count += 1);


function searchX (word) {
  let frase = "Tryber x aqui!!!"
  for (let index = 0; index < frase.length; index += 1) {
    if (frase[index] === 'x') {
      frase[index] = 'word';
    }
    console.log(index);
  }
  return frase;
}
console.log(searchX('Bebeto'));