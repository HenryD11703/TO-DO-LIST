const taskInput = document.getElementById('task-input');
const boton = document.getElementById('boton');
const taskList = document.getElementById('task-list');

boton.addEventListener('click', () => {
  const task = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(taskInput.value));
  task.appendChild(label);
  taskList.appendChild(task);
  taskInput.value = '';
});

taskList.addEventListener('change', (event) => {
  if (event.target.type === 'checkbox') {
    event.target.parentNode.style.textDecoration = event.target.checked ? 'line-through' : 'none';
  }
});