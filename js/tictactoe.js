var $ticTacToe = {
	numMoves: 1,
	currentMove: "O",
	winCountX: 0,
	winCountO: 0,
	drawCount: 0,
	player: "",
	computerIs: "",
	playerMoves: 0,
	compMoves: 0,
	box1: function(input){$('.box1').text(input)},
	box2: function(input){$('.box2').text(input)},
	box3: function(input){$('.box3').text(input)},
	box4: function(input){$('.box4').text(input)},
	box5: function(input){$('.box5').text(input)},
	box6: function(input){$('.box6').text(input)},
	box7: function(input){$('.box7').text(input)},
	box8: function(input){$('.box8').text(input)},
	box9: function(input){$('.box9').text(input)},

	init: function(){ // the init function holds the clickable functions i want on a page & the immediate after reactions of this.
		$('td').on('click', function(){
			if ($(this).text() === "X" || $(this).text() === "O") {
				 console.log('theres already a selection there.');
				 alert('You cant go there, choose again');
			} else {
				$(this).text($ticTacToe.player);
				$ticTacToe.playerCheck();
			};		
			//$(this).off();
		});
		$('.play').on('click', function(){
			$('.play').hide();
			$('.playertwo').hide();
			$('.chooseX').show();
			$('.chooseO').show();
		});
		$('.chooseX').on('click', function(){ // button shows itself after first button is clicked.
			$('.chooseX').hide(); //hides itself & the other button after being clicked.
			$('.chooseO').hide();
			$('table').show(); //shows the relevant game components.
			$('.winCounter').show();
			$('.reset').show();
			$('.playertwo').show();
			$ticTacToe.player = "X"; // places the selected player value into the player variable to hold this info for later. same for computer.
			$ticTacToe.computerIs = "O";
			$('.currentPlayer').text("You are playing as " + $ticTacToe.player + "."); // adds who you are playing as to the screen, in case you forget.
			$ticTacToe.computer(); // calls the computer function to start.

		});
		$('.chooseO').on('click', function(){
			$('.chooseX').hide(); // same as above.
			$('.chooseO').hide();
			$('table').show();
			$('.playertwo').show();
			$('.winCounter').show();
			$('.reset').show();
			$ticTacToe.player = "O";
			$ticTacToe.computerIs = "X";
			$('.currentPlayer').text("You are playing as " + $ticTacToe.player + ".");
			$ticTacToe.computer();
		});

		$('.reset').on('click', function(){ // resets the gameboard & game mechanics to 0
			$ticTacToe.reseted();
		$('.reset').on('click', function(){
			$ticTacToe.reseted();

		});

	},

	playerCheck: function() { // checks the players moves for win or draw & progresses the num moves ahead to help with checking draw. also calls on computer to make its next move.
		$ticTacToe.checkDraw();
		$ticTacToe.check();
		$ticTacToe.numMoves = $ticTacToe.numMoves + 1;
		$ticTacToe.playerMoves = $ticTacToe.playerMoves + 1;
		$ticTacToe.currentMove = $ticTacToe.computerIs;
		$ticTacToe.computer();
	},
	
	computerCheck: function(){ // checks if the computer has won & progresses num moves ahead to aid with checking for draw.
		$ticTacToe.check();
		$ticTacToe.checkDraw();
		$ticTacToe.compMoves = $ticTacToe.compMoves + 1;
		$ticTacToe.numMoves = $ticTacToe.numMoves + 1;
		$ticTacToe.currentMove = $ticTacToe.player; // changes current move back to player value.
	},

	computer: function() { // this is the AI's brain. it goes through possible winning solutions & then goes to possible blocking solutions & finally goes to whatever is still available.
		var box1 = $('.box1').text();
		var box2 = $('.box2').text();
		var box3 = $('.box3').text();
		var box4 = $('.box4').text();
		var box5 = $('.box5').text();
		var box6 = $('.box6').text();
		var box7 = $('.box7').text();
		var box8 = $('.box8').text();
		var box9 = $('.box9').text();
		 
		if ($ticTacToe.currentMove === $ticTacToe.computerIs) {
			//across wins
			if (box5 === "-") {
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5===$ticTacToe.player && $ticTacToe.playerMoves===1) {
				$ticTacToe.box7($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5===$ticTacToe.player && box9===$ticTacToe.player && $ticTacToe.playerMoves===2){
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5===$ticTacToe.player && box3===$ticTacToe.player && $ticTacToe.playerMoves===2){
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5===$ticTacToe.player && box1===$ticTacToe.player && $ticTacToe.playerMoves===2){
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box1===$ticTacToe.computerIs && box2===$ticTacToe.computerIs && box3==="-"){
				$ticTacToe.box3($ticTacToe.computerIs);
				$ticTacToe.computerCheck();	
			} else if (box1===$ticTacToe.computerIs && box3===$ticTacToe.computerIs && box2==="-"){
				$ticTacToe.box2($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box2===$ticTacToe.computerIs && box3===$ticTacToe.computerIs && box1==="-"){
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box7===$ticTacToe.computerIs && box8===$ticTacToe.computerIs && box9==="-"){
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box7===$ticTacToe.computerIs && box9===$ticTacToe.computerIs && box8==="-"){
				$ticTacToe.box8($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box8===$ticTacToe.computerIs && box9===$ticTacToe.computerIs && box7==="-"){
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box4===$ticTacToe.computerIs && box5===$ticTacToe.computerIs && box6==="-"){
				$ticTacToe.box6($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box4===$ticTacToe.computerIs && box6===$ticTacToe.computerIs && box5==="-"){
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5===$ticTacToe.computerIs && box6===$ticTacToe.computerIs && box4==="-"){
				$ticTacToe.box4($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
				//down wins // 1 4 7
			} else if (box1===$ticTacToe.computerIs && box4===$ticTacToe.computerIs && box7==="-"){
				$ticTacToe.box7($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box1===$ticTacToe.computerIs && box7===$ticTacToe.computerIs && box4==="-"){
				$ticTacToe.box4($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box4===$ticTacToe.computerIs && box7===$ticTacToe.computerIs && box1==="-"){
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
				//down wins // 2 5 8
			} else if (box2===$ticTacToe.computerIs && box5===$ticTacToe.computerIs && box8==="-"){
				$ticTacToe.box8($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box2===$ticTacToe.computerIs && box8===$ticTacToe.computerIs && box5==="-"){
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5===$ticTacToe.computerIs && box8===$ticTacToe.computerIs && box2==="-"){
				$ticTacToe.box2($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
				// down wins // 3 6 9
			} else if (box3===$ticTacToe.computerIs && box6===$ticTacToe.computerIs && box9==="-"){
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box3===$ticTacToe.computerIs && box9===$ticTacToe.computerIs && box6==="-"){
				$ticTacToe.box6($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box6===$ticTacToe.computerIs && box9===$ticTacToe.computerIs && box3==="-"){
				$ticTacToe.box3($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			//diagnol wins // 1 5 9
			} else if (box1===$ticTacToe.computerIs && box5===$ticTacToe.computerIs && box9==="-"){
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box1===$ticTacToe.computerIs && box9===$ticTacToe.computerIs && box5==="-"){
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5===$ticTacToe.computerIs && box9===$ticTacToe.computerIs && box1==="-"){
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			//diagnol wins // 3 5 7
			} else if (box3===$ticTacToe.computerIs && box5===$ticTacToe.computerIs && box7==="-"){
				$ticTacToe.box7($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box3===$ticTacToe.computerIs && box7===$ticTacToe.computerIs && box5==="-"){
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5===$ticTacToe.computerIs && box7===$ticTacToe.computerIs && box3==="-"){
				$ticTacToe.box3($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			
			//block O from winning
			} else if (box1 === $ticTacToe.player && box3 === $ticTacToe.player && box2 === "-") {
				$ticTacToe.box2($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box1 === $ticTacToe.player && box2 === $ticTacToe.player && box3 === "-") {
				$ticTacToe.box3($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box3 === $ticTacToe.player && box2 === $ticTacToe.player && box1 === "-") {
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box4 === $ticTacToe.player && box5 === $ticTacToe.player && box6 === "-") {
				$ticTacToe.box6($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box4 === $ticTacToe.player && box6 === $ticTacToe.player & box5 === "-") {
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5 === $ticTacToe.player && box6 === $ticTacToe.player && box4 === "-") {
				$ticTacToe.box4($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box7 === $ticTacToe.player && box8 === $ticTacToe.player && box9 === "-") {
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box7 === $ticTacToe.player && box9 === $ticTacToe.player && box8 === "-") {
				$ticTacToe.box8($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box8 === $ticTacToe.player && box9 === $ticTacToe.player && box7 === "-") {
				$ticTacToe.box7($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
				// down blocks
			} else if (box1 === $ticTacToe.player && box4 === $ticTacToe.player && box7 === "-") {
				$ticTacToe.box7($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box1 === $ticTacToe.player && box7 === $ticTacToe.player && box4 === "-") {
				$ticTacToe.box4($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box4 === $ticTacToe.player && box7 === $ticTacToe.player && box1 === "-") {
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box2 === $ticTacToe.player && box5 === $ticTacToe.player && box8 === "-") {
				$ticTacToe.box8($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box2 === $ticTacToe.player && box8 === $ticTacToe.player && box5 === "-") {
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5 === $ticTacToe.player && box8 === $ticTacToe.player && box2 === "-") {
				$ticTacToe.box2($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box3 === $ticTacToe.player && box6 === $ticTacToe.player && box9 === "-") {
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box3 === $ticTacToe.player && box9 === $ticTacToe.player && box6 === "-") {
				$ticTacToe.box6($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box6 === $ticTacToe.player && box9 === $ticTacToe.player && box3 === "-") {
				$ticTacToe.box3($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
				//diagnal blocks	
			} else if (box1 === $ticTacToe.player && box5 === $ticTacToe.player && box9 === "-") {
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box1 === $ticTacToe.player && box9 === $ticTacToe.player && box5 === "-") {
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5 === $ticTacToe.player && box9 === $ticTacToe.player && box1 === "-") {
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box3 === $ticTacToe.player && box5 === $ticTacToe.player && box7 === "-") {
				$ticTacToe.box7($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box3 === $ticTacToe.player && box7 === $ticTacToe.player && box5 === "-") {
				$ticTacToe.box5($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box5 === $ticTacToe.player && box7 === $ticTacToe.player && box3 === "-") {
				$ticTacToe.box3($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			//choose whatever is left/available.
			} else if (box6 === "-") {
				$ticTacToe.box6($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box4 === "-") {
				$ticTacToe.box4($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box8 === "-") {
				$ticTacToe.box8($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box1 === "-") {
				$ticTacToe.box1($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box2 === "-") {
				$ticTacToe.box2($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box9 === "-") {
				$ticTacToe.box9($ticTacToe.computerIs);
				$ticTacToe.computerCheck(); 
			} else if (box7 === "-") {
				$ticTacToe.box7($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			} else if (box3 === "-") {
				$ticTacToe.box3($ticTacToe.computerIs);
				$ticTacToe.computerCheck();
			}
		};		
	},

	xWins: function() { // if X is the winner this function will provide notification of the same 
		alert('X WINS');
		$ticTacToe.winCountX = $ticTacToe.winCountX + 1;
		$('.winCounterX').text('X: ' + $ticTacToe.winCountX);	
		$ticTacToe.reseted();
	},

	oWins: function() { // if O is the winner this function will provide notification.
		alert('O WINS');
		$ticTacToe.winCountO = $ticTacToe.winCountO + 1;
		$('.winCounterO').text('O: ' + $ticTacToe.winCountO);
		$ticTacToe.reseted();
	},

	check: function() { // checks for winner.
		var box1 = $('.box1').text();
		var box2 = $('.box2').text();
		var box3 = $('.box3').text();
		var box4 = $('.box4').text();
		var box5 = $('.box5').text();
		var box6 = $('.box6').text();
		var box7 = $('.box7').text();
		var box8 = $('.box8').text();
		var box9 = $('.box9').text();
		
		if (box1==="O" && box2==="O" && box3==="O") {
			$ticTacToe.oWins();
		} else if (box7==="O" && box8==="O" && box9==="O") {
			$ticTacToe.oWins();
		} else if (box4==="O" && box5==="O" && box6==="O") {
			$ticTacToe.oWins();
		//down
		} else if (box1==="O" && box4==="O" && box7==="O") {
			$ticTacToe.oWins();
		} else if (box2==="O" && box5==="O" && box8==="O") {
			$ticTacToe.oWins();
		} else if (box3==="O" && box6==="O" && box9==="O") {
			$ticTacToe.oWins();
		//diagnol
		} else if (box1==="O" && box5==="O" && box9==="O") {
			$ticTacToe.oWins();
		} else if (box3==="O" && box5==="O" && box7==="O") {
			$ticTacToe.oWins();
		};
		if (box1==="X" && box2==="X" && box3==="X") {
			$ticTacToe.xWins();		
		} else if (box7==="X" && box8==="X" && box9==="X") {
			$ticTacToe.xWins();
		} else if (box4==="X" && box5==="X" && box6==="X") {
			$ticTacToe.xWins();
		//down
		} else if (box1==="X" && box4==="X" && box7==="X") {
			$ticTacToe.xWins();
		} else if (box2==="X" && box5==="X" && box8==="X") {
			$ticTacToe.xWins();
		} else if (box3==="X" && box6==="X" && box9==="X") {
			$ticTacToe.xWins();
		//diagnol
		} else if (box1==="X" && box5==="X" && box9==="X") {
			$ticTacToe.xWins();
		} else if (box3==="X" && box5==="X" && box7==="X") {
			$ticTacToe.xWins();	
		};
		//Checking draw
		// if ($ticTacToe.numMoves >= 9) {
		// 	$ticTacToe.drawCount = $ticTacToe.drawCount + 1;
		// 	$('.drawCounter').text('DRAW: ' + $ticTacToe.drawCount);
		// 	alert('PLAYERS DRAW');
		// 	$ticTacToe.reseted();
		// };

	}, 

	checkDraw: function(){ // checks draw.
		if ($ticTacToe.numMoves >= 9) {
			$ticTacToe.drawCount = $ticTacToe.drawCount + 1;
			$('.drawCounter').text('DRAW: ' + $ticTacToe.drawCount);
			alert('PLAYERS DRAW');
			$ticTacToe.reseted();
		}

	},

	reseted: function(){ // resets values back to game start values.
		$('td').text('-');		
		$ticTacToe.numMoves = 0;
		$ticTacToe.playerMoves = 0;
		$ticTacToe.compMoves = 0;
	}
};
$('document').ready(function () {
	$('table').hide(); // on initialise the game table is hidden
	$('.winCounter').hide();// win counter is hidden
	$('.reset').hide(); // reset button is hidden
	$('.chooseO').hide();
	$('.chooseX').hide();
	$ticTacToe.init(); // initialises the game.


});


});

