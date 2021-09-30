console.log("Welcome to the Quiz");
let high_score = [{
  name: "GD",
  score: 4,
},
{
  name: "RAVI",
  score: 3,
}];

let score = 0;
let read_input = require("readline-sync");
let user = read_input.question("Please Enter your name: ");

// Array of 4 Questions
let questions = ["What is NeoG Camp ? ", "Who is the Owner of NeoG Camp? ", "What Does NeoG Camp Offers? ", "How many levels are there in NeoG Camp? ", "When is the last date for sumbission? "];

// 2DArray of Set of Answers for each Question
let answers = [["Bootcamp", "Online Course", "Other"], ["Ram", "Tanaypratap", "Pratap"], ["Data science", "WebDevlopment", "Digital Marketing"], ["Level 1", "Level 3", "Level 2"], ["Oct 30", "Sep 30", "Dec 30"]];

// Array of Correct Answer
let correct_ans = ["Bootcamp", "Tanaypratap", "WebDevlopment", "Level 2", "Sep 30"];

// Function to Display Question and Options
function quiz (question, answer) {
index = read_input.keyInSelect(answer, question);
}

// Loop to Diplay all the Questions and Answers
for (let i = 0; i < questions.length; i++)
{
  quiz(questions[i],answers[i]);
  if (answers[i][index] === correct_ans[i])
  {
    console.log(answers[i][index] + " " + "is the correct answer");
    score++;
    console.log("Current Score is " + score);
  }
  else {
    console.log(answers[i][index] + " " + "is the Wrong answer");
    console.log("Current Score is " + score);
  }
}

console.log(user + " " + "Your FINAL Score is " + score);
console.log("Check out the below High Score, Please share the SS if you have beaten the High score");

for(let i = 0; i< high_score.length; i++)
{
  console.log(high_score[i].name + " : " + high_score[i].score);
}
