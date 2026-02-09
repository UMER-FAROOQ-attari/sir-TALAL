console.log("Task 1.1");
const user = {
    name: "Baker",
    gret() {
        console.log(`Hy ${this.name}`)
    }
}
user.gret();
let nwvrbl = user.gret;
nwvrbl();
nwvrbl.call(user);
console.log("Task 1.2");
function greet(city, country) {
    console.log(`hy${this.name} 
        you learn${this.course}
        you live in ${city},${country}`)
}
let user1 = {
    name: "Umer",
    course: "Web development"
}
greet.call(user1, "karachi", "Pakistan");
greet.apply(user1, ["lahore", "Pakistan"]);
greet.call(user1, "faislabad");
console.log("Task 1.3");
let user2 = {
    name: "Ahmed",
    greet() {
        console.log(`Hi ${this.name}`)
    }
}
setTimeout(user2.greet, 1000);
setTimeout(user2.greet.bind(user2), 1000);
console.log("Task 2.1");
function counts() {
    let num = 0;
    return () => {
        num++;
        console.log(num)
    }
}
let counter1 = counts()
counter1()
counter1()
console.log("Task 2.2");
function counterfunc(name) {
    let count = 0;
    return () => {
        count++;
        console.log(`${name} : ${count}`)
    }
}
let counter2 = counterfunc("1st");
counter2();
counter2();
counter2();
counter2();
let counter3 = counterfunc("2nd");
counter3();
counter3();
counter3();
counter3();
counter3();
counter3();
console.log("Task 3.1")
function Admtion(name, age) {
    this.name = name;
    this.age = age;
    this.school = "SMIT";


}
Admtion.prototype.info = function () {
    console.log(`name:${this.name},
                Age:${this.age},
                School:${this.school}, `)
}
let student1 = new Admtion("Younas", 20);
let student2 = new Admtion("Yasir", 24);
let student3 = new Admtion("Ahmed", 19);
let student4 = new Admtion("Usama", 23);
student1.info()
student2.info()
student3.info()
student4.info()
console.log("Task 3.2")
class Sigin {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.school = "SMIT"
    }
    info() {
        console.log(`Hi : ${this.name},
        Age :${this.age},
        School :${this.school}`)
    }
}
let stdnt1 = new Sigin("Baker", 26)
let stdnt2 = new Sigin("Shakeeb", 24)
let stdnt3 = new Sigin("Haseeb", 22)
stdnt1.info()
stdnt2.info()
stdnt3.info()
console.log("Task 3.3")
class Empslry {
    constructor(name, age, amount) {
        this.name = name;
        this.age = age;
        this.amount = amount;
    }
    cns() {
        console.log(`hy : ${this.name},
            your Age : ${this.age},
            your selry : ${this.amount}`)
    }
}
class Mngrselry extends Empslry {
    constructor(name, age, amount) {
        super(name, age, amount);
        this.totalslry = this.amount + 1200
    }
    cns() {
        console.log(`hi ${this.name},
            your age : ${this.age}
            your selry :${this.totalslry}`)
    }
}
let umer = new Mngrselry("Umer", 19, 20000);
let ali = new Empslry("Ali", 21, 18000);
umer.cns();
ali.cns();
console.log("Task 4.1");
function tm() {
    return new Date().toLocaleTimeString();
}
console.log(`1st ${tm()}`);
function s2() {
    console.log(`2nd ${tm()}`)
}
s2()
setTimeout(() => {
    console.log(`3rd ${tm()}`)
}, 1500);
console.log(`last ${tm()}`);
console.log("Task 4.2");
function tim() {
    return new Date().toLocaleTimeString();
}
function stp1(clbk) {
    setTimeout(() => {
        console.log(`first ${tim()}`);
        clbk();
    }, 1000);
}
function stp2(clbk) {
    setTimeout(() => {
        console.log(`second ${tim()}`);
        clbk();
    }, 1000);
}
function stp3(clbk) {
    setTimeout(() => {
        console.log(`third ${tim()}`);
        clbk();
    }, 1000);
}
stp1(() => {
    stp2(() => {
        stp3(() => {
            console.log(`last ${tim()}`);
        });
    });
});
console.log("Task 4.3");

function tim() {
    return new Date().toLocaleTimeString();
}
function stp1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`first ${tim()}`);
            resolve();
        }, 1000);
    });
}
function stp2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`second ${tim()}`);
            resolve();
        }, 1000);
    });
}
function stp3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`third ${tim()}`);
            resolve();
        }, 1000);
    });
}
stp1()
    .then(() => stp2())
    .then(() => stp3())
    .then(() => {
        console.log(`last ${tim()}`);
    });
