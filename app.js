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
// Get the image element
let img = document.querySelector("img");

function tos() {
    let head = "head.jpg";
    let tail = "tail.jpg";
    let count = Math.ceil(Math.random() * 2);
    img.style.filter = "blur(10px)"; 
    img.style.opacity = 0;
    setTimeout(() => {
        if (count === 1) {
            img.src = head;
        } else {
            img.src = tail;
        }
        img.onload = () => {
            img.style.filter = "blur(0px)"; 
            img.style.opacity = 1; 
        };
    }, 500); 
}



//math .abs
