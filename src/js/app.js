class arrivederci {
	constructor() {
		this.target = document.querySelector("#app");
		this.word = "アリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリアリーヴェデルチ！（さよならだ）";
		this.count = "";
		this.wordLength = this.word.length;
		this.timer = "";
		this.displayWord();
	}
	
	displayWord() {
		const timer = setInterval(() => {
			this.count = this.target.textContent.length;
			this.target.innerHTML = this.word.substr(0, this.count + 1);
			if(this.count === this.wordLength) clearInterval(timer);
		}, 100);
	}
}

new arrivederci();
