var $ticTacToe = {
	numMoves: 1,
	xNumMoves: 0,
	oNumMoves: 0,
	currentMove: "O",
	winCountX: 0,
	winCountO: 0,
	drawCount: 0,
	boxArray: [$('.box1'), $('.box2'), $('.box3'),
				$('.box4'), $('.box5'), $('.box6'),
				$('.box7'), $('.box8'), $('.box9')],
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
				$(this).text($ticTacToe.currentMove);
				$ticTacToe.playerCheck();
			};		
			//$(this).off();
		});
		$('.play').on('click', function(){
			$ticTacToe.computer();
			$('table').show();
			$('.winCounter').show();
			$('.play').hide();
			$('.reset').show();
		});
		$('.reset').on('click', function(){
			$ticTacToe.reset();
		});

	},

	playerCheck: function() {
		$ticTacToe.checkDraw();
		$ticTacToe.checkO();
		$ticTacToe.numMoves = $ticTacToe.numMoves + 1;
		$ticTacToe.currentMove = "X";
		$ticTacToe.computer();
	},
	// write a for statement for the AI that loops through the box numbers & checks for opponents winnings moves. then another functions which operates after this that loops through the other possible options on the board. 
	computerCheck: function(){
		$ticTacToe.checkX();
		$ticTacToe.checkDraw();
		$ticTacToe.numMoves = $ticTacToe.numMoves + 1;
		$ticTacToe.currentMove = "O";
	},

	computer: function() { 
		var box1 = $('.box1').text();
		var box2 = $('.box2').text();
		var box3 = $('.box3').text();
		var box4 = $('.box4').text();
		var box5 = $('.box5').text();
		var box6 = $('.box6').text();
		var box7 = $('.box7').text();
		var box8 = $('.box8').text();
		var box9 = $('.box9').text();
		 
		if ($ticTacToe.currentMove === "X") {
			//across wins
			if (box1==="X" && box2==="X" && box3==="-"){
				$ticTacToe.box3("X");
				$ticTacToe.computerCheck();	
			} else if (box1==="X" && box3==="X" && box2==="-"){
				$ticTacToe.box2("X");
				$ticTacToe.computerCheck();
			} else if (box2==="X" && box3==="X" && box1==="-"){
				$ticTacToe.box1("X");
				$ticTacToe.computerCheck();
			} else if (box7==="X" && box8==="X" && box9==="-"){
				$ticTacToe.box9("X");
				$ticTacToe.computerCheck();
			} else if (box7==="X" && box9==="X" && box8==="-"){
				$ticTacToe.box8("X");
				$ticTacToe.computerCheck();
			} else if (box8==="X" && box9==="X" && box7==="-"){
				$ticTacToe.box9("X");
				$ticTacToe.computerCheck();
			} else if (box4==="X" && box5==="X" && box6==="-"){
				$ticTacToe.box6("X");
				$ticTacToe.computerCheck();
			} else if (box4==="X" && box6==="X" && box5==="-"){
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box5==="X" && box6==="X" && box4==="-"){
				$ticTacToe.box4("X");
				$ticTacToe.computerCheck();
				//down wins // 1 4 7
			} else if (box1==="X" && box4==="X" && box7==="-"){
				$ticTacToe.box7("X");
				$ticTacToe.computerCheck();
			} else if (box1==="X" && box7==="X" && box4==="-"){
				$ticTacToe.box4("X");
				$ticTacToe.computerCheck();
			} else if (box4==="X" && box7==="X" && box1==="-"){
				$ticTacToe.box1("X");
				$ticTacToe.computerCheck();
				//down wins // 2 5 8
			} else if (box2==="X" && box5==="X" && box8==="-"){
				$ticTacToe.box8("X");
				$ticTacToe.computerCheck();
			} else if (box2==="X" && box8==="X" && box5==="-"){
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box5==="X" && box8==="X" && box2==="-"){
				$ticTacToe.box2("X");
				$ticTacToe.computerCheck();
				// down wins // 3 6 9
			} else if (box3==="X" && box6==="X" && box9==="-"){
				$ticTacToe.box9("X");
				$ticTacToe.computerCheck();
			} else if (box3==="X" && box9==="X" && box6==="-"){
				$ticTacToe.box6("X");
				$ticTacToe.computerCheck();
			} else if (box6==="X" && box9==="X" && box3==="-"){
				$ticTacToe.box3("X");
				$ticTacToe.computerCheck();
			//diagnol wins // 1 5 9
			} else if (box1==="X" && box5==="X" && box9==="-"){
				$ticTacToe.box9("X");
				$ticTacToe.computerCheck();
			} else if (box1==="X" && box9==="X" && box5==="-"){
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box5==="X" && box9==="X" && box1==="-"){
				$ticTacToe.box1("X");
				$ticTacToe.computerCheck();
			//diagnol wins // 3 5 7
			} else if (box3==="X" && box5==="X" && box7==="-"){
				$ticTacToe.box7("X");
				$ticTacToe.computerCheck();
			} else if (box3==="X" && box7==="X" && box5==="-"){
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box5==="X" && box7==="X" && box3==="-"){
				$ticTacToe.box3("X");
				$ticTacToe.computerCheck();
			//block O from winning
			} else if (box1 === "O" && box3 === "O" && box2 === "-") {
				$ticTacToe.box2("X");
				$ticTacToe.computerCheck();
			} else if (box1 === "O" && box2 === "O" && box3 === "-") {
				$ticTacToe.box3("X");
				$ticTacToe.computerCheck();
			} else if (box3 === "O" && box2 === "O" && box1 === "-") {
				$ticTacToe.box1("X");
				$ticTacToe.computerCheck();
			} else if (box4 === "O" && box5 === "O" && box6 === "-") {
				$ticTacToe.box6("X");
				$ticTacToe.computerCheck();
			} else if (box4 === "O" && box6 === "O" & box5 === "-") {
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box5 === "O" && box6 === "O" && box4 === "-") {
				$ticTacToe.box4("X");
				$ticTacToe.computerCheck();
			} else if (box7 === "O" && box8 === "O" && box9 === "-") {
				$ticTacToe.box9("X");
				$ticTacToe.computerCheck();
			} else if (box7 === "O" && box9 === "O" && box8 === "-") {
				$ticTacToe.box8("X");
				$ticTacToe.computerCheck();
			} else if (box8 === "O" && box9 === "O" && box7 === "-") {
				$ticTacToe.box7("X");
				$ticTacToe.computerCheck();
				// down blocks
			} else if (box1 === "O" && box4 === "O" && box7 === "-") {
				$ticTacToe.box7("X");
				$ticTacToe.computerCheck();
			} else if (box1 === "O" && box7 === "O" && box4 === "-") {
				$ticTacToe.box4("X");
				$ticTacToe.computerCheck();
			} else if (box4 === "O" && box7 === "O" && box1 === "-") {
				$ticTacToe.box1("X");
				$ticTacToe.computerCheck();
			} else if (box2 === "O" && box5 === "O" && box8 === "-") {
				$ticTacToe.box8("X");
				$ticTacToe.computerCheck();
			} else if (box2 === "O" && box8 === "O" && box5 === "-") {
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box5 === "O" && box8 === "O" && box2 === "-") {
				$ticTacToe.box2("X");
				$ticTacToe.computerCheck();
			} else if (box3 === "O" && box6 === "O" && box9 === "-") {
				$ticTacToe.box9("X");
				$ticTacToe.computerCheck();
			} else if (box3 === "O" && box9 === "O" && box6 === "-") {
				$ticTacToe.box6("X");
				$ticTacToe.computerCheck();
			} else if (box6 === "O" && box9 === "O" && box3 === "-") {
				$ticTacToe.box3("X");
				$ticTacToe.computerCheck();
				//diagnal blocks	
			} else if (box1 === "O" && box5 === "O" && box9 === "-") {
				$ticTacToe.box9("X");
				$ticTacToe.computerCheck();
			} else if (box1 === "O" && box9 === "O" && box5 === "-") {
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box5 === "O" && box9 === "O" && box1 === "-") {
				$ticTacToe.box1("X");
				$ticTacToe.computerCheck();
			} else if (box3 === "O" && box5 === "O" && box7 === "-") {
				$ticTacToe.box7("X");
				$ticTacToe.computerCheck();
			} else if (box3 === "O" && box7 === "O" && box5 === "-") {
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box5 === "O" && box7 === "O" && box3 === "-") {
				$ticTacToe.box3("X");
				$ticTacToe.computerCheck();
			//choose whatever is left/available.
			} else if (box5 === "-") {
				$ticTacToe.box5("X");
				$ticTacToe.computerCheck();
			} else if (box3 === "-") {
				$ticTacToe.box3("X");
				$ticTacToe.computerCheck();
			} else if (box7 === "-") {
				$ticTacToe.box7("X");
				$ticTacToe.computerCheck();
			} else if (box1 === "-") {
				$ticTacToe.box1("X");
				$ticTacToe.computerCheck();
			} else if (box9 === "-") {
				$ticTacToe.box9("X");
				$ticTacToe.computerCheck();
			} else if (box2 === "-") {
				$ticTacToe.box2("X");
				$ticTacToe.computerCheck();
			} else if (box4 === "-") {
				$ticTacToe.box4("X");
				$ticTacToe.computerCheck();
			} else if (box6 === "-") {
				$ticTacToe.box6("X");
				$ticTacToe.computerCheck();
			} else if (box8 === "-") {
				$ticTacToe.box8("X");
				$ticTacToe.computerCheck();
			} 
		};		
	},

	xWins: function() {
		alert('X WINS');
		$ticTacToe.winCountX = $ticTacToe.winCountX + 1;
		$('.winCounterX').text('X: ' + $ticTacToe.winCountX);	
		$ticTacToe.reset();
	},

	checkX: function() {
		var box1 = $('.box1').text();
		var box2 = $('.box2').text();
		var box3 = $('.box3').text();
		var box4 = $('.box4').text();
		var box5 = $('.box5').text();
		var box6 = $('.box6').text();
		var box7 = $('.box7').text();
		var box8 = $('.box8').text();
		var box9 = $('.box9').text();

		//across
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

	oWins: function() {
			alert('O WINS');
			$ticTacToe.winCountO = $ticTacToe.winCountO + 1;
			$('.winCounterO').text('O: ' + $ticTacToe.winCountO);
			$ticTacToe.reset();
	},

	checkO: function() {
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
			
	}, 

	checkDraw: function(){
		if ($ticTacToe.numMoves >= 9) {
			$ticTacToe.drawCount = $ticTacToe.drawCount + 1;
			$('.drawCounter').text('DRAW: ' + $ticTacToe.drawCount);
			alert('PLAYERS DRAW');
			$ticTacToe.reset();
		};
	},

	reset: function(){
		$('td').text('-');		
		$ticTacToe.numMoves = 0;
		$ticTacToe.oNumMoves = 0;
		$ticTacToe.xNumMoves = 0;
	}
};
$('document').ready(function () {
	$('table').hide();
	$('.winCounter').hide();
	$('.reset').hide();
	$ticTacToe.init();
});

/* some CSS stuff for two player version. 
.currentPlayer {
	position: absolute;
	text-align: center;
	line-height: 86px;
	width: 180px;
	height: 89px;
	border: 1px solid black;
	left: 329px;
	top: -98px;
	font-size: 108px;

}
<h3 class="currentPlayer"> O </h3>

$('.currentPlayer').text("O");
$('.currentPlayer').text("X");

*/