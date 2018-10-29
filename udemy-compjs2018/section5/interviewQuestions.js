/* Rewrite this harnessing the power of the closure:

function interviewQuestion(job) {
 if (job === 'designer') {
  return function(name) {
   console.log(name + ', can you please explain what UX design is?');
  }
 } else if (job === 'teacher') {
  return function(name) {
   console.log('What subject do you teach, ' + name + '?');
  }
 } else {
  return function(name) {
   console.log('Hello ' + name + ', what do you do?');
  }
 }
} // End interviewQuestion

*/

function interviewQuestionFactory(job) {
  var designerQuestion = "Can you please explain what UX design is?";
  var teacherQuestion = "What subject do you teach?";
  var genericQuestion = "What do you do for your vocation?";

  return function(name) {
   if (job === 'designer') {
    console.log('Hello ' + name + '. ' + designerQuestion);
  } else if (job === 'teacher') {
    console.log('Hello ' + name + '. ' + teacherQuestion);
  } else {
   console.log('Hello ' + name + ', ' + genericQuestion);
  }
 }
} 

interviewQuestionFactory("teacher")("Deborah");
