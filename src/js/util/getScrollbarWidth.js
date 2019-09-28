/** スクロールバーの幅 (ピクセル単位) を取得する */
export default function () {
	// スクロールバーの幅を取得するための要素を生成する   
	const scrollbarElem = document.createElement('div');
	// 要素の幅をビューポート幅 (スクロールバーを含む幅) で指定する・要素が画面に表示されないよう処理しておく
	scrollbarElem.setAttribute('style', 'visibility: hidden; position: absolute; top: 0; left: 0; width: 100vw;');
	// 画面表示上のピクセル数を拾うために一旦 body 要素に挿入する
	document.body.appendChild(scrollbarElem);
	// ビューポート幅を取得しておく ('0px' と単位付きで取得されるので parseInt() で単位を除去する)
	const vw = parseInt(window.getComputedStyle(scrollbarElem).width);
	// 要素の幅をパーセント幅 (スクロールバーを除く幅) で指定する
	scrollbarElem.style.width = '100%';
	// パーセント幅を取得する
	const pc = parseInt(window.getComputedStyle(scrollbarElem).width);
	// 要素を削除する
	document.body.removeChild(scrollbarElem);
	// ビューポート幅とパーセント幅の差分がスクロールバーの幅 (px) となる
	const scrollbarWidth = vw - pc;
	// スクロールバーの幅を返却する
	return scrollbarWidth;
}