const fs = require('fs').promises;

const readFileContent = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf-8');
    console.log(content)
    return JSON.parse(content);
  } catch (err) {
    return null
  }
}

const writeFileContent = async (path, content) => {
  try {
    const currentContent = await readFileContent(path);
    currentContent.push(content);
    await fs.writeFile(path, JSON.stringify(currentContent))

    return currentContent;
  } catch (error) {
    return 'gfdf';
  }
};

module.exports = { readFileContent, writeFileContent };
