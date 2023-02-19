# 03 JavaScript Fundamentals - Part 2

# 03 JavaScript Fundamentals - Part 2 - Part 01

Things entailed in this section:

1. Activation of the strict mode

   The strict mode is a vital in JS programming and it is a good practice when it is included is each script file.

   Helps to write a more secure(helps developers to avoid accidental errors) JavaScript code.

   It creates visible errors.

2. Functions and how to invoke them
3. Function Declarations vs Function Expressions
<pre>
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

</pre>

4. The Arrow Function
<pre>
const calcAge3 = birthYear => 2023 - birthYear; //the return is returned implicitly, you don't to have to write explitly the return keyword

const age3 = calcAge3(2000);
console.log(age3);

</pre>

5. Function calling other Functions

An example of such :

<pre>
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
</pre>

# 03 JavaScript Fundamentals - Part 2 - Part 02

6. Introduction to Arrays.

Only primitive values are immutable when using const. it does not apply for the array since it is not a primitive value i.e

<pre>
const friends = ['Michael', 'Steven', 'Peter'];
  console.log(friends);

friends[2] = 'Jay'; //reassigning
  console.log(friends);
</pre>

An array can also keep values that of different types for instance:

<pre>
 const jonas = [firstName, 'Scherman', 2037-1991, 'teacher', friends];
 console.log(jonas);
 </pre>

7. Basic Array Operation(Methods).
<pre>
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
console.log(friends.includes('Steven')); //returns true or false
console.log(friends.includes('Bob'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
console.log('You have a friend called Steven');
}

</pre>
8. Introduction to Objects
<pre>
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
</pre>
9. The Dot vs. Bracket Notation
<pre>
//how to get a property from an object
// 1. The dot method
console.log(jonas.firstName);
// 2. Using the bracket method
console.log(jonas['lastName']);
</pre>

# 03 JavaScript Fundamentals - Part 2 - Part 03

10. Object Methods
<pre>
const jonas = {
  firstName : 'Jonas',
  lastName : 'Scheumern',
  birthYear : 1991,
  job  : 'Teacher',
  friends : ['Michael', 'Peter', 'Steven'],
  hasDriversLicense : true,
  //any function attached to an object is called an object
  //Here we need an expression and not a declaration

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

</pre>

11. Iteration - The for Loop
<pre>
for (let rep = 1; rep <= 10 ; rep++) {
  console.log(`Lifting weights repetition ${rep}`);  
}
</pre>
12. Looping Arrays, Breaking and Continuing
<pre>
//continue and break
console.log('---ONLY STRINGS ARE PRINTED---');
for (let i = 0; i < jonas.length ; i++) {
if (typeof jonas[i] !== 'string') {
  continue;
}
 console.log(jonas[i], typeof jonas[i ]);
}

console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < jonas.length ; i++) {
if (typeof jonas[i] === 'number') {
break;
}
console.log(jonas[i], typeof jonas[i ]);
}

</pre>

# 03 JavaScript Fundamentals - Part 2 - Part 04

13. Looping Backwards and Loops in Loops
<pre>
//Looping backwards
const jonas = [
  'Jonas',
  'Scheumern',
  2023 - 1991,
  'Teacher',
  ['Michael', 'Peter', 'Steven'],
];
for (let i = jonas.length-1 ; i >= 0; i--) {
console.log(i, jonas[i]);  
}

//A Loop inside a Loop
for (let exercise = 1; exercise < 4; exercise++) {
console.log(`---Starting Exercise ${exercise}---`);

for (let rep = 0; rep < 6; rep++) {
console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);  
}
}

</pre>
14. The while Loop
<pre>
//The while loop
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);  
  
  rep++;
}

//for a while loop we don't need the counter variable
let dice = Math.trunc(Math.random() \* 6); //trunc removes the decimal
console.log(dice);

while (dice !== 6) {
console.log(`You rolled a ${dice}`);
dice =Math.trunc(Math.random() \* 6 +1);

if (dice === 6) {
console.log('Loop is about to end');
}
}

</pre>
