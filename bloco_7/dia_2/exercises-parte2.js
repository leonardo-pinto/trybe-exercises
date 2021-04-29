const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};  

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};  

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


//Exercício 1: Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

/*const insertMorningShift = (object, key, value) => {
  object[key] = value;
  return object;
}   
console.table(insertMorningShift(lesson2, 'turno', 'manhã'));*/

//Exercício 2: Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

/*const listKeys = (object) => 
console.log(Object.keys(object));
}
listKeys(lesson3);*/


//Exercício 3: Crie uma função para mostrar o tamanho de um objeto.

/*const objectSize = (object) => {
  console.log(`O tamanho do objeto é: ${Object.keys(object).length}`);
}  
objectSize(lesson3);*/

//Exercício 4: Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

/*const listValues = (object) => {
console.log(Object.values(object));  
}
listValues(lesson3);*/

//Exercício 5: Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

/* const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons); */

//Exercício 6: Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

/*const numberStudents = (object) => {
  let total = 0;
  const arrays = (Object.keys(object));
  for (let index = 0; index < arrays.length; index += 1) {
    total += object[arrays[index]].numeroEstudantes;
  }
  return total
}

console.log(numberStudents(allLessons));*/

//Exercício 7: Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
//console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

/*const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};  

const getValueByNumber = (object, number) => Object.values(object)[number];
console.log(getValueByNumber(lesson1, 2));*/

//Exercício 8: Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const verifyPair = (object, key, value) => {
  let isEqual = false;
  const entriesArray = Object.entries(object)
  for (let index = 0; index < Object.entries(object).length; index += 1) {
    if (entriesArray [index][0] === key && entriesArray [index][1] === value) {
      isEqual = true;
    } 
  };
  return isEqual;
}
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
