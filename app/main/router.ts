//Configure your routing here:
import 'angular-ui-router';

export = function(app : ng.IModule) { app.config(function($stateProvider : ng.ui.IStateProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider) {
    //base folder:
    var baseUrl = "app/features/";
    
    var base = (name) => baseUrl + name + "/" + name + ".html";
    
    //For any unmatched url, redirect to home:
    $urlRouterProvider.otherwise("/state1");
    
    //Set up application states:
    $stateProvider
        .state('state1', {
            url:"/state1",
            templateUrl: base("login"),
            controller: "LoginController",
            controllerAs: "Main"
        })
        .state('state2', {
            url:"/state2",
            templateUrl: base("home")
        });
});    
}
