const URL = "https://cat-fact.herokuapp.com";
const factPara =  document.querySelector("#fact");
const btn =  document.querySelector("#Btn");

const getFacts = async () => {
console.log("getting data.........")
let response =  await fetch(URL);
console.log(response);
let data = await response.json();
factPara.innerText = data[2].text;

};



btn.addEventListener("click" , getFacts);



