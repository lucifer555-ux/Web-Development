const cart = ["jeans", "shirt", "ball"];

API.createOrder(cart, function(){
    API.proceedToPayment(cart, function(){
        API.createOrderSummary(cart, function(){
            API.showOrderSummary(cart, function(){
                API.updatewallet(cart, function(){
                })
            })
        })
    })
})