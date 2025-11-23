/**
 * NoDistract - Reader Mode for Any Webpage
 * Extracts main content and images, removing clutter for easy reading
 * @version 2.0.0
 * @license MIT
 */

class NoDistract {
	constructor() {
		this.readabilityLoaded = false;
		this.init();
	}

	/**
	 * Creates a clean, readable article page
	 */
	createArticlePage(title, author, content, image) {
		// Preserve original document for potential restoration
		const originalHTML = document.body.innerHTML;
		const originalClass = document.body.className;
		
		// Disable all scripts on the page before switching to reader mode
		this.disablePageScripts();
		
		// Reset page
		document.body.innerHTML = "";
		document.body.className = "";
		document.documentElement.style.overflow = "auto";

		// Create main container
		const page = document.createElement("article");
		page.className = "readable-page";

		// Add title
		if (title) {
			const pageTitle = document.createElement("h1");
			pageTitle.className = "readable-title";
			pageTitle.textContent = title;
			page.appendChild(pageTitle);
		}

		// Add author/byline
		if (author) {
			const pageAuthor = document.createElement("p");
			pageAuthor.className = "readable-author";
			pageAuthor.textContent = author;
			page.appendChild(pageAuthor);
		}

		// Add featured image
		if (image) {
			const pageImage = document.createElement("img");
			pageImage.className = "readable-image";
			pageImage.src = image;
			pageImage.alt = title || "Article image";
			pageImage.onerror = () => pageImage.style.display = "none";
			page.appendChild(pageImage);
		}

		// Add main content
		const pageContent = document.createElement("div");
		pageContent.className = "readable-content";
		pageContent.innerHTML = content;
		page.appendChild(pageContent);

		// Add close button to restore original page
		const closeButton = document.createElement("button");
		closeButton.className = "readable-close";
		closeButton.innerHTML = "✕ Fechar modo leitura";
		closeButton.onclick = () => {
			document.body.innerHTML = originalHTML;
			document.body.className = originalClass;
			document.querySelectorAll('style[data-readable]').forEach(el => el.remove());
		};
		page.appendChild(closeButton);

		// Inject styles
		this.injectStyles();

		// Append to body
		document.body.appendChild(page);
		
		// Scroll to top
		window.scrollTo(0, 0);
	}

	/**
	 * Disables all scripts on the page to prevent popups and interruptions
	 */
	disablePageScripts() {
		// Remove all script tags from the page
		const scripts = document.querySelectorAll('script');
		scripts.forEach(script => {
			// Don't remove the Readability library or this script itself
			if (!script.src.includes('readability') && !script.src.includes('nodistract')) {
				script.remove();
			}
		});

		// Stop all timers and intervals
		const highestTimeoutId = setTimeout(() => {}, 0);
		for (let i = 0; i < highestTimeoutId; i++) {
			clearTimeout(i);
		}

		const highestIntervalId = setInterval(() => {}, 0);
		for (let i = 0; i < highestIntervalId; i++) {
			clearInterval(i);
		}

		// Disable inline event handlers by cloning and replacing all elements
		// This prevents onclick, onload, etc. from firing
		const allElements = document.querySelectorAll('*');
		allElements.forEach(element => {
			// Remove all event listener attributes
			const attributes = Array.from(element.attributes);
			attributes.forEach(attr => {
				if (attr.name.startsWith('on')) {
					element.removeAttribute(attr.name);
				}
			});
		});

		// Override common methods that could trigger popups
		window.alert = () => {};
		window.confirm = () => false;
		window.prompt = () => null;
		
		// Prevent new scripts from being added
		const originalAppendChild = Element.prototype.appendChild;
		Element.prototype.appendChild = function(child) {
			if (child.tagName === 'SCRIPT') {
				// Only allow Readability and NoDistract scripts
				if (child.src && (child.src.includes('readability') || child.src.includes('nodistract'))) {
					return originalAppendChild.call(this, child);
				}
				return child;
			}
			return originalAppendChild.call(this, child);
		};
	}

	/**
	 * Injects CSS styles for the readable page
	 */
	injectStyles() {
		// Check if styles already exist
		if (document.querySelector('style[data-readable]')) return;

		const style = document.createElement("style");
		style.setAttribute('data-readable', 'true');
		style.textContent = `
			* {
				box-sizing: border-box;
			}
			
			body {
				margin: 0;
				padding: 20px;
				background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
				line-height: 1.6;
				color: #333;
			}

			.readable-page {
				max-width: 800px;
				margin: 0 auto;
				padding: 40px;
				background: #ffffff;
				box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
				border-radius: 8px;
				position: relative;
			}

			.readable-title {
				font-size: 2.5rem;
				font-weight: 700;
				margin: 0 0 20px 0;
				line-height: 1.2;
				color: #1a1a1a;
			}

			.readable-author {
				font-size: 1rem;
				color: #666;
				margin: 0 0 30px 0;
				font-style: italic;
			}

			.readable-image {
				width: 100%;
				height: auto;
				margin: 0 0 30px 0;
				border-radius: 4px;
				display: block;
			}

			.readable-content {
				font-size: 1.125rem;
				line-height: 1.8;
				color: #2c3e50;
			}

			.readable-content p {
				margin: 0 0 1.5em 0;
			}

			.readable-content h1,
			.readable-content h2,
			.readable-content h3,
			.readable-content h4 {
				margin: 1.5em 0 0.5em 0;
				font-weight: 600;
				line-height: 1.3;
			}

			.readable-content h2 {
				font-size: 1.75rem;
			}

			.readable-content h3 {
				font-size: 1.5rem;
			}

			.readable-content img {
				max-width: 100%;
				height: auto;
				display: block;
				margin: 2em auto;
				border-radius: 4px;
			}

			.readable-content figure {
				margin: 2em 0;
				text-align: center;
			}

			.readable-content figcaption {
				font-size: 0.9rem;
				color: #666;
				margin-top: 0.5em;
				font-style: italic;
			}

			.readable-content a {
				color: #3498db;
				text-decoration: none;
				border-bottom: 1px solid #3498db;
			}

			.readable-content a:hover {
				color: #2980b9;
				border-bottom-color: #2980b9;
			}

			.readable-content blockquote {
				margin: 1.5em 0;
				padding: 1em 1.5em;
				border-left: 4px solid #3498db;
				background: #f8f9fa;
				font-style: italic;
			}

			.readable-content code {
				background: #f4f4f4;
				padding: 2px 6px;
				border-radius: 3px;
				font-family: "Courier New", Courier, monospace;
				font-size: 0.9em;
			}

			.readable-content pre {
				background: #2c3e50;
				color: #ecf0f1;
				padding: 1em;
				border-radius: 4px;
				overflow-x: auto;
			}

			.readable-content pre code {
				background: transparent;
				color: inherit;
				padding: 0;
			}

			.readable-content ul,
			.readable-content ol {
				margin: 1em 0;
				padding-left: 2em;
			}

			.readable-content li {
				margin: 0.5em 0;
			}

			.readable-close {
				position: fixed;
				top: 20px;
				right: 20px;
				background: #e74c3c;
				color: white;
				border: none;
				padding: 12px 24px;
				border-radius: 50px;
				cursor: pointer;
				font-size: 0.9rem;
				font-weight: 600;
				box-shadow: 0 4px 12px rgba(231, 76, 60, 0.4);
				transition: all 0.3s ease;
				z-index: 1000;
			}

			.readable-close:hover {
				background: #c0392b;
				transform: translateY(-2px);
				box-shadow: 0 6px 16px rgba(231, 76, 60, 0.5);
			}

			/* Responsive design */
			@media (max-width: 768px) {
				body {
					padding: 10px;
				}

				.readable-page {
					padding: 20px;
				}

				.readable-title {
					font-size: 1.75rem;
				}

				.readable-content {
					font-size: 1rem;
				}

				.readable-close {
					top: 10px;
					right: 10px;
					padding: 10px 20px;
					font-size: 0.85rem;
				}
			}

			/* Print styles */
			@media print {
				body {
					background: white;
					padding: 0;
				}

				.readable-page {
					box-shadow: none;
					padding: 0;
				}

				.readable-close {
					display: none;
				}
			}
		`;
		document.head.appendChild(style);
	}

	/**
	 * Parses the current page using Readability
	 */
	parseArticle() {
		try {
			if (typeof Readability === 'undefined') {
				throw new Error('Readability library not loaded');
			}

			const documentClone = document.cloneNode(true);
			const article = new Readability(documentClone).parse();

			if (!article) {
				throw new Error('Failed to parse article content');
			}

			this.createArticlePage(
				article.title || document.title,
				article.byline || '',
				article.content || '<p>Não foi possível extrair o conteúdo.</p>',
				article.image || ''
			);
		} catch (error) {
			console.error('Error parsing article:', error);
			alert('Erro ao processar a página: ' + error.message);
		}
	}

	/**
	 * Dynamically imports an external script
	 */
	async importScript(url) {
		return new Promise((resolve, reject) => {
			// Check if script already loaded
			if (document.querySelector(`script[src="${url}"]`)) {
				resolve();
				return;
			}

			const script = document.createElement("script");
			script.src = url;
			script.onload = resolve;
			script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
			document.head.appendChild(script);
		});
	}

	/**
	 * Initializes the reader mode
	 */
	async init() {
		try {
			// Show loading indicator
			const loader = document.createElement('div');
			loader.id = 'readable-loader';
			loader.innerHTML = '<div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px 40px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.2);z-index:9999;font-family:sans-serif;">Carregando modo leitura...</div>';
			document.body.appendChild(loader);

			// Load only Readability library (removed jQuery and Bootstrap)
			await this.importScript(
				"https://cdn.jsdelivr.net/npm/@mozilla/readability@0.4.4/Readability.min.js"
			);

			// Remove loader
			loader.remove();

			// Parse the article
			this.parseArticle();
		} catch (error) {
			console.error('Initialization error:', error);
			alert('Erro ao inicializar o modo leitura: ' + error.message);
			document.getElementById('readable-loader')?.remove();
		}
	}
}

// Initialize when script loads
new NoDistract();