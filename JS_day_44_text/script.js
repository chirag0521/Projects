var main = document.querySelector('main')
var btn = document.querySelector('button')

var arr = ['Lets go', 'Boom!' , 'Let the Magic Begin', 'Time to Play', 'Generate Something Random', 'Bring It On', 'Press for Magic', 'Bloom Into Motion', 'Deploy the Element']


btn.addEventListener('click', function(){
    var h = document.createElement('h1')
    let a = Math.floor(Math.random()*arr.length)
    var x = Math.random()*90
    var y = Math.random()*90
    var r = Math.random()*360
    var s = Math.random()*3
    h.innerHTML = arr[a]
    h.style.color = 'white'
    h.style.position = 'absolute'
    h.style.top = x+'%'
    h.style.left = y+'%'
    h.style.rotate = r+'deg'
    h.style.scale = s
    main.appendChild(h)

})