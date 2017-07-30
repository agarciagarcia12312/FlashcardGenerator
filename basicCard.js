var inquirer = require('inquirer');

var answers = [];
function BasicCard (front, back) {
	answers.push(back);
	this.front =  front;
	this.back = back;
	this.showFront = function() {
		console.log(this.front)
	};
	this.showBack = function() {
		console.log(this.back)
	};
};


var q1 = new BasicCard("Who was the first president of the United States?", "George Washington");
var q2 = new BasicCard("What continent has the fewest number of flowering plants?","Antartica");
var q3 = new BasicCard("What Great Lake state has more shoreline than the entire U.S Atlantic seaboard?", "Michigan");
var q4 = new BasicCard("What color is Absynth?", "Green");
var q5 = new BasicCard("What explorer introduced pigs to North America?", "Chistopher Columbus");

var count = 0;
var correct=0;
var wrong = 0;

inquirer.prompt([
	{	
		type: "input",
		name:"q1",
		message: q1.front
	}, {	
		type: "input",
		name:"q2",
		message: q2.front
	}, {	
		type: "input",
		name:"q3",
		message: q3.front
	}, {	
		type: "input",
		name:"q4",
		message: q4.front
	}, {	
		type: "input",
		name:"q5",
		message: q5.front
	}
]).then (function(responce) {
	for (var key in responce) {
		// console.log(answers[count]);
		// console.log(responce[key]);
		if (answers[count].toLowerCase() == responce[key].toLowerCase()) {
			correct++;
			
		} else {
			wrong++;
			console.log("you got question " + (count + 1) +" incorrect... correct answer is: " + answers[count]);
		}
		count++;
	}
	console.log("You got " + (correct/5 * 100)   +"% of the questions correct")	
});