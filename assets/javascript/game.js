
$(document).ready(function() {

$("h1").html("Select your character!");
var hasPlayerBeenChosen = false;
var hasEnemyBeenChosen = false;
$("#vsSymbol").hide();
$("#attackBtn").hide();

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
	$(".charBtn").on("click", function () {	//This whole block of code is working.

		if (hasPlayerBeenChosen === false) {
			
			$(this).addClass("isPlayer");
			
			hasPlayerBeenChosen = true;

			$(this).appendTo("#playerLocation");

			// $(".starthealthPoints").hide(this);

			$("h1").html("Select your opponent!");		
		
		} else if (hasPlayerBeenChosen === true) {
			
			
			$(this).addClass("isUnderAttack");

			$(this).appendTo("#enemyLocation");

			$("#vsSymbol").fadeIn(500);
			
			$("#attackBtn").show();

			hasEnemyBeenChosen = true;
		
		}
	});
//This block of code is working.

		// if (hasEnemyBeenChosen === true) {
			
		// 	if (enemyHealth > 0) {
		// 		return;
		// 	} else {

		// 	}
		// }
	

	



			
		// 	})
		// 	}};
	// 	}
	// });
	//The enemy character is labelled as current enemy.
// }

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