const fs = require('fs').promises;


async function usePromiseAll() {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const promiseAll = await array
    .map((item, index) => fs.writeFile(`file${index + 1 }.txt`, item));

    await Promise.all(promiseAll);

    const fileNames = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

    const fileContent = await Promise.all(fileNames.map(fileName => fs.readFile(fileName, 'utf-8')))

    const joinFiles = fileContent.join(' ');

    await fs.writeFile('fileAll.txt', joinFiles);
}

usePromiseAll()