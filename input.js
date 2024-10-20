var letters = {
	"a": ["a", "A", "@", "ä", "α", "À", "Á", "Â", "Ã", "Ä", "Å"],
	"b": ["b", "B", "6"],
	"c": ["c", "C", "(", "©", "Ç"],
	"d": ["d", "D"],
	"e": ["e", "E", "3", "³", "€", "È", "É", "Ê", "Ë"],
	"f": ["f", "F"],
	"g": ["g", "G"],
	"h": ["h", "H", ],
	"i": ["i", "I", "!", "1", "|", "Ì", "Í", "Î", "Ï", "Ĩ", "ĩ", "Ī", "ī", "Ĭ", "ĭ", "Į", "į", "İ", "ı"],
	"j": ["j", "J", "Į", "į", "Ĵ", "ĵ"],
	"k": ["k", "K", "Ķ", "ķ", "ĸ"],
	"l": ["l", "L", "i", "I", "!", "1", "|", "Ì", "Í", "Î", "Ï", "Ĩ", "ĩ", "Ī", "ī", "Ĭ", "ĭ", "Į", "į", "İ", "ı", "Ĺ", "Ļ", "Ł", "ł", "ĺ", "ļ"],
	"m": ["m", "M", "ՠ", "ա", "൩", "൱", "ก", "ด", "ต", "ถ", "ท"],
	"n": ["n", "N", "Ń", "ń", "Ņ", "ņ", "Ň", "ň", "ŉ", "Ŋ", "h", "ŋ", "ղ", "ո", "ח", "൨", "ภ"],
	"o": ["o", "O", "ö", "0", "°", "Ō", "ō", "Ŏ", "ŏ", "Ő", "ő", "θ", "օ", "ഠ", "൦"],
	"p": ["p", "P", "₱"],
	"q": ["q", "Q", "θ"],
	"r": ["r", "R", "®", "Ŕ", "ŕ", "Ŗ", "ŗ", "Ř", "ř","ʳ"],
	"s": ["s", "S", "$", "§","Š", "š"],
	"t": ["t", "T"],
	"u": ["u", "U", "ü", "µ", "ն", "մ", "น", "บ", "ป"],
	"v": ["v", "V"],
	"w": ["w", "W", "ա", "ผ", "ฝ", "พ", "ฟ"],
	"x": ["x", "X", ],
	"y": ["y", "Y", "Ÿ"],
	"z": ["z", "Z", "ž"],
	"ß": ["ß", "s", "S"],
	"ä": ["ä"],
	"ö": ["ö"],
	"ü": ["ü"],
	"1": ["1", "i", "I", "!", "|", "Ì", "Í", "Î", "Ï", "Ĩ", "ĩ", "Ī", "ī", "Ĭ", "ĭ", "Į", "į", "İ", "ı"],
	"2": ["2", "²"],
	"3": ["3", "³"],
	"4": ["4", "A"],
	"5": ["5", "S"],
	"6": ["6", "b"],
	"7": ["7", "/"],
	"8": ["8", "B"],
	"9": ["9", "g"],
	"0": ["0", "O", "o", "°", "θ"],
	" ": [" ", ".", ",", "-", "_"],
	"-": ["-"],
	"?": ["?", "¿"],
	"!": ["!", "|"]
};

const reasons = reason = {
	spam: "Spam",
	impersonation: "Impersonation",
	adminImpersonation: "Impersonation of admin",
	test: "TEST - This shouldn't have happened. You're free to reconnect once this mistake is fixed. Big sorry!",
	obscene: "We don't use such words here...",
	undefined: " ",
	characters: {
		bloodType: "You can't use blood-type emojis in your nickname.",
		control: "Your nickname can't contain control-characters.",
		mathDoubleStruckUpper: "You can't have Mathematical Double-Struck Letters in your nickname.",
		mathDoubleStruckLower: "You can't have Mathematical Double-Struck Letters in your nickname.",
		consSpace: "You can't have 3 or more consecutive spaces in your nickname.",
		fakeF: "You can't have weird versions of 'F' in your nickname.",
		fakeG: "You can't have weird versions of 'G' in your nickname.",
		fakeL: "You can't have weird versions of 'L' in your nickname.",
		fakeS: "You can't have weird versions of 'S' in your nickname.",
		fakeR: "You can't have weird versions of 'R' in your nickname.",
		fakeDash: "You can't have weird versions of '-' in your nickname.",
		tsbug1: "Your nickname contains weird and broken characters due to Teamspeak string translation. Please only use normal letters to avoid this.",
		undefined: " ",
		regionalIndicatorLetters: "Your nickname can't contain Regional Indicator Letters",
		middleFinger: "You can't show your middlefinger like that...",
		enclosedAlphanumerics: "Your nickname can't contain Enclosed Alphanumerics (Letters in circles)",
		enclosedAlphanumerics2: "Your nickname can't contain Enclosed Alphanumerics (Letters in brackets)"
	}
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
