let arrys = ["Umer" , "Abubaker","Akbar"]
console.log(arrys);
arrys[0] = "Umar"
console.log(arrys);
console.log(arrys.length);
console.log(arrys.at(-1));
arrys.pop();
arrys.shift()
arrys.push("Farooq");
arrys.unshift("Siddique");
console.log(arrys)
for (let arry of arrys ){
    console.log(arry);
}
console.log(String(arrys))
let arryofNo =[1,2,3,4,5];
let sum = arryofNo.reduce((choti , bari)=> choti+bari,0);
console.log(sum);
let dubale = arryofNo.map(n=>n*2);
console.log(dubale);
let sum2 = dubale.reduce((choti , bari)=> choti+bari,0);
console.log(sum2);
let joins = arryofNo.join("0")
console.log(joins)
