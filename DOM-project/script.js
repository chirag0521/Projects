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

function todoList() {
    let currentTask = []


    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'))
    } else {
        console.log('Task list is empty ');
    }

    function renderTask() {

        let allTask = document.querySelector('.allTask')

        let sum = ''

        currentTask.forEach(function (elem, idx) {
            sum = sum + `<div class="task">
            <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
            <button id = ${idx}>Mark as completed</button>
            </div>`
        })

        allTask.innerHTML = sum

        localStorage.setItem('currentTask', JSON.stringify(currentTask))

        document.querySelectorAll('.task button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                currentTask.splice(btn.id, 1)
                renderTask()
            })

        })
    }

    renderTask()

    let form = document.querySelector('.addTask form')
    let taskInput = document.querySelector('.addTask form #task-input')
    let taskDetailsInput = document.querySelector('.addTask form textarea')
    let taskCheckbox = document.querySelector('.addTask form #check')


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
        renderTask()

        taskCheckbox.checked = false
        taskInput.value = ''
        taskDetailsInput.value = ''

    })



}

// todoList()

let hours = Array.from({ length: 18 }, (el, idx) => `${5 + idx}:00 - ${6 + idx}:00`)

let wholeDaySum = ''

hours.forEach(function (elem,idx) {
    wholeDaySum = wholeDaySum + `<div class="day-planner-time">
    <p>${elem}</p>
    <input id=${idx} type="text" placeholder="...">
    </div>`
})

var dayPlanData =JSON.parse(localStorage.getItem('dayPlanData')) || {}

var dayPlanner = document.querySelector('.day-planner')
dayPlanner.innerHTML = wholeDaySum

var dayPlannerInput = document.querySelectorAll('.day-planner input')


dayPlannerInput.forEach(function(elem){
    elem.addEventListener('input', function(){
        dayPlanData[elem.id] = elem.value
        localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))
        
    })
    
})