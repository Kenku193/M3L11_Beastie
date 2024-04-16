console.log('Hello JS');
let name="Yura S";
const nickname = 'ladiesman217'
console.log(name);
console.log(nickname)

let _="WOW!"
let $="MEOW"


let age = "fifty";
age = 50.0
console.log(name + "ago: " + age + "years")

age += 1

let isOk = true
console.log(typeof isOk)

let ok
console.log(ok)
console.log(typeof ok)


if (age > 49){
    console.log(name + " ты стар, ты суперстар")
}
else {
    console.log(name + " ты слишком юн")
}


function showMustGoOn(fName, fAge){
    console.log(fName + " " + fAge)
}

showMustGoOn(50.0, 'Yura')


const lang=[5, "Js", -10, 1101.111, true]


for (let i = 0; i < lang.length; i++) {
    console.log(lang[i])
}

for (let current of lang){
    console.log(current)
}


const dev = {
    name: "Yura",
    lastName: "S",
    years: 35,

    print: function (){
        console.log(this.name + " " + this.lastName + " " + this.years)
    }
}

dev.print()

console.dir(dev)


let elementById = document.getElementById("main");
elementById.textContent="Changed text";
elementById.style.color="red";
elementById.style.backgroundColor="#000000"
elementById.onclick = function () {window.alert("Ayayay!")}