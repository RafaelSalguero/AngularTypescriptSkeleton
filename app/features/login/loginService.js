define(["require", "exports", 'main/app'], function (require, exports, app) {
    var LoginService = (function () {
        function LoginService($q) {
            this.$q = $q;
        }
        LoginService.prototype.checkPassword = function (user, password) {
            //simulate server response time with $q:
            return this.$q(function (resolve) {
                setTimeout(function () { return resolve(user == 'rafa' && password == '123'); }, 1000);
            });
        };
        return LoginService;
    })();
    app.service(LoginService);
    return LoginService;
});
