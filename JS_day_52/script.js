addEventListener('mousemove', function(elem){
    document.body.style.setProperty("--x",elem.clientX + 'px')
    document.body.style.setProperty("--y",elem.clientY + 'px')
})

// var effect = document.querySelector('#effect')

// document.body.addEventListener('mousemove', function(elem){
// console.log(elem)
// effect.style.background = `radial-gradient( 200px at ${elem.clientX}px ${elem.clientY}px, rgba(197, 197, 197, 0) , rgba(12, 12, 12, 0.986))`

// })