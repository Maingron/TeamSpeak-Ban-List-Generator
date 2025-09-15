const TableOutput = function() {
	let config = {
		tableElement: document.querySelector('.ban-table tbody'),
		tableHeader: document.querySelectorAll('.ban-table th'),
		tableRow: document.querySelectorAll('.ban-table tr'),
		tableCell: document.querySelectorAll('.ban-table td'),
		entries: []
	}

	function renderTableEntry(name, reason) {
		// Fallback to old selector if new structure not found
		const tableElement = config.tableElement || document.querySelector('table');
		if (!tableElement) return;
		
		// Store entry for reference
		config.entries.push([name, reason]);
		
		// Create table row with proper structure
		let resultingHTML;
		if (config.tableElement) {
			// New structured table
			resultingHTML = `<tr><td><code>${escapeHtml(name)}</code></td><td>${escapeHtml(reason)}</td></tr>`;
		} else {
			// Fallback to old table
			resultingHTML = `<tr><td>${escapeHtml(name)}</td><td>${escapeHtml(reason)}</td></tr>`;
		}
		
		tableElement.innerHTML += resultingHTML;
	}

	function escapeHtml(text) {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}

	function clearTable() {
		if (config.tableElement) {
			config.tableElement.innerHTML = '';
		}
		config.entries = [];
	}

	function getEntries() {
		return config.entries;
	}

	let returnObj = {
		renderTableEntry: renderTableEntry,
		clearTable: clearTable,
		getEntries: getEntries
	}

	return returnObj;
}

let tableOutput = TableOutput();
