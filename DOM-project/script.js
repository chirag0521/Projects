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

function pomodoroTimer() {
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

function weatherReport() {
    var city = 'Hailakandi'
    var header1Time = document.querySelector('.header1 h1')
    var header1Date = document.querySelector('.header1 h2')
    var header2Temp = document.querySelector('.header2 h2')
    var header2Condition = document.querySelector('.header2 h4')
    var feelsLike = document.querySelector('.header2 .feelsLike')
    var humidity = document.querySelector('.header2 .humidity')
    var wind = document.querySelector('.header2 .wind')
    var header = document.querySelector('header')


    var data = null

    async function weatherAPIcall() {
        let apikey = "188159041bdf4e0894804917253012"
        var response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`);
        data = await response.json()

        header2Temp.innerHTML = `${data.current.temp_c}°C`
        header2Condition.innerHTML = `${data.current.condition.text}`
        feelsLike.innerHTML = `Feels Like: ${data.current.feelslike_c}°C`
        humidity.innerHTML = `Humidity: ${data.current.humidity}`
        wind.innerHTML = `Wind: ${data.current.wind_kph} km/h`
        console.log(data);

    }
    weatherAPIcall()

    var date = null

    function timeDate() {
        var totalDaysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        var totalMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        date = new Date()
        var dayOfWeek = (totalDaysOfWeek[date.getDay()]);
        var hours = date.getHours()
        var minutes = date.getMinutes()
        var sec = date.getSeconds()
        var today = date.getDate()
        var month = date.getMonth()
        var exactMonth = totalMonths[month]
        var year = date.getFullYear()
        header1Date.innerHTML = `${today} ${exactMonth}, ${year}`

        if (hours >= 4 && hours <= 12) {
            header.style.backgroundImage = `url(./morning.jpg)`
            header.style.backgroundSize = 'cover';
            header.style.backgroundPosition = 'center';
            header.style.backgroundRepeat = 'no-repeat';

        }
        else if (hours > 12 && hours <= 17) {
            header.style.backgroundImage = `url(./afternoon.jpg)`
            header.style.backgroundSize = 'cover';
            header.style.backgroundPosition = 'center';
            header.style.backgroundRepeat = 'no-repeat';

        }
        else if (hours > 17 && hours <= 19) {
            header.style.backgroundImage = `url(./evening.jpg)`
            header.style.backgroundSize = 'cover';
            header.style.backgroundPosition = 'center';
            header.style.backgroundRepeat = 'no-repeat';
        }
        else {
            header.style.backgroundImage = `url(./night.jpg)`
            header.style.backgroundSize = 'cover';
            header.style.backgroundPosition = 'center';
            header.style.backgroundRepeat = 'no-repeat';
        }
        header1Time.innerHTML = `${dayOfWeek}, ${hours}:${String(minutes).padStart(2, "0")}:${String(sec).padStart(2, "0")}`


    }
    setInterval(() => {
        timeDate()
    }, 1000)
}
weatherReport()

var theme = document.querySelector('.theme')

var flag = 0

var rootElement = document.documentElement

theme.addEventListener('click', function (){
    if(flag==0){
    rootElement.style.setProperty('--pri', '#DFD0B8')
    rootElement.style.setProperty('--sec', '#222831')
    rootElement.style.setProperty('--tri1', '#948979')
    rootElement.style.setProperty('--tri2', '#393E46')
    flag =1
    }
    else if(flag==1){
    rootElement.style.setProperty('--pri', '#F1EFEC')
    rootElement.style.setProperty('--sec', '#030303')
    rootElement.style.setProperty('--tri1', '#D4C9BE')
    rootElement.style.setProperty('--tri2', '#123458')
    flag = 2
    }
    else if(flag==2){
    rootElement.style.setProperty('--pri', '#F8F4E1')
    rootElement.style.setProperty('--sec', '#2b1305')
    rootElement.style.setProperty('--tri1', '#F3BA17')
    rootElement.style.setProperty('--tri2', '#74512D')
    flag = 0
    }

})