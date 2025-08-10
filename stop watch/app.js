let hours = document.getElementById("hours");
let mints = document.getElementById("mints");
let sec = document.getElementById("sec");
let second = 0;
function stpwatch (){
  second++;
  sec.innerHTML = second
}
setInterval(stpwatch , 1000)
