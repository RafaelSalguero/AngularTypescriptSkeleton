//App definition
define(["require", "exports", 'angular', 'angular-ui-router'], function (require, exports) {
    var appName = "app";
    var depends = ['ui.router'];
    var container = "container";
    var app = angular.module(appName, depends);
    return {
        /**Application main module */
        app: app,
        /**shortcut for configuring a router state */
        state: 
        /**
         * @param name state name
         * @param config state config
         */
        function (name, config) {
            app.config(function ($stateProvider, $urlRouterProvider) {
                $stateProvider.state(name, config);
            });
        },
        /**Declare a controller with the same name as the class
        */
        controller: 
        /**
         * @param constructor The constructor of the controller to declare
         */
        function (constructor) {
            app.controller(constructor.name, constructor);
        },
        /**Declare a service with the same name as the class
        */
        service: 
        /**
         * @param constructor The constructor of the service to declare
         */
        function (constructor) {
            app.service(constructor.name, constructor);
        }
    };
});
