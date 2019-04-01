import $ from "jquery";

$.ajax({
	url: "/data/test.json",
	type: "GET",
	dataType: "json"
})
.done(data => {
	for(var i in data) {
		var view = `
			<h1>${data[i].list}</h1>
			<ul>
		`;
		for(var j in data[i].nestList) {
			view += `
				<li>${data[i].nestList[j].nestContent}</li>
			`;
		}
		view += `
				</ul>
			`;
		$("#result").append(view);
	}
})
.fail(() => {
})
.always(() => {
});
