function matchTester(input, against) {
	let matchArray = [];
	for(let compareTo of against) {
		if(input.match(compareTo[0])) {
			matchArray.push(compareTo);
		}
	}

	matchTesterToOutput(matchArray);

	return matchArray;
}

function matchTesterToOutput(matchArray, textareaElement = document.querySelector("#match-tester-output") || document.querySelector(".match-tester--matches")) {
	if (!textareaElement) return;
	
	textareaElement.value = "";
	for(let match of matchArray) {
		textareaElement.value += match[0] + "\t\t" + match[1] + "\n";
	}
}
