export default class {
	constructor() {
		this.$wrap = $(".faq__wrap");
		this.$block = $(".faq__block");
		this.$question = $(".faq__question");
		this.$answer = $(".faq__answer");
		this.$input = $(".search__formBox");
		this.$container = $(".container");
		this.$result = $(".faq__result");
		this.$menu = $(".menu");
		this.inputText = "";
		this.faqArray = [];
		this.newFaqArray = [];
		this.questionArray = [];
		this.answerArray = [];
		this.inputArray = [];
		this.createArray();
		this.handleEvent();
	}
	
	createArray() {
		//カテゴリーを格納
		for (let i = 0; i < this.$block.length; i++) {
			this.question = this.$block.eq(i).find(this.$question).text();
			this.answer = this.$block.eq(i).find(this.$answer).text();
			this.faqArray.push({
				question: this.question,
				answer: this.answer,
				allText: this.question.slice(1) + this.answer.slice(1)
			});
		}
	}
	
	filterArray() {
		//検索後の配列を作成
		this.inputArray = this.inputText.split(/\s/);
		console.log(this.inputArray);
		this.newFaqArray = this.faqArray.filter(val => {
			if (val.allText.indexOf(this.inputText) > 0) return true;
		});
	}
	
	replaceArray() {
		//ハイライト用の配列を作成
		
		this.questionArray = this.newFaqArray.map((val) => {
			return val.question.replace(this.inputText, `<span class="faq__highlight">${this.inputText}</span>`);
		});
		this.answerArray = this.newFaqArray.map((val) => {
			return val.answer.replace(this.inputText, `<span class="faq__highlight">${this.inputText}</span>`);
		});
	}
	
	//view
	displayResult() {
		this.clearResult();
		for (let l = 0; l < this.newFaqArray.length; l++) {
			if (l === 0) {
				this.$result.append(`
				<section class="faq__wrap"></section>
				`);
			}
			this.$result.find(".faq__wrap").append(`
			<dl class="faq__block">
              <dt class="faq__question faq__question__new">
              	<span class="faq__mark faq__mark__Q">Q</span>
              	${this.questionArray[l].slice(1)}
              </dt>
              <dd class="faq__answer faq__answer__new"><span class="faq__mark faq__mark__A">A</span>
              ${this.answerArray[l].slice(1)}
              </dd>
            </dl>
			`);
		}
	}
	
	clearResult() {
		this.$result.empty();
	}
	
	hideContent(){
		this.$container.hide();
		this.$menu.hide();
	}
	
	showContent(){
		this.$container.show();
		this.$menu.show();
	}
	
	handleEvent() {
		this.$input.on("input keypress", e => {
			this.inputText = $(e.currentTarget).val();
			if (this.inputText) {
				this.filterArray();
				this.replaceArray();
				this.displayResult();
				this.hideContent();
			} else {
				this.showContent();
				this.$result.empty();
			}
		});
		
		$('.search__form').on("submit",(e)=>{
			e.preventDefault();
		});
	}
}
