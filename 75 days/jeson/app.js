let ojt = {
    name:"Umer",
    father:"Akbar",
    age:19,
    teenager:true
}
console.log(ojt);
console.log(JSON.stringify(ojt));
ojt = JSON.stringify(ojt);
console.log(ojt);
ojt = JSON.parse(ojt)
console.log(ojt)