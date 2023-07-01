//Question 1
// Create four function in JavaScript , assign the functions with 4 parameters each,
// Function 1 should perform addition
// Function 2 should perform subtraction
// Function 3 should perform multiplication
// Function 4 should perform division

// each function should contain 1 or 2 default parameters.

// Print the outputs of all the functions in the console and share the GitHub link here.

// Total Marks:10.
// 4 marks for creating 4 functions.
// 4 marks for assigning default parameters
// 2 marks for each correct output

//////////////////solution/////////////////

// Function 1
const sum = (a, b = 2) => {
  // b = 2 is an default parameters.
  return a + b;
};
// Function 2
const sub = (a, b = 2) => {
  return a - b;
};
// Function 3
const mul = (a, b = 2) => {
  return a * b;
};
// Function 4
const div = (a, b = 2) => {
  if (a < b) return b / a;
  return a / b;
};

console.log(sum(2));
console.log(sub(2));
console.log(mul(2));
console.log(div(1));
