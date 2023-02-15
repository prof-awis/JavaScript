let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstname = "Awino"; //declaring variables
console.log(firstname);
console.log(firstname);
console.log(firstname);

let myFirstJob = "Programmer";
let mySecondJob = "Teacher";

console.log(myFirstJob);

 // value can be either object or primitive
 //example of object
 let me = {
    name: "Omondi"
 };
 //example of primitive data type
 let firstName = "Messi";
 let age = 34;

/*  There are seven primitive data types:
  number, boolean, string, undefined, null, symbol(introduced in ES2015), BigInt(ES2020) */

 //JS has dynamic typing. 

//boolean value
let javascriptIsFun = true;
console.log(true);

console.log(typeof true);
console.log(javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

// Dynamic typing
javascriptIsFun = 'YES!'; // changed it from true to string YES!
console.log(typeof javascriptIsFun);

//undefined
let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(typeof year);

//error in typeof. The object is defined as a bug
console.log(typeof null);

//let, const and var for declaring variables
// var is the old fashioned way whereas let and const was introduced in js ES6
let myAge = 20;
myAge = 15;

const birthYear = 2001; // const can never be changed

/*
birthYear = 2002;
const job; // const cannot be undefined
*/

//Basic ooperators
//Mathematical operator
const now = 2022;
const ageProf = now-2001;
const ageManu = now-2012;
console.log(ageProf, ageManu);

console.log(ageProf * 2, ageManu / 2, 2 ** 3);
//2 ** 3 = 2 power of 3= 8

const fName = 'Awino';
const lName = "Omondi";
console.log(fName + ' ' + lName); //concatenation

//assignment operator
let x = 17 +13;
x += 10;
x *= 4;
x ++;
x --;
x --;
console.log(x);

//comparison operator
console.log(ageProf > ageManu);
console.log(ageManu >= 18);

// the order of precedence of operators in js is well defined