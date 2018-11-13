import $ from "jquery";

let trigger = trigger || {};
trigger = {
	submit: $('[data-trigger-submit]'),
};

let target = target || {};
target = {
	form: $('[data-target-form]'),
};

export function validate() {
	// formSubmit();
	formSend();
}

function formSubmit() {
	trigger.submit.on('click', (e) => {
		e.preventDefault();
		let formData = target.form.serializeArray();
		formData = formData[0].value;
		console.log(formData);
		$.ajax({
			url: '/api/area/validate',
			type: 'post',
			cache: false,
			data: {
				'key': 'GwLE9pPJ', // ←これ必須
				'name': formData
			},
			dataType: 'json',
		}).done(function(res, data) {
			// 成功時の処理
			console.log('success!', res, data);
		}).fail(function(jqXHR, textStatus, errorThrown) {
			if(jqXHR.status === 422) {
				// バリデーションエラー
				console.log('バリデーションエラー 😓', jqXHR, textStatus, errorThrown);

			} else {
				// それ以外のエラー
				console.log('それ以外のエラー 🤔', jqXHR, textStatus, errorThrown);
			}
		});
	});
}

function formSend() {
	trigger.submit.on('click', (e) => {
		e.preventDefault();
		let formData = target.form.serializeArray();
		formData = formData[0].value;
		console.log(formData);
		$.ajax({
			url: '/api/area/send',
			type: 'post',
			cache: false,
			data: {
				'key': 'GwLE9pPJ', // ←これ必須
				'name': formData
			},
			dataType: 'json',
		}).done(function(res, data) {
			// 成功時の処理
			console.log('success!', res, data);
		}).fail(function(jqXHR, textStatus, errorThrown) {
			if(jqXHR.status === 422) {
				// バリデーションエラー
				console.log('バリデーションエラー 😓', jqXHR, textStatus, errorThrown);

			} else {
				// それ以外のエラー
				console.log('それ以外のエラー 🤔', jqXHR, textStatus, errorThrown);
			}
		});
	});
}