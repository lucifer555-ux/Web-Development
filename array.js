var marks = [85,97,44,37.76,60];
let sum = 0;

for(let i of marks)
{
  sum += i;
 
}
let avg = sum / marks.length ;
console.log("Average marks = " + avg);


let arr = [10,30,40,60,70];

arr.push(20);
console.log(arr);

arr.pop();
console.log(arr)
