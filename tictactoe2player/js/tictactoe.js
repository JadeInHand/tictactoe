var $ticTacToe = {
	numMoves: 0,
	xNumMoves: 0,
	oNumMoves: 0,
	currentMove: "X",
	winCountX: 0,
	winCountO: 0,
	drawCount: 0,

	init: function(){ // the init function holds the clickable functions i want on a page & the immediate after reactions of this.
		$('td').on('click', function(){
			if ($(this).text() === "X" || $(this).text() === "O") {
				 console.log('theres already a selection there.');
				 alert('You cant go there, choose again');
			} else {
				$(this).text($ticTacToe.currentMove);
				$ticTacToe.numMoves = $ticTacToe.numMoves + 1; // increases the amount of played rounds in the overall object to progress the game.
				$ticTacToe.swapPlay(); // needed for two player version.
				$ticTacToe.check();
				$ticTacToe.checkDraw();
				$('.currentPlayer').text("Its currently " + $ticTacToe.currentMove + "s go.")	
			};		
		});
		$('button').on('click', function(){
			$ticTacToe.reset();
		});

	},

	swapPlay: function(){
		if (this.currentMove === " "){
			this.currentMove = "X";
			console.log('its currently Xs go');
		} else if (this.currentMove === "X"){
			this.currentMove = "O";
			console.log('its currently Os go');
		} else {
			this.currentMove = "X";
			console.log('its currently Xs go');
		}
	
	},

	xWins: function() { // if X is the winner this function will provide notification of the same 
		alert('X WINS');
		$ticTacToe.winCountX = $ticTacToe.winCountX + 1;
		$('.winCounterX').text('X: ' + $ticTacToe.winCountX);	
		$ticTacToe.reset();
	},

	oWins: function() { // if O is the winner this function will provide notification.
		alert('O WINS');
		$ticTacToe.winCountO = $ticTacToe.winCountO + 1;
		$('.winCounterO').text('O: ' + $ticTacToe.winCountO);
		$ticTacToe.reset();
	},

	check: function() { // fhecks for winner.
		var box1 = $('.box1').text();
		var box2 = $('.box2').text();
		var box3 = $('.box3').text();
		var box4 = $('.box4').text();
		var box5 = $('.box5').text();
		var box6 = $('.box6').text();
		var box7 = $('.box7').text();
		var box8 = $('.box8').text();
		var box9 = $('.box9').text();
		
		if (box1==="O" && box2==="O" && box3==="O"){
			$ticTacToe.oWins();
		} else if (box7==="O" && box8==="O" && box9==="O"){
			$ticTacToe.oWins();
		} else if (box4==="O" && box5==="O" && box6==="O"){
			$ticTacToe.oWins();
		//down
		} else if (box1==="O" && box4==="O" && box7==="O"){
			$ticTacToe.oWins();
		} else if (box2==="O" && box5==="O" && box8==="O"){
			$ticTacToe.oWins();
		} else if (box3==="O" && box6==="O" && box9==="O"){
			$ticTacToe.oWins();
		//diagnol
		} else if (box1==="O" && box5==="O" && box9==="O"){
			$ticTacToe.oWins();
		} else if (box3==="O" && box5==="O" && box7==="O"){
			$ticTacToe.oWins();
		};
		if (box1==="X" && box2==="X" && box3==="X"){
			$ticTacToe.xWins();		
		} else if (box7==="X" && box8==="X" && box9==="X"){
			$ticTacToe.xWins();
		} else if (box4==="X" && box5==="X" && box6==="X"){
			$ticTacToe.xWins();
		//down
		} else if (box1==="X" && box4==="X" && box7==="X"){
			$ticTacToe.xWins();
		} else if (box2==="X" && box5==="X" && box8==="X"){
			$ticTacToe.xWins();
		} else if (box3==="X" && box6==="X" && box9==="X"){
			$ticTacToe.xWins();
		//diagnol
		} else if (box1==="X" && box5==="X" && box9==="X"){
			$ticTacToe.xWins();
		} else if (box3==="X" && box5==="X" && box7==="X"){
			$ticTacToe.xWins();	
		};
			
	}, 

	
	checkDraw: function(){
		if ($ticTacToe.numMoves >= 9) {
			$ticTacToe.drawCount = $ticTacToe.drawCount + 1;
			$('.drawCounter').text('DRAW: ' + $ticTacToe.drawCount);
			alert('PLAYERS DRAW');
			$ticTacToe.reset();
		}
	},
	reset: function(){
		$('td').text('-');		
		$ticTacToe.currentMove = "X";
		$ticTacToe.numMoves = 0;
		$ticTacToe.oNumMoves = 0;
		$ticTacToe.xNumMoves = 0;

	}

};
$('document').ready(function () {
$ticTacToe.init();
});