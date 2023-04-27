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
