define(["require", "exports", 'main/app'], function (require, exports, app) {
    var LoginController = (function () {
        function LoginController() {
            this.Message = "Hi there";
        }
        return LoginController;
    })();
    console.log("login run");
    app.app.controller('LoginController', LoginController);
});
