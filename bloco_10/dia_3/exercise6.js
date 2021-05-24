function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
    response
      .json()
      .then(json =>
        response.ok ? resolve(json) : reject(json)
      )
  );
}
module.exports = { fetchDog };