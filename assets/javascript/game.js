$(document).ready(function() {


var matchBoard = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var win = 0;
var loss = 0;
var crystalTotal = 0;


function randomNumber(min,max){
    	return Math.floor(Math.random()*(max-min+1)+min);
		}


	function restart(){
		computerNumber = 0;
		crystal1 = 0;
		crystal2 = 0;
		crystal3 = 0;
		crystal4 = 0;
		crystalTotal = 0;
		$('#guessBoard').text(0);
		startGame();
	};


function checkScore() {
		if (crystalTotal == computerNumber) {
			win++;
			$('#win').text(win);
			restart();
		}; 

		if (crystalTotal > computerNumber) {
			loss++;
			$('#loss').text(loss);
			restart();	
		}; 
};	




function startGame(){
	
		var num1 = randomNumber(19,120);
		computerNumber = num1;
		$('#match').text(computerNumber);

		var num2 = randomNumber(1,12);
		crystal1 = num2;

		var num3 = randomNumber(1,12);
		crystal2 = num3;

		var num4 = randomNumber(1,12);
		crystal3 = num4;

		var num5 = randomNumber(1,12);
		crystal4 = num5;
	}


		$("#gem1").click(function(){
		    crystalTotal += crystal1;
		    $('#guessBoard').text(crystalTotal);
		    checkScore();
		}); 
		$("#gem2").click(function(){
		    crystalTotal += crystal2;
		    $('#guessBoard').text(crystalTotal);
		    checkScore();
		}); 
		$("#gem3").click(function(){
		    crystalTotal += crystal3;
		    $('#guessBoard').text(crystalTotal);
		    checkScore();
		}); 
		$("#gem4").click(function(){
		    crystalTotal += crystal4;
		    $('#guessBoard').text(crystalTotal);
		    checkScore();
		}); 
	
startGame();

});
