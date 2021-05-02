//Exercício 1
const createEmail = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return `${email}@trybe.com`;
}


const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: callback('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: callback('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(createEmail));
/////////////////////////////////////////////////////////
//Exercício 2

const checkDraw = (number, randomNumber) => number === randomNumber;

const drawResult = (number, callback) => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return callback(number, randomNumber) ? 'Parabéns, você ganhou!!!' : 'Tente novamente';
}

console.log(drawResult(4, checkDraw));
// gera número entre 1 e 5
// parâmetros-> o número apostado e função que checa;
// return "Tente novamente" ou "Parabéns você ganhou"
///////////////////////////////////////////////////////////////////////////////

//Exercícios Bônus
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
  const dragonDamage = Math.floor(Math.random() * (dragon.strength - 15) + 15);
  return dragonDamage;
}  

const warriorAttack = () => {
  const warriorDamage = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
  return warriorDamage;
}

const mageAttack = () => {
  const turnStats = {
    damage: `Not enough mana...`,
    manaSpent: 0,
  }

  if (mage.mana > 15) {
    turnStats.damage =  Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
    turnStats.manaSpent = 15;
    return turnStats
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorAttack) => { 
    dragon.healthPoints = dragon.healthPoints - warriorAttack();
  },
  mageTurn: (mageAttack) => {
    dragon.healthPoints = dragon.healthPoints - mageAttack();
    mage.damage = mageAttack().damage;
    mage.mana = mage.mana - mageAttack().manaSpent;
  },
  dragonTurn: (dragonAttack) => {
    mage.healthPoints = mage.healthPoints - dragonAttack();
    warrior.healthPoints = warrior.healthPoints - dragonAttack();
    dragon.damage = dragonAttack();
  },
  turnResult: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResult());
