const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
    );
   
  const sum = myArray.map((number) => number * number)
    .reduce((sum, number) => sum + number);
  
  if (sum >= 8000) {
    throw new Error();
  }
  return sum
}

const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
  const sum = await sumRandomNumbers();
  const sumFromSum = await sumArrayFromSum(sum);
  } catch (error) {
    console.log(`É mais de 8000!!!`)
  }
}

fetchPromise();