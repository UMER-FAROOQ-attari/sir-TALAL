// let arr = [255,67,78,45];
// let sub = 0;
// for(let numb of arr){
//   sub += numb
// }
// console.log(sub)

// let string = "TALAL" ;
// let str = [];
// for(let letter of string){
//    str.unshift(letter)

// }
// str = str.join("")
// console.log(str)

// let count = 5;
// do {
//     console.log(`Game starts in  ${count} Sec`);
//     count--;
// }
// // while (count > 0)
// console.log(`Game start`);
// setTimeout(() => console.log(`Game will start soon`), 1000);
// setTimeout(() => console.log(`bas hogya`), 2000);
// setTimeout(() => console.log(`bas 5 mint or`), 5000);
// setTimeout(() => console.log(`yar masla agya thora`), 7000);
// setTimeout(() => console.log(`khuch bi nhi mazak tha bs`), 10000);
// let rattings = [5,3,4,2,4];
// let sub = 0;
// for(let numb of rattings ){
//     sub += numb;

// }
// sub = sub/ rattings.length
// console.log(sub)
let sale  = [1200,2000 , 2300,800];
let sub = 0;
for(let numb of sale ){
    sub += numb;
    
}
let higest = Math.max(...sale)
console.log(higest)
console.log(sub)