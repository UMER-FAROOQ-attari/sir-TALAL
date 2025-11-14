
class Car{
    constructor(carName,color){
        this.carName = carName;
        this.color =  color
    }
    start(){
        console.log(this.carName+ " engine Started with Noise!")
    }
}
class ElactricVehicle extends Car {
  constructor(carName, color,keyLessEntry){
  super (carName , color)
    this.keyLessEntry = keyLessEntry
  }
  start (){
    console.log( this.carName + " engine Started with Silantly");
    
  }
}
let tesla = new ElactricVehicle( "tesla" , "white", true)
let student1 = new Car("Mahran","black");
let student2 = new Car("Honda","red");
console.log(student1.start())
console.log(student2.start());
console.log(tesla.start())