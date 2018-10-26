/*
Copied from: https://github.com/jonasschmedtmann/complete-javascript-course

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


*/

var scores, roundScore, activePlayer, gamePlaying, lastRoll, winningScore, debugMode;
winningScore = 100;
debugMode = true;
initGame();

/*******************
 * EVENT LISTENERS *
 *******************/

// Roll button
document.querySelector(".btn-roll").addEventListener("click", function() {
 if (gamePlaying) {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var diceSum = dice1+dice2;
  var dice1DOM = document.querySelector(".dice-1");
  var dice2DOM = document.querySelector(".dice-2");
  if (debugMode) {
   console.log("Current roll: a " + dice1 + " and a " + dice2 );
   if (lastRoll === 0) {
    console.log("Last roll: There was no previous roll for the active player.");
   } else {
    console.log("Last roll: " + lastRoll);
   }
  }

  dice1DOM.style.display = "block";
  dice2DOM.style.display = "block";
  dice1DOM.src = "dice-" + dice1 + ".png";
  dice2DOM.src = "dice-" + dice2 + ".png";

  if ( (lastRoll === 12) && (diceSum === 12) ) {
   scores[activePlayer] = 0;
   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   nextPlayer();
   if (debugMode) { console.log("There were two double sixes in a row. Erasing total and round scores and moving on to the next player."); }
  } else if ( dice1 === 1 || dice2 === 1 ) {
   if (debugMode) { console.log("There was a 1 rolled. Erasing round score and moving to next player."); }
   nextPlayer();
  } else {
   roundScore += diceSum;
   lastRoll = diceSum;
   document.querySelector('#current-' + activePlayer).textContent = roundScore;
   if (debugMode) { console.log("There was a good number rolled. Adding scores and allowing another roll."); }
  }
 } // End if gamePlaying
}); // End roll button event listener

// Hold button
document.querySelector(".btn-hold").addEventListener("click", function() {
 if(gamePlaying) {
  // round score added to global score
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
 
  // Did player win?
 
  if (scores[activePlayer] >= winningScore) {
   document.getElementById('name-' + activePlayer).textContent = "WINNER!"
   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
   document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   document.querySelector('.dice-1').style.display = 'none';
   document.querySelector('.dice-2').style.display = 'none';
   gamePlaying = false;
  } else {
   nextPlayer();
  }
 } // End if gamePlaying
}); // End hold button event listener

// New Game Button
document.querySelector(".btn-new").addEventListener("click", initGame);

// Score input
document.getElementById("scoreInput").addEventListener("keypress", function() {
  var numOnly = /[0-9]/g;

  if (event.key === "Enter") {
   winningScore = parseInt((this.value.match(numOnly)).join(''));
   if (debugMode) {
    console.log("Howdy! The return key was pressed, so Here's the event: " + event);
    console.log("Also, here's the value of the field: " + this.value);
    console.log("Here's what it was after my regex was applied: " + winningScore);
   }
   initGame();
  }
});


/*************
 * FUNCTIONS *
 *************/

function nextPlayer() {
 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 roundScore = 0;
 lastRoll = 0;

 document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');
 document.querySelector('.dice-1').style.display = 'none';
 document.querySelector('.dice-2').style.display = 'none';
}


function initGame() {
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 gamePlaying = true;
 lastRoll = 0;

 document.getElementById("winning-score").textContent = "Winning Score: " + winningScore;
 document.getElementById("score-0").textContent = "0";
 document.getElementById("score-1").textContent = "0";
 document.getElementById("current-0").textContent = "0";
 document.getElementById("current-1").textContent = "0";
 document.querySelector(".dice-1").style.display = "none";
 document.querySelector(".dice-2").style.display = "none";
 document.getElementById("name-0").textContent = "Player 1";
 document.getElementById("name-1").textContent = "Player 2";
 document.querySelector(".player-0-panel").classList.remove("winner");
 document.querySelector(".player-1-panel").classList.remove("winner");
 document.querySelector(".player-1-panel").classList.remove("active");
 document.querySelector(".player-0-panel").classList.remove("active");
 document.querySelector(".player-0-panel").classList.add("active");
 if (debugMode) { console.log("After initGame(), the winning score is: " + winningScore); }
}
