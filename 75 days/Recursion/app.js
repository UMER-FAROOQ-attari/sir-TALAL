// function chal(){
// console.log("i am umer")
//     chal()
    
// }
// chal()

function coding(num){
if(num === 0){
    console.log("codeing is complete ✔")
}
else{
    console.log("codeing is contiue 📄📄");
    coding(num-1)
    
}
}
coding(5)
function factorial(n){
    if(n === 1){
        return 1
    }
    let fact = n * factorial(n-1)
    return fact
}
console.log(factorial(1))

