/*Här skriver ni koden*/
const todoBtn=document.getElementById("my-button");
let todoList=document.getElementById("list");

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

        var list = document.getElementById("list");
       list.removeChild(list.childNodes[0]);

      })
    }
  })