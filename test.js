describe("filter", function () {
  it("String and return the filter value", function () {
    assert.equal("I am not man!", "I am not good man!".filter("good"));
  });
  it("take string and filter according to the array filter data", function () {
    assert.equal(
      "not a propper syntax!",
      "My name is not a propper syntax!".filter(["My", "name", "is"])
    );
  });
});

describe("bubblesort alog", function () {
  it("takes an empty array and return empty array", function () {
    assert.deepEqual([], [].bubblesort());
  });
  it("take an array of number and return sorted array", function () {
    assert.deepEqual(
      [-3, -2, 0, 1, 3, 4, 5, 6],
      [6, 4, 0, 3, -2, 1, -3, 5].bubblesort()
    );
  });
});
