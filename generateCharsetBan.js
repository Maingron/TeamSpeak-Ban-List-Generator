var charsetCollection = [
	// [["🅰️", "🅱️", "🅾️", "🆎"], reasons.characters.bloodType],
	// [["[🅰️🅱️🅾️🆎]"], reasons.characters.bloodType],
	[["\\s\\s\\s"], reasons.characters.consSpace],
	[["[ƒƑ]"], reasons.characters.fakeF],
	[["[ց]"], reasons.characters.fakeG],
	[["[ĸ]"], reasons.characters.fakeK],
	[["[ľŀ]"], reasons.characters.fakeL],
	[["[Μ]"], reasons.characters.fakeM],
	[["[օՕഠ൦]"], reasons.characters.fakeO],
	[["[ಽട]"], reasons.characters.fakeS],
	[["[–—]"], reasons.characters.fakeDash],
	[["[ƦɌѓЃґҐӷӶԇԆ]"], reasons.characters.fakeR],
	[["[️️️]"], reasons.characters.tsbug1],
	[["[␀␁␂␃␄␅␆␇␈␉␊␋␌␍␎␏␐␑␒␓␔␕␖␗␘␙␚␛␜␝␞␟␠␡]"], reasons.characters.control],
	[["[🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿]"], reasons.characters.regionalIndicatorLetters],
	[["[🖕]"], reasons.characters.middleFinger],
	[["[⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵]"], reasons.characters.enclosedAlphanumerics2],
	[["[ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ]"], reasons.characters.enclosedAlphanumerics],
	// [["[𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧]"], reasons.characters.undefined],
	[["[ʎʍʌʇɹɯʅʞɾᴉɥƃⅎǝɔɐ]"], reasons.characters.upsideDown],
	[["[ᴀᴅᴍɪɴ]"], reasons.characters.unclassified],
	[["[АаВвЕеКкМмНнОоРрСсТтУуХхЅѕІіЈј]"], reasons.characters.russianIdentical],
	// [["[𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻]"], reasons.characters.undefined],
	// [["[𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓]"], reasons.characters.undefined],
	// [["[𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯]"], reasons.characters.undefined],
	// [["[𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛]"], reasons.characters.undefined],
	// [["[𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳]"], reasons.characters.undefined],
	// [["[𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇]"], reasons.characters.undefined],
	// [["[𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣]"], reasons.characters.undefined],
	// [["[𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷]"], reasons.characters.undefined],
	// [["[𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟]"], reasons.characters.undefined],
	// [["[𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏]"], reasons.characters.undefined],
	// [["[𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃]"], reasons.characters.undefined],
	// [["[ⲁⲃⲥⲇⲉ𝓯𝓰ⲏⲓ𝓳ⲕ𝓵ⲙⲛⲟⲣ𝓺ꞅ𝛓ⲧ𐌵𝓿ⲱⲭⲩⲍ]"], reasons.characters.undefined],
	[["[ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ]"], reasons.characters.unclassified],
	// [["[🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉]"], reasons.characters.undefined],
	// [["[🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩]"], reasons.characters.undefined],
	[["[ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ]"], reasons.characters.circled],
	[["[࿕࿖࿗࿘]"], reasons.characters.political],
	[["[¦|]"], reasons.characters.pipes],
	[["[＄﹩￡￠￥￦]"], reasons.characters.modifiedCurrency],
	[["[Ⓜ️]"], reasons.test]
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
