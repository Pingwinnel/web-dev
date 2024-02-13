const input_box=document.getElementById("input_task");
const add_btn=document.getElementById("add");

const  list=document.getElementById("tasks");

function add_Task(){
    if(input_box.value===""){
        alert("You must write something!");
        saveTask();
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input_box.value;
        list.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_box.value="";
    saveTask();
}

list.addEventListener("click",function (e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);

function saveTask(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();