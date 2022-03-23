const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

// const link = document.querySelector('a');

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// function handleLinkClick(event) {
//   event.preventDefault();
// }

// link.addEventListener('click', handleLinkClick);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(!savedUsername) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
}
else {
  paintGreetings(savedUsername);
}
