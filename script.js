const taskInput = document.getElementById('task-input');
const boton = document.getElementById('boton');
const taskList = document.getElementById('task-list');

boton.addEventListener('click', () => {
  const task = document.createElement('li');
  task.textContent = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = '';
});