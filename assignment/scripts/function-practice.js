console.log('***** Function Practice *****')

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
function helloName( name ) {
  return name;
}
// Remember to call the function to test

console.log( 'Hello', helloName( 'John' ) );

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;    // return firstNumber + secondNumber;
}

console.log('4 plus 5 is', addNumbers(4,5));

// 4. Function to multiply three numbers & return the result
function multiplyThree( number1, number2, number3 ){
  return number1 * number2 * number3;
}

console.log('2 times 3 times 6 is', multiplyThree( 2, 3, 6 ));


// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number >= 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say true', isPositive(0) ); // originally this
// said 'should say false' but based on the instruction from 5), it should be true.
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

function getLast( ...array ) {  // I wanted to make this accept an undefined number of arguments.
  let lastItem = array.pop();
  if ( array != null ) {
    return lastItem;
  } else {
    return 'undefined';
  }
}

console.log('the last number is',getLast(1, 4, 6))

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

const array = [1, 5, 7, 8];

function findValue(value) {
  for (i of array) {
    if (i == value) {
      console.log('The array contains', value);
      return true;
    } else {
      continue; // is there a better way to do this? returning false breaks
                // the loop before I've checked the whole array for the value
    }
  }
  console.log('the array does not contain', value);
  return false;
}

console.log(findValue(8));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (string.charAt(0) === letter) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ...integers ) {
  let sum = 0;
  for (i of integers) {
    sum += i;
  }
  return sum;
}

console.log('The sum is', sumAll( 1, 4, 4, 5, 10, 68));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveOnly( ...integers ) {
  let positiveArray = [];
  for (i of integers) {
    if (i > 0) {
      positiveArray.push(i);
    } else {
      continue;
    }
  } return positiveArray;
}

console.log('negative and positive array', positiveOnly(-3, 4, -1, 7, -98, 86, 2));
console.log('negative only test array', positiveOnly(-3, -1, -98));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!

// https://edabit.com/challenge/b7iHQDw72zzkmgCun
