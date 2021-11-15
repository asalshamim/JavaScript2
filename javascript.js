/*Här skriver ni koden*/
const todoBtn =document.getElementById("my-button");
const todoList =document.getElementById("list");



todoBtn.addEventListener("click", function() {
  let textinput= document.getElementById("task").value;

    if (textinput === ""){
      alert ("Text")
    }
    else {
      

      const newTodo= document.createElement("LI"); //  Li
      newTodo.innerText =textinput;
      todoList.appendChild(newTodo);
      document.getElementById("task").value= "";

      const trashButton=document.createElement("button");
      trashButton .innerHTML="x";
      newTodo.appendChild(trashButton).className="delete";

      trashButton.addEventListener("click", function(){
        textinput=document.getElementById("task").value;

        const list = document.getElementById("list");
       list.removeChild(list.childNodes[0]);

      
      
       

      })
      

    }
  
    
  })
  
      
 // Save list

 function saveList() {
  let toDos = [];
  for(let i=0; i<todoList.children.length; i++){
    let toDo = todoList.children.item(i);
    

    let todoInfo ={
      task: todoList.innerText,
      class: todoList.children[i].className
    };
    
    toDos.push(todoInfo);
  }
  localStorage.setItem("toDos", JSON.stringify(toDos));
 
}

function loadList() {
  if(localStorage.getItem("toDos") != null){
    let toDos = JSON.parse(localStorage.getItem("toDos"));

    for (let i= 0; i< toDos.length; i++){
      let toDo = toDos[i];
      newTodoItem(toDo.task, toDo.class);
    }
  }
  loadList();


}
function saveCount(){
  saveList();
  loadList();
}