function add(numbers) {
	if (numbers === "") return 0;

	return numbers.split(",").reduce((sum, num) => sum + parseInt(num, 10), 0); // this will also handle the case of single number, so we can make it a default for now
}

module.exports = { add };
