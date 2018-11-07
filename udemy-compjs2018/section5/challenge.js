/*
 * Dorky quiz. This is the final exercise for section 5 of Jonas Schmedtmann's udemy course
 */

(function () { // Giant IIFE to make the game modular and not interfere with anyone else's code that may want to import it.
 
 /*************************
  *  Function Constructors
  */
 
 var Question = function (text, answers, correctAnswer) {
  this.text = text;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
 } // End Question function constructor
 
 var GameState = function () {
 }
 
 /**************
  *  Prototypes
  */
 
 Question.prototype.printAnswers = function() {
  for (i in this.answers) {
   console.log((parseInt(i)+1) + ") " + this.answers[i]);
  }
 } // End Question printAnswers() prototype
 
 Question.prototype.printQuestion = function() {
  console.log(this.text);
 }
 
 Question.prototype.checkAnswer = function(currentAnswer) {
  currentAnswer--; // Adjust it down because we don't use zero as the start of answers in the console
  if (currentAnswer === this.correctAnswer) {
   console.log("You got the correct answer!");
   currentGame.currentScore++;
  } else {
   console.log("Sorry, that answer is not correct.");
  }
 }
 
 GameState.prototype.init = function() {
  this.isPlaying = true;
  this.currentScore = 0;
 }
 
 GameState.prototype.addPoint = function() {
  this.currentScore++;
 }

 GameState.prototype.displayScore = function() {
  console.log("Your current score is: " + this.currentScore);
 }


 /***************
  *  Global Vars
  */
 
 var questionList = [];
 var randomQuestion;
 var userAnswer;
 var currentGame = new GameState();
 
 /********************
  *  Global Functions
  */
 
 function initQuestions() {
  questionList[0] = new Question(
   "What is the language that you've been learning in this course?",
   ["Go","Lisp","JavaScript","Rust"],
   2
  ); // End first question creation.
  
  questionList[1] = new Question(
   "What is the first name of your course instructor?",
   ["Jonathan","Jonah","Jonas","James"],
   2
  ); // End second question creation.
  
  questionList[2] = new Question(
   "How many total sections are there in the course?",
   [8,9,10,11],
   3
  ); // End third question creation.
 }
 
 
 /*********************
  *  Application Start
  */
 initQuestions();
 currentGame.init();
 
while (currentGame.isPlaying  === true) { 
  randomQuestion = Math.floor( (Math.random() * questionList.length));
  questionList[randomQuestion].printQuestion();
  questionList[randomQuestion].printAnswers();
  
  userAnswer = prompt("Using the appropriate number, what is the answer to the question? (Or type 'exit' to quit.)");
  if (userAnswer === null) {
   continue;
  } else if (userAnswer.toLowerCase() === "exit") {
   gamePlaying = false;
   console.log("Thanks for playing!");
  } else {
   questionList[randomQuestion].checkAnswer(parseInt(userAnswer));
   currentGame.displayScore();
  }
 }
}) ();
