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


function fridayClick (fridayArray) {
  let button = document.querySelector('#btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let newText = 'SEXTOU';
  button.addEventListener('click', function(){
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newText) {
      fridays[index].innerHTML = newText;
    } else {
      fridays[index].innerHTML = dezFridays [index];
    }
  }
  })
};
let dezFridays = [4, 11, 18, 25];
fridayClick(dezFridays);




function mouseOver () {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '40px';
    event.target.style.fontWeight = '600';
  });
};
mouseOver();

function mouseOut () {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
};
mouseOut();

function createTask (str) {
  selectDiv = document.querySelector('.my-tasks');
  task = document.createElement('span');
  task.innerText = str;
  selectDiv.appendChild(task);
}
createTask('Musculação');

function insertLabel (str) {
  let selectTask = document.querySelector('.my-tasks');
  let backgroundColor = document.createElement('div');
  backgroundColor.className = 'task';
  backgroundColor.style.backgroundColor = str;
  selectTask.appendChild(backgroundColor);
}
insertLabel('green');


function selectTask () {
  let selectedTask = document.getElementsByClassName('task-selected')
  let taskLabel = document.querySelector('.task');
  taskLabel.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task-selected';
    } else {
      event.target.className = 'task'
    }
  })
}

selectTask();


