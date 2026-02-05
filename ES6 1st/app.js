console.log("1.1 task")
{
    var a = 10;
    console.log(a);
    a = 20;
    console.log(a);
}
{
    let b = 100;
    console.log(b);
    b = 200;
    console.log(b)
}
console.log(a);
try {
    console.log(b)
} catch (e) {
    console.log(e)
}
console.log("1.2 task")
var f1 = 1;
console.log(f1);
var f1 = 2;
console.log(f1);
let b2 = 5;
console.log(b2);
try {
    let b2 = 6;
    console.log(b2);
} catch (e) {
    console.log(e);
}
const obj = {
    user: "umer",
    age: 19
}
console.log(obj.user);
obj.user = "ali";
console.log(obj.user);
try{
 obj = {
    user: "baker",
    age: 30
};
console.log("yes change")
}catch(e){
    console.log(e)
}
console.log("1.3 task")
for(var i = 0;i < 3 ; i++){
    setTimeout(() => {
       console.log("var"+i) 
    }, 1000);
}
for(let o = 0;o < 3 ; o++){
    setTimeout(() => {
       console.log("let" + o) 
    }, 2000);
}

try{for(const c = 0; c < 3 ; c++){
    setTimeout(() => {
       console.log("Const" + c) 
    }, 3000);
}
}catch(e){
    console.log(e)
}
console.log("All value");
console.log("2.1 task");
let username  = prompt("Pleas enter your name");
let cours  = prompt("Pleas enter your course");
let result  = prompt("Pleas enter your result");
function dynmcmsggen (name , course , percentage){
    return(`hy ${name}
        your learn ${course}
        so your result is ${percentage}%`)
}
console.log(dynmcmsggen(username,cours,result));
console.log("2.2 task");
var finalresult ;
var grad ;
if(result >= 85){
    finalresult = "Pass";
    grad = "A"
}    
else if(result >= 75){
    finalresult = "Pass";
    grad = "B"
}
else if(result >= 65){
    finalresult = "Pass";
    grad = "C"
}
else if(result >= 40){
    finalresult = "Pass";
    grad = "D"
}
else{
    finalresult = "Fail";
    grad = "Fail"
}
function results(name ,  course , percentage){
    return(`
        hy ${name},
        you learned ${course},
        so you are ${finalresult},
        and your parsentage is ${percentage}%,
        your Grad is ${grad} `)
}
console.log(results(username,cours,result))
console.log("3.1 task");
let objc = {
    user:"Arslan",
    func:function(){
        console.log(this.user)
    },
    arr : ()=>{
        console.log(this.user)
    }
}
objc.func();
objc.arr();
console.log("3.2 task");
let arr = [1,2,3,4];
console.log(arr)
let funcs = arr.map(x=> x*2);
console.log(funcs)
let fncion = arr.map(x=>{
    return x*3;
}
)
console.log(fncion)
console.log("3.3 task");
function oho (name,funcs){
    console.log("hy "+ name);
    funcs()
}
function clbk (){
console.log(`callback`)    
}
let anme = "Umer"
oho(anme,clbk)
let awrofun = () =>{
    console.log("this is call back from arrow function")
}
oho("Arslan",awrofun)
console.log("4.1 task")
let countobj = {
    start : 1,
    end :5,
    [Symbol.iterator](){
        let crnt = this.start;
        let lst = this.end;
        return{
            next(){
                if(crnt <= lst){
                    return{value:crnt++, done:false}
                }
                return{done :true}
            }
        }
    }
}
for(let num of countobj){
    console.log(num)
}
console.log("4.2 task")
let arry = ["Arslan","Ahmed","Naeem","Usama"];
for(let a =0; a < arry.length ; a++){
    console.log(arry[a])
}
for (let index in arry){
    console.log(index)
}
for(let ar of arry ){
    console.log(ar)
}
console.log("4.3 task");
let  items = {
    naat : ["Madian" , "ali ali" , "Ramzaan"],
    [Symbol.iterator](){
        let idx = 0;
        let allnat = this.naat;
        return{
            next(){
                if(idx < allnat.length){
                    return{
                        value:allnat[idx++],
                        done:false
                    }
                }
                return{done:true}
            }
        }
    }
}
for (let nat of items){
    console.log(nat)
}