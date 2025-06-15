// Number Operations

// Initialize an array of numbers from 1 to 10
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Simulated user input to control loop repetition
const userRepeat = "YES";

// Function using a for loop to:
// 1. Print all numbers in the array
// 2. Print the square of each number
function forLoop(arrayNumber) {
  let output = "";         // To store normal numbers
  let outputSquare = "";   // To store square of numbers

  for (let i = 0; i < arrayNumber.length; i++) {
    output = output + arrayNumber[i] + " ";                     // Add number to output
    outputSquare = outputSquare + Math.pow(arrayNumber[i], 2) + " "; // Add square of number
  }

  console.log(output.trim());        // Print normal numbers
  console.log(outputSquare.trim());  // Print squared numbers
}

// Function using a while loop to print only the odd numbers in the array
function whileLoop(arrayNumber) {
  let i = 0;
  let output = "";

  while (i < arrayNumber.length) {
    if (arrayNumber[i] % 2 === 1) {          // Check if the number is odd
      output = output + arrayNumber[i] + " ";
    }
    i++;
  }

  console.log(output.trim());   // Print odd numbers
}

// Function using a do...while loop to run the above functions once
// The loop condition is based on the userRepeat constant, and it's broken after one run
function doWhileLoop(arrayNumber, userRepeat) {
  let status = userRepeat.toUpperCase();  // Convert to uppercase for consistency

  do {
    forLoop(arrayNumber);     // Call the for loop function
    whileLoop(arrayNumber);   // Call the while loop function

    status = "NO";            // Set status to NO to break the loop after one run
  } while (status === userRepeat.toUpperCase());
}

// Call the main function to start the loop logic
doWhileLoop(number, userRepeat);