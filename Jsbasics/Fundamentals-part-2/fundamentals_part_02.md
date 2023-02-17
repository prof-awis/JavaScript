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
