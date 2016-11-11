
$(document).ready(function() {
//Displays initial gameplay instructions
$("h1").html("Select your character!");
//Allows character to be chosen
var hasPlayerBeenChosen = false;
//Defines no enemy yet
var hasEnemyBeenChosen = false;
//prevents vs token from showing
$("#vsSymbol").hide();
//disables attack
$("#attackBtn").hide();

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
		//I MUST CHANGE THISSSSS...... 
			//The character can be clicked on and moved to 
			//The enemy section, but cannot be replaced.
			$(this).removeClass("enemyOption");
			$(this).removeClass("characterOption");

			if ($(this).hasClass("isPlayer")) {

				$(this).removeClass("charBtn");
				$(this).off("click");
			}

	//If a character has already been selected
		} else if ((hasPlayerBeenChosen === true) 
		  && ($(this).hasClass("isUnderAttack"))) {

				$(this).appendTo("#characterSelectPanel");

				$(this).removeClass("isUnderAttack");

				hasEnemyBeenChosen = false;

		} else if ((hasEnemyBeenChosen === false)
		  && (hasPlayerBeenChosen === true)) {
			//Selection becomes player's opponent
			$(this).addClass("isUnderAttack");
			//Opponent moves to new area of the screen
			$(this).appendTo("#enemyLocation");
			//The vs token appears
			$("#vsSymbol").fadeIn(500);
			//The attack and clear buttons become available.
			$("#attackBtn").show();
			//Blocks multiple enemies from being selected.
			hasEnemyBeenChosen = true;
		}
	});

	$("#attackBtn").on("click", function () {
			//Combat
		$(".isPlayer").find()	
		// function buildinterval {
		// attackPower = interval++;
		// }
		// function attackPointsTotal {
		// attackPoints = attackPoints * attackPower;
		// }
	});

//Stats
	//HP displayed at the bottom of the defender's picture.
	//HP at the bottom of the player character's picture.

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