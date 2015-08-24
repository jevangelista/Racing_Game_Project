// OOP Racing Game example boilerplate code


var player1 = new Player();
var player2 = new Player();
var counterPlayer1 = 0;
var counterPlayer2 = 0;
var movesToWin = 8;
var counterRound = 1;
var player1Wins = 0;
var player2Wins = 0;

/** $(document).ready(function)() { }); */

function Game(player1, player2, track) {
  //Create a new instance of player 1
  this.player1 = player1;

  //Do the same for a player 2
  this.player2 = player2;

  //Create the track
  //this.track = ...
  this.track = track
}

// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  // **going to be a method of some sort
};

// A starter Player constructor.
function Player(name, position) {
  //this.name = ...
  //this.position = ...
  this.name = name;
  this.position = position;
};

// Remember: prototypes are shared functions between all game instances
Player.prototype.move = 
  //update player's position 
  $(document).keypress(function(move){

//Stores key codes
  var key1 = 49;
  var key2 = 48; 

//Triggers player1 to move when "1" is pressed
  if (move.which == key1) {
  console.log("Player one pressed");
  counterPlayer1 ++;
  $('#trackA' + (counterPlayer1 + 1)).addClass('player1');
  $('#trackA' + (counterPlayer1)).removeClass('player1').addClass('rainbow');
  wins();


//Triggers player2 to move when "0" is pressed    
  } else if (move.which == key2) {
    console.log("Player two pressed");
    counterPlayer2 ++;
  $('#trackB' + (counterPlayer2 + 1)).addClass('player2');
  $('#trackB' + (counterPlayer2)).removeClass('player2').addClass('rainbow');
  wins();
  }



});

//See who wins a round, and keeps track of wins and round
function wins() {
  if (counterPlayer1 > movesToWin) {
    alert(player1.name + " wins!");
    player1Wins ++;
    counterRound ++;
    $('#player1Wins').text(player1Wins);  
    $('#rounds').text(counterRound); 
  } else if (counterPlayer2 > movesToWin){
    alert(player2.name + " wins!");
    player2Wins ++;
    counterRound ++;
    $('#player2Wins').text(player2Wins);  
    $('#rounds').text(counterRound);
  }
    
};



// A starter Track constructor.
function Track() {
    $('.racetrack table tr td').removeClass('player1 player2 rainbow');
    $('#trackA1').addClass('player1');
    $('#trackB1').addClass('player2');

  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};



// Start the game!
var game = new Game();
game.init();


var player1 = new Player('Jamie', $('#trackA1').addClass('player1'));
var player2 = new Player('James', $('#trackB1').addClass('player2'));

$(function() {
    console.log( "Testing... 1.2.3..." );



    $('button').click( function() {
        Track();
        console.log('clicked button');
    });


});

