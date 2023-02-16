/*
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

// There are seven primitive data types:
//   number, boolean, string, undefined, null, symbol(introduced in ES2015), BigInt(ES2020) 

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


// birthYear = 2002;
// const job; // const cannot be undefined


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


const firstName = 'Awino';
const job = 'teacher';
const birthYear = 2001;
const year = 2023;

const awino = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(awino); 

//using template literals(ES6) to simplify the work
// for template literals we use back ticks ``
const awinoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(awinoNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');
// with template strings it is easier
console.log(`String
with multiple
lines`);


//Decision using the if..else statement
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
   console.log('Sarah can start driving license car🚗');
} else {
   console.log('Sarah cannot start driving. She is still young');
}

if (age >= 18) {
   console.log('Sarah can start driving license car🚗');
   
} else {
   const yearsLeft = 18 - age;
   console.log(`Sarah is too young. Wait another ${yearsLeft} years!`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
   century = 20;
} else {
   century = 21;
}
console.log(century);


// Type conversion and coercion
// Type conversion is when we manually convert from one  type to another whereas Type coercion is when js does in behind the scenes all by itself

//Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN); //Not a Number is an invalid number.

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('I am' + ' 23 ' + ' year old');
console.log('23' - '10' - 3); //changed to number
console.log('23' + '10' + 3); // changed to string 
console.log('23' / '2');
console.log('23' * '2');

let n = '1' + 1;
n = n-1;
console.log(n);


// Truthy and Falsy values
// 5 falsy values: 0, '', undefined, null, NaN
// the rest are truthy values 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean({})); //object

const money = 0; //this condition is a falsy vlaue so the condition is false
if (money) {
   console.log("Don't spend it all");
} else {
   console.log("You should get a job");
}

let height;
if (height) {
   console.log("YAY! Height is defined");
} else {
   console.log("Height is UNDEFINED");
}

// EQUALITY OPERATORS, ==(LOOSE) VS ===(STRICT) 
//when you comparing the values always use the strict
const age = '18';
if (age === 18) {
   console.log("You just became an adult (strict)");
}

if (age == 18) {
   console.log("You just became an adult (loose)");
}

const favourite = Number(prompt("What is your favourite number: "));
console.log(favourite);
console.log(typeof favourite); // the number inputed is a converted to a string in the prompt.
*/
//Boolean Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense&&hasGoodVision;
if (shouldDrive) {
   console.log("Prof should be able to drive");
} else {
   console.log("Someone else should drive");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired );