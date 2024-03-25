let student = {
    name : "Visaj",
    tech : "reactjs",
    laptop : {
        cpu : 17,
        ram : 8,
        brand : 'hp'
    }
}

 for (let key in student)
 {
     console.log(key + "-",student[key]); // to print all the properties 
 }

for(let key in student.laptop)
{
    console.log(key, student.laptop[key]); // to print only laptop
}


let nums = [50,90,100,200];

for(let i of nums)
{
    console.log(i);

}


