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


// const cart = ["shoes", "jeans", "tshirts"];

// const Promise = createOrder(cart)

// promise.then(function (orderId)
// {

//     console.log(orderId);
//     // proceedToPayment(orderId);
// })


const API = "https://moviesdatabase.p.rapidapi.com/titles/series/%7BseriesId%7D";

const testapi = fetch(API);

console.log(testapi);


// Promise Chaining 

createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => showOrderSummary(orderId))
.then((paymentInfo) => updateWalletBalance(orderId));


const cart = ["shoes", "jeans", "tshirts"];

const Promise = createOrder(cart)

promise.then(function (orderId)
{

    console.log(orderId);
})

.catch( function() {
console.log(err.message);
});

function ValidateCart(){
return true;
}



function createOrder(cart){
const pr = new Promise(function (resolve, reject){

    if(!ValidateCart (cart))
    {
        const err = new Error ("Cart is not valid ");
        reject(err);
    }

    const orderId = "12345";
    if(orderId)
    {
        setTimeout(function(){
        resolve(orderId);
        }, 5000);
    }

});

return pr;
}