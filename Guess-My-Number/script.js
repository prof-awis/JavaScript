'use strict';

// console.log(document.querySelector('.message').textContent);

/*DOM Manipulation(Document Object Model)
- structured representation of html structure
It allows JS to access the html elements and styles to manipulate them.
- DOM !== JavaScript(DOM is not part of JS but it is a part of Web API[Application programming interface])
*/

/*
document.querySelector('.message').textContent = 'Correct Number!';
//elemetn changed to Correct Number!

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
document.querySelector('.guess').value;
*/
const x = function () {
  console.log(23);
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number!';
  }
});
