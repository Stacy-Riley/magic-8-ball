$(document).ready(function(){
  magic8Ball = {};

    //My array of answers 
  magic8Ball.listOfAnswers = ["yes", "no", "maybe", "of course", "no way"];
  $("#answer").hide();
    
    //Question Function
      magic8Ball.askQuestion = function(question) {
        $("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumerForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumerForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex]; 
	             $("#answer").text(answer);
        console.log(question);
	     console.log(answer);
      };

  //Button Section
var onClick = function() {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
  
  var question = prompt("Ask A Yes/No Question.");
	magic8Ball.askQuestion(question);
    $("#8ball").effect("shake");
};

    $("#questionButton").click(onClick);
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");;
  
});	