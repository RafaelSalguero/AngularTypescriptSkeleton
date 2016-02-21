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
                $urlRouterProvider.otherwise("/state1");
                $stateProvider.state(name, config);
            });
        }
    };
});
