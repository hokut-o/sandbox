import $ from "jquery";

export default class {
	//model
	constructor() {
		this.hash = location.hash;
		this.$btn = $(".btn");
		this.$page = $(".page");
		this.$one = $("#one");
		this.initView();
		this.handleEvenet();
	}

	//view
	initView() {
		if (!this.hash) {
			this.$one.show();
		} else {
			$(`${this.hash}`).show();
		}
	}
	
	displayPage() {
		$(this.hash).fadeIn("fast", "swing");
	}
	
	clearPage() {
		$(this.$page).hide();
	}
	
	hashChange() {
		location.hash = this.hash;
	}

	//event
	handleEvenet() {
		$(this.$btn).on("click", e => {
			this.hash = `#${$(e.currentTarget).data("hash")}`;
			this.clearPage();
			this.hashChange();
			this.displayPage();
		});

		$(window).on("hashchange", () => {
			this.hash = location.hash;
			this.clearPage();
			this.displayPage();
		});
	}
}
