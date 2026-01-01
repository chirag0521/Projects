let apiKey = "9f45ca2a8a5bc2274188e50e46f21327";

var searchBox = document.querySelector('.search input')
var searchBtn = document.querySelector('.search button')

async function checkWeather(city){
    // let city = 'Silchar'
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    var error = document.querySelector('.error p')
    var weather = document.querySelector('.weather')
    console.log(raw);
    
    if(raw.status == 404){
        error.style.display = "block"
        weather.style.display = "none"
    }
    else{
        let real = await raw.json()
    console.log(real)
    
    var temp = document.querySelector('.temp')
    var location = document.querySelector('.city')
    var humidityPercentage = document.querySelector('.humidity')
    var wind = document.querySelector('.wind')
    var weatherIcon = document.querySelector('.weather-icon')
    if(real.weather[0].main == "Clouds"){
        weatherIcon.src ="./clouds.png"
    }
    else if(real.weather[0].main == "Clear"){
        weatherIcon.src = "./clear.png"
    }
    else if(real.weather[0].main == "Rain"){
        weatherIcon.src = "./rain.png"
    }
    else if(real.weather[0].main == "Drizzle"){
        weatherIcon.src = "./drizzle.png"
    }
    else if(real.weather[0].main == "Mist"){
        weatherIcon.src = "./mist.png"
    }
    else if(real.weather[0].main == "Snow"){
        weatherIcon.src = "./snow.png"
    }
    weather.style.display = "block"

    error.style.display = "none"

    temp.innerHTML = `${Math.round(real.main.temp)}°C`
    location.innerHTML = `${real.name}`
    humidityPercentage.innerHTML = `${real.main.humidity}%`
    wind.innerHTML = `${real.wind.speed} km/hr`    
    }
    
}

searchBtn.addEventListener('click', function(){
    
    checkWeather(searchBox.value)

})
