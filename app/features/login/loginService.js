define(["require", "exports", 'app/main/app'], function (require, exports, app) {
    var LoginService = (function () {
        function LoginService($q, $timeout) {
            this.$q = $q;
            this.$timeout = $timeout;
        }
        LoginService.prototype.checkPassword = function (user, password) {
            var _this = this;
            //simulate server response time with $q:
            return this.$q(function (resolve) {
                _this.$timeout(function () { return resolve(user == 'rafa' && password == '123'); }, 1000);
            });
        };
        return LoginService;
    })();
    app.service(LoginService);
    return LoginService;
});
