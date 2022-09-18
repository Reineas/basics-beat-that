var gameDiceState = 'gameDiceState'
var gameChooseDice = 'gameChooseDice'
var gameCompareScores = 'gameCompareScores'
var gameState = gameDiceState

var currentPlayerRolls = []

var currentPlayer = 1
var allPlayersScore = []
var playerOneScores = []
var playerTwoScores = []

var rollDice = function (){
  var randomDecimal = Math.random() * 6
  var randomInteger = Math.floor(randomDecimal) + 1;
  return randomInteger
}

var rollDiceForPlayer = function (){
var counter = 0
while (counter <2 ){
  currentPlayerRolls.push(rollDice())
  counter = counter + 1
  }
  return 'Welcome Player ' + currentPlayer + '<br><br> You rolled <br> Dice 1: ' + currentPlayerRolls[0] + '<br> Dice 2: ' + currentPlayerRolls[1] + '<br> Please choose dice order.'
}

var getPlayerScore = function (playerInput){
  var currentPlayerScore = ''
  if (playerInput != 1 && playerInput != 2){ gameState = 'gameChooseDice' ;
      return myOutputValue = 'Error. Dice 1: ' + currentPlayerRolls [0] + '<br>Dice 2: ' + currentPlayerRolls [1] + '.'}
      console.log (gameState)
   
    if ( playerInput == 1){
    var currentPlayerScore = Number(String(currentPlayerRolls[0]) + String(currentPlayerRolls[1]));
    }

    if ( playerInput == 2){
    var currentPlayerScore = Number(String(currentPlayerRolls[1]) + String(currentPlayerRolls[0]));
    }

    allPlayersScore.push(currentPlayerScore)
    currentPlayerRolls = []

    return myOutputValue = 'Player ' + currentPlayer + ', your chosen value is: ' + currentPlayerScore + '.'
}

var comparePlayersScore = function (){
  compareMessage = 'Player 1 scored: ' + allPlayersScore[0] + '. Player 2 scored: ' + allPlayersScore [1]
  if (allPlayersScore[0] > allPlayersScore[1]) {
      compareMessage = compareMessage + '<br><br> Player 1 Wins!'
    }

    if (allPlayersScore[0] < allPlayersScore [1]){
      compareMessage = compareMessage + '<br><br> Player 2 Wins!'
    }

    if (allPlayersScore[0] == allPlayersScore [1]){
      compareMessage = compareMessage + "<br><br> It's a Tie!"
  };
    playerOneScores.push(allPlayersScore[0])
    playerTwoScores.push(allPlayersScore[1])

    console.log (playerOneScores[0])
    console.log (playerTwoScores[0])
  return compareMessage
}

var totalScores = function (){
  var sumOfPlayer1 = 0
  var sumOfPlayer2 = 0
  var myOutputValue = ''
  var leaderboardScores = ''

  for (var i = 0; i< playerOneScores.length ; i++){var sumOfPlayer1 = sumOfPlayer1 + playerOneScores[i]}
  for (var i = 0; i< playerTwoScores.length ; i++){var sumOfPlayer2 = sumOfPlayer2 + playerTwoScores[i]};

  if (sumOfPlayer1 > sumOfPlayer2 || sumOfPlayer1 == sumOfPlayer2){
    var leaderboardScores = '<br><br>Leaderboard: <br><br>Player 1: ' + sumOfPlayer1 + '<br> Player 2: ' + sumOfPlayer2};

  if (sumOfPlayer1 < sumOfPlayer2){var leaderboardScores = '<br><br>Leaderboard: <br><br>Player 2: ' + sumOfPlayer2 + '<br> Player 1: ' + sumOfPlayer1};

  return myOutputValue = '<br><br>Player 1 has a total of ' + sumOfPlayer1 + ' throughout the rounds. <br> <br> Player 2 has a total of ' + sumOfPlayer2 + ' throughout the rounds.' + leaderboardScores;
  }


var resetGame = function (){
  currentPlayer = 1;
  gameState = gameDiceState;
  allPlayersScore = []
}

var main = function (input) {
console.log (currentPlayer)
  var myOutputValue = ''
  if (gameState == 'gameDiceState'){      
    myOutputValue = rollDiceForPlayer() ;
    gameState = gameChooseDice ; 
  return myOutputValue}
  
  if (gameState == 'gameChooseDice'){
   var myOutputValue = getPlayerScore(input)

   if (currentPlayer == 1){ 
      currentPlayer = 2
      gameState = gameDiceState ; 
      return myOutputValue + "<br><br>It is now Player 2's turn"
      
    }

    if (currentPlayer == 2 ){
      gameState = gameCompareScores ;
      return myOutputValue +'<br><br>Press submit to calculate the scores.'
    }
    
  }
  if (gameState == 'gameCompareScores'){
    myOutputValue = comparePlayersScore()+ totalScores();
    resetGame();
    return myOutputValue 
}
}
