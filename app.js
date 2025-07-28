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

// Function to handle the TOSS logic
function tos() {
    // Variables for the heads and tails images
    let head = "head.jpg";
    let tail = "tail.jpg";

    // Randomly decide if it's head (1) or tail (2)
    let count = Math.ceil(Math.random() * 2);

    // First, apply blur and opacity 0 (for transition effect)
    img.style.filter = "blur(10px)"; // Apply the blur effect
    img.style.opacity = 0;

    // Delay the change of the image and clearing the blur
    setTimeout(() => {
        // Update the image source based on the random result
        if (count === 1) {
            img.src = head;
        } else {
            img.src = tail;
        }

        // Apply the clear-up effect after changing the image
        img.onload = () => {
            img.style.filter = "blur(0px)"; // Clear the blur
            img.style.opacity = 1; // Fade in the image
        };
    }, 500); // Wait for half a second before changing the image
}



//math .abs
