var arrayOfRenderedStrings = [], arrayOfRenderedYatqa = [];

function replaceLettersInWord(inputWord) {
	let wordString = ".*";
	for(let letterOfWord of inputWord.split("")) {
		let letterLetters = letters[letterOfWord];
		let letterCapsule = "[";
		for(let targetLetter of letterLetters) {
			letterCapsule += targetLetter;
		}
		letterCapsule += "]";
		letterCapsule += ".?";
		letterCapsule += ".?";
		letterCapsule += ".?";
		letterCapsule += ".?";
		wordString += letterCapsule;
	}
	wordString += ".*";

	return wordString;
}

for(let word of words) {
	// arrayOfRenderedStrings.push(replaceLettersInWord(word[0]));
	arrayOfRenderedYatqa.push(handleOneWordEntry(word));
}

function handleOneWordEntry(inputWord) {
	let word = inputWord[0];
	let reason = inputWord[1];

	return [replaceLettersInWord(word), reason];
}

var formatConvert = {
	arrayEntryToYatqa: function(input) {
		let name = input[0];
		let reason = input[1];
		return "name=" + name + " duration=0 banreason=" + reason + " ";
	}
}

var outputStuff = {
	outputToHTML: function() {
		let outputString = "";
		for(let myString of arrayOfRenderedStrings) {
			outputString += myString + "<br>";
		}
		document.write(outputString);
	}
}

function startSequentialProcess() {
	
}

outputStuff.outputToHTML();
