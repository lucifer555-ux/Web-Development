// function x()
// {
//    var i = 1;
//    setTimeout(function () {
//     console.log(i);
//    }, 1000);
//    console.log("Namaste Javascript");
// }
// x();

function x()
{
for(let i = 1; i <5; i++)
   setTimeout(function () {
    console.log(i);
   }, i * 500);
   console.log("Namaste Javascript");
}
x();

function x()
{
for(var i = 1; i <5; i++){
function close(){
   setTimeout(function () {
    console.log(x);                //USING CLOSURE
   }, x * 500);
   close(i);
}
}
   console.log("Namaste Javascript");
}
x();