let lottery_num = 4560
 let randum_number = Math.floor(Math.random()*9999)
 console.log("This is Luky Number" + randum_number)
if(lottery_num == randum_number){
    console.log("Congratulation ! You won a Tour to Karachi")
}else{
    console.log("Sorry ! you Try again")

}
// parseFloat & parseInt & number & isNaN
let number = "23.55kg"
console.log(parseFloat(number))

number = "23.55kg"
console.log("<br>"+parseInt(number))
  
number = "23.55kg"
console.log("<br>"+Number(number))



let nmb = "499.99RS"
document.write("<br>"+"<br>"+nmb)
document.write("<br>"+"Rs"+parseFloat(nmb))