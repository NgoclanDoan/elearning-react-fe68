const regex = {
	phoneNumber:
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
	notContainNumber: /^([^0-9]*)$/,
	leastTwoName: /(\w.+\s).+/,
};
export default regex;