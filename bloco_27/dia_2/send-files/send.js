const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const stream = fs.createReadStream('./image-test.png');

const form = new FormData();
form.append('file', stream); // 'file' is linked to the name provided to upload.single('file')

const formHeaders = form.getHeaders();

axios
  .post('http://localhost:3000/files/upload', form, {
    headers: {
      ...formHeaders,
    },
  })
  .then((response) => {
    console.log(response.status);
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });
