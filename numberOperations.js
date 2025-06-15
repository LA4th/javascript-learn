// Number Operations

// Define an array containing numbers from 1 to 10
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Simulated flag to control loop repetition (as if user said "YES")
const userRepeat = "YES";

// Function to display:
// 1. All numbers in the array
// 2. The square of each number (number * number)
function forLoop(arrayNumber) {
  let output = "";         // Stores all numbers
  let outputSquare = "";   // Stores the square of each number

  for (let i = 0; i < arrayNumber.length; i++) {
    output += arrayNumber[i] + " ";                          // Append number
    outputSquare += Math.pow(arrayNumber[i], 2) + " ";       // Append square of number
  }

  console.log(output.trim());        // Output all numbers
  console.log(outputSquare.trim());  // Output squared numbers
}

// Function to display only odd numbers from the array using a while loop
function whileLoop(arrayNumber) {
  let i = 0;
  let output = "";

  while (i < arrayNumber.length) {
    if (arrayNumber[i] % 2 === 1) {            // If the number is odd
      output += arrayNumber[i] + " ";          // Append it to the output
    }
    i++;
  }

  console.log(output.trim());   // Output odd numbers
}

// Function to control the program flow using a do...while loop
// Runs the forLoop and whileLoop functions once
function doWhileLoop(arrayNumber, userRepeat) {
  let status = userRepeat.toUpperCase();  // Ensure case-insensitive comparison

  do {
    forLoop(arrayNumber);     // Run the for loop operation
    whileLoop(arrayNumber);   // Run the while loop operation

    status = "NO";            // End the loop after one run
  } while (status === userRepeat.toUpperCase());
}

// Start the loop logic
doWhileLoop(number, userRepeat);
