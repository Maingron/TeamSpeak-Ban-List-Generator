var yatqaConverter = {
	handleOneWordEntry: function(inputEntry) {
		let result = "name=" + inputEntry[0] + " duration=0 banreason=" + this.convertReason(inputEntry[1]);
		result += " \r\n";
		return result;
	},

	convertReason: function(inputReason) {
		let reason = inputReason;
		reason = reason.replaceAll(" ", "\\s");

		return reason;
	},

	handleWordCollection: function(inputCollection) {
		let processedWordCollection = "";

		for(let oneWordEntry of inputCollection) {
			processedWordCollection += this.handleOneWordEntry(oneWordEntry);
		}

		return processedWordCollection;
	}
}
