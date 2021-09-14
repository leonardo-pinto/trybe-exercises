// Desafio 10
function createObject(techName, name) {
  let object = {
    tech: techName,
    name,
  };
  return object;
}

function techList(array, name) {
  let allTechs = [];
  for (let index = 0; index < array.length; index += 1) {
    allTechs.push(createObject(array[index], name));
  }

  allTechs.sort((a, b) => ((a.tech > b.tech) ? 1 : -1));
  if (array.length === 0) {
    return 'Vazio!';
  }
  return allTechs;
}

// Desafio 11
function checkNumb(numbers) {
  let arrayValues = true;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      arrayValues = false;
    }
  }
  return arrayValues;
}

function checkRep(numbers) {
  let repetitionCondition = true;
  let map = numbers.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
  for (let [key, value] of map) {
    if (value >= 3) {
      console.log(key);
      repetitionCondition = false;
    }
  }
  return repetitionCondition;
}

function arraySize(numbers) {
  let numberSize = true;
  if (numbers.length !== 11) {
    numberSize = false;
  }
  return numberSize;
}

function combineRepNumb(numbers) {
  let masterCondition = true;
  if (checkRep(numbers) === false || checkNumb(numbers) === false) {
    masterCondition = false;
  }
  if (checkRep(numbers) === true && checkNumb(numbers) === true) {
    masterCondition = true;
  }
  return masterCondition;
}

function generatePhoneNumber(numbers) {
  if (arraySize(numbers) === false) {
    return 'Array com tamanho incorreto.';
  }
  if (combineRepNumb(numbers) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (combineRepNumb(numbers) === true) {
    let phoneNumber = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    return phoneNumber.replace(/,/g, '');
  }
}

// Desafio 12
function checkLineSum(lineA, lineB, lineC) {
  let checkSum = true;
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    checkSum = true;
  } else {
    checkSum = false;
  }
  return checkSum;
}

function checkLineDiff(A, B, C) {
  let checkDiff = true;
  if (A > Math.abs(B - C) && B > Math.abs(A - C) && C > Math.abs(A - B)) {
    checkDiff = true;
  } else {
    checkDiff = false;
  }
  return checkDiff;
}
function triangleCheck(A, B, C) {
  let triangleRequirements = true;
  if (checkLineSum(A, B, C) === true && checkLineDiff(A, B, C) === true) {
    triangleRequirements = true;
  } else {
    triangleRequirements = false;
  }
  return triangleRequirements;
}

// Desafio 13
function hydrate(string) {
  let numberOfDrinks = string.replace(/[^0-9]/g, '');
  let numberOfWaters = 0;
  for (let index = 0; index < numberOfDrinks.length; index += 1) {
    numberOfWaters += parseInt(numberOfDrinks[index], 10);
  }
  if (numberOfWaters === 1) {
    return `${numberOfWaters} copo de água`;
  }
  if (numberOfWaters !== 1) {
    return `${numberOfWaters} copos de água`;
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
