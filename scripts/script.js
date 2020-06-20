$(document).ready(function(){

var magic8Ball = {};

//My array of answers - a property
magic8Ball.listOfAnswers = ["yes", "no", "maybe", "of course", "no way"];

//This is a method
magic8Ball.askQuestion = function(question) {
    
  var randomNumber = Math.random();

  var randomNumerForListOfAnswers = randomNumber * this.listOfAnswers.length;
  //console.log(randomNArray);

  var randomIndex = Math.floor(randomNumerForListOfAnswers);
  //console.log(randomIndex);

  var answer = this.listOfAnswers[randomIndex];
  //console.log("The answer is: " + randomAnswer);
  
	$("#answer").text( answer );

	console.log(question);
	console.log(answer);

};

//Hides image at start of page
$("#image").hide();

//Button Section

var onClick = function() {
	var question = prompt("ASK A YES/NO QUESTION!");
	magic8Ball.askQuestion(question);

};


$("#questionButton").click( onClick {
	$("#image").hide();
});

});	