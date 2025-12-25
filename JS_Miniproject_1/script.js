const apiKey = "9f45ca2a8a5bc2274188e50e46f21327";

async function checkWeather(){
    let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);
    let real = await Response.json
}