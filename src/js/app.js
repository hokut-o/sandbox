import $ from "jquery";

$(function() {
	$(document).on("click", "button", function() {
		filter_list();
	});

	// リセットボタンをクリックしたときの処理
	$("#reset").on("click", function() {
		// フォームのselectとcheckboxをリセット
		$(".serchBox select").val("");
		// リストの絞り込みをリセット
		filter_list();
	});
	$("#search").on("click", function() {
		filter_list();
	});

	// リストを絞り込む関数
	function filter_list() {
		var lists = $(".list li");
		lists.show();
		for(var i = 0; i < $(".serchBox select").length; i++) {
			// 絞り込みの項目を取得
			var item = $(".serchBox select").eq(i).attr("name");

			// 絞り込みの対象を取得
			var target = $(".serchBox select").eq(i).val();

			console.log(item,target,lists);

			if(target !== "") {
				for(var j = 0; j < lists.length; j++) {
					// 絞り込み対象でない場合は非表示
					if(target !== lists.eq(j).find("." + item).find("span").data("tiiki")) {
						lists.eq(j).hide();
					}
				}
			}
		}
	}
});
