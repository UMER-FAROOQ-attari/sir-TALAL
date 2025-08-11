let hours = document.getElementById("hours");
let mints = document.getElementById("mints");
let sec = document.getElementById("sec");
let mint = 0;
let second = 0;
let hur = 0;
function stpwatch (){
  second++;
  sec.innerHTML = second
  mints.innerHTML = mint;
  hours.innerHTML = hur;
  if(second == 60){
    second = 0;
    mint++;
  }
    if(mint == 60 ){
        mint = 0;
        hur++;
    }
}
setInterval(stpwatch , 1000)
