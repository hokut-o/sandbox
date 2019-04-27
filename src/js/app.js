var trigger = document.querySelectorAll(".trigger");
for(var i = 0; i < trigger.length; i++) {
	trigger[i].addEventListener("mouseenter", e => {
		var target = e.currentTarget.querySelectorAll(".target");
		if(target[0].classList.contains("hidden") === true) {
			return target[0].classList.remove("hidden");
		}
	});
	trigger[i].addEventListener("mouseleave", e => {
		var target = e.currentTarget.querySelectorAll(".target");
		target[0].classList.add("hidden");
	});
}
