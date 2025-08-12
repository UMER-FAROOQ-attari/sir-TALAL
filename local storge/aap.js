let users = [];
// let btn = document.getElementById("btn");
// let btns = document.getElementById("btns");
// btns.addEventListener("click",show)
// btn. addEventListener("click",submit())

function submit() {
  let nme = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let user_name = nme.value;
  let user_email = email.value;
  let user_password = password.value;
  localStorage.setItem("Name", user_name,)
  localStorage.setItem("Email", user_email,)
  localStorage.setItem("Password", user_password,)

}
let hel = document.getElementById("hel");
let nm = localStorage.getItem("Name")
hel.innerHTML = `hello${nm}`