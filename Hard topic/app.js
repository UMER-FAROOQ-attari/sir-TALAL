/* Encapsulation  */
class Car{
     start(){
        this.#engineStartded()
     }
    #engineStartded(){
        console.log("Enigine is Started . . . . .")
    }
}
let care1 = new Car()
care1.start()