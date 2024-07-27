let input=document.querySelector(".input");
let submit=document.querySelector(".add");
let taskdiv=document.querySelector(".tasks");



let tasks;
if(localStorage.tasks!=null ){ 
    tasks= JSON.parse(localStorage.tasks);
    addelemnttopage(tasks);



}else 
tasks=[];
submit.onclick=function(){
    if(input.value!=null){
        adddtasktoarray(input.value);
        input.value='';
    }
   
}

   
           
    

    
function adddtasktoarray(tasktext){
const task={
    id:Date.now(),
    title:tasktext,
    completed:false,
};
tasks.push(task);
addelemnttopage(tasks);
localStorage.setItem('tasks',JSON.stringify(tasks));
}
function addelemnttopage(tasks){
    //  taskdiv.innerHTML='';
     let table='';

    for(let i=0;i<tasks.length;i++){
        table+=`
        <div class="task">${tasks[i].title}
        <button  class = "del" onclick="deletetask(${i})"    id ="deleteproduct">delete</button>
        
        </div>

        
        `
      ;  
      }
      taskdiv.innerHTML=table;

}
function deletetask(id){
     tasks.splice(id,1)
     localStorage.setItem('tasks',JSON.stringify(tasks));
     addelemnttopage(tasks);


}

