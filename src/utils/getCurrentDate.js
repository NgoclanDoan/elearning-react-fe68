export const getCurrentDate = () => {
	let today = new Date();

	return (
		today.getDate() +
		'/' +
		parseInt(today.getMonth() + 1) +
		'/' +
		today.getFullYear()
	);
};
