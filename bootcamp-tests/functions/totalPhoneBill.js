// code needs refactoring

// function totalPhoneBill(callsMadeSmsSent) {
//   	if (callsMadeSmsSent === 'call, sms, call, sms, sms') {
//       return "R7.45";
//     }
//   	else if (callsMadeSmsSent === 'call, sms') {
//     	return "R3.40";
//     }
//   	return "R1.30";
// }

const totalPhoneBill = callsMadeSmsSent => {
	let smsAndCallArr = callsMadeSmsSent.split(', ');
	let smsAndCallSum = 0;

	for (let i = 0; i < smsAndCallArr.length; i++) {
		const currentSmsOrCall = smsAndCallArr[i];

		currentSmsOrCall === 'call' ? smsAndCallSum += 2.75 : currentSmsOrCall === 'sms' ? smsAndCallSum += 0.65 : smsAndCallSum += 1.30;
		
	}
	return `R${smsAndCallSum.toFixed(2)}`;
}

console.log(totalPhoneBill('call, sms, call, sms, call, sms, call, call'))