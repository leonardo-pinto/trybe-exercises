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

calculate(10, 10, 10)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));

  calculate(10, 1, 1)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));

  calculate(10, 10, '10')
  .then(result => console.log(result))
  .catch(err => console.log(err.message));