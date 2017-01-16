console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
/*
if (cardTwo === cardFour) {
	alert ("You found a match!");
} else if (cardOne === cardThree) {
	alert ("You found a match!")
} else if (cardOne === cardTwo) {
	alert ("Sorry, try again.")
} else if (CardTwo === cardThree){
	alert ("Sorry, try again.")
}
*/
var createCards = function() {
	var gameBoard = document.getElementById('game-board');
	for (var i = 0; i < 4; i++) {
		var newDiv = document.createElement('div');
		newDiv.id = 'game-board';
		newDiv.className = 'card';
		gameBoard.appendChild(newDiv);
	}
} 
createCards();

