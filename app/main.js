define(["require", "exports"], function (require, exports) {
    //Angular application name normalized to app:
    console.log("main run");
    var appName = "app";
    var depends = ['ui.router'];
    var container = "container";
    var app = angular.module(appName, depends);
    angular.bootstrap(document.getElementById(container), [appName]);
    return app;
});
