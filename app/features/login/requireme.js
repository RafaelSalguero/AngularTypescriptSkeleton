define(["require", "exports", 'main/app', 'features/login/loginService'], function (require, exports, app, LoginService) {
    LoginService;
    //Declare the login controller
    var LoginController = (function () {
        function LoginController($state, LoginService) {
            this.$state = $state;
            this.LoginService = LoginService;
        }
        LoginController.prototype.Enter = function () {
            var _this = this;
            this.Loading = true;
            this.LoginService.checkPassword(this.User, this.Password).then(function (x) {
                if (x)
                    _this.$state.go("state2");
                else
                    alert("psst! User is 'Rafa' and password is '123");
            });
        };
        return LoginController;
    })();
    //Register the controller
    app.controller(LoginController);
    //Define its own routing state:
    app.state("login", {
        url: "/login",
        templateUrl: "app/features/login/login.html",
        controller: "LoginController",
        controllerAs: "Main"
    });
});