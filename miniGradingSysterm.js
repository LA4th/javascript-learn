const studentGrade = [95, 82, 67, 58, 74];

function getGrade(score) {
  let gradeLetter = [];

  for(let i = 0; i < score.length; i++) {
    if(score[i] <= 100 && score[i] >= 90) gradeLetter.push("A");
    else if(score[i] <=89 && score[i] >= 80) gradeLetter.push("B");
    else if(score[i] <= 79 && score[i] >= 70) gradeLetter.push("C");
    else if(score[i] <= 69 && score[i] >= 60) gradeLetter.push("D");
    else gradeLetter.push("below 60");
  }

  return gradeLetter;
}

const studentStatus = (score, getGradeFunction) => {
  let studentGradeArray = getGradeFunction(score);
  let statusGrades = [];
  for(studentGradeArrays of studentGradeArray) {
    switch(studentGradeArrays){
      case "A":
        statusGrades.push("PASS");
        break;
      case "B":
        statusGrades.push("PASS")
        break;
      case "C":
        statusGrades.push("PASS");
        break;
      case "D":
        statusGrades.push("PASS");
        break;
      default:
        statusGrades.push("FAILED");
        break;
    }
  }
  return statusGrades;
}

function studentOutput(score, getGradeFunction, studentStatusFunction) {
  let studentGradeArray = getGradeFunction(score);
  let studentGradeStatus = studentStatusFunction(score, getGradeFunction);
  let i = 0;

  while(i < studentGradeArray.length) {
    console.log(`Student ${i + 1}: Score: ${score[i]}, Grade: ${studentGradeArray[i]}, Status: ${studentGradeStatus[i]}`);

    i++;
  }
}
studentOutput(studentGrade, getGrade, studentStatus);
