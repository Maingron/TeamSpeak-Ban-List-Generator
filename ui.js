/**
 * UI Enhancement JavaScript for TeamSpeak Ban List Generator
 * Handles navigation, theme toggle, copy functionality, and accessibility
 */

class UIController {
	constructor() {
		this.currentSection = 'generator';
		this.theme = this.getStoredTheme() || 'auto';
		
		this.init();
	}

	init() {
		this.setupNavigation();
		this.setupThemeToggle();
		this.setupCopyButton();
		this.setupMobileMenu();
		this.setupKeyboardNavigation();
		this.applyTheme();
		
		// Initialize with generator section active
		this.showSection('generator');
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
	
	// Update status when generator runs
	window.uiController.updateGeneratorStatus('loading', 'Generating ban list...');
	
	// Update status after a short delay (assuming generation is quick)
	setTimeout(() => {
		if (window.allBanEntries && window.allBanEntries.length > 0) {
			window.uiController.updateGeneratorStatus('success', 
				`Generated ${window.allBanEntries.length} ban entries successfully`);
		} else {
			window.uiController.updateGeneratorStatus('warning', 'No ban entries generated');
		}
	}, 500);
});

// Override the original match tester input handler
document.addEventListener('DOMContentLoaded', () => {
	const testerInput = document.getElementById('match-tester-input');
	if (testerInput) {
		// Remove the original oninput
		testerInput.removeAttribute('oninput');
		
		// Add enhanced handler
		testerInput.addEventListener('input', (e) => {
			enhancedMatchTester(e.target.value, window.allBanEntries || []);
		});
	}
});