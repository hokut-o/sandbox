import $ from "jquery";

export default class {
	constructor() {
		this.$input = $(".faq__input");
		this.$wrap = $(".faq__block");
		this.$question = $(".faq__question");
		this.$answer = $(".faq__answer");
		this.inputText = "";
		this.faqArray = [];

		//配列を生成
		for(let i = 0; i < this.$wrap.length; i++) {
			this.question = this.$wrap.eq(i).find(this.$question).text();
			this.answer = this.$wrap.eq(i).find(this.$answer).text();
			this.faqArray.push({
				question: this.question,
				answer: this.answer,
				allText: this.question + this.answer
			});
		}
		console.log(this.faqArray);
		this.handleEvent();
	}

	filterArray() {
		this.newFaqArray = this.faqArray.filter((item, index) => {
			if((item.allText).indexOf(this.inputText) >= 0) return true;
		});
		console.log(this.newFaqArray);
	}

	handleEvent() {
		this.$input.on("input", e => {
			this.inputText = $(e.currentTarget).val();
			this.filterArray();
		});
	}
}
