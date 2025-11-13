let rand = Math.round(Math.random()* 5 +1);
let boxes = document.querySelectorAll(".box");
let all = document.getElementById("all");
setTimeout(() => {
     all.innerHTML = "<h1>game's Start in 5sec</h1>"
},10);
setTimeout(() => {
     all.innerHTML = "<h1>game's Start in 4sec</h1>"
},1000);
setTimeout(() => {
     all.innerHTML = "<h1>game's Start in 3sec</h1>"
},2000);
setTimeout(() => {
     all.innerHTML = "<h1>game's Start in 2sec</h1>"
},3000);
setTimeout(() => {
     all.innerHTML = "<h1>game's Start in 1sec</h1>"
},4000);
setTimeout(() => {
     all.innerHTML = "<h1>game's Start in 1sec</h1>"
},4000);
setTimeout(() => {
     all.innerHTML = `<h2>نمبر کس ڈے کے پیچھے ہے ۔ اس کو دبائیں <br>(لازمی)</h2>
        <div class="boxs">
            <div class="box1 box">1</div>
            <div class="box2 box">2</div>
            <div class="box3 box">3</div>
            <div class="box4 box">4</div>
            <div class="box5 box">5</div>
            <div class="box6 box">6</div>
        </div>
 `
},5000);
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
       if(box.innerHTML ==  rand){
        console.log("You are win");
       }
       else{
        console.log("Pleas try agin")
       }
       console.log("i am "+ box.innerHTML)
    })
})
let band = Math.round(Math.random()* 5 +1);
