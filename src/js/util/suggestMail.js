import $ from "jquery";

const target = {
	suggest: $("[data-target-suggest]")
};

export default function () {
	$.fn.autoEmail = function (domain) {
		//thisはjQueryオブジェクト
		return this.each(function() {
			const $input = $(this);
			function addListeners() {
				//サジェスト結果の描画
				const $results = $("#auto-list > li");
				$results.first().addClass("is-select");
				$results.css("cursor", "pointer");
				$results.click( (e) => {
					$input.val($(e.currentTarget).text());
					$input.focus();
					target.suggest.hide();
				});
				$results.mouseenter(e => {
					$(e.currentTarget).addClass("is-select");
					$(e.currentTarget)
						.siblings()
						.removeClass("is-select");
				});

				target.suggest.show();
			}

			// キー操作のあとにサジェストをチェック
			$input.on("keyup",e => {
				if (e.keyCode === 40 || e.keyCode === 38) {
					// ユーザーが下矢印または上矢印をクリックした場合
					let $newHighlight;
					if (e.keyCode === 40) {
						// 下矢印
						$newHighlight = $(".is-select").next();
					} else if (e.keyCode === 38) {
						// 上矢印
						$newHighlight = $(".is-select").prev();
					}
					$newHighlight.addClass("is-select");
					$newHighlight.siblings().removeClass("is-select");
				} else if (e.keyCode === 13) {
					// エンター
					const $selected = $(".is-select");
					$input.val($selected.text());
					target.suggest.hide();
				} else {
					var exactMatches = [];
					var errorMatches = [];

					target.suggest.empty();
					target.suggest.hide();

					// @マークで分けて文字列を取得する
					const emailsDirty = $(e.currentTarget)
						.val()
						.split("@");
					if (emailsDirty.length < 2 || emailsDirty[0] === "") return;
					const emailDomain = emailsDirty[1]; //@ 以降を取得

					if (emailDomain.length === 0) {
						exactMatches.push(
							domain[0],
							domain[1],
							domain[2],
							domain[3],
							domain[4]
						);
					} else {
						for (let i = 0; i < domain.length; i++) {
							var testString = domain[i].substr(0, emailDomain.length);
							if (emailDomain === testString) {
								exactMatches.push(domain[i]);
							} else if (
								getEditDistance(emailDomain, testString) < 2 &&
								emailDomain.length > 1
							) {
								errorMatches.push(domain[i]);
							}
						}
					}

					if (exactMatches.length > 0) {
						for (let i = 0; i < exactMatches.length; i++) {
							// 最初のドメインマッチ
							const subStr = exactMatches[i].substr(
								emailDomain.length,
								exactMatches[i].length
							);

							// マッチした文字列をリストに挿入
							target.suggest.append(`
								<li class="p-suggest__result__item">${$input.val()}<b>${subStr}</b></li>
							`);
						}
						addListeners();
					} else if (errorMatches.length > 0) {
						for (let i = 0; i < errorMatches.length; i++) {
							// 最初のドメインマッチ
							const subStr = errorMatches[i].substr(
								emailDomain.length,
								errorMatches[i].length
							);

							// サジェスト箇所の太字指定
							target.suggest.append(`
								<li class="p-suggest__result__item">${emailsDirty[0]}@<b>${errorMatches[i]}</b></li>
							`);
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
	if (a.length === 0) return b.length;
	if (b.length === 0) return a.length;

	var matrix = [];

	// 各行の最初の列に沿って増分する
	var i;
	for (i = 0; i <= b.length; i++) {
		matrix[i] = [i];
	}

	// 最初の行の各列を増やす
	var j;
	for (j = 0; j <= a.length; j++) {
		matrix[0][j] = j;
	}

	// 残りの行列を埋める
	for (i = 1; i <= b.length; i++) {
		for (j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) === a.charAt(j - 1)) {
				matrix[i][j] = matrix[i - 1][j - 1];
			} else {
				matrix[i][j] = Math.min(
					matrix[i - 1][j - 1] + 1,
					Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
				); // 削除
			}
		}
	}
	return matrix[b.length][a.length];
}
