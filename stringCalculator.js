function add(numbers) {
	if (numbers === "") return 0;

	const delimiter = /,|\n/;

	return numbers
		.split(delimiter)
		.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
