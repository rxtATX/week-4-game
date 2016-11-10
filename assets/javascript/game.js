
$(document).ready(function() {
//Displays initial gameplay instructions
$("h1").html("Select your character!");
//Allows character to be chosen
var hasPlayerBeenChosen = false;
//Defines no enemy yet
var hasEnemyBeenChosen = false;
//prevents vs token from showing
$("#vsSymbol").hide();
//disables attack and reset buttons.
$("#attackBtn").hide();
$("#clearBtn").hide();
// var playerChoices {
//  [finn = {
	// 	healthPoints: 200
	// 	attackPoints: 8
	// 	interval: 1
	// },

	// LemonGrab = {
	// 	healthPoints: 230
	// 	attackPoints: 10
	// 	interval: 1
	// },

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




//This block of code is working
//When an image of the characters is clicked on:
	$(".charBtn").on("click", function () {
	//If no character was clicked on before it:
		if (hasPlayerBeenChosen === false) {
			//Selection becomes the player's character
			$(this).addClass("isPlayer");
			//Blocks multiple characters from being selected
			hasPlayerBeenChosen = true;
			//Moves the image of the player into new area
			$(this).appendTo("#playerLocation");
			// $(".starthealthPoints").hide(this);
			//Text on page changes play instructions.
			$("h1").html("Select your opponent!");		
	//If a character has already been selected
		} else if (hasPlayerBeenChosen === true) {
			//Selection becomes player's opponent
			$(this).addClass("isUnderAttack");
			//Opponent moves to new area of the screen
			$(this).appendTo("#enemyLocation");
			//The vs token appears
			$("#vsSymbol").fadeIn(500);
			//The attack and clear buttons become available.
			$("#attackBtn").show();
			$("#clearBtn").show();
			//Blocks multiple enemies from being selected. NEEDS WORK
			hasEnemyBeenChosen = true;
		}
	});
var currentEnemy = $(".charBtn").hasClass("isUnderAttack");

	$("#clearBtn").on("click", function () {

		if (currentEnemy) {

			$(currentEnemy).appendTo("#characterSelectPanel");

		}
		
		$("#charBtn").removeClass("isUnderAttack");
		
		hasEnemyBeenChosen = false;	
		
	})

	//The enemy character is labelled as current enemy.

//Stats
	//HP displayed at the bottom of the defender's picture.
	//HP at the bottom of the player character's picture.

//combatMechanicsHandler
// 	//The player will now be able to click the attack button.
// $("#attackBtn").on("click", function () {
		// function buildinterval {
		// 	attackPower = interval++;
		// }
		// function attackPointsTotal {
		// 	attackPoints = attackPoints * attackPower;
		// }
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