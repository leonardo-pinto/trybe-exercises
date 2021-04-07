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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function createDays () {
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


