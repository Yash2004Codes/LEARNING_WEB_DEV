


let username;

document.getElementById("btn").onclick
= function()
{
    username =document.getElementById("input1").value;
    document.getElementById("myh1").textContent="welcome "+username;
}



let age;

document.getElementById("btn2").onclick
=function()
{
    age = document.getElementById("input2").value;
    document.getElementById("myh1.2").textContent
    = username + " is "+ age+" years old";  
}

let gender;


document.getElementById("btn3").onclick
=function()
{

    gender =document.getElementById("input3").value;
    document.getElementById("myh1.3").textContent
    =username + " is "+ gender;
}