/**
 * UI Enhancement JavaScript for TeamSpeak Ban List Generator
 * Handles navigation, theme toggle, copy functionality, and accessibility
 */

class UIController {
	constructor() {
		this.currentSection = 'generator';
		this.theme = this.getStoredTheme() || 'auto';
		this.customEntries = this.loadCustomEntries();
		this.isInitializing = true;
		
		this.init();
	}

	init() {
		this.setupNavigation();
		this.setupThemeToggle();
		this.setupCopyButton();
		this.setupDownloadButton();
		this.setupMobileMenu();
		this.setupKeyboardNavigation();
		this.setupCustomEntryForm();
		this.applyTheme();
		this.loadCustomEntriesIntoWords();
		
		// Initialize with generator section active
		this.showSection('generator');
		
		// Generate initial ban list with custom entries
		this.performInitialGeneration();
	}

	performInitialGeneration() {
		// Update status
		this.updateGeneratorStatus('loading', 'Generating ban list...');
		
		// Run generation after a short delay to ensure everything is loaded
		setTimeout(() => {
			if (typeof window.startSequentialProcess === 'function') {
				window.startSequentialProcess();
				
				// Update status
				setTimeout(() => {
					if (window.allBanEntries && window.allBanEntries.length > 0) {
						this.updateGeneratorStatus('success', 
							`Generated ${window.allBanEntries.length} ban entries successfully`);
					} else {
						this.updateGeneratorStatus('warning', 'No ban entries generated');
					}
					this.isInitializing = false;
				}, 100);
			}
		}, 100);
	}

	setupNavigation() {
		const navItems = document.querySelectorAll('.nav__item[data-section]');
		
		navItems.forEach(item => {
			item.addEventListener('click', (e) => {
				const section = e.currentTarget.dataset.section;
				this.showSection(section);
			});
		});
	}

	showSection(sectionId) {
		// Hide all sections
		document.querySelectorAll('.section').forEach(section => {
			section.classList.remove('section--active');
		});

		// Show target section
		const targetSection = document.getElementById(`section-${sectionId}`);
		if (targetSection) {
			targetSection.classList.add('section--active');
		}

		// Update navigation state
		document.querySelectorAll('.nav__item').forEach(item => {
			item.classList.remove('nav__item--active');
			item.setAttribute('aria-selected', 'false');
		});

		const activeNavItem = document.querySelector(`[data-section="${sectionId}"]`);
		if (activeNavItem) {
			activeNavItem.classList.add('nav__item--active');
			activeNavItem.setAttribute('aria-selected', 'true');
		}

		this.currentSection = sectionId;

		// Close mobile menu if open
		this.closeMobileMenu();

		// Trigger section-specific actions
		this.onSectionChange(sectionId);
	}

	onSectionChange(sectionId) {
		switch (sectionId) {
			case 'table':
				// Ensure table is populated when viewing
				this.ensureTablePopulated();
				break;
			case 'tester':
				// Focus the tester input when switching to tester
				setTimeout(() => {
					const testerInput = document.getElementById('match-tester-input');
					if (testerInput) {
						testerInput.focus();
					}
				}, 100);
				break;
		}
	}

	ensureTablePopulated() {
		const tableBody = document.querySelector('.ban-table tbody');
		if (tableBody && tableBody.children.length === 0 && window.allBanEntries) {
			// Re-populate table if empty
			window.allBanEntries.forEach(entry => {
				if (window.tableOutput && window.tableOutput.renderTableEntry) {
					window.tableOutput.renderTableEntry(entry[0], entry[1]);
				}
			});
		}
	}

	setupThemeToggle() {
		const themeToggle = document.querySelector('.theme-toggle');
		
		if (themeToggle) {
			themeToggle.addEventListener('click', () => {
				this.toggleTheme();
			});
		}
	}

	toggleTheme() {
		if (this.theme === 'light') {
			this.theme = 'dark';
		} else if (this.theme === 'dark') {
			this.theme = 'auto';
		} else {
			this.theme = 'light';
		}
		
		this.applyTheme();
		this.storeTheme();
	}

	applyTheme() {
		const body = document.body;
		const themeIcon = document.querySelector('.theme-toggle__icon');
		
		body.removeAttribute('data-theme');
		
		if (this.theme === 'light') {
			body.setAttribute('data-theme', 'light');
			if (themeIcon) themeIcon.textContent = '☀️';
		} else if (this.theme === 'dark') {
			body.setAttribute('data-theme', 'dark');
			if (themeIcon) themeIcon.textContent = '🌙';
		} else {
			// Auto theme
			if (themeIcon) themeIcon.textContent = '🌓';
		}
	}

	getStoredTheme() {
		try {
			return localStorage.getItem('teamspeak-ban-generator-theme');
		} catch (e) {
			return null;
		}
	}

	storeTheme() {
		try {
			localStorage.setItem('teamspeak-ban-generator-theme', this.theme);
		} catch (e) {
			// Local storage not available
		}
	}

	// localStorage methods for custom entries
	loadCustomEntries() {
		try {
			const stored = localStorage.getItem('teamspeak-ban-generator-custom-entries');
			return stored ? JSON.parse(stored) : [];
		} catch (e) {
			return [];
		}
	}

	saveCustomEntries() {
		try {
			localStorage.setItem('teamspeak-ban-generator-custom-entries', JSON.stringify(this.customEntries));
		} catch (e) {
			// Local storage not available
		}
	}

	loadCustomEntriesIntoWords() {
		// Add stored custom entries to the words array
		if (typeof window.words !== 'undefined' && this.customEntries.length > 0) {
			this.customEntries.forEach(entry => {
				window.words.push(entry);
			});
		}
	}

	setupCopyButton() {
		const copyBtn = document.getElementById('copy-btn');
		const textarea = document.getElementById('g-ybl');
		
		if (copyBtn && textarea) {
			copyBtn.addEventListener('click', async () => {
				try {
					await navigator.clipboard.writeText(textarea.value);
					this.showCopyFeedback(copyBtn, 'Copied!');
				} catch (err) {
					// Fallback for older browsers
					this.fallbackCopyTextToClipboard(textarea.value, copyBtn);
				}
			});
		}
	}

	setupDownloadButton() {
		const downloadBtn = document.getElementById('download-btn');
		const textarea = document.getElementById('g-ybl');
		
		if (downloadBtn && textarea) {
			downloadBtn.addEventListener('click', () => {
				this.downloadYBLFile(textarea.value);
			});
		}
	}

	downloadYBLFile(content) {
		if (!content.trim()) {
			this.showFormError('No ban list content to download. Please generate a ban list first.');
			return;
		}

		try {
			// Create blob with UTF-8 encoding
			const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
			
			// Create download link
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			
			// Generate filename with timestamp
			const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
			link.download = `teamspeak-banlist-${timestamp}.ybl`;
			
			// Trigger download
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			
			// Clean up
			window.URL.revokeObjectURL(url);
			
			// Show feedback
			this.showFormSuccess(`Downloaded ban list as ${link.download}`);
		} catch (err) {
			this.showFormError('Failed to download file. Please try copying the content instead.');
		}
	}

	async showCopyFeedback(button, message) {
		const originalText = button.querySelector('.btn__icon').nextSibling?.textContent?.trim() || 'Copy to Clipboard';
		const icon = button.querySelector('.btn__icon');
		const textNode = icon.nextSibling;
		
		// Update button text and icon
		icon.textContent = '✅';
		if (textNode) {
			textNode.textContent = ' ' + message;
		}
		
		// Reset after 2 seconds
		setTimeout(() => {
			icon.textContent = '📋';
			if (textNode) {
				textNode.textContent = ' ' + originalText;
			}
		}, 2000);
	}

	fallbackCopyTextToClipboard(text, button) {
		const textArea = document.createElement("textarea");
		textArea.value = text;
		textArea.style.position = "fixed";
		textArea.style.left = "-999999px";
		textArea.style.top = "-999999px";
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		
		try {
			document.execCommand('copy');
			this.showCopyFeedback(button, 'Copied!');
		} catch (err) {
			this.showCopyFeedback(button, 'Copy failed');
		}
		
		document.body.removeChild(textArea);
	}

	setupMobileMenu() {
		const toggleBtn = document.querySelector('.nav__toggle');
		const menu = document.querySelector('.nav__menu');
		
		if (toggleBtn && menu) {
			toggleBtn.addEventListener('click', () => {
				const isOpen = menu.classList.contains('nav__menu--open');
				
				if (isOpen) {
					this.closeMobileMenu();
				} else {
					this.openMobileMenu();
				}
			});

			// Close menu when clicking outside
			document.addEventListener('click', (e) => {
				if (!e.target.closest('.nav') && menu.classList.contains('nav__menu--open')) {
					this.closeMobileMenu();
				}
			});
		}
	}

	openMobileMenu() {
		const menu = document.querySelector('.nav__menu');
		const toggle = document.querySelector('.nav__toggle');
		
		if (menu) {
			menu.classList.add('nav__menu--open');
		}
		
		if (toggle) {
			toggle.setAttribute('aria-expanded', 'true');
		}
	}

	closeMobileMenu() {
		const menu = document.querySelector('.nav__menu');
		const toggle = document.querySelector('.nav__toggle');
		
		if (menu) {
			menu.classList.remove('nav__menu--open');
		}
		
		if (toggle) {
			toggle.setAttribute('aria-expanded', 'false');
		}
	}

	setupKeyboardNavigation() {
		// Handle keyboard navigation for menu items
		const navItems = document.querySelectorAll('.nav__item[data-section]');
		
		navItems.forEach((item, index) => {
			item.addEventListener('keydown', (e) => {
				let targetIndex;
				
				switch (e.key) {
					case 'ArrowRight':
					case 'ArrowDown':
						e.preventDefault();
						targetIndex = (index + 1) % navItems.length;
						navItems[targetIndex].focus();
						break;
					case 'ArrowLeft':
					case 'ArrowUp':
						e.preventDefault();
						targetIndex = (index - 1 + navItems.length) % navItems.length;
						navItems[targetIndex].focus();
						break;
					case 'Home':
						e.preventDefault();
						navItems[0].focus();
						break;
					case 'End':
						e.preventDefault();
						navItems[navItems.length - 1].focus();
						break;
				}
			});
		});

		// Global keyboard shortcuts
		document.addEventListener('keydown', (e) => {
			// Alt + 1,2,3,4 for quick section switching
			if (e.altKey && !e.ctrlKey && !e.shiftKey) {
				const sections = ['generator', 'tester', 'table', 'help'];
				const keyNum = parseInt(e.key);
				
				if (keyNum >= 1 && keyNum <= 4) {
					e.preventDefault();
					this.showSection(sections[keyNum - 1]);
				}
			}
		});
	}

	setupCustomEntryForm() {
		const addButton = document.getElementById('add-custom-entry');
		const regenerateButton = document.getElementById('regenerate-list');
		const clearButton = document.getElementById('clear-custom-entries');
		
		if (addButton) {
			addButton.addEventListener('click', () => {
				this.addCustomEntry();
			});
		}
		
		if (regenerateButton) {
			regenerateButton.addEventListener('click', () => {
				this.regenerateBanList();
			});
		}

		if (clearButton) {
			clearButton.addEventListener('click', () => {
				this.clearAllCustomEntries();
			});
		}

		// Enable Enter key submission in word input
		const wordInput = document.getElementById('custom-word');
		if (wordInput) {
			wordInput.addEventListener('keydown', (e) => {
				if (e.key === 'Enter') {
					e.preventDefault();
					this.addCustomEntry();
				}
			});
		}

		// Update the custom entries display
		this.updateCustomEntriesDisplay();
	}

	addCustomEntry() {
		const wordInput = document.getElementById('custom-word');
		const reasonSelect = document.getElementById('custom-reason');
		const customReasonInput = document.getElementById('custom-reason-text');
		const flagsSelect = document.getElementById('custom-flags');
		
		if (!wordInput || !reasonSelect || !flagsSelect) {
			return;
		}

		const word = wordInput.value.trim();
		const reasonKey = reasonSelect.value;
		const customReason = customReasonInput.value.trim();
		const flags = parseInt(flagsSelect.value);

		if (!word) {
			this.showFormError('Please enter a word or pattern to ban.');
			wordInput.focus();
			return;
		}

		// Get the reason text
		let reasonText;
		if (customReason) {
			reasonText = customReason;
		} else {
			reasonText = this.getReasonText(reasonKey);
		}

		// Create entry
		const entry = [word, reasonText, flags];

		// Add to the words array
		if (typeof window.words !== 'undefined') {
			window.words.push(entry);
		}

		// Save to custom entries and localStorage
		this.customEntries.push(entry);
		this.saveCustomEntries();

		// Clear the form
		wordInput.value = '';
		customReasonInput.value = '';
		reasonSelect.selectedIndex = 0;
		flagsSelect.selectedIndex = 0;

		// Show success feedback
		this.showFormSuccess(`Added ban entry for "${word}" (saved to browser storage)`);

		// Update custom entries display
		this.updateCustomEntriesDisplay();

		// Don't automatically regenerate - let user decide
		this.showFormSuccess(`Added "${word}" to ban list. Click "Regenerate List" to update the generated output.`);
	}

	getReasonText(reasonKey) {
		const reasonMap = {
			'spam': 'Spam',
			'obscene': 'We don\'t use such words here...',
			'impersonation': 'Impersonation',
			'adminImpersonation': 'Impersonation of admin',
			'defaultName': 'Your nickname has to be more unique',
			'undefined': 'Reason unknown'
		};
		
		return reasonMap[reasonKey] || 'Reason unknown';
	}

	regenerateBanList() {
		// Prevent recursion during initialization
		if (this.isInitializing) {
			return;
		}

		// Update status
		this.updateGeneratorStatus('loading', 'Regenerating ban list...');

		// Regenerate (call the original generation function)
		setTimeout(() => {
			if (typeof window.startSequentialProcess === 'function') {
				window.startSequentialProcess();
				
				// Update status
				setTimeout(() => {
					if (window.allBanEntries && window.allBanEntries.length > 0) {
						this.updateGeneratorStatus('success', 
							`Generated ${window.allBanEntries.length} ban entries successfully`);
					} else {
						this.updateGeneratorStatus('warning', 'No ban entries generated');
					}
				}, 100);
			}
		}, 100);
	}

	showFormError(message) {
		this.showFormMessage(message, 'error');
	}

	showFormSuccess(message) {
		this.showFormMessage(message, 'success');
	}

	showFormMessage(message, type) {
		// Remove existing messages
		const existingMessage = document.querySelector('.form-message');
		if (existingMessage) {
			existingMessage.remove();
		}

		// Create new message
		const messageEl = document.createElement('div');
		messageEl.className = `form-message form-message--${type}`;
		messageEl.textContent = message;
		messageEl.style.cssText = `
			padding: var(--spacing-sm) var(--spacing-md);
			margin-bottom: var(--spacing-md);
			border-radius: var(--border-radius-sm);
			font-size: 0.875rem;
			background: ${type === 'error' ? 'var(--color-error)' : 'var(--color-success)'};
			color: white;
			border: 1px solid ${type === 'error' ? 'var(--color-error)' : 'var(--color-success)'};
		`;

		// Insert before the form fields
		const form = document.querySelector('.custom-entry-form__fields');
		if (form) {
			form.parentNode.insertBefore(messageEl, form);
		}

		// Auto-remove after 5 seconds
		setTimeout(() => {
			if (messageEl.parentNode) {
				messageEl.remove();
			}
		}, 5000);
	}

	// Public method to update generator status
	updateGeneratorStatus(status, message) {
		const statusContainer = document.getElementById('generator-status');
		const indicator = statusContainer?.querySelector('.status-indicator');
		const text = statusContainer?.querySelector('.status-text');
		
		if (indicator && text) {
			switch (status) {
				case 'success':
					indicator.textContent = '✅';
					break;
				case 'warning':
					indicator.textContent = '⚠️';
					break;
				case 'error':
					indicator.textContent = '❌';
					break;
				case 'loading':
					indicator.textContent = '⏳';
					break;
			}
			
			text.textContent = message;
		}
	}

	updateCustomEntriesDisplay() {
		const countElement = document.getElementById('custom-entries-count');
		const listElement = document.getElementById('custom-entries-list');
		
		if (countElement) {
			countElement.textContent = this.customEntries.length;
		}

		if (listElement) {
			if (this.customEntries.length === 0) {
				listElement.innerHTML = '<p class="custom-entries-list__empty">No custom entries saved.</p>';
			} else {
				listElement.innerHTML = this.customEntries.map((entry, index) => {
					const [word, reason, flags] = entry;
					return `
						<div class="custom-entries-list__item">
							<div class="custom-entries-list__entry-info">
								<div class="custom-entries-list__entry-word">${this.escapeHtml(word)}</div>
								<div class="custom-entries-list__entry-reason">${this.escapeHtml(reason)} (flags: ${flags})</div>
							</div>
							<div class="custom-entries-list__entry-actions">
								<button type="button" class="btn btn--danger btn--small" 
									onclick="window.uiController.removeCustomEntry(${index})"
									aria-label="Remove custom entry: ${this.escapeHtml(word)}">
									<span class="btn__icon">🗑️</span>
								</button>
							</div>
						</div>
					`;
				}).join('');
			}
		}
	}

	removeCustomEntry(index) {
		if (index >= 0 && index < this.customEntries.length) {
			const removedEntry = this.customEntries.splice(index, 1)[0];
			this.saveCustomEntries();
			this.updateCustomEntriesDisplay();
			
			// Remove from words array if it exists
			if (typeof window.words !== 'undefined') {
				const wordIndex = window.words.findIndex(entry => 
					entry[0] === removedEntry[0] && 
					entry[1] === removedEntry[1] && 
					entry[2] === removedEntry[2]
				);
				if (wordIndex !== -1) {
					window.words.splice(wordIndex, 1);
				}
			}

			this.showFormSuccess(`Removed custom entry for "${removedEntry[0]}". Click "Regenerate List" to update the output.`);
		}
	}

	clearAllCustomEntries() {
		if (this.customEntries.length === 0) {
			this.showFormError('No custom entries to clear.');
			return;
		}

		if (confirm(`Are you sure you want to remove all ${this.customEntries.length} custom entries? This action cannot be undone.`)) {
			// Remove custom entries from words array
			if (typeof window.words !== 'undefined') {
				this.customEntries.forEach(customEntry => {
					const wordIndex = window.words.findIndex(entry => 
						entry[0] === customEntry[0] && 
						entry[1] === customEntry[1] && 
						entry[2] === customEntry[2]
					);
					if (wordIndex !== -1) {
						window.words.splice(wordIndex, 1);
					}
				});
			}

			const count = this.customEntries.length;
			this.customEntries = [];
			this.saveCustomEntries();
			this.updateCustomEntriesDisplay();
			this.showFormSuccess(`Cleared ${count} custom entries from storage. Click "Regenerate List" to update the output.`);
		}
	}

	escapeHtml(text) {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}
}

// Enhanced table output with proper structure
const EnhancedTableOutput = function() {
	let config = {
		tableElement: document.querySelector('.ban-table tbody'),
		entries: []
	};

	function renderTableEntry(pattern, reason) {
		if (!config.tableElement) return;
		
		// Store entry
		config.entries.push([pattern, reason]);
		
		// Create table row
		const row = document.createElement('tr');
		row.innerHTML = `
			<td><code>${escapeHtml(pattern)}</code></td>
			<td>${escapeHtml(reason)}</td>
		`;
		
		config.tableElement.appendChild(row);
	}

	function clearTable() {
		if (config.tableElement) {
			config.tableElement.innerHTML = '';
		}
		config.entries = [];
	}

	function escapeHtml(text) {
		const div = document.createElement('div');
		div.textContent = text;
		return div.innerHTML;
	}

	function getEntries() {
		return config.entries;
	}

	return {
		renderTableEntry: renderTableEntry,
		clearTable: clearTable,
		getEntries: getEntries
	};
};

// Enhanced match tester function
function enhancedMatchTester(input, against) {
	const matchArray = matchTester(input, against);
	
	// Update UI status
	const outputTextarea = document.getElementById('match-tester-output');
	if (outputTextarea) {
		if (matchArray.length === 0) {
			outputTextarea.style.borderColor = 'var(--color-success)';
		} else {
			outputTextarea.style.borderColor = 'var(--color-warning)';
		}
	}
	
	return matchArray;
}

// Initialize UI when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
	// Replace the old table output with enhanced version
	if (typeof window.tableOutput !== 'undefined') {
		window.tableOutput = EnhancedTableOutput();
	}
	
	// Initialize UI controller
	window.uiController = new UIController();
});

// Set up match tester after UI is initialized
document.addEventListener('DOMContentLoaded', () => {
	const testerInput = document.getElementById('match-tester-input');
	if (testerInput) {
		// Add enhanced handler
		testerInput.addEventListener('input', (e) => {
			const inputValue = e.target.value;
			const banEntries = window.allBanEntries || [];
			
			// Call the original match tester function
			if (typeof window.matchTester === 'function') {
				const matches = window.matchTester(inputValue, banEntries);
				
				// Update UI feedback
				const outputTextarea = document.getElementById('match-tester-output');
				if (outputTextarea) {
					if (matches.length === 0) {
						outputTextarea.style.borderColor = '#28a745'; // Green for no matches (good)
					} else {
						outputTextarea.style.borderColor = '#ffc107'; // Yellow for matches (warning)
					}
				}
			}
		});
	}
});