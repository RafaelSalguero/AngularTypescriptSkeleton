define(["require", "exports", "app/features/login/loginService", 'angular-mocks'], function (require, exports, loginService) {
    "use strict";
    //Force the import of the login service:
    loginService;
    describe("login test", function () {
        beforeEach(angular.mock.module("app"));
        it("angular defined", function () {
            expect(angular).toBeDefined();
        });
        it("ng mock defined", function () {
            expect(inject).toBeDefined();
        });
        it("loginService defined", function () {
            expect(loginService).toBeDefined();
        });
        it("correct password passes", inject(function (LoginService, $q, $rootScope, $timeout) {
            //Testing a $Q promise
            //The password service resolves its value after 1 second. Here we are mocking the timeout service and simulating the time passing
            var resolvedValue;
            var promise = LoginService.checkPassword("rafa", "123").then(function (x) { return resolvedValue = x; });
            //Promise has not been resolved yet:
            expect(resolvedValue).toBeUndefined();
            $rootScope.$apply();
            //Promise has not been resolved yet:
            expect(resolvedValue).toBeUndefined();
            $timeout.flush(500);
            $rootScope.$apply();
            //Promise has not been resolved yet:
            expect(resolvedValue).toBeUndefined();
            $timeout.flush(500);
            $rootScope.$apply();
            //After one seconds, the promise has been resolved:
            expect(resolvedValue).toBe(true);
        }));
        it("wrong password fails", inject(function (LoginService, $q, $rootScope, $timeout) {
            var resolvedValue;
            var promise = LoginService.checkPassword("rafa", "wrong").then(function (x) { return resolvedValue = x; });
            //Simulate one second passing:
            $timeout.flush(1000);
            $rootScope.$apply();
            //wrong password fails
            expect(resolvedValue).toBe(false);
        }));
        //    it("correct password passes", inject(function(LoginService : loginService){
        //       expect(LoginService.checkPassword("rafa", "123")).toBe(true); 
        //    }));
    });
});
