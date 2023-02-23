// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';

if (x === 23) console.log(23);

const calcAge = (birthYear) => 2037 - birthYear;

// I will need to install to do highlights extensions
/* THINGS TO DO TO BE A GOOD DEVELOPER
1. Set a specific, measurable, realistic and time-based goal for yourself. Imagine a big project you wanna do.
2. Understand the code and then type.
3. After you learn a new feature or concept ,use it immediately. Take notes and challenge yourself.
4. Practice on  your own. Come up with your own project ideas. Practice outside your course.
5. Don't get stuck trying to write the perfect code. Just write a tons of code, no matter the quality. Clean and efficient code will come on its own.
6. Embrace that you will not know  everything.
7. Don't learn in isolation. Explain the new concepts to othe people. Share your goals to make yourself accountable.
8. After finishing a couple of courses don't think yourself as a web developer(Job-ready). Course are jsut an amaizng starting point, but are only the beginning of your journey. You need to have the mindest of fixing problems.
- You'll never stop learning in your life when you start coding.
*/

//PROBLEM
// We work for a company building a smart home thermometer. Our most recent task is this : "GIven an array of temperatures of one day, calculate the temperature amplitude, keep in mind that sometimes there  might be a sensor error. "

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1. Understand the problem
//Temp amplitude? Difference between the highest and lowest temp
// How to compute max and min temp?
// What's a sensor error ? and what to do?

//2. Breaking into sub problems
// Hoq to ignore errors?
// Find max value in temp array
// Find min value in temp array
// subtract min from max and return it

//My way of doing it
const maxTemp = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
  }
  return max;
};

const minTemp = function (temps) {
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] < min) {
      min = temps[i];
    }
  }
  return min;
};

const calcAmplitude = function (temps) {
  const amplitude = maxTemp(temps) - minTemp(temps);
  return console.log(`The Amplitude is : ${amplitude}`);
};
// calcAmplitude([2, 6, 4, 34, 23, 35, 5]);
calcAmplitude(temperatures);

// ALternative way
const calcTempAmplitude = function (temp) {
  let maximum = temp[0];
  let minimum = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > maximum) {
      maximum = curTemp;
    }
    if (curTemp < minimum) {
      minimum = curTemp;
    }
  }
  console.log(maximum, minimum);
  return maximum - minimum;
};
const Amplitude = calcTempAmplitude(temperatures);
console.log(Amplitude);

//PROBLEM 2
//Function should now receive 2 arrays of temps
//1. Undersanding the problem
// - With 2 arrays, should we implement functionality twice? NO!Just merge the two arrays

//2. Breaking up into sub-problems

const calcTempAmplitudeNew = function (t1, t2) {
  //how to merge
  const temp = t1.concat(t2);
  console.log(temp);

  let maximum = temp[0];
  let minimum = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curTemp = temp[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > maximum) {
      maximum = curTemp;
    }
    if (curTemp < minimum) {
      minimum = curTemp;
    }
  }
  console.log(maximum, minimum);
  return maximum - minimum;
};
const AmplitudeNew = calcTempAmplitudeNew(
  [2, 5, 6, -5, -10],
  [20, 11, 30, 2, 6, 8]
);
console.log(AmplitudeNew);
