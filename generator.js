var arrayOfRenderedStrings = [], arrayOfRenderedYatqa = [];

function replaceLettersInWord(inputWord, flags = 0b1001) {
	// flags:
	// 1: append and prepend .*
	// 2: must be followed by space character
	// 4: must be preceded by space character
	// 8: match random characters between letters
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
			if(flags & 8) {
				processedWord += ".?.?";
			}
		}

		processedWord += "[" + getInnerCapsule(letterOfWord) + "]";
	}

	if(flags & 4) {
		processedWord = "\\s" + processedWord;
	}

	if(flags & 2) {
		processedWord = processedWord + "\\s";
	}

	if(flags & 1) {
		processedWord = ".*" + processedWord + ".*";
	}

	return processedWord;
}

function handleOneWordEntry(inputWord) {
	let word = inputWord[0];
	let reason = inputWord[1];
	let flags = inputWord[2];

	return [replaceLettersInWord(word, flags), reason];
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

var reduceLetters = {
	// This will remove characters from letters that are already included in charsetCollection.
	// This will reduce length of ban strings

	mergeAllFromCharsetCollection: function(inputCharsetCollection) {
		let resultingCollection = [];
		for(let oneCharsetEntry of inputCharsetCollection) {
			for(let oneSubEntry of oneCharsetEntry[0]) {
				if(oneSubEntry.indexOf("[") == 0 && oneSubEntry.indexOf("]") == oneSubEntry.length - 1) {
					oneSubEntry = oneSubEntry.split("[")[1].split("]")[0];
					oneSubEntry = oneSubEntry.split("");
					
					for(let oneChar of oneSubEntry) {
						resultingCollection.push(oneChar);
					}
				} else {
					resultingCollection.push(oneSubEntry)
				}
			}
		}
		return resultingCollection;
	},

	handleLetterCollection: function(inputCollection, inputCharsetCollectionString) {
		let processedLetterCollection = {};

		for(let letter of Object.keys(inputCollection)) {
			processedLetterCollection[letter] = this.handleOneLetterEntry(inputCollection[letter], inputCharsetCollectionString); 
		}

		return processedLetterCollection;
	},

	handleOneLetterEntry: function(inputLetterEntry, inputCharsetCollectionString) {
		let processedLetterEntry = [];

		for(let letter of inputLetterEntry) {
			if(inputCharsetCollectionString.indexOf(letter) == -1) {
				processedLetterEntry.push(letter);
			}
		}

		return processedLetterEntry;
	}
}

function startSequentialProcess() {
	letters = expandLetters.handleLetterCollection(letters);
	letters = reduceLetters.handleLetterCollection(letters, reduceLetters.mergeAllFromCharsetCollection(charsetCollection));

	let result1 = handleWordCollection(words);
	result1 = yatqaConverter.handleWordCollection(result1);

	let result2 = handleBanCharsetCollection(charsetCollection);
	result2 = yatqaConverter.handleWordCollection(result2);


	document.querySelector("#g-ybl").innerHTML = result2 + result1;
}

startSequentialProcess();
