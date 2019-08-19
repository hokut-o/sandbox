window.onAmazonLoginReady = function () {
	amazon.Login.setClientId('amzn1.application-oa2-client.affb56afcba4432e9442e52aed2d7dcd');
};
window.onAmazonPaymentsReady = function () {
	showButton();
};

function showButton() {
	var authRequest;
	OffAmazonPayments.Button("AmazonPayButton", "amzn1.application-oa2-client.affb56afcba4432e9442e52aed2d7dcd", {
		type: "PwA",
		color: "Gold",
		size: "large",
		language: "jp",
		authorization: function () {
			loginOptions = {scope: "profile payments:widget", popup: true};
			authRequest = amazon.Login.authorize(loginOptions, "--- REDIRECT_URL ---");
		},
		onError: function (error) {
			// error handling
		}
	});
};
