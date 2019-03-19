import $ from "jquery";

export default class {
	constructor() {
		this.$input = $(".faq__input");
		this.$wrap = $(".faq__block");
		this.$question = $(".faq__question");
		this.$answer = $(".faq__answer");
		this.$result = $(".faq__search__result");
		this.inputText = "";
		this.faqArray = [];

		this.createArray();
		this.handleEvent();
	}

	createArray() {
		for(let i = 0; i < this.$wrap.length; i++) {
			this.question = this.$wrap.eq(i).find(this.$question).text();
			this.answer = this.$wrap.eq(i).find(this.$answer).text();
			this.faqArray.push({
				question: this.question,
				answer: this.answer,
				allText: this.question + this.answer
			});
		}
	}

	clearResult() {
		$(".faq__search__result__hit").text('');
		$(".faq__search__result__body").text('');
		$(".faq__container").hide();
	}

	displayResult() {
		this.clearResult();
		if(this.hitNum && this.inputText) {
			$.each(this.newFaqArray, (index, val) => {
				console.log(index, val);
				if(index === 0) {
					$(".faq__search__result__hit").html(`
						<p class="faq__search__result__hit">検索結果：${this.hitNum}</p>
					`);
				}

				$('.faq__search__result__body').append(`
					<dl class="faq__block">
						<dt class="faq__question">${val.question}<span class="faq__question__icon fas fa-angle-down"></span></dt>
						<dd class="faq__answer">${val.answer}</dd>
					</dl>
				`);
			});
		} else {
			this.clearResult();
			$(".faq__container").show();
		}
	}

	filterArray() {
		this.newFaqArray = this.faqArray.filter(val => {
			if(val.allText.indexOf(this.inputText) >= 0) return true;
		});
		this.hitNum = this.newFaqArray.length;
	}

	handleEvent() {
		this.$input.on("input", e => {
			this.inputText = $(e.currentTarget).val();
			this.filterArray();
			this.displayResult();
		});
	}
}
