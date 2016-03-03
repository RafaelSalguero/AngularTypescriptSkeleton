import app = require('main/app');

//Declare the login controller
class LoginController
{
    User: string;
    Password: string;
    
    Enter(): void
    {
        if (this.User=="Rafa" && this.Password=="123")
        {
            alert("Login succeed!");
        }
        else 
        {
            alert("psst! User is 'Rafa' and password is '123");  
        }
    }
}

//Register the controller
app.app.controller('LoginController', LoginController);

//Define its own routing state:
app.state("state1", 
{
    url:"/state1",
    templateUrl: "app/features/login/login.html",
    controller: "LoginController",
    controllerAs: "Main"
})
