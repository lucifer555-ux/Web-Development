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