//Activating Strict mode
//Helps to write a more secure(helps developers to avoid accidental errors) JavaScript code
//Creates visible errors

'use strict';
/*
 let hasDriversLicense = false;
 const passTest = true;

 if (passTest) {
    hasDriverLicense = true; //error in naming hence strict will prompt you where the error is
 } 

 if (hasDriversLicense) {
    console.log("I can drive");
 }

 const interface = 'Audio'; //strict mode reserving the word for implementation in the future
 const private = 532;
 */

 /*
 //Functions
  function logger() {
    console.log('My name is Awino');
  }

  //calling / running / invoking the function
  logger();
  logger();
  logger(); //the logic of using reusing the code

  function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }

//   fruitProcessor(5, 9);
  const appleJuice = fruitProcessor(4, 23);
  console.log(appleJuice);
  console.log(fruitProcessor(5, 9));
  
  //Function Declarations Vs Expressions
  function calcAge(birthYear) {
    return 2025-birthYear;
  }

  console.log(`The persons age is ${calcAge(2000)} years`);

  //Function Declaration
  function calcAge1(birthYear) {
    return 2025-birthYear;
  }

  const age1 = calcAge1(1991);

  //Function Expression
 const calcAge2 = function (birthYear) {
    return 2025-birthYear;
  }

  const age2 =calcAge2(1998);

  console.log(age1, age2);
*/
/*
// THE Arrow Function(3rd)
// was added in ES6, shorter and faster to write.

const calcAge3 = birthYear => 2023 - birthYear; //the return is returned implicitly, you don't to have to write explitly the return keyword

const age3 = calcAge3(2000);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
return `${firstName} retires in ${retirement} years.`;
}

console.log(yearUntilRetirement(2000, 'Awino'));
console.log(yearUntilRetirement(1990, 'Bazu'));
*/
/*
//Function calling other function

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
    return juice;
  }

  console.log(fruitProcessor(2, 6));
  */
/*
  //Introduction to arrays

  const friend1 = 'Michael';
  const friend2 = 'Stephen';
  const friend3 = 'Peter';

  const friends = ['Michael', 'Steven', 'Peter'];
  console.log(friends);
  console.log(friends[0]);

  const yrs = new Array(1991, 1984, 2000, 2020);
  console.log(yrs);
  console.log(yrs[3]);
  
  console.log(friends.length);
  console.log(friends[friends.length - 1]);

  friends[2] = 'Jay'; //reassigning
  console.log(friends); // only primitive values are immutable when using const. it does not apply for the array since it is not a primitive value

  // friend = ['Bob', 'Ray'] //This is illegal since you cannot replace the whole array.

  // An array can also keep values that of different types
  const firstName = 'Jonas';
  const jonas = [firstName, 'Scherman', 2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//Exercise
const calcAge = function (birthYear) {
  return 2023-birthYear;
}

const years = new Array(1991, 1984, 2000, 2020,2022);
console.log(calcAge(years[0]));
*/
/*
//Basic Array Operations
const friends = ['Michael', 'Steven', 'Peter'];

//Add elements
const newLength = friends.push('Jay'); //last
console.log(friends);
console.log(newLength);

friends.unshift('John'); //first
console.log(friends);

//Remove elements
friends.pop(); //last
const popped = friends.pop();

console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

// includes is more advanced than indexOf.
//tests with strict equality
friends.push(23);
console.log(friends.includes('Steven')); //returns true  or false
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/
/*
//Introduction to objects
// curly brackets are used to define a new object
// this uses unstructured data whereas an array uses structured data and it is retrieved continuos
const jonas = {
  firstName : 'Jonas',
  lastName : 'Scheumern',
  age : 2023 - 1991,
  job  : 'Teacher',
  friends : ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

//how to get a property from an object
// 1. The dot method
console.log(jonas.firstName);
// 2. Using the bracket method
console.log(jonas['lastName']);

//in bracket notation we can put any expression we like. But that won't work in dot notattion(Here we use real property name)
const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
// console.log(jonas.interestedIn);// you'll get undefined
// console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job, and friends");
}
//ypu can add elements to the object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasKiongos'
console.log(jonas);

//challenge
//"Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/
const jonas = {
  firstName : 'Jonas',
  lastName : 'Scheumern',
  birthYear : 1991,
  job  : 'Teacher',
  friends : ['Michael', 'Peter', 'Steven'],
  hasDriversLicense : true,
  //any function attached to an object is called an object
  //Here we need an expression and not a declaration
  // calcAge : function (birthYear) {
  //   return  2023 - birthYear;
  //     }  

//   calcAge : function () {
//     // console.log(this);
//     return  2023 - this.birthYear; //the THIS keyword
//  }

  calcAge : function () {
    this.age = 2023 - this.birthYear; 
    return this.age;
 },

 getSummary : function () {

  return `${this.firstName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense? 'a': 'no'} driver's license`
 }

};
//DRY (Dont Repeat Yourself)
console.log( jonas.calcAge());
// console.log(jonas['calcAge'](1992));

console.log( jonas.age);
console.log( jonas.age);
console.log( jonas.age);

//challenge 
//"Jonas is a 46 year old teacher, and he has a driver's license"
console.log(`${jonas.firstName} is a ${jonas.age} year old ${jonas.job}, and he jas a driver's license`); //my way

console.log(jonas.getSummary());