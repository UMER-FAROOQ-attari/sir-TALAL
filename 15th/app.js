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
console.log(msg);
let pera = "World War II was one of the deadliest conflicts in human history. During World War II, millions of soldiers and civilians lost their lives. The events of World War II changed the political map of the world. Many nations learned valuable lessons from World War II about peace and unity. Even decades after World War II, its impact can still be felt around the globe."
let textToreplace = "Second World War";
for(let i=0;i<pera.length; i++ ){
    let char = pera.slice(i,i+12);
    if(char == "World War II"){
        pera = pera.slice(0,i) + textToreplace + pera.slice(i +12)
    }
}
let newPera = pera.replaceAll("World War II", "Second World War");
console.log(newPera);
