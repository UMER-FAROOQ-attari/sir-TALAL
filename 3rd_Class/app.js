// let User_amount = document.getElementById("amount");
// let masg = document.getElementById("masg");
// let bit_amount ;
// let bit_number
// function playgame(){
//     bit_amount = +("pleas ennter your bit Ammount");
//     bit_number = +("plea enter Your bit Number")
//     let makebit = Math.ceil(Math.random()*10);
//     let matcted = matcted(makebit,bit_number)
//     show_masg(matcted,bit_amount)
// }


// function matcted(makebit , bit_number,){
//     let T_matched = false;
//     if(makebit == bit_number){
//         T_matched =true;
//     }
//     return (T_matched)
// }
// function show_masg(matcted,bit_amount){
//     if(matcted){
//         User_amount.innerHTML = Number(User_amount.innerHTML) +
//     }

// }
let users = []
function playgame(){
let user_email = document.getElementById("email")
let user_password = document.getElementById("password")
  let eml = user_email.value
    let pas = user_password.value
    
  let user ={
    email : eml,
    password :pas
}
users.push(user)

}
function login(){
  console.log(users)   
}