import $ from 'jquery'
import {validate} from './util/form'

class arrivederci {
	constructor() {
		this.target = document.querySelector("#app");
		this.word = "";
		this.wordArray = [];
		this.count = "";
		this.wordLength = this.wordJoin().length;

		this.handleEvent();
	}

	wordJoin() {
		for(let i = 0; i < 30; i++) {
			this.wordArray.push("アリ");
		}
		this.word = this.wordArray.join("");
		return `${this.word}アリーヴェデルチ！（さよならだ）`;
	}

	displayWord() {
		this.count = this.target.textContent.length;
		this.target.innerHTML = this.wordJoin().substr(0, this.count + 1);
		if(this.count === this.wordLength) clearInterval(this.bucciarati);
		console.log(this.count, this.wordLength,this.wordJoin());
	}

	handleEvent() {
		this.bucciarati = setInterval(() => {
			this.displayWord();
		}, 50);
	}
}

new arrivederci();
