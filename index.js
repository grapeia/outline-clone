// create a main class including all the functions and execute it on page load
class Main {
	constructor() {
		this.init();
	}

	//return new page content with outline.com style like
	createArticlePage(title, origin, content, image) {
		document.body.innerHTML = "";
		document.body.className = "";
		document.documentElement.style.overflow = "scroll";

		let page = document.createElement("div");
		page.className = "page-main";

		let pageTitle = document.createElement("h1");
		pageTitle.className = "page-title";
		pageTitle.innerHTML = title;
		page.appendChild(pageTitle);

		// if image or imgUrl is not null, create a img element
		if (image) {
			let pageImage = document.createElement("img");
			pageImage.className = "page-image";
			pageImage.src = image || imgUrl;
			page.appendChild(pageImage);
		}

		let pageOrigin = document.createElement("p");
		pageOrigin.className = "page-origin";
		pageOrigin.innerHTML = origin;
		page.appendChild(pageOrigin);

		let pageContent = document.createElement("p");
		pageContent.className = "page-content";
		pageContent.innerHTML = content;
		page.appendChild(pageContent);

		// add style
		let style = document.createElement("style");
		// the image must be in the title area
		style.innerHTML = `
            body {
                display: flex;
                justify-content: center;
            }
            .page-main {
                width: 95%;
                min-width: 800px;
                max-width: 1200px;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                margin: 20px;
                box-shadow: 0px 0px 5px #333;
                border-radius: 5px;
                background-color: #fff;
                overflow: hidden;
            }
            .page {
                width: 95%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 20px;
                margin: 20px;
            }
            .page figure {
                width: 60%;
                height: auto;
                margin: 20px;
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                font-size: 0.7em;
                font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
                color: #333;
                text-align: center;
            }
            .page-title {
                font-size: 1.5rem;
                font-weight: bold;
                margin: 0 0 20px 0;
            }
            .page-origin {
                font-size: 1rem;
                font-weight: bold;
                margin: 0 0 20px 0;
            }
            .page-content {
                font-size: 1rem;
                margin: 0 0 20px 0;
            }
            .page-image {
                width: 50%;
                height: auto;
                margin: 0 0 20px 0;
            }
        `;
		document.head.appendChild(style);

		document.body.innerHTML = "";
		document.body.appendChild(page);
	}

	// parse root document with https://github.com/mozilla/readability
	parseArticle() {
		var documentClone = document.cloneNode(true);
		var article = new Readability(documentClone).parse();

		this.createArticlePage(
			article.title,
			article.byline,
			article.content,
			article.image || ""
		);
	}

	// async import js script from url
	async importScript(url) {
		let script = document.createElement("script");
		script.src = url;
		document.head.appendChild(script);
		return new Promise((resolve, reject) => {
			script.onload = resolve;
			script.onerror = reject;
		});
	}

	// initialize the main class
	async init() {
		await this.importScript(
			"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
		);
		await this.importScript(
			"https://cdn.jsdelivr.net/npm/moz-readability@0.2.1/Readability.js"
		);
		await this.importScript(
			"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
		);
		await this.importScript(
			"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		);
		let link = document.createElement("link");
		link.rel = "stylesheet";
		link.href =
			"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
		document.head.appendChild(link);
		this.parseArticle();
	}
}
// execute main class
new Main();
