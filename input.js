var letters = {
	"+": [0b0, "+"],
};

var multiLetters = { // This is not implemented yet, just a "dummy-ish" object containing data for future use
	"aa": ["ㅆ", "ㅃ"],
	"ae": ["Æ", "æ"],
	"tm": ["™"],
	"yen": ["¥", "￥"],
	"dz": ["Ǳ", "ǲ", "ǳ"],
	"cc": ["ㄸ"]
}

const incompatibleLetters = {
	teamspeak: [],
	yatqaAlways: [],
	yatqaImport: ["¦"],
	sinusbot: []
}

const reasons = reason = {
	spam: "Spam",
	impersonation: "Impersonation",
	adminImpersonation: "Impersonation of admin",
	test: "TEST - This shouldn't have happened. You're free to reconnect once this mistake is fixed. Big sorry!",
	obscene: "We don't use such words here...",
	undefined: "Reason unknown",
	characters: {
		bloodType: "You can't use blood-type emojis in your nickname.",
		control: "Your nickname can't contain control-characters.",
		mathDoubleStruckUpper: "You can't have Mathematical Double-Struck Letters in your nickname.",
		mathDoubleStruckLower: "You can't have Mathematical Double-Struck Letters in your nickname.",
		consSpace: "You can't have 3 or more consecutive spaces in your nickname.",
		fakeF: "You can't have weird versions of 'F' in your nickname.",
		fakeG: "You can't have weird versions of 'G' in your nickname.",
		fakeK: "You can't have weird versions of 'K' in your nickname.",
		fakeL: "You can't have weird versions of 'L' in your nickname.",
		fakeM: "You can't have weird versions of 'M' in your nickname.",
		fakeN: "You can't have weird versions of 'N' in your nickname.",
		fakeO: "You can't have weird versions of 'O' in your nickname.",
		fakeS: "You can't have weird versions of 'S' in your nickname.",
		fakeR: "You can't have weird versions of 'R' in your nickname.",
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
		modifiedCurrency: "Your nickname can't contain modified currency Characters",
		upsideDown: "Your nickname can't contain upside-down Characters",
		unclassified: "Your nickname contains invalid characters",
		circled: "Your nickname can't contain circled characters"
	}
}

const words = [
	// ["reason", "word"],
	["test", reason.test],

	// Probably spam, users should use something individual
		["mspeakuse", reason.undefined],
		["seakuse", reason.undefined],
		["new", reason.undefined, 0b1],


	// Admin / Impersonation:
		["admin", reason.adminImpersonation],
		["serveradmin", reason.adminImpersonation],
		["owner", reason.adminImpersonation],
		["maingron", reason.impersonation],

	// Obscene:
		["nazi", reason.obscene],
		["fuck", reason.obscene],
		["penis", reason.obscene],
		["dick", reason.obscene, 0b0],
		["big dick", reason.obscene],
		["bitch", reason.obscene],
		["nig+er", reason.obscene],
		["kill yo", reason.obscene],
		["otherfuc", reason.obscene],
		["asshole", reason.obscene],
		["ickhea", reason.obscene],
		["fuck off", reason.obscene],
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


		// German:
		["hurensohn", reason.obscene],
		["huhrensohn", reason.obscene],
		["nutte", reason.obscene],
		["arsc", reason.obscene],
		["arsh", reason.obscene],
		["enisluts", reason.obscene],
		["scheiß", reason.obscene],
		["ecksau", reason.obscene],
		["eckssau", reason.obscene],
		["ficken", reason.obscene],
		["umslokal", reason.obscene],
		["fotze", reason.obscene],
		["wichs", reason.obscene],
		["issgebur", reason.obscene]

];
