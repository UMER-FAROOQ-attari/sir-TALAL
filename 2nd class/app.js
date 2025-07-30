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
console.log("<br>"+"<br>"+nmb)
console.log("<br>"+"Rs"+parseFloat(nmb))


// nmb = "80.6574kg"
// document.write("<br>"+"<br>"+nmb)
// document.write("<br>"+parseInt(nmb)+" KG")
  

let age = prompt("pleas Enter Your age");
age = parseInt(age);
if(age >= 18 ){
    document.write("You are eligible to vote")
}
if(age <= 18 ){
    document.write("You are Not  eligible to vote")
}
age = isNaN(age)
if(age == true){
    document.write("Pleas Enter Vaild numver")
}