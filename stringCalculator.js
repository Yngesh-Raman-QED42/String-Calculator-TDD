function add(numbers) {
	if (numbers === "") return 0;

	let delimiter = /,|\n/;

	if (numbers.startsWith("//")) {
		delimiter = numbers[2]; // Single character delimiter
		numbers = numbers.slice(4);
		return numbers
			.split(delimiter)
			.reduce((sum, num) => sum + parseInt(num, 10), 0);
	}

	return numbers
		.split(delimiter)
		.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
