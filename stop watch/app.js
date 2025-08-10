let hours = document.getElementById("hours");
let mints = document.getElementById("mints");
let sec = document.getElementById("sec");
function stpwatch (){
  let seconed = 0;
    if(seconed <= 60 ){
        seconed++
        sec.innerHTML = seconed;
    } 
}
setInterval(stpwatch , 1000)
