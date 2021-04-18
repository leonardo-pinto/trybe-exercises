const states = document.getElementById('state');

function createStateOptions() {
  const statesOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let index = 0; index < statesOptions.length; index += 1) {
    let createStateOption = document.createElement('option');
    createStateOption.innerText = statesOptions[index];
    states.appendChild(createStateOption);
  };
}
createStateOptions();


