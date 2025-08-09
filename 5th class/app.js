// let rightnow = new Date();
// let aguest_14 = new Date("14 August , 2025");
// let today = rightnow.getTime()
// let augest = aguest_14.getTime();
// let days = ( augest -  today ) / 1000 / 60 / 60 /24;
// document.write(Math.ceil(days) )
function dt (){
let hours = document.getElementById("hours")
let mints = document.getElementById("mints")
let sec = document.getElementById("sec")
let date = new Date();
let h = date.getHours();
let m = date.getMinutes();
let s = date.getSeconds();   
hours.innerHTML  =  h;
mints.innerHTML = m;
sec.innerHTML = s;    
if(h>12){
hours.innerHTML  = (h-12);
if(h>10){
hours.innerHTML  = "0"+(h-12);
}
}
if(m<10){
mints.innerHTML  = "0"+m;
}
if(s<10){
sec.innerHTML  = "0"+s;
}}

setInterval(dt , 1000)


let i = 0;
function print_name(){
    if(i>=10){
        clearInterval(myint)
    }
    console.log(i++)
}
let myint = setInterval(print_name, 100)
localStorage.setItem("studentName", "UMER")
let studentName =  document.getElementById("Student");
let Name =  document.getElementById("name");
function print (){
    localStorage.setItem("studentName", studentName.value)
    Name.innerHTML= localStorage.getItem("studentName")
}
studentName.innerHTML = localStorage.getItem("studentName")