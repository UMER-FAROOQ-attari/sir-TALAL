// let i = 0;
// while(i<5){
//     console.log(`Number  ${i}`)
//     i++
// }
// do{
// password = +prompt("Enter Your password ....")
// }
// while(password !== 1234)
// console.log("yess YOUR are L0G1N");
// let password;
// while (password !== "1234") {
//     password = prompt("Enter Your password ....")
// }
// console.log("yes")
let guess = Math.ceil(Math.random() * 3) //7
let userGuess;
do {
    userGuess = +prompt("enter your number?")
    if (userGuess === guess) {
        alert("you Guessed right!")
        console.log(`your number is ${guess}`)
    }
    else if(userGuess < guess) {
        alert("t00 low");
    } else {
        alert("t00 high  ")
    }
}
while (userGuess !== guess);
