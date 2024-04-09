console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}

// Remember to call the function to test
console.log(helloName('Chris'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(3, 5));
console.log(addNumbers(100, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(n1, n2, n3) {
  return n1 * n2 * n3;
}
console.log(multiplyThree(2, 3, 4));
console.log(multiplyThree(1, 3, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log(isPositive(7));
console.log(isPositive(-7));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return 'undefined';
  } else {
    return array[array.length - 1];
  }
}
console.log(getLast([1, 2, 3]));
console.log(getLast([]));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
let numbers = ['1', '2', '3', '4', '5'];
console.log(find('1', numbers));
console.log(find('6', numbers));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.length === 0) {
    return false;
  }
  return string.charAt(0) === letter;
}
let words = 'Hello World';
console.log(isFirstLetter('H', words));
console.log(isFirstLetter('h', words));
console.log(isFirstLetter('', words));

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}
console.log(sumAll([1, 2, 3, 4, 5]));
console.log(sumAll([]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(inputArray) {
  const positiveNumbers = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] > 0) {
      positiveNumbers.push(inputArray[i]);
    }
  }

  return positiveNumbers;
}
console.log(allPositive([-1, 1, -2, 2, -3, 3]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
// Create a function that takes the age in years and returns the age in days.
// Examples
// calcAge(65) ➞ 23725
// calcAge(0) ➞ 0
// calcAge(20) ➞ 7300
// Notes
// Use 365 days as the length of a year for this challenge.
// Ignore leap years and days between last birthday and now.
// Expect only positive integer inputs.

function calcAge(age) {
  return age * 365;
}
console.log(calcAge(45));

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
