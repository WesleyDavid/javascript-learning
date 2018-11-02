/*
 * Dorky quiz. This is the final exercise for section 5 of Jonas Schmedtmann's udemy course
 */


/*************************
 *  Function Constructors
 */

var Question = function (text, answers, correctAnswer) {
 this.text = text;
 this.answers = answers;
 this.correctAnswer = correctAnswer;
} // End Question function constructor


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

/***************
 *  Global Vars
 */

var questionList = [];
var randomQuestion;


/********************
 *  Global Functions
 */

function initQuestions() {
 questionList[0] = new Question(
  "What is the programming language that you've been learning in this course?",
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

randomQuestion = Math.floor( (Math.random() * questionList.length));
questionList[randomQuestion].printQuestion();
questionList[randomQuestion].printAnswers();


