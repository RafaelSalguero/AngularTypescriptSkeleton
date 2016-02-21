define(["require", "exports", 'angular'], function (require, exports) {
    var appName = "app";
    var depends = ['ui.router'];
    var container = "container";
    var app = angular.module(appName, depends);
    return {
        /**Application main module */
        app: app
    };
});
