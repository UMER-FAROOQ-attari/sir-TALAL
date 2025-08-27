let imgo = document.getElementById("imgo");
let btn = document.getElementById("btn");
function btnon(){
let j =  "j.png";
let q =  "q.jpg";
let k =  "k.jpg";
let arr = [j,q,k];
let show = Math.floor(Math.random()*3)
imgo.src = arr[show]
console.log(show);
if(show == 2){
    console.log("you win")
}
}