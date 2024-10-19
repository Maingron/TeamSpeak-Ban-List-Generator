var yatqaConverter = {
	handleOneWordEntry: function(inputEntry) {
		return "name=" + inputEntry[0] + " duration=0 banreason=" + this.convertReason(inputEntry[1]) + " \r\n";
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
