
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
var enemiesLeft = 3;
// $("#finnHealth").html(Finn.healthPoints);
// $("#theIKHealth").html(theIceKing.healthPoints);
// $("LSPHealth").html(LSP.healthPoints);
// $("#LGHealth").html(LemonGrab.healthPoints);


function playerAttack() {
	//redefines the enemy's health based on player's attack points.
	$(".isUnderAttack").healthPoints = $(".isUnderAttack").healthPoints - $(".isPlayer").attackPoints;
	//adjusts the number which will alter the player attackPoints
	$(".isPlayer").interval = $(".isPlayer").interval++;
	//adjusts the player's attackPoints
	$("is.Player").attackPoints = $("isPlayer").attackPoints * $(".isPlayer").interval;

	// $("")

	if (($(".isUnderAttack").healthPoints <= 0) && (enemiesLeft > 0)) {
		//initialize next enemy
		enemiesLeft--;

		$(".isUnderAttack").appendTo("#characterSelectPanel");
		$(".isUnderAttack").off("click");
		$(".isUnderAttack").removeClass("isUnderAttack");

		if (enemiesLeft === 0) {
			
			gameWon();
		} //end internal if
 	
	}	//end if
	//Sets enemy's attack parameters
	if ((enemiesLeft > 0) && ($(".isUnderAttack").health > 0)) {
		
		setTimeout(counterAttack, 1000);

	}//end if
} // end playerAttack

function gameWon() {

	alert("Mathematical!");

	$("h1").html("Select your character!");
	//Allows character to be chosen
	var hasPlayerBeenChosen = false;
	//Defines no enemy yet
	var hasEnemyBeenChosen = false;
	//prevents vs token from showing
	$("#vsSymbol").hide();
	//disables attack
	$("#attackBtn").hide();
	var enemiesLeft = 3;
} //end gameWon

function gameOver() {

	alert("Game over!");

	$("h1").html("Select your character!");
	//Allows character to be chosen
	var hasPlayerBeenChosen = false;
	//Defines no enemy yet
	var hasEnemyBeenChosen = false;
	//prevents vs token from showing
	$("#vsSymbol").hide();
	//disables attack
	$("#attackBtn").hide();
	var enemiesLeft = 3;
} //end gameOver

function counterAttack() {
//redefines the player's health after enemy attack.
$(".isPlayer").healthPoints = $(".isPlayer").healthPoints - $(".isUnderAttack").attackPoints;

// $("#playerLocation").html("<img src = 'assets/images/pow (2).png'>");

// $("#playerLocation").html(".isPlayer").delay(1000);
	/*this will run after the game has checked whether an enemy has been defeated, 
	so the player can kill an enemy if the counter attack would have killed them. */
	if ($(".isPlayer").healthPoints <= 0) {
		
		gameOver();
	} //end if statement
} //end counterAttack

var Finn =  {healthPoints: 200,
			attackPoints: 8,
			interval: 1,
            id: $("finn")
			};
var theIceKing =  {healthPoints: 200,
			attackPoints: 8,
			interval: 1,
            id: $("theIceKing")
			};
var LSP =  {healthPoints: 200,
			attackPoints: 8,
			interval: 1,
            id: $("LSP")
			};
var LemonGrab =  {healthPoints: 200,
			attackPoints: 8,
			interval: 1,
            id : $("LemonGrab")
			};
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
			//The character can be clicked on and moved to 
			//The enemy section, but cannot be replaced.
			$(this).removeClass("enemyOption");
			$(this).removeClass("characterOption");

			if ($(this).hasClass("isPlayer")) {

				$(this).removeClass("charBtn");
				$(this).off("click");
			} //ends internal if statment

	//If a character has already been selected
		} else if ((hasPlayerBeenChosen === true) //this } ends player selection
		  && ($(this).hasClass("isUnderAttack"))) {

				$(this).appendTo("#characterSelectPanel");

				$(this).removeClass("isUnderAttack");

				hasEnemyBeenChosen = false;

		} else if ((hasEnemyBeenChosen === false) // this } ends if character has already been selected
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
		} //ends enemy select statement
	}); //end click functions
	//Sets player's attack parameters

	//Click function for attack button
	$("#attackBtn").on("click", function () {
		//calls player attack
		playerAttack();

	}); //ends attack
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
	// hasPlayerBeenChosen = false;
	// //reset photo locations
	// $("#vsLocation").hide();
	//hide character stats
	//reset character stats