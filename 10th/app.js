// greet()
// console.log("1");
// function greet(){
//     setTimeout(function(){
//         console.log("welcom")
//     },3000)
// }
// greet()
// console.log("1");
// function signup(email,password,callBack){
//     setTimeout(function(){
//         if(email == "khadeemattar@gmail.com" && password == "12345678")
//         callBack()
            

//     },3000)
// }
// signup("khadeemattar@gmail.com", "12345678",redtotimeline )
// function redtotimeline(){
//     window.location.href = "https://www.google.com"
// }


// function signup(email, password, callBack) {
//     setTimeout(() => {
//         if email = "khadeemattar@gmail.com", "12345678",redtotimeline
//     }, 3000);
    
// }
let firstAsync = new Promise(function(resolve , reject){
    setTimeout(function(){
 let random = Math.ceil(Math.random()*100);
 if (random % 2 === 0){
    resolve(random)
 }
 else{
   reject("this is an odd number")
 }
resolve();
    },1000)
})
firstAsync
    .then(function(success){
        console.log(success)
    })
    .catch(function(error){
console.error(error)
    }
)