// class BankAccount{
//     #blance = 0;
//     deposit(amount){
//         this.#blance += amount
//     }
//     getBlance(){
//         return this.#blance
//     }
// }
// let umer = new BankAccount();
// umer.deposit(500);
// console.log(umer.getBlance())
// // console.log(umer.#blance)
class User{
    #password;
    constructor(username , password){
        this.username = username;
        this.#password = password
    }
    checkPassword(input){
     return this.#password === input;
    }
}

const user1 = new User("umer","12345");
console.log(user1.username);
console.log(user1.#pa);