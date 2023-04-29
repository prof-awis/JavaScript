'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    let output = `${firstName} you are ${age} years old, and you were born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1986 && birthYear <= 1996) {
      var millenial = true;

      //creating  NEW variable with the same name as the outerscope's variable
      const firstName = 'Steven'; // there will be no need to check up the name above the scope chain

      //Reassigning outerscope's variable
      output = 'NEW OUTPUT';

      const str = `Oh!, You are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      console.log(add(5, 6));
    }
    //! add(3, 4); thia proves that in ES6 funtions are block scoped hence cannot be accessed outside the block. It is also possible when the strict mode is true.

    console.log(millenial); //*var variables are function scoped hence will ignore the block scope
    console.log(output);
  }

  printAge(); //callthe function
  return age;
}

const firstName = 'Jonas';
const x = calcAge(1995);
console.log(x);

//! console.log(age); You cannot access the child scope
*/
/*
//? Concept of hoisting

//Hoisting with variables
console.log(me);
// console.log(job);Uncaught ReferenceError: Cannot access 'job' before initialization
// console.log(year); the two are still in the temporary dead zone(TDZ) and hence cannot be accessed

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//?hoisting with functions
console.log(addDecl(3, 5));
// console.log(addExpr(1, 3)); Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(5, 5)); Uncaught ReferenceError: Cannot access 'addArrow' before initialization

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => {
  return a + b;
};

//? Example in Hoisting
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
/*
//*The concept of the THIS keyword/variable
//it is a special variable created for every execution context(every fuction)
//takes the value of (points to) the 'owner' of the function in which the **this** keyword is used
console.log(this); // global object which is the window object

const calcAge = function (birthYear) {
  const age = 2037 - birthYear;
  console.log(age);
  console.log(this); //undefince because it is in strict mode else it will be a global object
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  const age = 2037 - birthYear;
  console.log(age);
  console.log(this); //!Not undefined because arrow function use the lexical this keyword (does not get its own this keyword)hence global object (window)
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; //method borrowig
matilda.calcAge(); //points to object calling the method

const f = jonas.calcAge;
f(); //regular function that is not an object hence the error !cannot read properties of undefined (reading 'year')
*/

// var firstName = 'Matilda'; //!Another reason we shouldn't use the var keyword
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    //*Solution 1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    //*Solution 2
    const isMillenial = () => {
      // the arrow fucntion uses the *this* keyword from the parent scope
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    //never use an arrow function in an object
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 6);
addExpr(3, 6, 5, 3, 7);

var addArrow = (a, b) => {
  return a + b;
};
addArrow(arguments); //! argument keyword only exists in regular functions
