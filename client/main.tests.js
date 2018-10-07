describe("This test will crash mocha and it will swallow the error", function() {
  before(function() {
    throw new Error("HULK SMASH");
  });
  it("should pass", function() {
    assert(true);
  });
});
