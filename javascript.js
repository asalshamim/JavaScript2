/*Här skriver ni koden*/
const input = document.getElementById('task')
const todoList = document.getElementById('list')
const  todoBtn = document.getElementById("my-button")

todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodo(event){
    event.preventDefault();

    // Toto Div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //li
    const newTodo = document.createElement('li');
    newTodo.innerText = input.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    console.log(todoBtn);

    // Detete button

    const trashButton = document.createElement('button');
    trashButton.innerHTML ='X';
    trashButton.classList.add("delete");
    todoDiv.appendChild(trashButton);

    // Append to list

    todoList.appendChild(todoDiv);
    input.value ="";
}


function deleteCheck(e) {
    const item = e.target;

    // Delete TODo
    if(item.classList[0] === "delete"){
        const todo =item.parentElement;
        todo.classList.add('fall');
        todo.remove();
    }
}