import './requireme';
//add more main dependencies here:

import app = require('./app');

//configure the default routing state:
app.app.config(["$urlRouterProvider",  function($urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
}]);

//Manually boostrap angular
var container = "container"; 

angular.bootstrap( document.getElementById(container), [ app.app.name ], { strictDi : true });

//Explicity export 'app' so the typescript compiler output a module definition
export = app;