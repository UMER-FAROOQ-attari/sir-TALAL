let hours = document.getElementById("hours");
let mints = document.getElementById("mints");
let sec = document.getElementById("sec");
let mint = 0;
let second = 0;
function stpwatch (){
  second++;
  sec.innerHTML = second
  mints.innerHTML = mint;
  if(second == 60){
    second = 0;
    mint++;
  }
}
setInterval(stpwatch , 100)
