import $ from "jquery";

class allPrefectures {
	constructor() {
		this.prefectures = [
			{value: 1, name: "北海道"},
			{value: 2, name: "青森県"},
			{value: 3, name: "岩手県"}
		];
		
		this.handleEvent();
		this.test();
	}

	displayInit() {
		$.each(this.prefectures, (index, val) => {
			$("#allPrefecture").append(`
				<select id="prefecture${index + 1}">
					<option>都道府県</option>
				</select>
				<select id="city${index + 1}">
					<option>全域</option>
				</select>
			`);
		});
	}

	displayPrefecture() {
		for(let j = 1; j < this.prefectures.length + 1; j++) {
			$.each(this.prefectures, (index, val) => {
				if(val.value === j) {
					$(`#prefecture${j}`).append(`
						<option value="${val.value}" selected>${val.name}</option>
					`);
				} else {
					$(`#prefecture${j}`).append(`
						<option value="${val.value}">${val.name}</option>
					`);
				}
			});
		}
	}

	displayCity() {
		for(let k = 1; k < this.prefectures.length + 1; k++) {
			$.ajax({
				url: `https://stg-worker.urumap.com/api/get_city_with_area?prefecture_id=${k}`,
				type: "GET",
				dataType: "json"
			})
			.done(res => {
				$.each(res.data, (key, val) => {
					for(let i = 0; i < res.data[key].cities.length; i++) {
						$(`#city${k}`).append(`
							<option value="${res.data[key].cities[i].id}">${res.data[key].cities[i].name
							}</option>
						`);
					}
				});
			})
			.fail(() => {
				console.log("error");
			})
			.always((jqXHR,textStatus) => {
				console.log(jqXHR, textStatus);
			});
		}
	}
	
	displayReset(){
		$('#allPrefecture').html('');
		this.ajax_obj.abort();
	}
	
	test(){
		this.prefectures[0]["city"] = "test";
	}

	handleEvent() {
		$('#display').on('click', () => {
			this.displayInit();
			this.displayPrefecture();
			this.displayCity();
		});
		
		$('#reset').on('click',()=>{
			this.displayReset();
		});
	}
}

new allPrefectures();
