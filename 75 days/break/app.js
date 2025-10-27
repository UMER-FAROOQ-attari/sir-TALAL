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

  // ✅ Required Fields Validation
  if (
    userName.value.trim() === "" ||
    fatherName.value.trim() === "" ||
    dob.value === "" ||
    cnic.value.trim() === "" ||
    cell.value.trim() === "" ||
    lastQuali.value.trim() === "" ||
    universty.value.trim() === "" ||
    qualiYear.value.trim() === "" ||
    years.value.trim() === "" ||
    compeny.value.trim() === "" ||
    about.value.trim() === ""
  ) {
    alert("⚠️ براہ کرم تمام فیلڈز کو پر کریں۔");
    return;
  }

  // ✅ At least one skill check
  let inputs = document.querySelectorAll(".skillInput");
  let skillsList = "";
  let skillAdded = false;

  inputs.forEach(skill => {
    if (skill.value.trim() !== "") {
      skillAdded = true;
      skillsList += `<li>${skill.value}</li>`;
    }
  });

  if (!skillAdded) {
    alert("⚠️ کم از کم ایک Skill لازمی درج کریں۔");
    return;
  }

  // ✅ If all fields are valid → Generate CV
  perivouse.innerHTML = "";
  all.innerHTML = `
<div style="max-width:900px; background:#ffffff; margin:auto; border-radius:14px; overflow:hidden; box-shadow:0 0 40px rgba(0,0,0,0.20); display:flex;">

  <!-- LEFT SIDE -->
  <div style="width:32%; background:#0b1e39; color:white; padding:40px 25px; text-align:center;">
      
      <img src="profile.jpg" style="width:150px; height:150px; border-radius:50%; border:4px solid #ffba08; object-fit:cover; margin-bottom:15px;">

      <h2 style="margin:10px 0 5px; font-size:24px; letter-spacing:1px;">${userName.value.toUpperCase()}</h2>
      <p style="font-size:14px; opacity:0.8;">${fatherName.value.toUpperCase()}</p>

      <hr style="margin:25px auto; width:60%; border-color:#ffba08;">

      <h3 style="font-size:16px; color:#ffba08; margin-bottom:10px;">Contact</h3>
      <p style="font-size:14px; margin:6px 0;"><b>Phone:</b> ${cell.value}</p>
      <p style="font-size:14px; margin:6px 0;"><b>CNIC:</b> ${cnic.value}</p>
      <p style="font-size:14px; margin:6px 0;"><b>Country:</b> ${cuntry.value}</p>
      <p style="font-size:14px; margin:6px 0;"><b>Status:</b> ${Marri.value}</p>

      <hr style="margin:25px auto; width:60%; border-color:#ffba08;">

      <h3 style="font-size:16px; color:#ffba08; margin-bottom:10px;">Skills</h3>
      <ul style="text-align:left; line-height:23px; font-size:14px; padding-left:20px;">${skillsList}</ul>

  </div>

  <!-- RIGHT SIDE -->
  <div style="width:68%; padding:40px 35px; color:#333;">

      <h2 style="color:#0b1e39; border-left:4px solid #ffba08; padding-left:10px;">Qualification</h2>
      <p style="margin:10px 0;"><b>Degree:</b> ${lastQuali.value}</p>
      <p style="margin:3px 0;"><b>University:</b> ${universty.value}</p>
      <p style="margin:3px 0;"><b>Year:</b> ${qualiYear.value}</p>

      <br>

      <h2 style="color:#0b1e39; border-left:4px solid #ffba08; padding-left:10px;">Experience</h2>
      <p style="margin:10px 0;"><b>Years:</b> ${years.value}</p>
      <p style="margin:3px 0;"><b>Company:</b> ${compeny.value}</p>

      <br>

      <h2 style="color:#0b1e39; border-left:4px solid #ffba08; padding-left:10px;">About Me</h2>
      <p style="margin-top:12px; line-height:22px;">${about.value}</p>

  </div>

</div>
`
}
