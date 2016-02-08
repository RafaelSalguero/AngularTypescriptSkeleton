var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider : ng.ui.IStateProvider, $urlRouterProvider : ng.ui.IUrlRouterProvider)
{
    //For any unmatched url, redirect to home:
    $urlRouterProvider.otherwise("/state1");
    
    //Set up application states:
    $stateProvider
        .state('state1', {
            url:"/state1",
            templateUrl: "app/login/login.html",
            controller: "LoginController",
            controllerAs: "Main"
        })
        .state('state2', {
            url:"/state2",
            templateUrl: "app/login/logout.html"
        });
});
app.run(function() 
{
    alert('hola a todos desde TS 2');
});