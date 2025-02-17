const TableOutput = function() {
	let config = {
		tableElement: document.querySelectorAll("table"),
		tableHeader: document.querySelectorAll("table th"),
		tableRow: document.querySelectorAll("table tr"),
		tableCell: document.querySelectorAll("table td")
	}

	function renderTableEntry(name, reason) {
		let resultingHTML = `<tr><td>${name}</td><td>${reason}</td></tr>`;
		config.tableElement[0].innerHTML += resultingHTML;
	}

	let returnObj = {
		renderTableEntry: renderTableEntry
	}

	return returnObj;
}

let tableOutput = TableOutput();
