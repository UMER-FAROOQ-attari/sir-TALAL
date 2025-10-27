let userName = document.getElementById("userName")
let fatherName = document.getElementById("fatherName")
let cnic = document.getElementById("cnic")
let cell = document.getElementById("cell")
let dob = document.getElementById("dob")
let cuntry = document.getElementById("cuntry")
let Marri = document.getElementById("Marri")
let years = document.getElementById("years")
let compeny = document.getElementById("compeny")
let lastQuali = document.getElementById("lastQuali")
let universty = document.getElementById("universty")
let qualiYear = document.getElementById("qualiYear")
let about = document.getElementById("about")
let skill1 = document.getElementById("skill1")
let counter = 0;
function add(){
  let addskill = document.getElementById("addskill");
  let input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter your skill";
  input.id = "skillInput" + counter;
  input.className = "skillInput";
  counter++;

  addskill.appendChild(input);
}

function submit(){
  let inputs = document.querySelectorAll(".skillInput");
  inputs.forEach(input => {
    console.log(input.value);
  });
}