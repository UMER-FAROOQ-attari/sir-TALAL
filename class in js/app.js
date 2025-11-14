class Car{
    constructor(carName,color){
        this.carName = carName;
        this.color =  color
    }
    start(){
        console.log(this.carName+ "engine Started!")
    }
}

let student1 = new Car("Mahran","black");
let student2 = new Car("Honda","red");
console.log(student1.start())
console.log(student2.start())