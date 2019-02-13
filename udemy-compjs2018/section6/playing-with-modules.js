/*
 *  App from Jonas Schmedtmann's course here: https://github.com/jonasschmedtmann/complete-javascript-course/tree/master/6-budgety/starter
 */

 var budgetController = (function (){
/* Private Begins */    
    var x = 23;
    var add = function(a){
         return x+a;
     }


/* Public Begins */
     return {
         publicTest: function(b) {
             console.log(add(b));
         }
     }
})();