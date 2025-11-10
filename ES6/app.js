let arr = new Set(["Talal","Ahmed","Talal","ashraf","haider sha","Nerooz","Abdullah"]);
console.log(arr.has("Ahmed"));
console.log(arr.add("Umer"));
console.log(arr.delete("haider sha"));
console.log(arr)
console.log(arr.size);
let realArr = [...arr];
console.log(realArr)
