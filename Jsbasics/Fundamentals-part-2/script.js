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