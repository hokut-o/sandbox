import $ from "jquery";
import spa from "./util/spa";

let target = target || {};
target = {
	spa: $("[data-target-spa]")
};

const spaEvnt = () => {
	if(!target.spa.length) return;
	new spa();
};

$(()=>{
	spaEvnt();
});