import $ from "jquery";

class ChangeContractStyle {
	constructor() {
		this.prefecturesArray = [
			"北海道",
			"青森県",
			"岩手県",
			"宮城県",
			"秋田県",
			"山形県",
			"福島県",
			"茨城県",
			"栃木県",
			"群馬県",
			"埼玉県",
			"千葉県",
			"東京都",
			"神奈川県",
			"新潟県",
			"富山県",
			"石川県",
			"福井県",
			"山梨県",
			"長野県",
			"岐阜県",
			"静岡県",
			"愛知県",
			"三重県",
			"滋賀県",
			"京都府",
			"大阪府",
			"兵庫県",
			"奈良県",
			"和歌山県",
			"鳥取県",
			"島根県",
			"岡山県",
			"広島県",
			"山口県",
			"徳島県",
			"香川県",
			"愛媛県",
			"高知県",
			"福岡県",
			"佐賀県",
			"長崎県",
			"熊本県",
			"大分県",
			"宮崎県",
			"鹿児島県",
			"沖縄県"
		];

		this.handleEvent();
		this.displaySelectbox();
	}

	displayContractstyle() {
		this.$target
		.removeClass("is-active")
		.hide()
		.eq(this.num - 1)
		.addClass("is-active")
		.fadeIn();
	}

	returnPrefecture() {
		
	}

	displaySelectbox() {
		this.allPrefecturesBody = this.prefecturesArray.map((value, index, array)=>{
			return value;
		});

		console.log(this.allPrefecturesBody);

		$.each(this.prefecturesArray,(index, val) => {
			this.allPrefecturesBody = `
				<div class="col-lg-5 col-md-5 col-sm-10 mb-10 pref-clone-block" workplace-index="${index+1}">
					<div class="input-group clearfix">
						<label for="" class="pref-label input-group-addon font-w600 col-md-4 col-3 font-size-xsmall-sp">都道府県</label>
						<select class="pref-selectbox form-control col-md-8 add-js-select2 select2-hidden-accessible" replace-name="" style="width:100%" name="workplace[${index+1}][prefecture_id]" tabindex="-1" aria-hidden="true">
							<option value="">都道府県</option>
						</select>
					</div>
				</div>

				<div class="col-lg-5 col-md-5 col-sm-10 mb-10 city-clone-block" workplace-index="${index+1}">
					<div class="input-group clearfix">
						<label for="" class="city-label input-group-addon font-w600 col-md-4 col-3 font-size-xsmall-sp">市区町村</label>
						<select class="city-selectbox form-control col-md-8 add-js-select2 select2-hidden-accessible" replace-name="" style="width:100%" name="workplace[${index+1}][city_id]" tabindex="-1" aria-hidden="true">
							<option value="">全域</option
						</select>>

						<span class="select2 select2-container select2-container--default" dir="ltr" style="width: 100%;">
							<span class="selection">
								<span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-workplace${index+1}city_id-77-container">
									<span class="select2-selection__rendered" id="select2-workplace2city_id-77-container" title="全域">全域</span>
									<span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
								</span>
							</span>
							<span class="dropdown-wrapper" aria-hidden="true"></span>
						</span>
					</div>
				</div>
			`;
		});
	}

	handleEvent() {
		$(this.$radioTrigger).on("click", e => {
			this.num = $(e.currentTarget).data("triggerContractstyle");
			this.displayContractstyle();
		});
	}
};

new ChangeContractStyle();
