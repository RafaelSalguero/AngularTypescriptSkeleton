define(["require", "exports", 'main/app'], function (require, exports, app) {
    var LoginController = (function () {
        function LoginController() {
            this.Message = "Hi there";
        }
        return LoginController;
    })();
    console.log("login run");
    //Register the controller
    app.app.controller('LoginController', LoginController);
    //Define its own routing state:
    app.state("state1", {
        url: "/state1",
        templateUrl: "app/features/login/login.html",
        controller: "LoginController",
        controllerAs: "Main"
    });
});
