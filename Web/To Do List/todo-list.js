const myTodoList = [];

displayTodoList();

function displayTodoList() {
  let todoListHTML = '';

  myTodoList.forEach((todoObject, index) => {
    const {nama, dueDate} = todoObject;
    const html = `
      <div>${nama}</div>
      <div>${dueDate} </div>
      
      <button class = "delete-todo-button js-delete-todo-button">
        Delete
      </button>
    `;
    todoListHTML += html;
  });
  
  console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
      myTodoList.splice(index, 1);
      displayTodoList();
    })
  });
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addTodoList();
});

function addTodoList() {
  const todoName = document.querySelector('.input-Todo');
  const dateInputElement = document.querySelector('.js-due-date-input');

  myTodoList.push({nama: todoName.value, dueDate: dateInputElement.value});

  dateInputElement.value= '';
  todoName.value = '';

  displayTodoList();
}

