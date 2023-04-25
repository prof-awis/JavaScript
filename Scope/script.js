'use strict';

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
