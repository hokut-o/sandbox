import $ from "jquery";

// BootstrapのJavaScript側の機能を読み込む
import "bootstrap";

console.log("test");

//アニメーション完了じにトリガーするカスタムイベント
$("#collapseExample").on("shown.bs.collapse", () => {
	console.log("shown");
});