console.log("Task 1.1");
const user = {
    name: "Baker",
    gret() {
        console.log(`Hy ${this.name}`)
    }
}
user.gret();
let nwvrbl = user.gret;
nwvrbl();
nwvrbl.call(user);
console.log("Task 1.2");
function greet(city, country) {
    console.log(`hy${this.name} 
        you learn${this.course}
        you live in ${city},${country}`)
}
let user1 = {
    name: "Umer",
    course: "Web development"
}
greet.call(user1, "karachi", "Pakistan");
greet.apply(user1, ["lahore", "Pakistan"]);
greet.call(user1, "faislabad");
console.log("Task 1.3");
let user2 = {
    name: "Ahmed",
    greet() {
        console.log(`Hi ${this.name}`)
    }
}
setTimeout(user2.greet,1000);
setTimeout(user2.greet.bind(user2),1000);
console.log("Task 2.1");
function counts(){
    let num = 0;
    return ()=>{
        num++;
        console.log(num)
    }
}
let counter1 = counts()
counter1()
counter1()
console.log("Task 2.2");
function counterfunc(name){
   let count = 0;
  return()=>{
    count++;
    console.log(`${name} : ${count}`)
  }
}
let counter2 = counterfunc("1st");
counter2();
counter2();
counter2();
counter2();
let counter3 = counterfunc("2nd");
counter3();
counter3();
counter3();
counter3();
counter3();
counter3();