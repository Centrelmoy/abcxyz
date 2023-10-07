// function
function sum1(a,b) {
    return a + b;
}
console.log(sum1(12 + 5))

function sum2(a,b) {
    console.log(a + b);
}

sum2(12,5);

let d = 10;
function getRandom() {
    function abc() {
        var a = 12;
    }
    // console.log(a);
    let b = 15;
    const c = 5;    
    d += 15
}
getRandom();
console.log(d);
// var
for (var index = 0; index < 5; index++) {
    console.log(index);
}

console.log("Ind: ", index);

// let
for (let ind = 0; ind < 5; ind++) {
    console.log(ind);
}

// console.log("Ind: ", ind);

let input = prompt("How old are you?") ;
function checkAge(age) {
    if(age < 0) {
        document.write("You haven't been born");
    } else if (age < 18) {
        document.write("You are a teen");
    } else {
        document.write("You are an adult");
    }
}

checkAge(input);

const divList = document.getElementsByTagName("div");
console.log(divList);

const classList = document.getElementsByClassName("one");
console.log(classList);
const one1 = document.getElementById(".one");
console.log(one1);

const idItem = document.getElementById("two");
console.log(idItem);
const two1 = document.getElementById("#two");
console.log(two1);

const div1 = document.querySelector("div");
console.log(div1);

const divList1 = document.querySelector("div");
console.log(divList1);

