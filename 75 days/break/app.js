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
let all = document.getElementById("generatedCV")
let perivouse = document.getElementById("cv")
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
function submit() {
  let inputs = document.querySelectorAll(".skillInput");
  let skillsList = "";

  inputs.forEach(skill => {
    if (skill.value.trim() !== "") {
      skillsList += `<li>${skill.value}</li>`;
    }
  });

  perivouse.innerHTML = "";
  all.innerHTML = `
<div style="width:900px; background:#fff; border-radius:12px; overflow:hidden; display:flex; box-shadow:0 0 25px rgba(255,255,255,0.25);">

  <!-- LEFT -->
  <div style="width:35%; background:#0b1e39; color:white; text-align:center; padding:25px;">
    <div>
      <img src="profile.jpg" alt="profile" style="width:140px; height:140px; border-radius:50%; border:4px solid #fff; object-fit:cover;">
    </div>

    <h2 style="margin-top:15px; font-size:24px;">${userName.value.toUpperCase()}</h2>

    <p><b>Father:</b> ${fatherName.value.toUpperCase()}</p>
    <p><b>Phone:</b> ${cell.value}</p>
    <p><b>CNIC:</b> ${cnic.value}</p>
    <p><b>Country:</b> ${cuntry.value}</p>
    <p><b>Status:</b> ${Marri.value}</p>
  </div>

  <!-- RIGHT -->
  <div style="width:65%; padding:30px; color:#333;">

    <div style="margin-bottom:30px;">
      <h2 style="color:#0b1e39; border-bottom:2px solid #ffba08; padding-bottom:5px;">Qualification</h2>
      <h4>${lastQuali.value}</h4>
      <p><b>University:</b> ${universty.value}</p>
      <p><b>Year:</b> ${qualiYear.value}</p>
    </div>

    <div style="margin-bottom:30px;">
      <h2 style="color:#0b1e39; border-bottom:2px solid #ffba08; padding-bottom:5px;">Experience</h2>
      <h4>${years.value} Years</h4>
      <p><b>Company:</b> ${compeny.value}</p>
    </div>

    <div style="margin-bottom:30px;">
      <h2 style="color:#0b1e39; border-bottom:2px solid #ffba08; padding-bottom:5px;">Skills</h2>
      <ul style="margin-top:10px; padding-left:15px;">${skillsList}</ul>
    </div>

    <div>
      <h2 style="color:#0b1e39; border-bottom:2px solid #ffba08; padding-bottom:5px;">About Me</h2>
      <p style="margin-top:10px;">${about.value}</p>
    </div>

  </div>

</div>
`;
}
