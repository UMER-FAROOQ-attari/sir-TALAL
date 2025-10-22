let names= ["ali","abuBaker","TAlAl","MoiZ"];
let fullName = "";
for(let i=0;i<names.length;i++){
    let name = names[i];
    let firstletter = name.charAt(0).toLocaleUpperCase();
    let rest = name.slice(1).toLowerCase()
    fullName += firstletter + rest + " "
}
console.log(fullName);
let msg = "this is a bad product"
msg = msg.replace(/bad/g,"good")
console.log(msg)