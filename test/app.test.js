import chain, { expect } from "chai";
import { formatAndSortData, calculateConsecutiveLogins } from "../src/handleLogin.js";

const mockData1 = [
  "asdasd",
  "2023-04-18 21:47:09",
  "2023-03-28 02:47:09",
  "2023-04-19 21:47:09",
  "asdasd",
  "2023-03-12 10:47:09",
];

const formatAndSortData1 = [
  "2023-04-19",
  "2023-04-18",
  "2023-03-28",
  "2023-03-12",
];

const finalResultOfMockData1 = [
  {
    start: "2023-04-18",
    end: "2023-04-19",
    length: 2,
  },
  {
    start: "2023-03-28",
    end: "2023-03-28",
    length: 1,
  },
  {
    start: "2023-03-12",
    end: "2023-03-12",
    length: 1,
  },
];

describe("Calculate the number of days of login", function () {
  // add a test hook
  beforeEach(function () {
    // ...some logic before each test is run
  });

  context("Format and sort login Data", function () {
    it("should return formatAndSortData1", function () {
      expect(formatAndSortData(mockData1).toString()).to.equal(
        formatAndSortData1.toString()
      );
      context("Calculate Number Of Consecutive Logins", function () {
        it("should return finalResultOfMockData1", function () {
          expect(
            calculateConsecutiveLogins(formatAndSortData1).toString()
          ).to.equal(finalResultOfMockData1.toString());
        });
      });
    });
  });
});
