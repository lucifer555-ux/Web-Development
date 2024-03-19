// Rest and Spread Operator 

console.log("Rest Operator : ");
function addNumbers(a,b,c,...other)
{
console.log(other)
return a + b + c;
}


const res =  addNumbers(10,20,30,40,50,60);

console.log(res);

console.log("Spread Operator : ");

var names = ["Visaj", "Pathaan", "Dunki", "Jawan"];

function getNames(name1, name2 , name3, name4 )
{
        console.log(name1, name2, name3, name4);
}

getNames(names[0], names [1] , names [2], names [3])
getNames(...names)
getNames(names)

const details = [
    { name : "Jawan", Profession : "Software Engineer" },
    { name : "Pathaan", Profession : "FullStack Developer" }
];