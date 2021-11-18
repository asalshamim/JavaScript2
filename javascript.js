/*Här skriver ni koden*/
const todoBtn =document.getElementById("my-button");
const todoList =document.getElementById("list");





todoBtn.addEventListener("click", function() {
  let textinput= document.getElementById("task").value;

    if (textinput === ""){
      alert ("Text")
    }
    else {
      

      const newTodo= document.createElement("li"); //  Li
      newTodo.innerText =textinput;
      todoList.appendChild(newTodo);
      document.getElementById("task").value= "";

      // Delete Button

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

 
  
    
     



  
      
 