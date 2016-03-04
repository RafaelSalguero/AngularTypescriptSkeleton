define(["require", "exports", 'main/app', 'main/requireme'], function (require, exports, app) {
    //configure the default routing state:
    app.app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/login");
    });
    var container = "container";
    angular.bootstrap(document.getElementById(container), [app.app.name]);
    return app;
});
