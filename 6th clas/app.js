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

  } 