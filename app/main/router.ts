
import 'angular-ui-router';

export = function(app : ng.IModule) { app.config(function($stateProvider : ng.ui.IStateProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider) {
    //helper functions:
    var baseUrl = "app/features/";
    var controllerAs = "Main";
    var base = (name) => baseUrl + name + "/" + name + ".html";

    //Configure your routing here:
    
    //For any unmatched url, redirect to home:
    $urlRouterProvider.otherwise("/state1");
    $stateProvider
        .state('state1', {
            url:"/state1",
            templateUrl: base("login"),
            controller: "LoginController",
            controllerAs: controllerAs
        })
        .state('state2', {
            url:"/state2",
            templateUrl: base("home")
        });
});    
}
