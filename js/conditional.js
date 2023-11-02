// conditional statement

//syntax
// let afternoon = "12pm ";

// if (afternoon){
//     reply = "good afternoon";
// }else{
//     reply = " good morning";
// }

// console.log(reply);

// let daysOfactivities = "monday, tuesday, wednesday, thursday, friday";

// if (daysOfactivities){
//     reply = " it's time to study";
// }else{
//     replay = "it's weekend !!!";
// }

// console.log(reply);

// let daysOFweek = 5;
// let dayName;

// if (daysOFweek == 1){
//     dayName = "sunday";

// }else if (daysOFweek == 2){
//     dayName = "monday";

// }else if (daysOFweek == 3){
//     dayName = "tuesday"

// }else if (daysOFweek == 4){
//     dayName = "wednesday";

// }else if(daysOFweek == 5){
//     dayName = "thursday";

// }else if(daysOFweek == 6){
//     dayName = "friday";

// }else if(daysOFweek == 7){
//     dayName = "saturday";

// }else{
//     dayName = "invalid  day name";
// }

// console.log(`today is ${dayName}`);

// let a = 89 - 90;
// let b =  79 - 80;
// let c =  69 - 70;
// let d =  59 - 60;
// let e =  49 - 50;
// let f9 =  0 - 49;

// let examScore = 95;
// let grade;

// if (examScore >= 89 && examScore >= 90){
//     grade = "A";

// }else if(examScore >= 79 && examScore >= 80){
//     grade = "B";

// }else if(examScore >= 69 && examScore >= 70){
//     grade = "C";

// }else if(examScore >= 59 && examScore >= 60){
//     grade = "D";

// }else if(examScore >= 49 && examScore >= 50){
//     grade = "E";

// }else if(examScore >= 0 && examScore >= 49){
//     grade = "f9";

// }else{
//     grade = "invalid score !!"
// }

// console.log(`your grade is ${grade}`);

// Switch statements

// sythax
// rock scissors game with switch case

let playOne = "scissors";
let computer = "rock";

switch (playOne) {
  case computer:
    console.log("tie game !");
    break;

  case "rock":
    if (computer === "paper") {
      console.log("computer wins !");
    } else {
      console.log("player one wins !");
    }
    break;
  case "rock":
    if (computer === "scissors") {
      console.log("computer wins !");
    } else {
      console.log("player one wins !");
    }
    break;
  default:
    if (computer === "rock") {
      console.log("computer wins !");
    } else {
      console.log("player one wins !");
    }
}
