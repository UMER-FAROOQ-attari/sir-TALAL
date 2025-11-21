class BankAccount{
    #blance = 0;
    deposit(amount){
        this.#blance += amount
    }
    getBlance(){
        return this.#blance
    }
}
let umer = new BankAccount();
umer.deposit(500);
console.log(umer.getBlance())
// console.log(umer.#blance)