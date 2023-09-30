var age = 22;
console.log("Your age", age);

var isAdult = true;
console.log("You are adult", isAdult);

var firstName = "Anh";
console.log("Your name is" + firstName);

var phone = null;
console.log("Your phone number is", phone)

var address = undefined;
console.log("Your address is", address)

var books = ["Book 1", "All in love", "Book 3", 1];
console.log("Your favorite books are", books);

var closedFriend = {
                    "full_name": "Ho Vu Anh",
                    age: 23,
                    address: null
}
console.log("Your best friend's name", closedFriend.full_name); 

// Toan tu so sanh - Comparison Operators
let a = 5;
console.log(a + 10);

console.log(a - 10);

console.log(a * 15);

console.log(a ** 2);

console.log(a / 2);

console.log(a % 2);

a++;
console.log(a);

a--;
console.log(a);

let x = 12;
let y = 15;
let z = "12";

console.log(x == y);

console.log(x === z);

console.log(x !== y);

console.log(x > y);

console.log(x < y);

console.log(x >= y);

console.log(x <= y);

// Toan tu logic - Logical Operators
let first = x < y;
let second = x == y;

console.log(first && second);

console.log(first || second);

console.log(!second);

// Toan tu gan - Assignment Operators
x = y;
console.log(x);

console.log((x += y));

console.log((x -= y));

console.log((x *= y));

console.log((x /= y));

console.log((x %= y));

// Toan tu 3 ngoi - Conditional Operators
// (dieukien) ? dieukienDung : dieukienSai
let varA = (x > y) ? "Co": "Khong";
console.log(varA);

age = 12;
if(age > 0) {
    console.log("You haven't been born")
}
if(age < 18) {
    console.log("You are a teen")
} else {
    console.log("You are an adult")
}

let answer = "A";
switch (answer) {
    case "A":
        console.log("Your ans is A");
        break;
}