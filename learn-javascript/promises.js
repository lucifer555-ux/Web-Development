const Promise1 =  new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
    }, 1000)
    resolve()
})

Promise1.then(function(){
    console.log("Promise consumed  ");
})

new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async Task 2 ");
        resolve()
    }, 1000)

}).then(function(){
        console.log("Async Task2 Resolved  ");
})


// 25 March 2024 


const cart = ["shoes", "jeans", "tshirts"];

const Promise = createOrder(cart)

Promise.then(function (orderId)
{
    proceedToPayment(orderId);
})


const API = "https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D";

const testapi = fetch(API);

console.log(testapi);


// Promise Chaining 

createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(orderId))
.then((paymentInfo) => updateWalletBalance(orderId));

