var inputBox = document.getElementById('input-box');
var listContainer = document.getElementById('list-container');


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value =""
    saveData()
}

listContainer.addEventListener('click', function(elem){
    if(elem.target.tagName === 'LI'){
        elem.target.classList.toggle("checked")
        saveData()
    }
    else if(elem.target.tagName === 'SPAN'){
        elem.target.parentElement.remove()
        saveData()
    }
},false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()
