define(["require", "exports", 'main/app', 'main/requireme'], function (require, exports, app) {
    console.log("main run");
    var container = "container";
    angular.bootstrap(document.getElementById(container), [app.app.name]);
    return app;
});
