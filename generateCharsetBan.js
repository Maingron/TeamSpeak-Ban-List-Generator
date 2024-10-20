var charsetCollection = [
	// [["🅰️", "🅱️", "🅾️", "🆎"], reasons.characters.bloodType],
	// [["[🅰️🅱️🅾️🆎]"], reasons.characters.bloodType],
	[["\\s\\s\\s"], reasons.characters.consSpace],
	[["[ƒƑ]"], reasons.characters.fakeF],
	[["[ց]"], reasons.characters.fakeG],
	[["[ľŀ]"], reasons.characters.fakeL],
	[["[ಽട]"], reasons.characters.fakeS],
	[["[–—]"], reasons.characters.fakeDash],
	[["[ƦɌѓЃґҐӷӶԇԆ]"], reasons.characters.fakeR],
	[["[️️️]"], reasons.characters.tsbug1],
	[["[␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟␠␡]"], reasons.characters.control],
	[["[🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿]"], reasons.characters.regionalIndicatorLetters],
	[["[🖕]"], reasons.characters.middleFinger],
	[["[⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵]"], reasons.characters.enclosedAlphanumerics2],
	[["[ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ]"], reasons.characters.enclosedAlphanumerics],
	[["Ⓜ️"], reasons.test]
];

// Invalid, and thus already "banned" charsets:
// [["[𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤℾℿ]"], reasons.characters.mathDoubleStruckUpper],
// [["[𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫ℼℽ]"], reasons.characters.mathDoubleStruckLower],

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
