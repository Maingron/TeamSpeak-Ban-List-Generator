var yatqaConverter = {
	handleOneWordEntry: function(inputEntry) {
		return "name=" + inputEntry[0] + " duration=0 banreason=" + inputEntry[1] + " \r\n";
	},

	handleWordCollection: function(inputCollection) {
		let processedWordCollection = "";

		for(let oneWordEntry of inputCollection) {
			processedWordCollection += this.handleOneWordEntry(oneWordEntry);
		}

		return processedWordCollection;

	}
}
