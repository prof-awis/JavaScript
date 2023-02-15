   //this is my first Js code
   //node is a runtime environment for executing javascript
   console.log("Hello World");

   //variables
   //The standard way to naming them is using the camelCase notation. i.e firstName and it is not conventional to start with an upper case.
   //best way to declare variables is by using the let keyword and not the var
   let name = 'Prof Awis';
   console.log(name);
   //cannot be a reserverd keyword
   //should be meaningful
   //cannot start with a number eg 1name
   //cannot contain a space or hyphen -
   //are case-sensitive
   let firsname = 'Emanuel';
   let lastname = 'Awino';

   //creating constants
   const interestRate = 0.3;
   //interestRate = 1; //you cannot reassign a constant
   console.log(interestRate);

   //primitive data types and reference types
   //primitive:
   let fname = 'Prof Awis'; //string literal
   let AGE = 30; //number literal
   let isApproved = false; //boolean literal
   let lname = undefined; //if you dont define it by default it is undefined
   let color = null; //we use it in situations where we want to clear value of a variable

//js is a dynamic language

//reference types include: object, array, functions
//declaring an object
let person ={
    nname: 'porojo',
    age: 23
};
//dot notation
person.nname = 'JOHN';
//bracket notation
person['age'] = 15;

console.log(person); //your realise that the later passed arguments are the executed ones. This shows how js is dynamic

//Arrays
let selectedColor = ['red', 'blue']; //initialized with 2 elements
selectedColor[2] = 'green';
selectedColor[3] = 1;
console.log(selectedColor);
console.log(selectedColor.length);

//function can: perform a task or calculate a value
//declare function

// function that performs a task
function greet(nname){
    console.log('Hello ' +nname +lastname);
    //function can have inputs
}
greet('Meshack ');
greet('Shadrack ');
greet(' ');


//function that Calculating a value
function square(number) {
    return number*number;
}
console.log(square(4)); //we've two function calls here

//1. console.log();
//2. square(4);