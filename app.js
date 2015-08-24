// OOP Racing Game example boilerplate code


var player1 = new Player();
var player2 = new Player();
var counterPlayer1 = 0;
var counterPlayer2 = 0;

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


//Triggers player2 to move when "0" is pressed    
  } else if (move.which == key2) {
    console.log("Player two pressed");
    counterPlayer2 ++;
  $('#trackB' + (counterPlayer2 + 1)).addClass('player2');
  $('#trackB' + (counterPlayer2)).removeClass('player2').addClass('rainbow');
  }



});


// A starter Track constructor.
function Track() {
    $('.racetrack table tr td').removeClass('player1 player2');
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
var player2 = new Player('Beau', $('#trackB1').addClass('player2'));

$(function() {
    console.log( "Testing... 1.2.3..." );



    $('button').click( function() {
        Track();
        console.log('clicked button');
    });


});

