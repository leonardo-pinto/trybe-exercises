function calculate(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      reject(new Error("Informe apenas números"));
    }

    const resultado = ((num1 + num2) * num3);
    if (resultado < 50) reject(new Error("Valor muito baixo"))
    if (resultado >= 50) resolve(resultado);
  });
}

function randomNumber () {
  return Math.floor(Math.random() * 100 + 1);
};


function callCalculate() {
  const generateRandomNumbers = Array.from({ length: 3 }).map(randomNumber);
  calculate(...generateRandomNumbers)
    .then(res => console.log(res))
    .catch(err => console.log(err.message));
}

callCalculate();