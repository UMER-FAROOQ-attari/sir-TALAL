// task 1.1
let arry = [1,2,4,6,8,93,2];
//map 
let mapary = arry.map((value)=>{
    return value * 2
});
console.log(arry)
console.log(mapary);
// For Each
let foreachary = arry.forEach((value)=>{
    // arry.push(value + 1);
});
console.log(arry);
// reduce
let reduceary = arry.reduce((value1, value2)=>{
    return value1 * value2
})
console.log(arry)
console.log(reduceary);
// task 1.2
let flterary = arry.filter((value)=>{
    return value < 5
})
console.log(flterary)
let flterreduce = flterary.reduce((value1,value2)=>{
    return value1 + value2
})
console.log(flterreduce);
// task 1.3
// Custom map
function map(ary , clbk){
    let empt = [];
    for(let i =0; i < ary.length;i++){
        let tran = clbk(ary[i]);
        empt.push(tran)
    }
    return empt
}
let cstm = map(arry , (value)=>{
    return value * 3
})
console.log(cstm)
// Readymade map
let real = arry.map(value => value *3)
console.log(real)