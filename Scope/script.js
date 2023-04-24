'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    const output = `${firstName} you are ${age} years old, and you were born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1986 && birthYear <= 1996) {
      const str = `Oh!, You are a millenial, ${firstName}`;
      console.log(str);
    }
  }

  printAge(); //callthe function
  return age;
}

const firstName = 'Jonas';
const x = calcAge(1995);
console.log(x);

//! console.log(age); You cannot access the child scope
