var arrayOfRenderedStrings = [];

const letters = {
	"a": ["a", "A", "@", "α", "ⓐ", "🅰️"],
	"b": ["b", "B", "6", "ⓑ", "🅱️"],
	"c": ["c", "C", "(", "ⓒ"],
	"d": ["d", "D", "ⓓ"],
	"e": ["e", "E", "3", "³", "ⓔ", "€"],
	"f": ["f", "F", "ⓕ"],
	"g": ["g", "G", "ⓖ"],
	"h": ["h", "H", "ⓗ"],
	"i": ["i", "I", "ⓘ", "!", "1", "|"],
	"j": ["j", "J"],
	"k": ["k", "K"],
	"l": ["l", "L", "i", "I", "!", "1", "|"],
	"m": ["m", "M", "Ⓜ"],
	"n": ["n", "N", "Ⓝ"],
	"o": ["o", "O", "Ⓞ"],
	"p": ["p", "P", "Ⓟ"],
	"q": ["q", "Q", "Ⓠ"],
	"r": ["r", "R", "Ⓡ"],
	"s": ["s", "S", "$", "§", "Ⓢ"],
	"t": ["t", "T", "Ⓣ"],
	"u": ["u", "U", "Ⓤ", "µ"],
	"v": ["v", "V", "Ⓥ"],
	"w": ["w", "W", "Ⓦ"],
	"x": ["x", "X", "Ⓧ"],
	"y": ["y", "Y", "Ⓨ"],
	"z": ["z", "Z", "Ⓩ"],
	"1": ["1", "i", "I", "!", "|"],
	"2": ["2", "²"],
	"3": ["3", "³"],
	"4": ["4", "A"],
	"5": ["5", "S"],
	"6": ["6", "b"],
	"7": ["7"],
	"8": ["8", "B"],
	"9": ["9", "g"],
	"0": ["0", "O", "o", "°"],
};

const reasons = reason = {
	spam: "Spam",
	impersonation: "Impersonation",
	adminImpersonation: "Impersonation of admin",
	test: "TEST - This shouldn't have happened. You're free to reconnect once this mistake is fixed. Big sorry!",
	obscene: "We don't use such words here...",
	undefined: " "
}

const words = [
	// ["reason", "word"],
	["test", reason.test],

	// Probably spam, users should use something individual
		["mspeakuse", reason.undefined],


	// Admin / Impersonation:
		["admin", reason.adminImpersonation],
		["serveradmin", reason.adminImpersonation],
		["owner", reason.adminImpersonation],
		["maingron", reason.impersonation],

	// Obscene:
		["nazi", reason.obscene],
		["fuck", reason.obscene],
		["penis", reason.obscene],
		["bitch", reason.obscene],
		["nigger", reason.obscene],
		["niger", reason.obscene],

		// German:
		["hurensohn", reason.obscene],
		["huhrensohn", reason.obscene],
		["nutte", reason.obscene],
		["arsch", reason.obscene]
];



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
	arrayOfRenderedStrings.push(replaceLettersInWord(word[0]));
}

function handleOneWordEntry(inputWord) {
	let word = inputWord[0];
	let reason = inputWord[1];

	return [replaceLettersInWord(word), reason];
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

outputStuff.outputToHTML();
