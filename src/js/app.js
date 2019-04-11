import $ from "jquery";

$(window).on("scroll", () => {
	let current = $(window).scrollTop();
	console.log(current);
	if(current > 500) {
		$(".footer").addClass("is-active");
	} else {
		$(".footer").removeClass("is-active");
	}
});