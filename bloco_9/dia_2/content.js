// Promises
// A Promise possui três estados: Pending, Resolver e Rejected.

const promise = new Promise((resolve, reject) => { //Promise é um construtor, new é um operador
  const number = Math.floor(Math.random() * 11);

  if (number <= 5) {
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) Nosso número foi ${number}`)
.then(msg => console.log(msg)) // .then() é usado em cadeia, de modo que o argumento da função interna de um será o retorno do anterior
// além disso, o .then() espera a promise (ou o .then() anterior) ser concluída
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));

//----------------------------------------------------------------------------------//
const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    }
  });
}

//----------------------------------------------------------------------------------------//
const fetch = require('node-fetch');

async function verifiedFetch(url) {
    if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      return fetch(url)
        .then((r) => r.json())
        .then((r) => r.value);
    } 
    throw new Error('endpoint não existe');   
};


async function sendJokeToFriend(name) {
  const message = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => `Oi ${name}, ouve essa: ${joke}`)
    .catch((err) => err);
  console.log(message);
}

sendJokeToFriend("Anna");