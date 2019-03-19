import $ from "jquery";

export default function() {
	$(document).on('click',".faq__question",(e)=>{
		$(e.currentTarget).toggleClass("is-active").next().stop().slideToggle("fast","swing");
	});
}