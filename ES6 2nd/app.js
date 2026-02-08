console.log("Task 1.1");
let base = [1, 3, 4, 5, 7, 9, 3, 6, 2, 4];
base.map((value, index) => {
    console.log(value, index);
    return value * 2;
});
console.log(base)
base.forEach((value, index) => {
    console.log(value, index)
    base.push(value * 2);
})
console.log(base)
let sum = base.reduce((h1, h2) => {
    return h1 + h2
})
console.log(sum)
console.log("Task 1.2");
let arry = [2, 4, 6, 8, 10, 12, 14];
console.log(arry)
let arrygrater = arry.filter((value) => {
    return value > 10
})
console.log(arrygrater)
let multy = arrygrater.reduce((value1, value2) => {
    return value1 * value2
})
console.log(multy);
let arrys = [1, 3, 5, 7, 9, 11, 13];
let arryless = arrys.filter((value) => {
    return value < 10
})
console.log(arryless)
let sums = arryless.reduce((value1, value2) => {
    return value1 + value2
})
console.log(sums);
console.log("Task 1.3")
let based = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(based)
function map(base, clbk) {
    let ans = []
    for (let i = 0; i < base.length; i++) {
        console.log(base[i]);
        let trans = clbk(base[i])
        ans.push(trans)
    }
    return ans
}
let cstmans = map(based, (value) => {
    return value * 2
})
console.log(cstmans)
let real = based.map(v => v * 2);

console.log(real);
console.log("Task 2.1")
console.log(a);
var a = 10;
try {
    console.log(b);
} catch (e) {
    console.log(e)
}
let b = 20;
try {
    console.log(c);
} catch (e) {
    console.log(e)
}
const c = 30;
ata();
function ata() {
    console.log(1 + 6)
}
console.log("Task 2.2")
function f1() {
    console.log("1st func start");
    s2()
    console.log("1st func end");
}
function s2() {
    console.log("2nd func start");
    c3()
    console.log("2nd func end");
}
function c3() {
    console.log("3rd func start");
    console.log("3rd func end");
}
console.log("start")
f1()
console.log("end")
setTimeout(() => {
    console.log("Async");
}, 0);
console.log("Task 2.3");
function prnt() {
    let count = 10;
    console.log(count);
    return function chid() {
        console.log(count);
        count++
        console.log(count);
    }
}
let firstcopy = prnt();
firstcopy()
firstcopy()
firstcopy()
firstcopy()
let secondcopy = prnt();
secondcopy()
secondcopy()
secondcopy()
secondcopy()
console.log("Task 3.1");
let obj = {
    name: "Zain",
    age: 20
}
console.log(obj)
let { name, age, city = "karachi", number = "03046906564" } = obj;
console.log(name, age, city, number)
console.log("Task 3.2");
function numbs(...nums) {
    console.log(numbs.length)
    let total = nums.reduce((value1,value2)=> value1 + value2);
    console.log(total)
}
numbs(19,38,55,78)
console.log("Task 3.3");
let orgnl = {
    school:"Smit",
    branch:"head office",
    student1:{
        name:"Naeem",
        age:18
    }
}
let coppy  = orgnl;
let sprdcpy = {...orgnl};
coppy.student1.name = "Madni"
console.log(orgnl);
console.log(coppy);
console.log(sprdcpy);
console.log("Task 3.3");
