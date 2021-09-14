const states = document.getElementById('state');
const masterButton = document.getElementById('form-button');

function createStateOptions() {
  const statesOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < statesOptions.length; index += 1) {
    let createStateOption = document.createElement('option');
    createStateOption.innerText = statesOptions[index];
    states.appendChild(createStateOption);
  };
}
createStateOptions();

function checkDate() {
  const date = document.getElementById('date-last-position').value;
  let checkDay = date[0]+date[1];
  let checkMonth = date[3]+date[4];
  let checkYear = date[6]+date[7]+date[8]+date[9];
  if (parseInt(checkDay,10) <= 0 || parseInt(checkDay,10) > 31) {
    alert('O dia de nascimento deve conter valor entre 0 e 31');
  };
  if (parseInt(checkMonth, 10) < 0 || parseInt(checkMonth, 10) >= 12) {
    alert('O mês de nascimento deve conter valor entre 1 e 12');
  }
  if (parseInt(checkYear, 10) < 0) {
    alert('O ano de nascimento não pode ser negativo');
  }
}

const inputElements = document.querySelectorAll('input');
masterButton.addEventListener('click', () => {
  checkDate();
  for (let index = 0; index < inputElements.length; index += 1) {
    const div = document.createElement('div');
    div.className = 'div-curriculum';
    div.innerHTML = inputElements[index].value;
    const dataUser = document.querySelector('.form-data');
    dataUser.appendChild(div);
  }
});


const clearButton = document.getElementById('clear-form');
clearButton.addEventListener('click', () => {
  const inputElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < inputElements.length; index += 1) {
    inputElements[index].value = '';
    textArea.value = ''
  }
})


