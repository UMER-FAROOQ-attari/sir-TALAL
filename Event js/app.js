// let h1 = document.getElementById("heading");
// function func (){
//     body.style.backgroundColor = "yellow"
// }
// h1.addEventListener('keydown', function(event) {
//   console.log('کیا بٹن دبایا گیا؟', event.key);
// });
// // `mousedown` triggers when the mouse button is pressed down.
// // `click` triggers when the mouse button is pressed and released.
// // &&
// // mousemove: The event will fire every time the mouse moves.
// // // mouseover: The event will fire when the mouse first moves over the element.
//  document.addEventListener('keydown', function(event) {
//     console.log('آپ نے ' + event.key + ' دبایا');
//   });

// let form = document.getElementById("for")
// let input = document.getElementById("inp");
// function func (event){
//     console.log("hogya")
//    event.preventDefault();
//    input.value =""
// }
// form.addEventListener("submit", func)
// let select = document.getElementById("colorslect");
// let reslut = document.getElementById("slected");
// select.addEventListener("change",function ( ){
//     reslut.textContent = "Select Color" + select.value; 
// })

let cntryname = document.getElementById("Cntryname");
let code = document.getElementById("code");
function filcntrycode(){
    if(cntryname.value.toLowerCase() == "pakistan"){
   code.value = "+92-"
   cntryname.value = cntryname.value.charAt(0).toUpperCase() + cntryname.value.slice(1).toLowerCase()
    }
     if(cntryname.value.toLowerCase() == "india"){
   code.value = "+91-"
   cntryname.value = cntryname.value.charAt(0).toUpperCase() + cntryname.value.slice(1).toLowerCase()
    }
    if(cntryname.value.toLowerCase() == "canada"){
   code.value = "+1-"
   cntryname.value = cntryname.value.charAt(0).toUpperCase() + cntryname.value.slice(1).toLowerCase()
    }
    if(cntryname.value.toLowerCase() == "australia"){
   code.value = "+61-"
   cntryname.value = cntryname.value.charAt(0).toUpperCase() + cntryname.value.slice(1).toLowerCase()
    }
}
window.addEventListener("load",function(){
  this.alert("ue lo")
})