define(["require", "exports", 'angular-ui-router', 'angular'], function (require, exports, router, angular) {
    router;
    angular;
    var dummy = router;
    console.log("main run");
    //Angular application name normalized to app:
    var appName = "app";
    var depends = ['ui.router'];
    var container = "container";
    var app = angular.module(appName, depends);
    angular.bootstrap(document.getElementById(container), [appName]);
    return app;
});
