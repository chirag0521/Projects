// =========== Question 1 ===========

// API example (OpenWeatherMap):

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

// ---


// Scenario 1 — Weather Dashboard with Error Handling

// Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

// ### Requirements

// - Make the API request asynchronously using `fetch` with `async/await`.
// - Handle API request failures (for example, invalid city name) using `try/catch`.
// - Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

// ### Suggested tasks

// - Build a simple UI to input a city name and display the result.
// - Show user-friendly error messages for network errors, invalid input, or API errors.
// - Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI.


// 2 ways to fetch one is using .then and one more is async and await

// Using .then

// function getWeather(city){
//     let apikey = `9f45ca2a8a5bc2274188e50e46f21327`;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)


//     .then((rawData) => rawData.json() )
//     .then((result) =>{
//         console.log(result);

//     });

// }

// getWeather("Hailakandi")

// ==== Using await and async ====

// jaha await lagega uss function mein async lagana zaruri h or yeh sab kahi toh store karana padega isiliye variable mein hum store karate h [.then mein hum direct functions mein variable leke kar lete h ]


// async function getWeather(city) {
//     try{
//             let apikey = `9f45ca2a8a5bc2274188e50e46f21327`
//     let rawdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);

//     console.log(rawdata)

//    let realdata = await rawdata.json();  //yaha pe await isiliye lagaya kyuki uparwale wale mein await lagaya h or agar yaha await nhi lagate toh yeh phele chal jata per data aane se phele yeh kese chala skte h 
//    console.log(realdata)
//     }
//     catch(err){
//         console.error(err.message);
//     }
// }

// getWeather("Silchar")




// async function getWeather(city){
// try{
//         let apikey = `9f45ca2a8a5bc2274188e50e46f21327`
//     let rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`);

//     if(!rawData.ok){  // yeh rawData json banne se phele ka h agar isme city ka naam nhi h toh rawData object mein ok ek element h or waha pe yeh false hoga
//         throw new Error("City now found");
//     }
//     let realData = await rawData.json();
//     console.log(realData)

//     if(realData.main.temp < 0){
//         console.warn(`Extreme cold...${realData.main.temp}°C`)
//     }
//     else if(realData.main.temp > 32){
//         console.warn(`Extreme hot ${realData.main.temp}°C`)
//     }
//     else{
//         console.log(`${realData.main.temp}°C`)
//     }

// }
// catch(err){
//     console.log(err.message)
// }

// }
// getWeather("Silchar")


// ## Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

// Simulate sending bulk emails to 5 users. Treat each email-sending operation as a `Promise` (simulate delays with `setTimeout`).

// ### Requirements

// - Send all emails in parallel using `Promise.all`.
// - If any email fails (e.g., due to a simulated random failure), catch the error and clearly indicate which specific email failed.
// - Use a `finally` block to display a message indicating that the "Email process is complete." (regardless of success/failure).

// ### Suggested tasks

// - Create an array of 5 mock email tasks that resolve or reject based on a random condition.
// - Call `Promise.all` and handle success and failure cases. Show a breakdown of which emails succeeded and which failed.
// - Ensure the `finally` block runs to update the UI or console indicating completion.

// ---

// Optional: combine both scenarios into a small dashboard that fetches weather and then attempts to send a report-email, demonstrating error handling across both network and simulated async operations.
// # Day 63 — Project Scenarios


const user = [
    "alex@gmail.com",
    "alexa@gmail.com",
    "chirag@gmail.com",
    "harsh@gmail.com",
];

function sendingMail(email) {
    return new Promise((resolve, reject) => {

        let time = Math.floor(Math.random() * 6);

        setTimeout(() => {

            let random = Math.floor(Math.random() * 11);
            if (random <= 5) resolve("Email sent successfully");
            else reject("Email not sent");

        }, time * 1000)
    });
}

async function sendEmail(userlists){
   let allresponses =  userlists.map(function(email){
       return sendingMail(email)
        .then(function(data){
            // console.log(data);
            return data;
        })
        .catch(function(err){
            // console.log(err);
            return err
        });
    });


   let ans =  await Promise.all(allresponses);

   ans.forEach(function(status,index){
    console.log(`${index} -  ${status}`)
   })
}

sendEmail(user)