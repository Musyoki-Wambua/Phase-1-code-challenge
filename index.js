// STUDENT GRADE GENERATOR 


// Variable declaration 
let grade = 101;

// Checking condition to execute the statement if condition is truthy, for providing grade to the student

if (grade > 79 && grade <= 100){
    console.log ("You got A Grade.");
}

else if (grade >= 60 && grade <= 79){
    console.log ("You got B Grade.");
}
else if (grade >=  49 && grade <= 59) {
    console.log ("You Got C Grade.");
}
else if (grade >= 40 && grade < 49){
    console.log ("You got D Grade.");
}
else if (grade >= 0 && grade < 40) {
    console.log ("You got an F");
}

//Checking if the values entered are between 0 - 100
// If not, show error message
else {
    console.log ("Input valid Marks!")
}

