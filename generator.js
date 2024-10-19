var arrayOfRenderedStrings = [], arrayOfRenderedYatqa = [];

function replaceLettersInWord(inputWord) {
	let processedWord = "";

	function getInnerCapsule(letter) {
		let processedInnerCapsule = "";

		for(let targetLetter of letters[letter]) {
			processedInnerCapsule += targetLetter;
		}

		return processedInnerCapsule;
	}

	for(let letterOfWord of inputWord.split("")) {
		if(processedWord.length > 0) {
			processedWord += ".?.?.?.?.?";
		}

		processedWord += "[" + getInnerCapsule(letterOfWord) + "]";
	}

	return ".*" + processedWord + ".*";
}

function handleOneWordEntry(inputWord) {
	let word = inputWord[0];
	let reason = inputWord[1];

	return [replaceLettersInWord(word), reason];
}

function handleWordCollection(inputCollection) {
	let processedWordCollection = [];

	for(let oneWordEntry of inputCollection) {
		processedWordCollection.push(handleOneWordEntry(oneWordEntry));
	}

	return processedWordCollection;
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
