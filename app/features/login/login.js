//import messages = require("./utils/messages");
var LoginController = (function () {
    function LoginController() {
        this.Message = "Hi there";
    }
    return LoginController;
})();
angular.module('app').controller('LoginController', LoginController);
