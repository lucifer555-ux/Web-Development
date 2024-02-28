// String concatenation 

var message = "Hello";
var name = "Visaj";
alert(message + " there, " + name);


const str1 = 'Hello';       // concat function
const str2 = str1.concat(' ', 'World');
console.log(str2);

// Tweet counter challenge

let person = prompt("Please enter your name !!");
let totalval = 280 - person.length; 
alert("You have entered " + person.length + " characters " + totalval + " characters left" );

// Slicing operation 

var name = "Shah Rukh Khan";
let val = name.slice(0,9)
console.log(val);

// Challenge

let person = prompt("Write your tweet!!");
let counter = person.length; 

if (counter > 280){
  alert(person.slice(0,179));
}

// Challenge 

let name  = prompt("What's your name ? ");
let f_letter = name.slice(0,1);
alert("Hello " + f_letter.toUpperCase() + name.slice(1,name.length));
