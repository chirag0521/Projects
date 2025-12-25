var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

var grow = 0
btn.addEventListener('click', function () {

    var num = 50 + Math.floor(Math.random() * 50)
    btn.style.pointerEvents = 'none'

    var int = setInterval(() => {
        grow++
        inner.style.width = grow + '%'
        h2.innerHTML = grow + '%'
    }, num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        console.log('The song will be downloaded in', num / 10, 'seconds')
        btn.style.opacity = 0.7
    }, num * 100);

})