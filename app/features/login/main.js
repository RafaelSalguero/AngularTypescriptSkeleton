define(["require", "exports", 'main/app'], function (require, exports, app) {
    //Declare the login controller
    var LoginController = (function () {
        function LoginController() {
        }
        LoginController.prototype.Enter = function () {
            if (this.User == "Rafa" && this.Password == "123") {
                alert("Login succeed!");
            }
            else {
                alert("psst! User is 'Rafa' and password is '123");
            }
        };
        return LoginController;
    })();
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
