function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDays () {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let days = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let monthDays = document.createElement('li');
    monthDays.innerText = dezDaysList[index];
    monthDays.className = 'day';
    days.append(monthDays);
    if (parseInt(monthDays.innerText) === 24) {
      monthDays.classList.add('holidays');
    }
    if (parseInt(monthDays.innerText) === 25) {
      monthDays.classList.add('holidays');
    }

    if (parseInt(monthDays.innerText) === 31) {
      monthDays.classList.add('holidays');
    }

    if (parseInt(monthDays.innerText) === 4) {
      monthDays.classList.add('friday');
    }

    if (parseInt(monthDays.innerText) === 11) {
      monthDays.classList.add('friday');
    }

    if (parseInt(monthDays.innerText) === 18) {
      monthDays.classList.add('friday');
    }

    if (parseInt(monthDays.innerText) === 25) {
      monthDays.classList.add('friday');
    }

  }
}
createDays();


function holidays(str) {
  let buttonSelector = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.id = 'btn-holiday';
  button.innerText = str;
  buttonSelector.appendChild(button);
}
holidays('Feriados');

function holidayClick () {
  let button = document.querySelector('#btn-holiday');
  button.addEventListener('click',holidayClick);
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'white';
  let holidaysList = document.querySelectorAll('.holidays');
  for (let index = 0; index < holidaysList.length; index += 1) {
    if (holidaysList[index].style.backgroundColor === newColor) {
      holidaysList[index].style.backgroundColor = backgroundColor;
    } else {
      holidaysList[index].style.backgroundColor = newColor;
    }
  }
}
holidayClick ()

function fridayButton (str) {
  let buttonSelection = document.querySelector('.buttons-container');
  let button = document.createElement('button');
  button.innerText = str;
  button.id = 'btn-friday';
  buttonSelection.appendChild(button);
}
fridayButton('Sexta-feira')
// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
