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
  newTodo.innerText = 'test';
  newTodo.classList.add('todo-item');

  todoDiv.appendChild(newTodo);
  // completed button
  const completedBtn = document.createElement('button');
  completedBtn.innetHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add('complete-btn');
  todoDiv.appendChild(completedBtn);

  // trash button
  const trashBtn = document.createElement('button');
  trashBtn.innetHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add('trash-btn');
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);
};

// event listeners
todoButton.addEventListener('click', addTodo);
