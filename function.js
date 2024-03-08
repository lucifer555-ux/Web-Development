 function myfunction()
 {
     console.log("Hello Visaj");
 }

 myfunction();


// Multiplication

 function mul(a,b){
     console.log(a + b);
 }
mul(231,6);

const Addition = (a, b) => {
    return a + b;
  };

Addition(9,10);

let greet = function () {

  console.log("Hello world");
  return 1;
  
}


console.log(greet());


// let mult = (a,b) => {

//   return a * b;
// }

let mult = (a,b) => (a * b);



console.log("Arrow function " + mult(55,10));

function countVowels(str){
  let count = 0;
  for(const char of str)
  {
    char === "a" || char === "e" || char === "i" || char === "o" || char === "u"
    {
      count++;
    }
  }
  console.log(count); 
}

let array = [10,20,30];

array.forEach((n)=>{
  console.log(n * 20);
})
console.log(array);




const nums = [2,4,8,10];
console.log("Square ");

nums.forEach((n)=>{
  console.log(n * n);
})

const a1 = [100,200,300,400,500];

function double (x)
{
  return x * 2;
}

const output = a1.map(double);

console.log("Double : " + output);


function triple (x)
{
  return x * 3;
}

const op = a1.map(triple);

console.log("Triple : " + op);

function binary (x)
{
  return x.toString(2);
}

const o = a1.map(binary);

console.log("Binary : " + o);

const radius = [5,2,4,9];

const area = function(radius)
{
    return Math.PI * radius * radius;
}



