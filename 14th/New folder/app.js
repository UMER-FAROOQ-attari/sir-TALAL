let quote = document.getElementById("quote")
let time = document.getElementById("time")
const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "It is during our darkest moments that we must focus to see the light. - Aristotle Onassis",
  "Strive not to be a success, but rather to be of value. - Albert Einstein"
];
function qoutegenerate(){
    ran = Math.floor(Math.random() * 4 +1)
    console.log(ran)
  quote.innerHTML = quotes[ran] 
function times(){

    let tim = new Date();
    h = tim.getHours()
    m = tim.getMinutes()
    s = tim.getSeconds()
    time.innerHTML = `${h}:${m}:${s}`

  } 
setInterval(times,1000);
}
