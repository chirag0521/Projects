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
openFeatures()

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

todoList()

function dailyPlanner() {
    var dayPlanner = document.querySelector('.day-planner')

    var dayPlanData = JSON.parse(localStorage.getItem('dayPlanData')) || {}

    let hours = Array.from({ length: 18 }, (_, idx) => `${5 + idx}:00 - ${6 + idx}:00`)


    let wholeDaySum = ''

    hours.forEach(function (elem, idx) {

        var savedData = dayPlanData[idx] || ''
        wholeDaySum = wholeDaySum + `<div class="day-planner-time">
    <p>${elem}</p>
    <input id=${idx} type="text" placeholder="..." value=${savedData}>
    </div>`
    })

    dayPlanner.innerHTML = wholeDaySum


    var dayPlannerInput = document.querySelectorAll('.day-planner input')

    dayPlannerInput.forEach(function (elem) {
        elem.addEventListener('input', function () {
            dayPlanData[elem.id] = elem.value
            localStorage.setItem('dayPlanData', JSON.stringify(dayPlanData))

        })

    })
}

dailyPlanner()

function motivationalQuote() {
    let motivationQuote = document.querySelector('.motivation-2 h1')
    let motivationAuthor = document.querySelector('.motivation-3 h2')
    async function fetchQuote() {
        let response = await fetch('https://api.quotable.io/random')

        let data = await response.json()

        motivationQuote.innerHTML = data.content
        motivationAuthor.innerHTML = `-- ${data.author}`


    }
    fetchQuote()
}
motivationalQuote()

function pomodoroTimer(){
    let timer = document.querySelector('.pomo-timer h1')
var startBtn = document.querySelector('.pomo-timer .start-timer')
var pauseBtn = document.querySelector('.pomo-timer .pause-timer')
var resetBtn = document.querySelector('.pomo-timer .reset-timer')
var session = document.querySelector('.pomodoro-fullpage .session')
var isWorkSession = true
let timerInterval = null
let totalSeconds = 25 * 60


function updateTime() {
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = totalSeconds % 60
    timer.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function startTimer() {
    clearInterval(timerInterval)
    if (isWorkSession) {


        timerInterval = setInterval(function () {
            if (totalSeconds > 0) {
                totalSeconds--
                updateTime()
            } else {
                isWorkSession = false
                clearInterval(timerInterval)
                timer.innerHTML = '05:00'
                 session.innerHTML = 'Lets take a Break'
                 session.style.backgroundColor = 'var(--blue)'
                 totalSeconds = 5 * 60
            }
        }, 1000)
        
    } else {


    
    timerInterval = setInterval(function () {
        if (totalSeconds > 0) {
            totalSeconds--
            updateTime()
        } else {
            isWorkSession = true
            clearInterval(timerInterval)
            timer.innerHTML = '25:00'
             session.innerHTML = 'Work Session'
             session.style.backgroundColor = 'var(--green)'
             totalSeconds = 25 * 60
        }
    
    }, 1000)
}
}
function pauseTimer() {
    clearInterval(timerInterval)
}
function resetTimer() {
    totalSeconds = 25 * 60
    clearInterval(timerInterval)
    updateTime()
}
startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)
}
pomodoroTimer()



