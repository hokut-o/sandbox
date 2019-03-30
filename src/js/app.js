import $ from "jquery";

$.ajax({
	url: '/data/test.json',
	type: 'GET',
	dataType: 'json',
})
.done((res) => {
	console.log(res.area);
	$.each(res.area, (index, val) => {
		console.log(index, val);
	});
})
.fail(() => {
})
.always(() => {
});




