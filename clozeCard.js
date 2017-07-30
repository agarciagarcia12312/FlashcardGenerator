var inquirer = require('inquirer');

var answers = [];

function ClozeCard (full, missingPart) {
	answers.push(missingPart);
	var missingWords = missingPart.split(" ");
	var allSplitApart = full.split(" ");
	var part = "";
	this.partial =function() {
		for (i=0; i < missingWords.length; i++) {
			for (q=0; q < allSplitApart.length; q++) {	
				if (missingWords[i] === allSplitApart[q]) {
					allSplitApart[q] = "---";
				}
			}
			part = allSplitApart.join(" ");
			
		}
		return part;
	};
	this.missing =  missingPart;
	this.complete = full;
	this.showMissing = function() {
		console.log(this.missing)
	};
	this.showComplete = function() {
		console.log(this.complete);
	};
};

var q1 = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
var q2 = new ClozeCard("Earth is the largest and densest of the four rocky planets", "Earth");
var q3 = new ClozeCard("The world's largest river is the Amazon river", "Amazon");
var q4 = new ClozeCard("The ancient romans used bird poop to dye their hair", "bird poop");
var q5 = new ClozeCard("The worlds biggest island is Greenland", "Greenland");
// q1.partial();
// q1.showMissing();
// q1.showComplete();

var count = 0;
var wrong = 0;
var correct = 0;


inquirer.prompt([
	{	
		type: "input",
		name:"q1",
		message: q1.partial()
	}, {	
		type: "input",
		name:"q2",
		message: q2.partial()
	}, {	
		type: "input",
		name:"q3",
		message: q3.partial()
	}, {	
		type: "input",
		name:"q4",
		message: q4.partial()
	}, {	
		type: "input",
		name:"q5",
		message: q5.partial()
	}
]).then (function(responce) {
	for (var key in responce) {
		// console.log(answers[count]);
		// console.log(responce[key]);
		if (answers[count].toLowerCase() == responce[key].toLowerCase()) {
			correct++;
		} else {
			wrong++;
			console.log("you got question " + (count + 1) +" incorrect... the correct answer was: " + answers[count]);
		}
		count++;
	}
	console.log("You got " + (correct/5 * 100)   +"% of the questions correct")	
});