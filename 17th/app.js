// let arr = ["Abubaker","Umer","Usaman","Ali"];
// for(let Name of arr){
//     console.log(Name)
// }
// let arr = ["Abubaker","Umer","Usaman","Ali"];
// for(let numb in arr){
//     console.log(numb)
// }
// const fruits = ["Apple", "Orange", "Banana", "Mango"];
// let fruit1 = fruits[0];
// let fruit2 = fruits[1];
// let fruit3 = fruits[2]
// let fruit4 = fruits[3]
// console.log(fruits)
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)
// console.log(fruit4)
// const fruits = ["Apple", "Orange", "Banana", "Mango"];
// let [fruit1 , fruit2 ,fruit3,fruit4] = fruits;
// console.log(fruits)
// console.log(fruit1)
// console.log(fruit2)
// console.log(fruit3)
// console.log(fruit4)
// let obj = {
//     careName:"Mehran",
//     fuleAverage :"20km",
//     country:{pakistani :true,
//         city:"lahore"
//     }
// }
// let {careName,fuleAverage,country :{pakistani,city}}=obj;
// console.log(obj);
// console.log(careName,fuleAverage,pakistani,city);
// class Student{
//     constructor(name,email,password){
//         this.name=name;
//         this.email=email;
//         this.password=password
//     }
//     msg(masge){
//         console.log(`apky pass${this.name} ny jis ki email${this.email} hy or ye nichy wala masge sent kia hy 
//             ${masge}`)
//     }

// }
// const user1 = new Student("Umer","khadeemattar@gmail.com");
// user1.msg("Slam bhai ")

// let submit = document.getElementById("submit")

// class User {
//     constructor(name, password) {
//         this.name = name;
//         this.password = password
//     }
//     masg() {
//         console.log(`hello ${this.name} kesy ho ik baat suno password ye ${this.password} hy apka`)
//     }
    
// }
// let users = [];
// submit.addEventListener("click", () => {
//     let person = document.getElementById("person");
//     let code = document.getElementById("code");
//     let newUser = new User(person.value, code.value)
//     users.push(newUser);
//     newUser.masg()
// })
// 👇 Class sab se upar rakho
class Message {
  constructor(sender, text){
    this.sender = sender;
    this.text = text;
    this.time = new Date().toLocaleTimeString();
  }
}

// 👇 DOM references
let sendBtn = document.getElementById("sendBtn");
let chatBox = document.getElementById("chatBox");

let messages = [];

// 👇 Event listener
sendBtn.addEventListener("click", () => {
  let sender = document.getElementById("sender").value;
  let text = document.getElementById("msgInput").value;

  if(!sender || !text){
    alert("Naam aur message dono likho!");
    return;
  }

  let newMessage = new Message(sender, text); // ✅ Class use correct
  messages.push(newMessage);

  displayMessage(newMessage);
  document.getElementById("msgInput").value = ""; // input clear
});

// 👇 UI Display Function
function displayMessage(msgObj){
  chatBox.innerHTML += `
    <p><b>${msgObj.sender}</b>: ${msgObj.text} 
    <small style="color:gray;">(${msgObj.time})</small></p>
  `;
  chatBox.scrollTop = chatBox.scrollHeight;
}
