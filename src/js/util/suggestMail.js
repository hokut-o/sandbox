import $ from "jquery";

export default function() {
	$.fn.autoEmail = function(domains) {
		return this.each(function() {
			const $this = $(this);

			function addListeners() {
				const $results = $("#auto-list > li");
				$results.first().addClass("highlighted");
				$results.css("cursor", "pointer");
				$results.click(function() {
					$this.val($(this).text());
					$this.focus();
					$("#auto-list").hide();
				});
				$results.mouseenter(function() {
					$(this).addClass("highlighted");
					$(this)
					.siblings()
					.removeClass("highlighted");
				});

				$("#auto-list").show();
			}
			
			// キー操作のあとにサジェストをチェック
			$this.keyup(e => {
				if(e.keyCode === 40 || e.keyCode === 38) {
					// ユーザーが下矢印または上矢印をクリックした場合
					var $newHighlight;
					if(e.keyCode === 40) {
						// 下矢印
						$newHighlight = $(".highlighted").next();
					} else if(e.keyCode === 38) {
						// 上矢印
						$newHighlight = $(".highlighted").prev();
					}
					$newHighlight.addClass("highlighted");
					$newHighlight.siblings().removeClass("highlighted");
				} else if(e.keyCode === 13) {
					// エンター
					var $selected = $(".highlighted");
					$this.val($selected.text());
					$("#auto-list").hide();
				} else {
					var exactMatches = [];
					var errorMatches = [];

					$("#auto-list").empty();
					$("#auto-list").hide();

					// @マークで分けて文字列を取得する
					var emailsDirty = $(e.currentTarget)
					.val()
					.split("@");
					if(emailsDirty.length < 2 || emailsDirty[0] === "") return;
					var emailDomain = emailsDirty[1]; //@ 以降を取得

					if(emailDomain.length === 0) {
						exactMatches.push(
							domains[1],
							domains[2],
							domains[5],
							domains[6],
							domains[12]
						);
					} else {
						for(i = 0; i < domains.length; i++) {
							var testString = domains[i].substr(0, emailDomain.length);
							if(emailDomain === testString) {
								exactMatches.push(domains[i]);
							} else if(
								getEditDistance(emailDomain, testString) < 2 &&
								emailDomain.length > 1
							) {
								errorMatches.push(domains[i]);
							}
						}
					}

					if(exactMatches.length > 0) {
						for(i = 0; i < exactMatches.length; i++) {
							// 最初のドメインマッチ
							var subStr = exactMatches[i].substr(
								emailDomain.length,
								exactMatches[i].length
							);

							// マッチした文字列をリストに挿入
							$("#auto-list").append(
								"<li>" + $this.val() + "<b>" + subStr + "</b></li>"
							);
						}
						addListeners();
					} else if(errorMatches.length > 0) {
						for(var i = 0; i < errorMatches.length; i++) {
							// 最初のドメインマッチ
							var subStr = errorMatches[i].substr(
								emailDomain.length,
								errorMatches[i].length
							);

							// サジェスト箇所の太字指定
							$("#auto-list").append(
								"<li>" + emailsDirty[0] + "@<b>" + errorMatches[i] + "</b></li>"
							);
						}
						addListeners();
					}
				} // end of else
			}); // end of keyup
		});
	};
}

// 与えられた2つの文字列間の編集距離を計算します
function getEditDistance(a, b) {
	if(a.length === 0) return b.length;
	if(b.length === 0) return a.length;

	var matrix = [];

	// 各行の最初の列に沿って増分する
	var i;
	for(i = 0; i <= b.length; i++) {
		matrix[i] = [i];
	}

	// 最初の行の各列を増やす
	var j;
	for(j = 0; j <= a.length; j++) {
		matrix[0][j] = j;
	}

	// 残りの行列を埋める
	for(i = 1; i <= b.length; i++) {
		for(j = 1; j <= a.length; j++) {
			if(b.charAt(i - 1) === a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1] + 1,
					Math.min(
						matrix[i][j - 1] + 1,
						matrix[i - 1][j] + 1
					)
				); // 削除
			}
		}
	}

	return matrix[b.length][a.length];
}