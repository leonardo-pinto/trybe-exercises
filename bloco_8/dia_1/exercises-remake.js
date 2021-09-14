/* Exercício 1: Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com*/

const generateEmail = (nomeCompleto) => {
  const employeeEmail = `${nomeCompleto.toLowerCase().split(' ').join('_')}@trybe.com`
  return employeeEmail;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: callback('Leonardo Pinto'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: callback('Gabriela Bittencourt'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(generateEmail));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Exercício 2: Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const checkNumber = (number, drawNumber) => number === drawNumber

const drawResult = (number, callback) => {
  const drawNumber = Math.floor(Math.random() * 5 + 1);
  return callback(number, drawNumber) ? `Parabéns você ganhou` : `Tenta novamente`
}

console.log(drawResult(2, checkNumber));


/* Exercício bônus parte 1: */
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAttack = () => {
  const dragonDamage = Math.floor(Math.random() * (dragon.strength - 15) + 15 );
  return dragonDamage;
}

const warriorAttack = () => {
  const warriorDamage = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
  return warriorDamage;
}

const mageAttack = () => {
  const currentMageStatus = {
    damage: Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence),
    manaSpent: 15,
  }
  if (mage.mana < 15) {
    currentMageStatus.damage = `Não possui mana suficiente`;
    currentMageStatus.manaSpent = 0;
    return currentMageStatus;
  }
  return currentMageStatus;
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    dragon.healthPoints -= warriorAttack();
    warrior.damage = warriorAttack();
  },
  mageTurn: (mageAttack) => {
    dragon.healthPoints -= mageAttack().damage;
    mage.damage = mageAttack().damage;
    mage.mana = mage.mana - mageAttack().manaSpent;
  },
  dragonTurn: (dragonAttack) => {
    mage.healthPoints -= dragonAttack();
    warrior.healthPoints -= dragonAttack();
    dragon.damage = dragonAttack();
  },
  endOfTurn: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.endOfTurn());