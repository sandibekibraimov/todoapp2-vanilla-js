// selector list

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');

// functions
const addTodo = (e) => {
  e.preventDefault();

  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);
  // completed button
  const completedBtn = document.createElement('button');
  completedBtn.innerHTML = '<i class="far fa-check-square"></i>';
  completedBtn.classList.add('complete-btn');
  todoDiv.appendChild(completedBtn);

  // trash button
  const trashBtn = document.createElement('button');
  trashBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trashBtn.classList.add('trash-btn');
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);
  todoInput.value = '';
};

// event listeners
todoButton.addEventListener('click', addTodo);
