import $ from "jquery";

import search from "./util/search"
import accordion from "./util/accordion"

$(()=>{
	accordion();
	new search();
});

