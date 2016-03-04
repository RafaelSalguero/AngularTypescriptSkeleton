define(["require", "exports", 'main/app'], function (require, exports, app) {
    //Declare the login controller
    var LoginController = (function () {
        function LoginController($state) {
            this.$state = $state;
        }
        LoginController.prototype.Enter = function () {
            if (this.User == "rafa" && this.Password == "123") {
                this.$state.go("state2");
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
