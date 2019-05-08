import $ from "jquery";

const $target = $(".parallax1");
const targetHeight = $(".parallax1").height();
const targetTop = $(".parallax1").offset().top;
const targetBottom = targetTop + targetHeight;
const windowHeight = $(window).height();

$(() => {
	displayInit();

	let requestId;

	$(window).on("scroll", () => {
		cancelAnimationFrame(requestId);
		requestId = requestAnimationFrame(() => {
			const scrollTop = $(window).scrollTop();
			const scrollBottom = scrollTop + windowHeight;
			if(scrollBottom > targetTop && scrollTop < targetBottom) {
				//画像が画面内に入ったとき
				const bgPosition = scrollBottom - targetTop;
				$target.css(`background-position`, `50% ${100 - bgPosition / 10}%`);
			}
		});
	});
});

const displayInit = () => {
	const bgPosition = windowHeight - targetTop;
	$target.css(`background-position`, `50% ${100 - bgPosition / 10}%`);
};
