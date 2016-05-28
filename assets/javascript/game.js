$(document).ready(function(){

//computer match

	function generateRandom(num){
	  return Math.floor(Math.random()*num);
		}
		var i = 19;
		var guessElements = document.querySelectorAll("#guess");
		var guessSelectionValues = [];
		for (i = 0; i < 1; i++){
		  guessSelectionValues[i] = generateRandom(120);
		  guessElements[i].setAttribute("data-value", guessSelectionValues[i]);
		  guessElements[i].innerHTML = guessSelectionValues[i];
		}
		console.log("guessSelectionValues" + guessSelectionValues);
		var guessTotalCoefficient = [];
		for (i = 0; i < 1; i++){
		  guessTotalCoefficient[i] = generateRandom(120);
		}
		console.log("guessTotalCoefficient" + guessTotalCoefficient);
		var guessTotalSum = 0;
		for (i = 0; i < 1; i++){
		  guessTotalSum +=
		 guessSelectionValues[i]*guessTotalCoefficient[i];
		}


//crystals

	$("#crystal1").one("click", function(){
		function generateRandom(num){
	  return Math.floor(Math.random()*num);
		}
		var i = 0;
		var crystalElements = document.querySelectorAll("#crystal1");
		var crystalSelectionValues = [];
		for (i = 0; i < 4; i++){
		  crystalSelectionValues[i] = generateRandom(12);
		  crystalElements[i].setAttribute("data-value", crystalSelectionValues[i]);
		  crystalElements[i].innerHTML = crystalSelectionValues[i];
		}
		console.log("crystalSelectionValues" + crystalSelectionValues);
		var crystalTotalCoefficient = [];
		for (i = 0; i < 4; i++){
		  crystalTotalCoefficient[i] = generateRandom(4);
		}
		console.log("crystalTotalCoefficient" + crystalTotalCoefficient);
		var crystalTotalSum = 0;
		for (i = 0; i < 4; i++){
		  crystalTotalSum +=
		 crystalSelectionValues[i]*crystalTotalCoefficient[i];
		}
	});


	$("#crystal2").one("click", function(){
		function generateRandom(num){
	  return Math.floor(Math.random()*num);
		}
		var i = 0;
		var crystalElements = document.querySelectorAll("#crystal2");
		var crystalSelectionValues = [];
		for (i = 0; i < 4; i++){
		  crystalSelectionValues[i] = generateRandom(12);
		  crystalElements[i].setAttribute("data-value", crystalSelectionValues[i]);
		  crystalElements[i].innerHTML = crystalSelectionValues[i];
		}
		console.log("crystalSelectionValues" + crystalSelectionValues);
		var crystalTotalCoefficient = [];
		for (i = 0; i < 4; i++){
		  crystalTotalCoefficient[i] = generateRandom(4);
		}
		console.log("crystalTotalCoefficient" + crystalTotalCoefficient);
		var crystalTotalSum = 0;
		for (i = 0; i < 4; i++){
		  crystalTotalSum +=
		 crystalSelectionValues[i]*crystalTotalCoefficient[i];
		}
	});

	$("#crystal3").one("click", function(){
		function generateRandom(num){
	  return Math.floor(Math.random()*num);
		}
		var i = 0;
		var crystalElements = document.querySelectorAll("#crystal3");
		var crystalSelectionValues = [];
		for (i = 0; i < 4; i++){
		  crystalSelectionValues[i] = generateRandom(12);
		  crystalElements[i].setAttribute("data-value", crystalSelectionValues[i]);
		  crystalElements[i].innerHTML = crystalSelectionValues[i];
		}
		console.log("crystalSelectionValues" + crystalSelectionValues);
		var crystalTotalCoefficient = [];
		for (i = 0; i < 4; i++){
		  crystalTotalCoefficient[i] = generateRandom(4);
		}
		console.log("crystalTotalCoefficient" + crystalTotalCoefficient);
		var crystalTotalSum = 0;
		for (i = 0; i < 4; i++){
		  crystalTotalSum +=
		 crystalSelectionValues[i]*crystalTotalCoefficient[i];
		}
	});

	$("#crystal4").one("click", function(){
		function generateRandom(num){
	  return Math.floor(Math.random()*num);
		}
		var i = 0;
		var crystalElements = document.querySelectorAll("#crystal4");
		var crystalSelectionValues = [];
		for (i = 0; i < 4; i++){
		  crystalSelectionValues[i] = generateRandom(12);
		  crystalElements[i].setAttribute("data-value", crystalSelectionValues[i]);
		  crystalElements[i].innerHTML = crystalSelectionValues[i];
		}
		console.log("crystalSelectionValues" + crystalSelectionValues);
		var crystalTotalCoefficient = [];
		for (i = 0; i < 4; i++){
		  crystalTotalCoefficient[i] = generateRandom(4);
		}
		console.log("crystalTotalCoefficient" + crystalTotalCoefficient);
		var crystalTotalSum = 0;
		for (i = 0; i < 4; i++){
		  crystalTotalSum +=
		 crystalSelectionValues[i]*crystalTotalCoefficient[i];
		}
		$(this).effect("bounce", { times:2 }, 300);
	});
	

});



