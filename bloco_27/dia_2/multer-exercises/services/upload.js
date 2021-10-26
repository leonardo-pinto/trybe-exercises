const fs = require('fs');

const PATH_NAME = '/home/leonardo/trybe-exercises/bloco_27/dia_2/multer-exercises/uploads';

const fileExists = (filename) => {
  const files = fs.readdirSync(PATH_NAME);
  return files.some((file) => file === filename);
};

module.exports = fileExists;
