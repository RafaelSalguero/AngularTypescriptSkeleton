define(["require", "exports", "unit/hola"], function (require, exports, loginService) {
    describe("a suite", function () {
        it("should be 10", function () {
            expect(loginService).toBe(10);
        });
    });
});
