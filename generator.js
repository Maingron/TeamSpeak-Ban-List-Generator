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

var expandLetters = {
	handleOneLetterEntry: function(inputLetterEntry) {
		let processedLetterCollection = [];
	
		for(let letter of inputLetterEntry) {
			let letterLower = letter.toLowerCase();
			let letterUpper = letter.toUpperCase();
	
			if(processedLetterCollection.indexOf(letterLower) == -1) {
				processedLetterCollection.push(letterLower);
			}
	
			if(processedLetterCollection.indexOf(letterUpper) == -1) {
				processedLetterCollection.push(letterUpper);
			}
		}
	
		return processedLetterCollection;
	},
	
	handleLetterCollection: function(inputCollection) {
		let processedLetterCollection = {};
		for(let letter of Object.keys(inputCollection)) {
			processedLetterCollection[letter] = this.handleOneLetterEntry(inputCollection[letter]);
		}

		return processedLetterCollection;
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
	letters = expandLetters.handleLetterCollection(letters);

	let result1 = handleWordCollection(words);
	result1 = yatqaConverter.handleWordCollection(result1);

	let result2 = handleBanCharsetCollection(charsetCollection);
	result2 = yatqaConverter.handleWordCollection(result2);


	document.querySelector("#g-ybl").innerHTML = result2 + result1;
}

startSequentialProcess();
