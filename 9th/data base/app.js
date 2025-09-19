let email = document.getElementById("email")
let password = document.getElementById("password")

function registeration(){
    firebase.auth().createUserWithEmailAndPassword(email.value ,password.value)
 
}