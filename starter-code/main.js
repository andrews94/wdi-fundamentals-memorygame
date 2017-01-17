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

var cards = ['queen', 'queen', 'king','king'];
var cardsInPlay = [];
var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
			} if (data-card === [0 || 1]) {
				cardElement.innerHTML = '<img src="queen.png" alt="Queen" />';
			} else if (data-card === [2 || 3]) {
				cardElement.innerHTML = '<img src="king.png" alt="King" />';
			}
}

createBoard ();

function isTwoCards () {
	cardsInPlay.push(this.getAttribute('data-card'));
		if (cardsInPlay.length === 2) {
			isMatch(cardsInPlay);
			cardsInPlay = [];
			cardElement.innerHTML = '';
	}
}

isTwocards ();

