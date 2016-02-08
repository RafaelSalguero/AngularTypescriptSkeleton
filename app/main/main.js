define(["require", "exports", 'main/router', 'angular'], function (require, exports, router) {
    console.log("main run");
    var appName = "app";
    var depends = ['ui.router'];
    var container = "container";
    var app = angular.module(appName, depends);
    router(app);
    angular.bootstrap(document.getElementById(container), [appName]);
    return app;
});
