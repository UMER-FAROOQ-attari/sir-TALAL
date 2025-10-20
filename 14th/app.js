let food_list = document.getElementById("food-list")
let qty = document.getElementById("qty")
let bill = document.getElementById("bill")


function placeorder() {
    if(food_list.value == "PIZZA"){
      ans = qty.value * 1500;
      bill.innerHTML = `<br> item : ${food_list.value} <br> quantity : ${qty.value} <br> Total price:${ans}`
    }
        if(food_list.value == "BURGER"){
      ans = qty.value * 1000;
      bill.innerHTML = `<br> item : ${food_list.value} <br> quantity : ${qty.value} <br> Total price:${ans}`

    }    if(food_list.value == "PASTA"){
      ans = qty.value * 800;
      bill.innerHTML = `<br> item : ${food_list.value} <br> quantity : ${qty.value} <br> Total price:${ans}`
    }
}
