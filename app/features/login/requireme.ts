import app = require('main/app');

//Declare the login controller
class LoginController {
    constructor(private $state: ng.ui.IStateService) {
    }

    User: string;
    Password: string;

    Enter(): void {
        if (this.User == "rafa" && this.Password == "123") {
            this.$state.go("state2");
        }
        else {
            alert("psst! User is 'Rafa' and password is '123");
        }
    }
}

//Register the controller
app.controller(LoginController);

//Define its own routing state:
app.state("login", {
    url: "/login",
    templateUrl: "app/features/login/login.html",
    controller: "LoginController",
    controllerAs: "Main"
})
