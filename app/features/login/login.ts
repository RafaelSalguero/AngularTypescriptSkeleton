import app = require('main/app');

class LoginController
{
    Message = "Hi there";
}

console.log("login run");
app.app.controller('LoginController', LoginController);
