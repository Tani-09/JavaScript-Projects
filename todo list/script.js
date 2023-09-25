const inputBox =  document.getElementById('input-box');
const button =  document.getElementById('btn');
const listContainer =  document.getElementById('Alltasks');

function addTask(){
    if(inputBox.value === '')
    {
        alert("add some task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "X";
        li.appendChild(span);
       
        }
        inputBox.value="";
        savetoStorage();
    }

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            savetoStorage();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savetoStorage();
        }
        
    }, false);

    function savetoStorage(){
        localStorage.setItem("data", listContainer.innerHTML)
    }
    

    function showPrevData(){
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showPrevData();

