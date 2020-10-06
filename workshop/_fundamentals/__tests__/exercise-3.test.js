const getPairing = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(getPairing("burger")).toBe("beer");
  // add more tests here...
  expect(getPairing("beef")).toBe("red wine");
  expect(getPairing("did you get that?")).toBe("I didn't get that!");
});
