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
let all = document.getElementById("cv")
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
all.innerHTML = `
<div style="width:900px; background:#fff; border-radius:12px; overflow:hidden; display:flex; box-shadow:0 0 25px rgba(255,255,255,0.25);">

  <!-- LEFT -->
  <div style="width:35%; background:#0b1e39; color:white; text-align:center; padding:25px;">
    <div>
      <img src="profile.jpg" alt="profile" style="width:140px; height:140px; border-radius:50%; border:4px solid #fff; object-fit:cover;">
    </div>

    <h2 id="cvName" style="margin-top:15px; font-size:24px;">User Name</h2>
    <p id="cvRole" style="margin-bottom:25px; font-size:14px;">—</p>

    <h3 style="border-bottom:2px solid #ffba08; padding-bottom:5px; margin-top:20px;">Contact</h3>

    <p><b>Father:</b> <span id="cvFather"></span></p>
    <p><b>Phone:</b> <span id="cvCell"></span></p>
    <p><b>CNIC:</b> <span id="cvCnic"></span></p>
    <p><b>Country:</b> <span id="cvCountry"></span></p>
    <p><b>Status:</b> <span id="cvMarri"></span></p>
  </div>

  <!-- RIGHT -->
  <div style="width:65%; padding:30px; color:#333;">

    <div style="margin-bottom:30px;">
      <h2 style="color:#0b1e39; border-bottom:2px solid #ffba08; padding-bottom:5px;">Qualification</h2>
      <h4 id="cvQuali" style="margin-top:10px;"></h4>
      <p><b>University:</b> <span id="cvUni"></span></p>
      <p><b>Year:</b> <span id="cvQualiYear"></span></p>
    </div>

    <div style="margin-bottom:30px;">
      <h2 style="color:#0b1e39; border-bottom:2px solid #ffba08; padding-bottom:5px;">Experience</h2>
      <h4><span id="cvYears"></span> Years</h4>
      <p><b>Company:</b> <span id="cvCom"></span></p>
    </div>

    <div style="margin-bottom:30px;">
      <h2 style="color:#0b1e39; border-bottom:2px solid #ffba08; padding-bottom:5px;">Skills</h2>
      <ul id="cvSkills" style="margin-top:10px; padding-left:15px;"></ul>
    </div>

    <div>
      <h2 style="color:#0b1e39; border-bottom:2px solid #ffba08; padding-bottom:5px;">About Me</h2>
      <p id="cvAbout" style="margin-top:10px;"></p>
    </div>

  </div>

</div>

`
  


}