import { testFunction, TEST_STRING } from "../src";

it("returns test string", () => {
  const expected = TEST_STRING;
  const result = testFunction();

  expect(result).toBe(expected);
});
