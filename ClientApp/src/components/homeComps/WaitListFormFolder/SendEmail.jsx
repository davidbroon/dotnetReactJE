import axios from 'axios';
export const SendEmail = (email) => (dispatch) => {
	const emailBody =
		"Journey Equip, %0D%0A I'd like to Register my interest in the school starting autumn 2022-2023 %0D%0A %0D%0A Name: " +
		dispatch.name +
		'%0D%0A Email: ' +
		email.email +
		'%0D%0A Country: ' +
		email.country;
	axios
		.post('http://localhost:7077/api/Email/send', emailBody)
		.then((res) => {
			dispatch({
				payload: res.data,
				data:res.data
			});
		})
		.catch((err) => console.log(err)); // error log
};
