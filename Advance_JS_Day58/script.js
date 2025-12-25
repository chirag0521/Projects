//----- Day 58 Advance JS------

//-----1------

// class User{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//         // this.logIn = function(){
//         //     console.log("Logged in"); as this function is common for all so we use shared memory thats why outside constructor
//         // };
//     }
//     loggedIn(){
//         console.log("logged in");
//     }
// }

// let user1 = new User("alex","alex.gmail.com")
// let user2 = new User("alex2","alex3.gmail.com")
// let user3 = new User("alex3","alex3.gmail.com")
// let user4 = new User("alex4","alex4.gmail.com")
// let user5 = new User("alex5","alex5.gmail.com")


//-----2----

// let product={
//     name:"Cap",
//     price: 1000,
//     discountedPrice: function(){
//         return this.price - 200; // this.price is same as product.price kyuki agar oject ke under function mein humne [this] likha 
//                                  // toh woh main object bann jata h or yaha main object h product h 
//     },
// };

// console.log(product.discountedPrice());

// ------3-------


// class Car{
//     constructor(brand,speed){
//         this.brand = brand;
//         this.speed = speed;
//     }
//     drive(){
//         console.log(this.brand , this.speed);
//         // return this.brand + " - " + this.speed   || same meaning as of console
//     }
// };
// let car1 = new Car("Mahindra" , 200);
// let car2 = new Car("Tata" , 220);
// car1.drive();
// car2.drive();

// ------- 4 --------


// class Student{
//     constructor(name, rollnumber){
//         this.name = name;
//         this.rollnumber = rollnumber;
//     }
//     introduce(){
//         console.log(this.name +" " + this.rollnumber);
        
//     };
// }
//  let st1 = new Student("alex", 24)
//  st1.introduce();


//-------5--------

// let obj = {
//     sayName: function(){
//         console.log(this);
        
//     },
//     sayArrowName: ()=>{
//         console.log(this);
        
//     },
// };

// obj.sayName();
// obj.sayArrowName();


//-------6-------- CALL , Apply , Bind






