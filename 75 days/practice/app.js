let rand = Math.round(Math.random()* 5 +1);
let boxes = document.querySelectorAll(".box");

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
