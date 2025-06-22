// Array containing the numerical scores of students
const studentGrade = [95, 82, 67, 58, 74];

// Function to convert numerical scores into grade letters
function getGrade(score) {
  let gradeLetter = [];

  // Loop through each score and determine the corresponding grade
  for (let i = 0; i < score.length; i++) {
    if (score[i] <= 100 && score[i] >= 90) gradeLetter.push("A");
    else if (score[i] <= 89 && score[i] >= 80) gradeLetter.push("B");
    else if (score[i] <= 79 && score[i] >= 70) gradeLetter.push("C");
    else if (score[i] <= 69 && score[i] >= 60) gradeLetter.push("D");
    else gradeLetter.push("below 60"); // For scores below 60
  }

  return gradeLetter; // Returns an array of grade letters
}

// Arrow function that determines pass/fail status based on grade letters
const studentStatus = (score, getGradeFunction) => {
  let studentGradeArray = getGradeFunction(score);
  let statusGrades = [];

  // Loop through the grade letters and assign PASS/FAILED status
  for (studentGradeArrays of studentGradeArray) {
    switch (studentGradeArrays) {
      case "A":
      case "B":
      case "C":
      case "D":
        statusGrades.push("PASS"); // A to D are considered passing
        break;
      default:
        statusGrades.push("FAILED"); // Anything else (i.e., below 60) is failed
        break;
    }
  }

  return statusGrades; // Returns an array of PASS/FAILED statuses
}

// Function that prints the score, grade, and status of each student
function studentOutput(score, getGradeFunction, studentStatusFunction) {
  let studentGradeArray = getGradeFunction(score);
  let studentGradeStatus = studentStatusFunction(score, getGradeFunction);
  let i = 0;

  // Loop through all students and print their details
  while (i < studentGradeArray.length) {
    console.log(`Student ${i + 1}: Score: ${score[i]}, Grade: ${studentGradeArray[i]}, Status: ${studentGradeStatus[i]}`);
    i++;
  }
}

// Function call to display each student's result
studentOutput(studentGrade, getGrade, studentStatus);
