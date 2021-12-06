const socket = window.io();

const form = document.querySelector('form');
const messageInput = document.querySelector('#message-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  socket.emit('message', messageInput.value);
  messageInput.value = '';
  return false;
});

const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

socket.on('welcome', ({ message } ) => createMessage(message));

socket.on('newJoin', ({ message } ) => createMessage(message));

socket.on('serverMessage', ({ message }) => createMessage(message));

window.onbeforeunload = (e) => {
  socket.disconnect();
};
