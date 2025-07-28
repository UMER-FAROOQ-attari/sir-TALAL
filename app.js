// for(let i = 99; i>0;--i){
//     console.log("<br>"+ i + " bottles of beer on the wall, "+i+" bottles of beer."+"<br>" )
// }
// math dice
// let mt = (Math.random() *6) 
// mt = Math.ceil(mt)
// document.write(mt)
// point toss
// let heat = "HEAD"
// let rail = "TAIL"
// let count = Math.ceil(Math.random()*2)
let img = document.querySelector("img")
function tos (){
    let heat = "HEAD"
let rail = "TAIL"
let count = Math.ceil(Math.random()*2)
    
if(count == 1){
    
img.src  = "head.jpg"
}
if(count == 2){
    img.src  = "Tail.jpg"
}
console.log(count)
}



//math .abs
