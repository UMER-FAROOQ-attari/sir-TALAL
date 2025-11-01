let searchbar = document.getElementById("searchbar");
let li = document.querySelectorAll("li")
let ul  = document.querySelector("ul")
function answer(){
        let serachWorld = searchbar.value.toLowerCase()
            ul.innerHTML = ""

    li.forEach(city=>{  
        let citye = city.innerHTML.toLowerCase()
        if(citye.includes(serachWorld)){
            ul.innerHTML += `<li>${citye}</li>`
        }
    })
}