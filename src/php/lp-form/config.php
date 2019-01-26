<?php
return array(

	/**
	 * 送信するメールの情報 default(各項目未指定の場合こちらが有効化)
	 */
	'default' => array(
		/**
		 * API関連
		 */
		// [必須] API実行を許すURL: "http://example.com:port"(portは省略可): 複数(開発と本番とか)指定したいなら配列で
		'domain'     => array( 'http://localhost:8001/', 'https://docomo-hikari.net/', 'http://192.168.221.54:3002/' ),
		// [必須] API Key(適当な文字列を指定): API Postパラメータにname="key"として含める
		'key'        => 'GwLE9pPJ',

		/**
		 * メール設定関連
		 */
		// [必須] fromメールアドレス
		'fromEmail'  => 'hokuto15@gmail.com',
		// [必須] from名称(任意、必要ない場合空で)
		'fromName'   => '加藤北斗',
		// [to必須] 管理者に送るメールアドレス
		'adminEmail' => array(
			'to'  => array(
				'hokuto15+to@gmail.com'
			),
			'cc'  => array(
				'hokuto15+cc@gmail.com'
			),
			'bcc' => array(
				'hokuto15+bcc@gmail.com'
			),
		),
		// 管理者に送るメールタイトル
		'adminTitle' => '【テスト】管理者用タイトル',
		// Return Path (ない場合fromEmailと同じ)
		'returnPath' => '',
		// [必須] 入力者に送るメールアドレスのinput name
		'userEmail'  => 'mail',
		// 入力者に送るメールタイトル
		'userTitle'  => '【テスト】ユーザ用タイトル',

		/**
		 * validation関連
		 */
		// [必須] validate
		'validate'   => array()
	),

	/**
	 * "area/"のAPI設定
	 */
	'area'    => array(
		// defaultから更新するものを書く
//		'adminTitle' => '問い合わせがありました。',
//		'userTitle'  => 'お問い合わせ有難うございます。',
		'validate' => array(
			// バリデーションルールを書く
			'name'    => array('required'),
		)
	),
);
