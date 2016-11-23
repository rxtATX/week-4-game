$(document).ready(function() {
	gameInit();
});

//Global Variables
var enemiesLeft = 3;
var hasPlayerBeenChosen = false;
var hasEnemyBeenChosen = false;
var playerAttackPoints, enemyAttack;
var playerHealth, enemyHealth; 
var playerOriginalValue;
	
//Start Page Conditions
function gameInit(){
	setupNewGame();

	$("#attackBtn").on('click', AttackClickHandler);
	$(".charBtn").on('click', CharacterSelectionHandler);
}

//Define New Game Page stats
function setupNewGame() {
	$("h1").html("Select your character!");
	$(".charBtn").appendTo("#characterSelectPanel")
	
	$("#vsSymbol").hide();
	$("#attackBtn").hide();

	enemiesLeft = 3;
	hasPlayerBeenChosen = false;
	hasEnemyBeenChosen = false;
	playerAttackPoints = playerOriginalValue;
}

//Character selection and posiitoning, including char stats
function CharacterSelectionHandler() {
	if (hasPlayerBeenChosen === false) {
		hasPlayerBeenChosen = true;
		$("h1").html("Select your opponent!");	
		
		$(this).addClass("isPlayer");
		$(this).appendTo("#playerLocation");

		playerAttackPoints = playerOriginalValue = parseInt($(this).attr("data-attackPoints"));
		playerHealth = parseInt($(this).attr("data-healthPoints"));
		//Player cannot change Hero character once selected
		if (hasPlayerBeenChosen) {
			$(this).off("click");
		}
	} else if ((hasEnemyBeenChosen === false) && (hasPlayerBeenChosen === true)) {
		hasEnemyBeenChosen = true;

		$(this).addClass("isUnderAttack");
		$(this).appendTo("#enemyLocation");
		enemyAttack = parseInt($(this).attr("data-enemyAttackBack"));
		enemyHealth = parseInt($(this).attr("data-healthPoints"));
		
		$("#vsSymbol").fadeIn(500);
		$("#attackBtn").show();
	} else if ((hasPlayerBeenChosen === true) && ($(this).hasClass("isUnderAttack"))) {
		//Player can change enemy character at any time.
		$(this).appendTo("#characterSelectPanel");
		$(this).removeClass("isUnderAttack");
		hasEnemyBeenChosen = false;
	}
}

function AttackClickHandler() {
	if (hasEnemyBeenChosen) {
		playerAttack();
	}
	// } else if ((enemies left === 0) || (playerHealth === 0)) {
	// gameReload();
};

//Fighting Mechanics
function playerAttack() {
	$('#enemyLocation').find('div[id=healthPoints]').html("HP: " + enemyHealth);
	enemyHealth = enemyHealth - playerAttackPoints;
	enemyHealth = enemyHealth < 0 ? 0 : enemyHealth;
	playerAttackPoints = playerAttackPoints + playerOriginalValue;
	if (enemyHealth <= 0) {
		$('#enemyLocation').find('div[id=healthPoints]').html("HP: 0");
	}
	if ((enemyHealth <= 0) && (enemiesLeft > 0)) {
		hasEnemyBeenChosen = false;
		$(".isUnderAttack").appendTo("#characterSelectPanel");
		$(".isUnderAttack").off("click");
		$(".isUnderAttack").removeClass("isUnderAttack");
		enemiesLeft--;
		
		if (enemiesLeft === 0) {
			gameWon();
			// $("attackBtn").html("Play again?");
			// $("#vsSymbol").hide();
		}
	}
	if ((enemiesLeft > 0) && (enemyHealth > 0)) {
		counterAttack();
	}
}

//Enemy fighting mechanics
function counterAttack() {
	$('#playerLocation').find('div[id=healthPoints]').html("HP: " + playerHealth)
	playerHealth = playerHealth - enemyAttack;
	playerHealth = playerHealth < 0 ? 0 : playerHealth;

	if (playerHealth <= 0) {
		$('#playerLocation').find('div[id=healthPoints]').html("HP: 0")
		gameOver();
	}
} 

//Game ends
function gameWon() {
	$("#characterSelectPanel").html("<h1 class='text-center'>Mathematical!</h1>");
	gameEnd();
}

function gameOver() {
	$("#characterSelectPanel").html("<h1 class='text-center'>You've been defeated!</h1>")
	gameEnd();
}

function gameEnd() {
	$("#vsSymbol", "#attackBtn").hide();
	$("#battleArena").hide();
	setTimeout(function() {gameReload(); }, 5000);	
}


function gameReload() {
	location.reload();
}

// function gameWon() {
// 	$("h1").html("Mathematical!");
// 	$("attackBtn").html("Play again?");
// 	$("#vsSymbol").hide();
// }

// function gameOver() {
// 	$("h1").html("Game over!");
// 	$("attackBtn").html("Play again?");
// 	$("#vsSymbol").hide();
// }
// Game Ending