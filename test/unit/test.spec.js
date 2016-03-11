define(["require", "exports"], function (require, exports) {
    describe("a suite", function () {
        it("contains spec with an expectation", function () {
            expect(true).toBe(true);
        });
        angular.mock.module("app");
        angular.mock.inject(function ($Q) {
            console.log($Q);
        });
    });
});
