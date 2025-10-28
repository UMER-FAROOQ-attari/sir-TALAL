let map = new Map()
map.set(1,"UMER");
map.set("2","abubaker")
console.log(map)
console.log(map.size)
console.log( map.keys());
console.log( map.values());
console.log( map.entries());
let obj = {
    Name :"umer",
    Age : 19,
    year : 6
}
let mop = new Map(Object.entries(obj))
console.log(mop);
let ubj = Object.fromEntries(map);
console.log(ubj);
