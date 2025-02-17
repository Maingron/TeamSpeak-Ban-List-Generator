var letters = {
	"a": [0b1, "a", "A", "@", "ä", "α", "À", "Á", "Â", "Ã", "Ä", "Å", "ª", "₳", "ᗅ", "ᗋ", "ᴀ"],
	"b": [0b1, "b", "B", "6", "₿", "ß", "฿", "ᗷ", "ᗽ", "ᛒ", "Ь"],
	"c": [0b1, "c", "C", "(", "©", "Ç", "©", "¢", "￠", "₡"],
	"d": [0b1, "d", "D", "Ð", "𐐀", "₫", "ɗ", "ԁ", "ᗞ", "ᗟ", "ᗠ", "ᗤ", "ᗪ", "ᴅ"],
	"e": [0b1, "e", "E", "3", "³", "€", "È", "É", "Ê", "Ë", "£", "￡", "ę", "ε", "₤"],
	"f": [0b1, "f", "F"],
	"g": [0b1, "g", "G"],
	"h": [0b1, "h", "H", "ㅐ", "ᕼ", "ᚺ"],
	"i": [0b0, "i", "I", "l", "!", "1", "|", "Ì", "Í", "Î", "Ï", "Ĩ", "ĩ", "Ī", "ī", "Ĭ", "ĭ", "Į", "į", "İ", "ı", "ㅣ", "¡", "¦", "ӏ", "ᛌ", "ᥣ", "ɪ"],
	"j": [0b1, "j", "J", "Į", "į", "Ĵ", "ĵ"],
	"k": [0b1, "k", "K", "Ķ", "ķ", "ĸ"],
	"l": [0b1, "l", "L", "i", "I", "!", "1", "|", "Ì", "Í", "Î", "Ï", "Ĩ", "ĩ", "Ī", "ī", "Ĭ", "ĭ", "Į", "į", "İ", "ı", "Ĺ", "Ļ", "Ł", "ł", "ĺ", "ļ"],
	"m": [0b1, "m", "M", "ՠ", "ա", "൩", "൱", "ᗰ", "ต", "ถ", "₥", "₼", "ᴍ"],
	"n": [0b1, "n", "N", "Ń", "ń", "Ņ", "ņ", "Ň", "ก", "ด", "ท", "ň", "ŉ", "Ŋ", "h", "ŋ", "ղ", "ո", "൨", "ภ", "∩", "₦", "ɴ"],
	"o": [0b1, "o", "O", "ö", "0", "°", "Ō", "ō", "Ŏ", "ŏ", "Ő", "ő", "θ", "օ", "ഠ", "൦", "ㅇ", "σ", "᥆", "᭜", "᱀", "ᱛ"],
	"p": [0b1, "p", "P", "₱"],
	"q": [0b1, "q", "Q", "θ"],
	"r": [0b1, "r", "R", "®", "Ŕ", "ŕ", "Ŗ", "ŗ", "Ř", "ř","ʳ", "®", "₹", "ᖇ", "ᚱ"],
	"s": [0b1, "s", "S", "$", "§","Š", "š", "Ś", "ś", "ಽ", "ട", "﹩", "＄", "₷", "ᔆ"],
	"t": [0b1, "t", "T", "+", "±", "τ", "₸", "ᚁ"],
	"u": [0b1, "u", "U", "ü", "µ", "ն", "մ", "น", "บ", "ป"],
	"v": [0b1, "v", "V"],
	"w": [0b1, "w", "W", "ա", "ผ", "ฝ", "พ", "ฟ", "￦", "₩", "ᗯ"],
	"x": [0b1, "x", "X", "×", "ᕁ", "ᕽ", "᙭", "᰽"],
	"y": [0b1, "y", "Y", "Ÿ", "¥", "￥"],
	"z": [0b1, "z", "Z", "ž", "Ź"],
	"ß": [0b1, "ß", "ẞ", "s", "S"],
	"ä": [0b1, "ä"],
	"ö": [0b1, "ö"],
	"ü": [0b1, "ü"],
	"1": [0b0, "1", "i", "I", "!", "|", "Ì", "Í", "Î", "Ï", "Ĩ", "ĩ", "Ī", "ī", "Ĭ", "ĭ", "Į", "į", "İ", "ı", "₁"],
	"2": [0b0, "2", "²", "₂", "ᒾ", "ᒿ"],
	"3": [0b0, "3", "³", "₃"],
	"4": [0b0, "4", "A", "₄"],
	"5": [0b0, "5", "S", "₅"],
	"6": [0b0, "6", "b", "₆"],
	"7": [0b0, "7", "/", "₇"],
	"8": [0b0, "8", "B", "₈"],
	"9": [0b0, "9", "g", "₉"],
	"0": [0b0, "0", "O", "o", "°", "θ", "₀", "᱀"],
	" ": [0b0, "\\s", ".", ",", "-", "_"],
	"-": [0b0, "-", "ㅡ", "—", " "],
	".": [0b0, ".", "·", "᛫"],
	":" : [0b0, ":", "᛬", "="],
	"=": [0b0, "="],
	";": [0b0, ";", "᛭"],
	",": [0b0, ","],
	"+": [0b0, "+", "ᚁ"],
	"?": [0b0, "?", "¿", "ß", "s", "S"],
	"!": [0b0, "!", "|"],
	"/": [0b0, "/", "÷", "⁄"],
	"\\": [0b0, "\\"]
};

var multiLetters = { // This is not implemented yet, just a "dummy-ish" object containing data for future use
	"aa": ["ㅆ", "ㅃ"],
	"ae": ["Æ", "æ"],
	"tm": ["™"],
	"yen": ["¥", "￥"],
	"dz": ["Ǳ", "ǲ", "ǳ"],
	"cc": ["ㄸ"],
	"ce": ["Œ", "œ"],
	"oe": ["Œ", "œ"]
}

const incompatibleLetters = {
	teamspeak: ["𝖺", "𝖻", "𝖼", "𝖽", "𝖾", "𝖿", "𝗀", "𝗁", "𝗂", "𝗃", "𝗄", "𝗅", "𝗆", "𝗇", "𝗈", "𝗉", "𝗊", "𝗋", "𝗌", "𝗍", "𝗎", "𝗏", "𝗐", "𝗑", "𝗒", "𝗓", "𝘢", "𝘣", "𝘤", "𝘥", "𝘦", "𝘧", "𝘨", "𝘩", "𝘪", "𝘫", "𝘬", "𝘭", "𝘮", "𝘯", "𝘰", "𝘱", "𝘲", "𝘳", "𝘴", "𝘵", "𝘶", "𝘷", "𝘸", "𝘹", "𝘺", "𝘻", "𝙖", "𝙗", "𝙘", "𝙙", "𝙚", "𝙛", "𝙜", "𝙝", "𝙞", "𝙟", "𝙠", "𝙡", "𝙢", "𝙣", "𝙤", "𝙥", "𝙦", "𝙧", "𝙨", "𝙩", "𝙪", "𝙫", "𝙬", "𝙭", "𝙮", "𝙯", "𝐚", "𝐛", "𝐜", "𝐝", "𝐞", "𝐟", "𝐠", "𝐡", "𝐢", "𝐣", "𝐤", "𝐥", "𝐦", "𝐧", "𝐨", "𝐩", "𝐪", "𝐫", "𝐬", "𝐭", "𝐮", "𝐯", "𝐰", "𝐱", "𝐲", "𝐳", "𝗮", "𝗯", "𝗰", "𝗱", "𝗲", "𝗳", "𝗴", "𝗵", "𝗶", "𝗷", "𝗸", "𝗹", "𝗺", "𝗻", "𝗼", "𝗽", "𝗾", "𝗿", "𝘀", "𝘁", "𝘂", "𝘃", "𝘄", "𝘅", "𝘆", "𝘇", "𝚊", "𝚋", "𝚌", "𝚍", "𝚎", "𝚏", "𝚐", "𝚑", "𝚒", "𝚓", "𝚔", "𝚕", "𝚖", "𝚗", "𝚘", "𝚙", "𝚚", "𝚛", "𝚜", "𝚝", "𝚞", "𝚟", "𝚠", "𝚡", "𝚢", "𝚣", "𝔞", "𝔟", "𝔠", "𝔡", "𝔢", "𝔣", "𝔤", "𝔥", "𝔦", "𝔧", "𝔨", "𝔩", "𝔪", "𝔫", "𝔬", "𝔭", "𝔮", "𝔯", "𝔰", "𝔱", "𝔲", "𝔳", "𝔴", "𝔵", "𝔶", "𝔷", "𝖆", "𝖇", "𝖈", "𝖉", "𝖊", "𝖋", "𝖌", "𝖍", "𝖎", "𝖏", "𝖐", "𝖑", "𝖒", "𝖓", "𝖔", "𝖕", "𝖖", "𝖗", "𝖘", "𝖙", "𝖚", "𝖛", "𝖜", "𝖝", "𝖞", "𝖟", "𝒶", "𝒷", "𝒸", "𝒹", "ℯ", "𝒻", "ℊ", "𝒽", "𝒾", "𝒿", "𝓀", "𝓁", "𝓂", "𝓃", "ℴ", "𝓅", "𝓆", "𝓇", "𝓈", "𝓉", "𝓊", "𝓋", "𝓌", "𝓍", "𝓎", "𝓏", "𝓪", "𝓫", "𝓬", "𝓭", "𝓮", "𝓯", "𝓰", "𝓱", "𝓲", "𝓳", "𝓴", "𝓵", "𝓶", "𝓷", "𝓸", "𝓹", "𝓺", "𝓻", "𝓼", "𝓽", "𝓾", "𝓿", "𝔀", "𝔁", "𝔂", "𝔃", "ⲁ", "ⲃ", "ⲥ", "ⲇ", "ⲉ", "𝓯", "𝓰", "ⲏ", "ⲓ", "𝓳", "ⲕ", "𝓵", "ⲙ", "ⲛ", "ⲟ", "ⲣ", "𝓺", "ꞅ", "𝛓", "ⲧ", "𐌵", "𝓿", "ⲱ", "ⲭ", "ⲩ", "ⲍ", "🄰", "🄱", "🄲", "🄳", "🄴", "🄵", "🄶", "🄷", "🄸", "🄹", "🄺", "🄻", "🄼", "🄽", "🄾", "🄿", "🅀", "🅁", "🅂", "🅃", "🅄", "🅅", "🅆", "🅇", "🅈", "🅉", "🅐", "🅑", "🅒", "🅓", "🅔", "🅕", "🅖", "🅗", "🅘", "🅙", "🅚", "🅛", "🅜", "🅝", "🅞", "🅟", "🅠", "🅡", "🅢", "🅣", "🅤", "🅥", "🅦", "🅧", "🅨", "🅩", "𝑎", "𝑏", "𝑐", "𝑑", "𝑒", "𝑓", "𝑔", "ℎ", "𝑖", "𝑗", "𝑘", "𝑙", "𝑚", "𝑛", "𝑜", "𝑝", "𝑞", "𝑟", "𝑠", "𝑡", "𝑢", "𝑣", "𝑤", "𝑥", "𝑦", "𝑧"],
	yatqaAlways: [],
	yatqaImport: ["¦", "|", "𐐨", "𐐀"],
	sinusbot: []
}

const reasons = reason = {
	spam: "Spam",
	impersonation: "Impersonation",
	adminImpersonation: "Impersonation of admin",
	test: "TEST - This shouldn't have happened. You're free to reconnect once this mistake is fixed. Big sorry!",
	obscene: "We don't use such words here...",
	undefined: "Reason unknown",
	defaultName: "Your nickname has to be more unique",
	characters: {
		bloodType: "You can't use blood-type emojis in your nickname.",
		control: "Your nickname can't contain control-characters.",
		mathDoubleStruckUpper: "You can't have Mathematical Double-Struck Letters in your nickname.",
		mathDoubleStruckLower: "You can't have Mathematical Double-Struck Letters in your nickname.",
		consSpace: "You can't have 3 or more consecutive spaces in your nickname.",
		fakeA: "You can't have weird versions of 'A' in your nickname.",
		fakeB: "You can't have weird versions of 'B' in your nickname.",
		fakeC: "You can't have weird versions of 'C' in your nickname.",
		fakeD: "You can't have weird versions of 'D' in your nickname.",
		fakeE: "You can't have weird versions of 'E' in your nickname.",
		fakeF: "You can't have weird versions of 'F' in your nickname.",
		fakeG: "You can't have weird versions of 'G' in your nickname.",
		fakeH: "You can't have weird versions of 'H' in your nickname.",
		fakeI: "You can't have weird versions of 'I' in your nickname.",
		fakeJ: "You can't have weird versions of 'J' in your nickname.",
		fakeK: "You can't have weird versions of 'K' in your nickname.",
		fakeL: "You can't have weird versions of 'L' in your nickname.",
		fakeM: "You can't have weird versions of 'M' in your nickname.",
		fakeN: "You can't have weird versions of 'N' in your nickname.",
		fakeO: "You can't have weird versions of 'O' in your nickname.",
		fakeP: "You can't have weird versions of 'P' in your nickname.",
		fakeQ: "You can't have weird versions of 'Q' in your nickname.",
		fakeR: "You can't have weird versions of 'R' in your nickname.",
		fakeS: "You can't have weird versions of 'S' in your nickname.",
		fakeT: "You can't have weird versions of 'T' in your nickname.",
		fakeU: "You can't have weird versions of 'U' in your nickname.",
		fakeV: "You can't have weird versions of 'V' in your nickname.",
		fakeW: "You can't have weird versions of 'W' in your nickname.",
		fakeX: "You can't have weird versions of 'X' in your nickname.",
		fakeY: "You can't have weird versions of 'Y' in your nickname.",
		fakeZ: "You can't have weird versions of 'Z' in your nickname.",
		fakeDash: "You can't have weird versions of '-' in your nickname.",
		tsbug1: "Your nickname contains weird and broken characters due to Teamspeak string translation. Please only use normal letters to avoid this.",
		undefined: "Reason unknown",
		regionalIndicatorLetters: "Your nickname can't contain Regional Indicator Letters",
		middleFinger: "You can't show your middlefinger like that...",
		enclosedAlphanumerics: "Your nickname can't contain Enclosed Alphanumerics (Letters in circles)",
		enclosedAlphanumerics2: "Your nickname can't contain Enclosed Alphanumerics (Letters in brackets)",
		russianIdentical: "Your nickname can't contain characters Letters of the Russian (Cyrillic) Alphabet that look identical to the latin alphabet. Please replace all of these: АаВвЕеКкМмНнОоРрСсТтУуХхЅѕІіЈј with these: AaBbEeKkMmHhOoPpCcTtYyXxSsIiJj",
		political: "Your nickname can't contain certain political characters",
		pipes: "Your nickname can't contain Pipes (|)",
		modifiedCurrency: "Your nickname can't contain modified currency characters",
		outdatedCurrency: "Your nickname can't contain outdated currency characters",
		cryptoCurrency: "Your nickname can't contain crypto currency characters",
		currency: "Your nickname can't contain currency characters",
		upsideDown: "Your nickname can't contain upside-down characters",
		upsideDownPunctuation: "Your nickname can't contain upside-down punctuation characters",
		unclassified: "Your nickname contains invalid characters",
		circled: "Your nickname can't contain circled characters",
		superscript: "Your nickname can't contain superscript characters",
		subscript: "Your nickname can't contain subscript characters",
		runes: "Your nickname can't contain runes",
		hanunoo: "Your nickname can't contain Hanunoo characters",
		taile: "Your nickname can't contain Tai Le letters",
		latinSmall: "Your nickname can't contain characters from the Latin Small charset",
		hungarian: "Your nickname can't contain some characters of the hungarian alphabet (ÁáÉéÍíÓóŐőÚúŰű)"
	}
}

const words = [
	// ["reason", "word"],

	// Probably spam, users should use something individual
		["speakus", reason.defaultName],
		["seakus", reason.defaultName],

	// Admin / Impersonation:
		["admin", reason.adminImpersonation],
		// ["serveradmin", reason.adminImpersonation],
		["rveradm", reason.adminImpersonation],
		["owner", reason.adminImpersonation],
		["aingro", reason.impersonation],

	// Obscene:
		["nazi", reason.obscene],
		["war", reason.obscene, 0b0111],
		["fuck", reason.obscene],
		["bo+bs", reason.obscene, 0b0001],
		["bo+bie", reason.obscene, 0b0001],
		["penis", reason.obscene],
		["dick", reason.obscene, 0b0],
		["dic+pic", reason.obscene],
		["dic+ pic", reason.obscene],
		["big dick", reason.obscene],
		["bitch", reason.obscene],
		["nig+er", reason.obscene],
		["kill yo", reason.obscene],
		["otherfuc", reason.obscene],
		["as+hole", reason.obscene],
		["ickhea", reason.obscene],
		["fuck of+", reason.obscene],
		["acab", reason.obscene, 0b0111],
		["horny", reason.obscene],
		["shithead", reason.obscene],
		["porn", reason.obscene, 0b1111],
		["pornog", reason.obscene],
		["porny", reason.obscene],
		["rape", reason.obscene, 0b0101],
		["rapi", reason.obscene, 0b0101],
		["slut", reason.obscene, 0b1101],
		["arse", reason.obscene, 0b1111],
		["hitler", reason.obscene, 0b1001],
		["ieg hei", reason.obscene, 0b1001],
		["ocksuc", reason.obscene],
		["sex", reason.obscene, 0b0111],
		["cum", reason.obscene, 0b0111],
		["cumdum", reason.obscene, 0b0101],
		["slave", reason.obscene, 0b0111],

		// Advertisement
		["eos.com", reason.undefined, 0b1001],
		["http:/", reason.undefined, 0b1001],
		["https:", reason.undefined, 0b1001],
		["ftp:", reason.undefined, 0b1001],
		["ftps:", reason.undefined, 0b1001],
		["mailto:", reason.undefined, 0b1001],
		["//www", reason.undefined, 0b1001],
		["//ww2", reason.undefined, 0b1001],
		["//ww3", reason.undefined, 0b1001],
		["ww2.", reason.undefined, 0b1001],
		["ww3.", reason.undefined, 0b1001],
		["ts2.", reason.undefined, 0b1001],
		["ts3.", reason.undefined, 0b1001],
		["ts5.", reason.undefined, 0b1001],
		["join", reason.undefined, 0b1111],
		["hub.co", reason.undefined, 0b1001],
		["eos.co", reason.undefined, 0b1001],
		["ube.co", reason.undefined, 0b1001],
		["tu.be", reason.undefined, 0b1001],
		["ox.to", reason.undefined, 0b1001],

		["url.at", reason.undefined, 0b1001],
		["tly.co", reason.undefined, 0b1001],
		["t.ly", reason.undefined, 0b1001],
		["go.m", reason.undefined, 0b1001],
		["inyurl", reason.undefined, 0b1001],

		[".at/", reason.undefined, 0b1001],
		[".be/", reason.undefined, 0b1001],
		[".com/", reason.undefined, 0b1001],
		[".co/", reason.undefined, 0b1001],
		[".co.uk", reason.undefined, 0b1001],
		[".cx/", reason.undefined, 0b1001],
		[".de/", reason.undefined, 0b1001],
		[".dev/", reason.undefined, 0b1001],
		[".eu/", reason.undefined, 0b1001],
		[".ly/", reason.undefined, 0b1001],
		[".g+/", reason.undefined, 0b1001],
		[".live", reason.undefined, 0b1001],
		[".link", reason.undefined, 0b1001],
		[".it/", reason.undefined, 0b1001],
		[".jp/", reason.undefined, 0b1001],
		[".rb.gy", reason.undefined, 0b1001],
		[".ru/", reason.undefined, 0b1001],
		[".me/", reason.undefined, 0b1001],
		[".google", reason.undefined, 0b1001],
		[".to/", reason.undefined, 0b1001],
		[".tube/", reason.undefined, 0b1001],
		[".uk/", reason.undefined, 0b1001],
		[".tv/", reason.undefined, 0b1001],
		[".gov/", reason.undefined, 0b1001],
		[".xyz", reason.undefined, 0b1001],
		[".xxx", reason.undefined, 0b1001],
		[".zip/", reason.undefined, 0b1001],
		[".onion", reason.undefined, 0b1001],
		[".tor+ent", reason.undefined, 0b1001],
		[".magnet", reason.undefined, 0b1001],
		["?dl=", reason.undefined, 0b1001],
		["?down", reason.undefined, 0b1001],
		["scribe no", reason.undefined, 0b1001],
		["scribe to", reason.undefined, 0b1001],
		["sub to", reason.undefined, 0b1001],
		["sub now", reason.undefined, 0b1001],
		["oad now", reason.undefined, 0b1001],
		["it+or+ent", reason.undefined, 0b1001],
		["eam now", reason.undefined, 0b1001],
		["arn now", reason.undefined, 0b1001],


		// Politics
		["vote tr", reason.undefined, 0b1001],
		["vote el", reason.undefined, 0b1001],
		["vote fo", reason.undefined, 0b1001],
		["maga", reason.undefined, 0b1111],
		["ca first", reason.undefined, 0b1001],
		["ny first", reason.undefined, 0b1001],




		// German:
		["urenso", reason.obscene],
		["uhrenso", reason.obscene],
		["nut+e", reason.obscene],
		["arsc", reason.obscene],
		["arsh", reason.obscene],
		["nislut", reason.obscene],
		["anzluts", reason.obscene],
		["scheiß", reason.obscene],
		["scheis+", reason.obscene],
		["ecks+au", reason.obscene],
		["fick", reason.obscene, 0b0111],
		["ficken", reason.obscene],
		["bumsloka", reason.obscene],
		["fotze", reason.obscene],
		["wichs", reason.obscene],
		["is+gebur", reason.obscene],
		["führer", reason.obscene],
		["fuhrer", reason.obscene],
		["sklave", reason.obscene, 0b0111],
		["hure", reason.obscene, 0b0101],
		["wichser", reason.obscene],
		["wix+er", reason.obscene],
		["schlampe", reason.obscene, 0b1101],
		["fotz", reason.obscene],
		["spas+t", reason.obscene, 0b1101]
];
