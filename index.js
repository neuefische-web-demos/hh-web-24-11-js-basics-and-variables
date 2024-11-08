// --- Console ---

console.log("Hello World!");
console.error("Error!");
console.clear();

// --- Variables ---

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

const number = 42;
const string = "I am a string";
const boolean = true; // or false
const nullDataType = null; // intentional absence of a value
const undefinedDataType = undefined; // indicates that no value has been set

// BigInt, Symbol
console.log(number, string, boolean, nullDataType, undefinedDataType);

// --- Mathematical Operators ---

// Addition with +
const oneTimeFee = 5;
const monthlyFee = 12;
const amountToBeCharged = oneTimeFee + monthlyFee;
console.log(amountToBeCharged);

// Type Coercion
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
const width = 5;
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
console.log(8 % 3);

// --- Assignment Operators ---

// +=
// let balance = 20;
// // balance = balance + 5;
// balance += 5;
// console.log(balance);

// -=
let balance = 20;
balance -= 5;
console.log(balance);

// ++
// let apples = 8;
// apples++;
// console.log(apples);

// --
let apples = 8;
apples--;
console.log(apples);
