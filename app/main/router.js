define(["require", "exports", 'angular-ui-router'], function (require, exports) {
    return function (app) {
        app.config(function ($stateProvider, $urlRouterProvider) {
            //base folder:
            var baseUrl = "app/features/";
            var base = function (name) { return baseUrl + name + "/" + name + ".html"; };
            //For any unmatched url, redirect to home:
            $urlRouterProvider.otherwise("/state1");
            //Set up application states:
            $stateProvider
                .state('state1', {
                url: "/state1",
                templateUrl: base("login"),
                controller: "LoginController",
                controllerAs: "Main"
            })
                .state('state2', {
                url: "/state2",
                templateUrl: base("home")
            });
        });
    };
});
