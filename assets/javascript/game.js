
$(document).ready(function() {

var hasPlayerBeenChosen = 0
$("#vsSymbol").hide();
$("#attackBtn").hide();

// var playerChoices {
//  [finn = {
	// 	healthPoints: 200
	// 	attackPoints: 8
	// 	interval: 1
	// },

// 	LemonGrab = {
// 		healthPoints: 230
// 		attackPoints: 10
// 		interval: 1
// 	},

// 	theIceKing = {
// 		healthPoints: 250
// 		attackPoints: 12// 		
// 		interval: 1
// 	},

// 	LSP = {
// 		healthPoints: 150
// 		attackPoints: 16
// 		interval: 1
// 	}]

// var gamePlay = {

// 	selectedByPlayer: function () {
// 		isPlayer = true
// 		interval = attackPoints + attackPoints
// 		//display in playerLocation
// 	}

// 	attackMode: function () {

// 	}

// 	opponentOfPlayer: function () {
// 		//display in enemyLocation
// 		counterAttack = attackPoints

// 	}
// }

// //Character Creation
// 	//

// //Game Start
// $("gameStartHandler").on("click", function () {

// 	//Character moves to playerLocation.
// 	if (finn == isPlayer) {
// 		$(".finn").appendTo("#playerLocation");
// 	} else if (theIceKing == isPlayer) {
// 		$(".theIceKing").appendTo("#playerLocation");
// 	} else if (LSP == isPlayer) {
// 		$(".LSP").appendTo("#playerLocation");
// 	} else if (LemonGrab == isPlayer) {
// 		$(".LemonGrab").appendTo("#playerLocation");
// 	};
// 	//Enemies move to enemyLocation.
// 	// $(!isPlayer).innerHTML("")
// 	// Vs symbol appears in vsLocation.


// 	//Attack button becomes functional.
// })
//isPlayerSelector
if (hasPlayerBeenChosen == 0) {
	$(".characterOption").on("click", function () {	
		//Click to select player character.
		// var chosenCharacter = $(this).addClass("isPlayer");
		hasPlayerBeenChosen = 1;
		$("#vsSymbol").fadeIn(500);
		$("#attackBtn").show();
	})
}
//combatantSelector on click function () {
if (hasPlayerBeenChosen == 1) {
	$(".characterOption").on("click", function () {	
		var chosenEnemy = $(this).addClass("isUnderAttack");
	})
}
	//The enemy character is labelled as current enemy.
// }

//Stats
	//HP displayed at the bottom of the defender's picture.
	//HP at the bottom of the player character's picture.

//combatMechanicsHandler
// 	//The player will now be able to click the attack button.
// $("#attackBtn").on("click", function () {
// 		// function buildinterval {
// 		// 	attackPower = interval++;
// 		// }
// 		// function attackPointsTotal {
// 		// 	attackPoints = attackPoints * attackPower;
// 		// }
// 	// Whenever the player clicks attack, their character damages the defender. 
// 	// The opponent will lose HP (health points). 
// 	// The opponent character will instantly counter the attack.
// 	// the player's character will lose some of their HP. 
// })


//combatantDeathHandler
	//enemy health is 0 or below, remove label
	//combatantSelector occurs again
	//The player wins the game by defeating all enemy characters. 

//gameOver
	//playerDeathHandler
		//The player loses the game the game if their character's HP falls to zero or below.
	//Display gameOver
	// hasPlayerBeenChosen = 0;
	// //reset photo locations
	// $("#vsLocation").hide();
	//hide character stats
	//reset character stats



});