let capital = document.getElementById("capital-city");
let  provice = document.getElementById("provice")
function city(){
    capital.style.backgroundColor = "black"
    capital.style.color = "yellow"
    capital.style.fontFamily = "fantasy"
}
function capitalCityleave(){

    capital.style.backgroundColor = "yellow"
    capital.style.color = "black"
    capital.style.fontFamily = "fantasy"
    let capitalEl  = capital.value
    if(capitalEl.toLowerCase() === "lahore"){
        provice.value = "Punjab"
    }
if(capitalEl.toLowerCase() === "karachi"){
        provice.value = "Sindh"
    }if(capitalEl.toLowerCase() === "quetta"){
        provice.value = "Balochistan"
    }if(capitalEl.toLowerCase() === "peshawar"){
        provice.value = "Kp"
     }
   let firstletter = capitalEl.charAt(0).toUpperCase();
   let restChar = capitalEl.slice(1).toLowerCase();
   capital.value = firstletter + restChar
} 