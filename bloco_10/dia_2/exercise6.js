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

module.exports = { findAnimalByName, getAnimal  }