const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalName = Animals.find ((animal) => animal.name === name)
      if (animalName) {
        return resolve(animalName);
      }; 
      const error = 'Nenhum animal com esse nome!'
      return reject(error);
    }, 500)
  })
 
);

const getAnimal = (name) => {
  return findAnimalByName(name).then(animalName => animalName);
};

/*const findAnimalByAge = (age) => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalAge = age/*Animals.filter((animal) => animal.age === age)*/
      //return resolve(animalAge);
      /*if (animalAge.length !== 0) {
        return resolve(animalAge);
      };
      const error = 'Nenhum animal com essa idade'
      return reject(error);
    }, 500)
  })
}*/
const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      };
      const messageError = 'Nenhum animal com essa idade';
      return reject(messageError);
    }, 100);
  })
);


const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal);
};

module.exports = { findAnimalByName, getAnimal, findAnimalByAge, getAnimalByAge  }