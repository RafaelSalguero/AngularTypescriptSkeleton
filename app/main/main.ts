import './requireme';
//add more main dependencies here:

import app = require('./app');

//configure the default routing state:
app.app.config(function($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
});

//Manually boostrap angular
var container = "container"; 

angular.bootstrap( document.getElementById(container), [ app.app.name ]);

//Explicity export 'app' so the typescript compiler output a module definition
export = app;