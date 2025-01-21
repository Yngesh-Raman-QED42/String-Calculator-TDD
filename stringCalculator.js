function add(numbers) {
	if (numbers === "") return 0;
	return parseInt(numbers, 10); // returning the number if its a single number
}

module.exports = { add };
