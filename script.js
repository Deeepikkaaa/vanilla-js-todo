let addtask=document.querySelector(".addtask");
let Delete=document.querySelector(".Delete");
let display=document.querySelector(".displayarea");
let input=document.querySelector("input");
let button=document.querySelector(".button");
let todolist=document.getElementById("todolist");


button.addEventListener(("click"),(e)=>{

 let task = document.querySelector("input").value;
         if(task===""){
            alert("Task cannot be empty!")
         }
     else if(e.target.classList.contains("addtask")){
        alert("Are you sure to add task?");
        let list=document.createElement("li");

        let button=document.createElement("button");
        button.textContent="Done";
        button.classList.add("delbtn");

        button.addEventListener(("click"),()=>{
            list.remove();
        })
      
       
        list.textContent=task;
          list.appendChild(button);
        todolist.appendChild(list);
        input.value=" ";

    }
    else if(e.target.classList.contains("viewtask")){
        alert("Viewing list of tasks");

    }
    else if(e.target.classList.contains("Delete")){
        alert("Delete the entire list of tasks?");
        todolist.innerHTML="";


    };
});

