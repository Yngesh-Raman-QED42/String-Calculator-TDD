function add(numbers) {
	if (numbers === "") return 0;

	let delimiter = /,|\n/; // Default delimiters

	// Check for custom delimiter
	if (numbers.startsWith("//")) {
		delimiter = numbers[2];
		numbers = numbers.slice(4);
	}

	// Split the input string into an array of numbers
	const numArray = numbers.split(delimiter).map(Number);

	// Filter and handle negative numbers
	const negatives = numArray.filter((num) => num < 0);
	if (negatives.length > 0) {
		throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
	}

	// Calculate the sum of numbers
	return numArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
