// OOP Racing Game example boilerplate code


var player1 = new Player();
var player2 = new Player();

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
Player.prototype.move = function() {
  //update player's position **going to be a method of some sort
};


// A starter Track constructor.
function Track() {
    $('.racetrack table tr td').removeClass('player1 player2');
    $('#trackA1').attr('class', 'player1');
    $('#trackB1').attr('class', 'player2');
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};



// Start the game!
var game = new Game();
game.init();


var player1 = new Player('Jamie', $('#trackA1').attr('class', 'player1'));
var player2 = new Player('Beau', $('#trackB1').attr('class', 'player2'));

$(function() {
    console.log( "Testing... 1.2.3..." );



    $('button').click( function() {
        Track();
        console.log('clicked button');
    });


});

