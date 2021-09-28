const fs = require('fs');

function readFile(fileName) {
  
  try {
    const fileContent = fs.readFileSync(fileName, 'utf-8');
    return fileContent;
  } catch (err) {
    return null;
  }
}

module.exports = readFile;