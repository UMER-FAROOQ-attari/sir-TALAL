console.log("Task 1.1");
let bx = new Set();
bx.add("Umer");
console.log(bx, bx.size);
bx.add(19);
console.log(bx, bx.size);
bx.add(true);
console.log(bx, bx.size);
bx.add([1, 2, 3, 5, 8, 9, 7])
console.log(bx, bx.size);
let obj = { name: "Ali", father: "asger" };
bx.add(obj);
console.log(bx, bx.size);
bx.add("Umer");
console.log(bx, bx.size);
obj.name = "Ahmed"
console.log(bx, bx.size);
console.log("Task 1.2");
let objct = {};
let maps = new Map();
objct.name = "Umer"
maps.set("Name","Ali")
console.log(objct,maps);
objct[true] = "yes";
maps.set(true , "yes")
console.log(objct,maps);
objct[1] = "One";
maps.set(1,"One")
console.log(objct,maps);
console.log(objct.name)
console.log(maps.get("Name"))
console.log("Task 2.1");
function dfltprmtr (name = "Ahsan"){
    console.log(name)
    console.log("Hy"+name)
}
dfltprmtr();
dfltprmtr("Umer");
dfltprmtr(undefined);
dfltprmtr(null);
console.log("Task 2.2");
let dfltobj = {name:"Yasir",age:25,class:`${6}th Year`};
function dfltfuc (){
    console.log("OHO")
}
function check(obj = dfltobj , clbk = dfltfuc){
      console.log(obj.class);
      clbk();
}
check()
dfltobj.class = `${7}th Year`
check()
console.log("Task 3.1");
let funcs = ()=>{
    console.log("haha")
}
funcs()
function nawa(clbk){
      console.log("nawa");
      clbk()
}
nawa(funcs);
let rtnfunc  = ()=>{
    return ()=>{
    console.log("gaga")
    }
}
let result = rtnfunc();
result()
console.log("Task 3.2");
function rpt(time,clbk){
    console.log(time)
    for(let i = 1; i<= time;i++){
        clbk(i)
    }
}
function gret(idx){
       console.log(idx)
}
function math (num){
   console.log(num*num)
}
rpt(3,gret);
rpt(2,  math);
console.log("Task 4.1");
function stp1(clbk){
    console.log("Step1");
    clbk()
}
function stp2(clbk){
    console.log("Step2");
    clbk()
}
function stp3(){
    console.log("Step3");
}
stp1(function(){
    stp2(function(){
        stp3()
    })
})
console.log("Task 4.2");
function async (){
    function tme(){
        return new Date().toLocaleString()
    }
    console.log("start"+tme());
    setTimeout(() => {
    console.log("async"+tme());
}, 2000)
console.log("end"+tme())
}
async();