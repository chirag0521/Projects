// // CallBacks example 1
// function placeOrder(callback){
//     console.log("Your payment is in progress...");
//     setTimeout(()=>{
//         console.log("Payment done, Order placed");
//         callback();
//     },3000)
// };

// function preparingOrder(callback){
//     console.log("Your order is being prepared");
//     setTimeout(()=>{
//         console.log("Your order is prepared")
//         callback();
//     },3000)
// }

// function pickupOrder(callback){
//     console.log("the delivery boy is ready to pickup");
//     setTimeout(()=>{
//         console.log("Order picked up by delivery boy");
//         callback();
//     },3000)
// }

// function deliverOrder(){
//     console.log("Delivery boy is on his way");
//     setTimeout(()=>{
//         console.log("order delivered successfully");
//     },3000)
// }

// // placeOrder(preparingOrder); ==> this is one style of calling function and one more way is
//                         //         using callbacks style
// placeOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             deliverOrder();
//         });
//     });
// })


//  Example 1 JS cohort 2

// function afterDelay(timeinMS,callback){
//     setTimeout(()=>{
//         callback();
//     },timeinMS)
// }
// // Another style of call back
//     // setTimeout(function(){
//     //     callback();
//     // },time)

// afterDelay(3000, function(){
//     console.log("Callback executed");

// })


// ====Example 2 =====//

// function getUser(username, callback) {
//     console.log("Getting user name");

//     setTimeout(() => {
//         callback({ id: 1, username: "alex" });
//     }, 1000);
// }

// function getUserPost(id, callback) {
//     console.log("Getting user post");

//     setTimeout(() => {
//         callback(['hello', 'good day', 'hey']);
//     }, 2000);
// }

// getUser("alex", function (data) {
//     getUserPost(data.id, function (allposts) {
//         console.log(data.username, allposts);

//     });
// });

// ==== Example 3 ======//

// function instagramSeDataLaao(username , cb){
//     setTimeout(()=>{
//         cb({uniquenum:224, username: "alex"});
//     },3000);
// }

// function metaPeJaao(uniquenum , cb){
//     setTimeout(()=>{
//         cb(["img1","img2"]);
//     },4000)
// }

// instagramSeDataLaao("alex", function(data){
//     metaPeJaao(data.uniquenum, function(image){ //yeh image h woh data joh 4 second baad mila h 
//              console.log(image);
//                                                 // metaPeJaao wale function ko
//     })
// })

// ==== Example 4======

// function loginUser(username,cb){
//     console.log("logging in user");
    
//     setTimeout(()=>{
//         cb({id:12,username:"alex"});
//     },1000);
// }
// function fetchPermissions(id,cb){
//     console.log("Fetching permissions");
    
//     setTimeout(() => {
//         console.log("loading dashboard");
        
//         cb(["read","write","delete"])
//     }, 2000);
// }
// function loadDashboard(permissions,cb){
//     setTimeout(() => {
//         cb();
//     }, 2000);
// }

// loginUser("alex",function(userdata){
//     fetchPermissions(userdata.id,function(permissions){
//         loadDashboard(permissions,function(){
//             console.log("Dashboard loaded");
            
//         })
//     })
// })

// Hakirat cohort
// example 1

// function sum(num1 , num2 , cb){
//     let result = num1+num2;
//     cb(result);
// }
// function displayResult(data){
//     console.log("The result of data is " + data);
    
// }

// // sum(1,2,function(result){
// //     displayResult(result);
// // });
// sum(1,2,displayResult);

// Example 2


function calculateArithmetic(a,b,cb){
    let ans = cb(a,b);
    return ans;
}

function sum(a,b){
    return a+b;
}
calculateArithmetic(1, 2,function(){
    
})