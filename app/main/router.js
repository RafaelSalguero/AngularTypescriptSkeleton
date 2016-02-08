define(["require", "exports", 'angular-ui-router'], function (require, exports) {
    return function (app) {
        app.config(function ($stateProvider, $urlRouterProvider) {
            //helper functions:
            var baseUrl = "app/features/";
            var controllerAs = "Main";
            var base = function (name) { return baseUrl + name + "/" + name + ".html"; };
            //Configure your routing here:
            //For any unmatched url, redirect to home:
            $urlRouterProvider.otherwise("/state1");
            $stateProvider
                .state('state1', {
                url: "/state1",
                templateUrl: base("login"),
                controller: "LoginController",
                controllerAs: controllerAs
            })
                .state('state2', {
                url: "/state2",
                templateUrl: base("home")
            });
        });
    };
});
