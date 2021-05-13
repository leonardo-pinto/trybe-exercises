const fetchPromise = () => {

  const promise = new Promise ((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
      );
      console.log(myArray);
    const sum = myArray.map((number) => number * number)
      .reduce((sum, number) => sum + number);
    (sum < 8000) ? resolve() : reject();
  });
  promise
  .then(() => console.log(`Promise resolvida`))
  .catch(() => console.log(`Promise rejeitada`))
  
}

fetchPromise();