const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const dateinput = document.getElementById("dateinput");
const timeinput = document.getElementById("timeinput");
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById('dateinput');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
});

function addtask(){
    if(inputBox.value===''|| dateinput.value===''|| timeinput.value===''){
        alert("Please enter complete details");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value + "<br>date : " + dateinput.value + "<br>time : " + timeinput.value;
        let span = document.createElement("span");
        span.innerHTML = "&#10006";
        li.appendChild(span);

        listContainer.appendChild(li);
       
    }
    inputBox.value='';
    dateinput.value='';
    timeinput.value='';
    savedata();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentNode.remove();
        savedata();
    }
    
    savedata();
    
},false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();


