function openFeatures() {
    var allElems = document.querySelectorAll('.elem');
    var allFullElemPage = document.querySelectorAll('.fullElem');
    var allFullElemsPageBackBtn = document.querySelectorAll('.back');
    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            allFullElemPage[elem.id].style.display = 'block';
        })
    })
    allFullElemsPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            allFullElemPage[back.id].style.display = 'none';
        })

    })
}
// openFeatures()
let form = document.querySelector('.addTask form')
let taskInput = document.querySelector('.addTask form #task-input')
let taskDetailsInput = document.querySelector('.addTask form textarea')
let taskCheckbox = document.querySelector('.addTask form #check')

var currentTask = []

if(localStorage.getItem('currentTask')){
    currentTask = JSON.parse(localStorage.getItem('currentTask'))
} else{
    console.log('Task list is empty ');
}

function renderTask() {
    var allTask = document.querySelector('.allTask')

    var sum = ''

    currentTask.forEach(function (elem) {
        sum = sum + `<div class="task">
    <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
    <button>Mark as completed</button>
    </div>`
    })
    allTask.innerHTML = sum
}
renderTask()


form.addEventListener('submit', function (dets) {
    dets.preventDefault()
    // console.log(taskInput.value)
    // console.log(taskDetailsInput.value)
    // console.log(taskCheckbox.checked)
    currentTask.push({
        task: taskInput.value,
        details: taskDetailsInput.value,
        imp: taskCheckbox.checked
    })
    localStorage.setItem('currentTask', JSON.stringify(currentTask))
    taskInput.value = ''
    taskDetailsInput.value = ''
    taskCheckbox.checked = false
    renderTask()
})

