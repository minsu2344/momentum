const toDoForm = document.getElementById('todo-form');
const toDoInput = toDoForm.querySelector('input');
// const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletToDo(event) {
  const li = event.target.parentElement
  toDos = toDos.filter(item => item.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.addEventListener('click', deletToDo);
  button.innerText = 'X';
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
}