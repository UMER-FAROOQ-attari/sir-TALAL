let city = document.getElementById("city")
let province = document.getElementById("province")
function applyStyle(){
          city.style.backgroundColor = "black";
            city.style.color = "white";
            city.style.borderColor = "white";  
            city.style.fontWeight = "bold";
}
function getpro(){
     let text = city.value;
    let firstLetter  = text.charAt(0).toUpperCase()
    let restLetter = text.slice(1).toLowerCase()
    city.value = firstLetter + restLetter;
    if(city.value == "Lahore"){
        province.value = "Panjab"
    }if(city.value == "Karachi"){
        province.value = "Sindh"
    }if(city.value == "Peshawar"){
        province.value = "Kpk"
    }if(city.value == "Quetta"){
        province.value = "Balochistan"
    }if(city.value == "Islamabad"){
        province.value = "Pakistan"
    }
    }