var charsetCollection = [
	[["🅰️", "🅱️", "🅾️", "🆎"], reasons.characters.bloodType],
	[["Ⓜ️"], reasons.test]
];

function generateBanCharsetOne(inputEntry) {
	let processedEntry = [];
	for(let letter of inputEntry[0]) {
		let processedLetter = ".*" + letter + ".*";
		processedEntry.push([processedLetter, inputEntry[1]]);
	}

	return processedEntry;
}

function handleBanCharsetCollection(inputCollection) {
	let processedCharsetCollection = [];
	for(let collectionEntry of inputCollection) {
		processedCharsetCollection.push(...generateBanCharsetOne(collectionEntry));
	}

	return processedCharsetCollection;
}
