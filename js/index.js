console.clear();

// --- Variable Declarations ---

// Constant with const
const myNumber = 42;
console.log(myNumber);
// Error: myNumber = 30;

// Mutable with let
let myMutableNumber = 42;
console.log(myMutableNumber);

myMutableNumber = 100;
console.log(myMutableNumber);

// --- Primitive Data Types ---
const string = "I am a string"; // or "30"
const number = 10.99;
const boolean = true; // or false
const nullDataType = null; // intentional absence of a value
const undefinedDataType = undefined; // indicates that no value has been set

console.log(string, number, boolean, nullDataType, undefinedDataType);
// BigInt, Symbol

// --- Mathematical Operators ---

// Addition with +
const oneTimeFee = 5;
const monthlyFee = 12;
const amountToBeCharged = oneTimeFee + monthlyFee;
console.log(amountToBeCharged);

// const oneTimeFee = "5";
// const monthlyFee = 12;
// const amountToBeCharged = oneTimeFee + monthlyFee;
// console.log(amountToBeCharged);

// Subtraction with -
const sum = 20000;
const alreadyPaid = 5000;
const amountToBePaid = sum - alreadyPaid;
console.log(amountToBePaid);

// Multiply with *
const length = 4;
const width = 3;
const area = length * width;
console.log(area);

// Divison with /
const students = 15;
const groups = 3;
const studentsPerGroups = students / groups;
console.log(studentsPerGroups);

// Potentiate with **
console.log(2 ** 10);

// Modulus (Remainder) with %
console.log(9 % 2);

// --- Assignment Operators ---

// +=
let balance = 20;
balance += 4;
// balance = balance + 4;
console.log(balance);

// -=
let subtractBalance = 50;
subtractBalance -= 20;
console.log(subtractBalance);

// *=
let price = 8;
price *= 2;
console.log(price);

// /=
let highPrice = 50;
highPrice /= 2;
console.log(highPrice);

// ++
let apples = 8;
apples++;
console.log(apples);

// --
let bananas = 8;
bananas--;
console.log(bananas);
