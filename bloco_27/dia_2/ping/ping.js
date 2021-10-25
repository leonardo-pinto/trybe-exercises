const axios = require('axios');

axios
  .get('http://localhost:3000/ping')
  .then((response) => {
    console.log(response.status)
    console.log(response.data)
  })
  .catch((err) => {
    console.log(err);
  });

// axios usage examples

// get request with params
// axios.get('url', {
//     params: {
//       ID: 123456
//     },
//   })
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })

// async await
// const getPong = async () => {
//   try {
//     const response = await axios.get('url')
//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// }

// post request
// const body = {
//   name: 'alfredo',
//   generation: 'II',
// };

// axios.post('url', body).then((response) => console.log(response)).catch((err) => console.log(err));


