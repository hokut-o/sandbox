// API職歴情報項目取得
let masterData;
export const getEvt = () => {
	const masterJson = ApiFuncInstance.getJob();
	masterData = {
		type: 'masterJson.type',
		enrollment: 'masterJson.enrollment',
		employment_type: 'masterJson.employment_type',
		income: 'masterJson.income',
	};
	console.log(masterData)
};