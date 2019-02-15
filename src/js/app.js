import $ from "jquery";

location.hash = 'bb';

$(window).on("hashchange", () => {
	console.log("hashchanged!");
});

//初期表示
