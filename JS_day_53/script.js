const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

const p = document.querySelector('p');
const text = p.innerText;

// let reveal = 0;
// let interval = null;   // To avoid multiple intervals


// function randomText() {
//     const str = text.split("").map((char, index) => {
//         if (index < reveal) {
//             return char;
//         }
//         return characters[Math.floor(Math.random() * characters.length)];
//     }).join("");

//     p.innerText = str;
//     reveal += 0.5;

//     if (reveal >= text.length) {
//         clearInterval(interval);
//     }
// }

// p.addEventListener('mouseenter', () => {
//     reveal = 0;

//     // Avoid starting interval multiple times
//     clearInterval(interval);

//     interval = setInterval(randomText, 50);
// });


let iteration = 0

function randomText(){
    const str = text.split("").map((char , index)=>{
        if(index<iteration){
            return char
        }
        return characters.split("")[Math.floor(Math.random()*52)]
    }).join("")
    p.innerText = str

    iteration += 0.5
}

setInterval(randomText , 30)
