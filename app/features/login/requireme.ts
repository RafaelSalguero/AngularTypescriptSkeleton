import app = require('app/main/app');

//We need to force the typescript compiler importing this module with the use of a dummy variable
import LoginService = require('./loginService'); 
LoginService;

//Declare the login controller
export class LoginController {
    constructor(private $state: ng.ui.IStateService, private LoginService : LoginService) {
    }

    User: string;
    Password: string;

    Loading: boolean;
    Enter(): void {
        this.Loading = true;
        this.LoginService.checkPassword(this.User, this.Password).then (x=> 
        {
           if (x)
                this.$state.go("state2");
            else{
                alert("psst! User is 'Rafa' and password is '123"); 
                this.Loading= false;                
            }
        });
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
});