const fs = require('fs').promises;

async function writeFile(fileName, fileContent) {
  const newFile = await fs.writeFile(fileName, fileContent);
  return 'ok';
};

module.exports = writeFile;