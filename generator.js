var arrayOfRenderedStrings = [], arrayOfRenderedYatqa = [];

function replaceLettersInWord(inputWord, flags = 0b1001) {
	// flags: (0 b 8 4 2 1)
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
		if(letterOfWord == "+") {
			processedWord += "+";
			continue;
		}

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
		// Flags:
		// 1: Expand
		let processedLetterCollection = [];

		if(typeof(inputLetterEntry[0]) == "number") {
			flags = inputLetterEntry[0];
		} else {
			flags = 0b1;
		}


	
		for(let letter of inputLetterEntry) {
			if(typeof(letter) != "string") {
				continue;
			}
			if(flags & 1) {
				let letterLower = letter.toLowerCase();
				let letterUpper = letter.toUpperCase();
		
				if(processedLetterCollection.indexOf(letterLower) == -1) {
					processedLetterCollection.push(letterLower);
				}
		
				if(processedLetterCollection.indexOf(letterUpper) == -1) {
					processedLetterCollection.push(letterUpper);
				}
			} else {
				processedLetterCollection.push(letter);
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
					resultingCollection.push(oneSubEntry);
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

function isValidQueryLength(fullQuery, type) {
	const textEncoder = new TextEncoder();

	switch(type) {
		default:
		case "yatqaimport":
			if(textEncoder.encode(fullQuery).length > 2040) {
				console.warn("Entry removed due to entire query being too long (" + textEncoder.encode(fullQuery).length + ")", fullQuery);
				return false
			}
			if(textEncoder.encode(fullQuery.split("name=")[1].split(" duration=")[0]).length > 255) {
				console.warn("Entry removed due to parameter 'name=' being too long (" + textEncoder.encode(fullQuery.split("name=")[1].split(" duration=")[0]).length + ")", fullQuery);
				return false;
			}
			break;
	}

	return true
}

function startSequentialProcess() {
	letters = expandLetters.handleLetterCollection(letters);
	letters = reduceLetters.handleLetterCollection(letters, reduceLetters.mergeAllFromCharsetCollection(charsetCollection));
	letters = reduceLetters.handleLetterCollection(letters, reduceLetters.mergeAllFromCharsetCollection(incompatibleLetters.teamspeak));
	letters = reduceLetters.handleLetterCollection(letters, reduceLetters.mergeAllFromCharsetCollection(incompatibleLetters.yatqaAlways));
	letters = reduceLetters.handleLetterCollection(letters, reduceLetters.mergeAllFromCharsetCollection(incompatibleLetters.yatqaImport));
	letters = reduceLetters.handleLetterCollection(letters, reduceLetters.mergeAllFromCharsetCollection(incompatibleLetters.sinusbot));
	let result1 = handleWordCollection(words);
	result1 = yatqaConverter.handleWordCollection(result1);

	let result2 = handleBanCharsetCollection(charsetCollection);
	result2 = yatqaConverter.handleWordCollection(result2);

	for(let letter1 of incompatibleLetters.yatqaImport) {
		result1 = result1.replaceAll(letter1, "");
		result2 = result2.replaceAll(letter1, "");
	}

	for(let letter1 of incompatibleLetters.yatqaAlways) {
		result1 = result1.replaceAll(letter1, "");
		result2 = result2.replaceAll(letter1, "");
	}

	for(let letter1 of incompatibleLetters.teamspeak) {
		result1 = result1.replaceAll(letter1, "");
		result2 = result2.replaceAll(letter1, "");
	}

	document.querySelector("#g-ybl").innerHTML = result2 + result1;
}

startSequentialProcess();
