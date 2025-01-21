function add(numbers) {
	if (numbers === "") return 0;

	let delimiter = /,|\n/; // default delimeters

	if (numbers.startsWith("//")) {
		delimiter = numbers[2];
		numbers = numbers.slice(4);
	}

	const numArray = numbers.split(delimiter);
	const negatives = numArray.filter((num) => parseInt(num, 10) < 0);

	if (negatives.length > 0) {
		throw new Error("negative numbers not allowed " + negatives.join(", "));
	}

	return numArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

module.exports = { add };
