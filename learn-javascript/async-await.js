async function getData(){
    return "visaj";
}

const dataPromise =  getData();

console.log(dataPromise); 

const p = new Promise((resolve,reject) => {

})

function getData(){
    p.then((res ) => console.log(res)) ;
}

getData();