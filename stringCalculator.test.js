const { add } = require("./stringCalculator.js");

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
