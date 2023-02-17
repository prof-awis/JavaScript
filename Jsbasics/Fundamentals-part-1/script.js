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
*/
/*
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
*/
/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106*/
/*
const averageDolphinScore = (97+112+101)/3;
const averageKoalaScore = (109+95+106)/3;

if (averageDolphinScore > averageKoalaScore) {
   if (averageDolphinScore>=100) {
   console.log("Dolphins are the winners");
   } else {
      console.log("Below the minimum 100 score hence no winner");
   }
} 

else if (averageDolphinScore < averageKoalaScore) {
   if (averageDolphinScore>=100) {
      console.log("Koalas are the winners");
      } else {
         console.log("Below the minimum 100 score hence no winner");
      }
} 

else{
   if (averageDolphinScore===averageKoalaScore) {
   console.log("It is a draw between the Dolphins and the Koalas");    
   } else {
      console.log("Below the minimum 100 score hence no winner");
   }
}
*/
/*
// THe switch statement

const day = 'wednesday';

switch (day) {
   case 'monday':
      console.log("Planning for the week");
      break;
   case 'tuesday':
      console.log("Designing the interface");
      break;
   case 'wednesday':
   case 'Thursday':
      console.log("Coding the solution");
      console.log("This will be applicable to both Wednesday and Thursday");
   case 'friday':
      console.log("Documentation");
      break;
   case 'sartuday':
   case 'sunday':
      console.log("Resting day");
      break;
   default:
      console.log("You entered an invalid Day");
      break;
}

//Statement and Experession
3+4
1991
true && false && !false

//whenever sth ends with a semicolon the it is a statement
if (23>10) {
   const str = '23 is bigger';
}

const me = 'jonas';
console.log("The man" + {me} + 'is ' (23+23));
*/

//The conditonal (Ternary) operator

const age = 23;
age >= 18? console.log('I like to drink wine') : console.log('I like to drink water 💦💧'); ;

const drink = age>=18? 'wine🍷': 'Water';
console.log(drink);

//transpiling and polifying to change your modern javascript to the previous latest version like from ES6 to ES5(Which is supported by the earlier version like form the 2011 )

