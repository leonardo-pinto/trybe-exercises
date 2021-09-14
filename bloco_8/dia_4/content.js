// Recebe como parâmetro o 'acumulador', além da função;

//Utilizando laço for
const numbers = [32, 15, 3, 2, -5 , 56, 10];
let sumNumbers = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sumNumbers += numbers[index];
}
console.log('A soma dos números é:', sumNumbers);
//////////////////////////////////////////////////////////////
// Utilizando função .reduce
const reduceExample = numbers.reduce((result, number) => result + number);
console.log(reduceExample);

// Outra maneira:
const sumAll = (result, number) => result + number;
const reduceExample2 = numbers.reduce(sumAll); //É possível passar um valor inicial para result. Ex: .reduce(sumAll, 10)
console.log(reduceExample2);
//----------------------------------------//
const numbers = [50, 85, -30, 3, 15];

const getHigherNumber = (higher, number) => ((higher > number) ? higher : number);
const higher = numbers.reduce(getHigherNumber, 100);
console.log(higher)
//----------------------------------------//
// Faça uma função que some todos os números pares (even) do array
// Utilizando filter e reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const filterEven = numbers.filter((number) => number % 2 === 0).reduce((result, number) => result + number);
console.log(filterEven);

// Utilizando apenas reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const findEvens = (result, number) => (
  (number % 2 === 0) ? number + result : result
);

const sumEvens = numbers.reduce(findEvens);

console.log(sumEvens)

/////////////////////////////////////////////////////////////////////////////////////////////

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

//Agora crie uma função usando os dados dos estudantes que usamos no conteúdo do dia anterior, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce !

const getHigherGrade = (higherGrade, grade) => (higherGrade.nota > grade.nota) ? higherGrade : grade;

const studentsGrade = estudantes.map((estudante) => ({
  name: estudante.nome, 
  materia: estudante.materias.reduce(getHigherGrade).name}
  )
);

console.log(studentsGrade)
