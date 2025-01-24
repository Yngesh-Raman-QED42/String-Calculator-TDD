const { add } = require("./stringCalculator.js");
describe("String Calculator", () => {
	// Test 1
	test("should return 0 for an empty string", () => {
		expect(add("")).toBe(0);
	});

	// Test 2
	test("should return the number for a single number", () => {
		expect(add("1")).toBe(1);
	});

	// Test 3
	test("should return the sum of two numbers separated by a comma", () => {
		expect(add("1,2")).toBe(3);
	});

	// Test 4
	test("should handle new lines between numbers", () => {
		expect(add("1\n2,3")).toBe(6);
	});

	// Test 5
	test("should support custom delimiters", () => {
		expect(add("//;\n1;2")).toBe(3);
	});

	test("* should multiply the numbers instead of adding", () => {
		expect(add("//*\n2*3")).toBe(6);
	});

	// Test 6
	test("should throw an exception for negative numbers", () => {
		expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
		expect(() => add("1,-2,-5,3")).toThrow(
			"negative numbers not allowed -2, -5"
		);
	});
});
