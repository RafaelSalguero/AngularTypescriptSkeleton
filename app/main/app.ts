//App definition

//Require this file if you need to:
// - Register a controller / service to the app module
// - Register a state for routing
import 'angular';
import 'angular-ui-router';

var appName = "app";
var depends = ['ui.router'];
var container = "container";
var app = angular.module(appName, depends);

export = { 
    /**Application main module */
    app: app,
    /**shortcut for configuring a router state */
    state: 
    /**
     * @param name state name
     * @param config state config
     */
    function(name: string, config: ng.ui.IState) {
        app.config(function($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            $stateProvider.state(name, config);
        })
    },
    /**Declare a controller with the same name as the class*/
    controller : function(constructor : Function) : void  {
        app.controller((<any>constructor).name, constructor);
    },
    /**Declare a service with the same name as the class*/
    service : function<T>(constructor : Function) : void  {
        app.service((<any>constructor).name, constructor);
    }
}; 

