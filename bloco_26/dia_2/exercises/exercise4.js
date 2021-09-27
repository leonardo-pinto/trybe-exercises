const fs = require('fs').promises;

const fileName = 'simpsons.json';

// function readJSON() {
//   fs.readFile(fileName)
//     .then(data => JSON.parse(data))
//     .then(res => res.forEach(({ id, name }) => console.log(`${id} - ${name}`)))
//     .catch((err) => console.log(err))
// }

// readJSON();

// async function filterCharacter(id) {
//   const characters = await fs.readFile(fileName).then(data => JSON.parse(data));
//   const characterById = characters.find((character) => parseInt(character.id) === id)
  
//   if (!characterById) {
//     throw new Error('id não encontrado');
//   }

//   return characterById
// }

// filterCharacter(4)
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message))
// async function filterCharacters() {
//   const characters = await fs
//     .readFile(fileName)
//     .then(data => JSON.parse(data));

//   return characters.filter((character) => character.id !== '10' && character.id !== '6');
// }

// filterCharacters()
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));

// async function filterCharacters() {
//   const characters = await fs
//     .readFile(fileName)
//     .then(data => JSON.parse(data))
  
//   const filteredCharacters = characters.filter((character) => character.id >= 1 && character.id <= 4 )
//   await fs.writeFile('simpsonFamily.json', JSON.stringify(filteredCharacters));
// }

// filterCharacters()
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
// async function insertCharacter() {
//   const simpsonsFamily = await fs
//     .readFile('./simpsonFamily.json')
//     .then(data => JSON.parse(data))

//   simpsonsFamily.push({ "id": "8", "name": "Nelson Muntz" });
//   await fs.writeFile('simpsonFamily.json', JSON.stringify(simpsonsFamily));
// }

// insertCharacter()
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));
// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

async function replaceCharacters() {
  const simpsonsFamily = await fs
    .readFile('./simpsonFamily.json', 'utf-8')
    .then(data => JSON.parse(data));

  const newFamily = simpsonsFamily.filter((character) => character.id !== '8');
  newFamily.push({ id: "8", name: "Maggie Simpson" });
  await fs.writeFile('simpsonFamily.json', JSON.stringify(newFamily));
}

replaceCharacters()
  .then(res => console.log(res))
  .catch(err => console.log(err.message));