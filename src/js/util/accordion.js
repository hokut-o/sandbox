import $ from "jquery";

export default function() {
	$('.faq__question').on('click',(e)=>{
		$(e.currentTarget).toggleClass("is-active").next().stop().slideToggle("fast","swing");
	});
}