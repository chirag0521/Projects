var arr = [
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtIl13vmF8v7BTOkrfzyNVPs7J0inE-lG-IQ&s'
    },
      {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        img:'https://images.financialexpressdigital.com/2025/03/IPL-2025-CSK-Full-Schedule-Venue-Fixtures-Squad-Date-Timings.png'
    },
      {
        team: 'RCB',
        primary: 'red',
        secondary: 'darkblue',
        img:'https://media.fortuneindia.com/fortune-india/2025-11-06/6incrk23/RCB.jpg?w=640&auto=format,compress&q=80'
    },
      {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        img:'https://www.kkr.in/static-assets/waf-images/e5/d0/f5/4-3/article-583-5f6c29bd925d7cd17ab0fbcd391f54db.jpg?v=110.09&w=600'
    },
      {
        team: 'SRH',
        primary: 'orange',
        secondary: 'orange',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b-11CQWe8dMKSGzx77QAGk6ZI3jJxC_-HQ&s'
    },
      {
        team: 'GT',
        primary: 'navyblue',
        secondary: 'silver',
        img:'https://images.indianexpress.com/2022/02/gujarat-titans.jpg'
    },
      {
        team: 'DC',
        primary: 'blue',
        secondary: 'red',
        img:'https://www.iplcricketmatch.com/wp-content/uploads/2024/01/DC-1024x576.jpg'
    },
      {
        team: 'LSG',
        primary: 'blue',
        secondary: 'orange',
        img:'https://www.iplcricketmatch.com/wp-content/uploads/2024/01/LSG-1024x576.jpg'
    },
      {
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'gold',
        img:'https://i.cdn.newsbytesapp.com/images/l55120230324091158.jpeg'
    },
      {
        team: 'RR',
        primary: 'pink',
        secondary: 'blue',
        img:'https://www.rajasthanroyals.com/static-assets/images/cssimages/static/rr-old.png?v=7.39'
    },
]

var btn =  document.querySelector('button')
var h = document.querySelector('h1')
var main = document.querySelector('main')

btn.addEventListener('click', function(){

    var win = arr[Math.floor(Math.random()*arr.length)]
    h.innerHTML = win.team
    main.style.backgroundImage = `url(${win.img})`
    h.style.backgroundColor = 'tranparent'
})