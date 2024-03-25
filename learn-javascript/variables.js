function test() {
var a = 5;
console.log(a);
 a  =6;         // Global variable
console.log(a);

}
test();
a = 9;
console.log(a);

let name = "Visaj";

console.log("Printing outside :  " + name);

function printName() {
    console.log("Printing inside :  " + name); // Cannot access inside function
}

const num = 10;

console.log(num);

num = 20;

console.log(num); // TypeError: Assignment to constant variable.

