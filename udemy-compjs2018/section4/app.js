/*
Copied from: https://github.com/jonasschmedtmann/complete-javascript-course

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game


*/

var scores, roundScore, activePlayer, gamePlaying, lastRoll;
initGame();

/*******************
 * EVENT LISTENERS *
 *******************/

// Roll button
document.querySelector(".btn-roll").addEventListener("click", function() {
 if (gamePlaying) {
  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector(".dice");

  /*
  This is one way to simplify the harsh if logic below. Then just check for the truth of doubleSix.
  if ((lastRoll === 6) && (dice === 6)) {
   var doubleSix = true; // Loses value when function returns, so will go back to undefined and be ready for the next click.
  }
  */

  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  if (dice !== 1 && !(((lastRoll === 6) && (dice === 6)))) { // The logic here is hard to read. I could simplify it with more lines and a var above I gues. ¯\_(ツ)_/¯
   roundScore += dice;
   lastRoll = dice;
   document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else if (lastRoll === 6 && dice === 6) {
   scores[activePlayer] = 0;
   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   nextPlayer();
  } else {
   nextPlayer();
  }
 }
}); // End roll button event listener

// Hold button
document.querySelector(".btn-hold").addEventListener("click", function() {
 if(gamePlaying) {
  // round score added to global score
  scores[activePlayer] += roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
 
  // Did player win?
 
  if (scores[activePlayer] >= 20) {
   document.getElementById('name-' + activePlayer).textContent = "WINNER!"
   document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
   document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
   document.querySelector('.dice').style.display = 'none';
   gamePlaying = false;
  } else {
   nextPlayer();
  }
 }
});

// New Game Button
document.querySelector(".btn-new").addEventListener("click", initGame);


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
 document.querySelector('.dice').style.display = 'none';
}


function initGame() {
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 gamePlaying = true;
 lastRoll = 0;

 document.getElementById("score-0").textContent = "0";
 document.getElementById("score-1").textContent = "0";
 document.getElementById("current-0").textContent = "0";
 document.getElementById("current-1").textContent = "0";
 document.querySelector(".dice").style.display = "none";
 document.getElementById("name-0").textContent = "Player 1";
 document.getElementById("name-1").textContent = "Player 2";
 document.querySelector(".player-0-panel").classList.remove("winner");
 document.querySelector(".player-1-panel").classList.remove("winner");
 document.querySelector(".player-1-panel").classList.remove("active");
 document.querySelector(".player-0-panel").classList.remove("active");
 document.querySelector(".player-0-panel").classList.add("active");
}
