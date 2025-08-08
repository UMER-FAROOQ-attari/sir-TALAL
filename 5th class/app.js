// let rightnow = new Date();
// let aguest_14 = new Date("14 August , 2025");
// let today = rightnow.getTime()
// let augest = aguest_14.getTime();
// let days = ( augest -  today ) / 1000 / 60 / 60 /24;
// document.write(Math.ceil(days) )
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
    