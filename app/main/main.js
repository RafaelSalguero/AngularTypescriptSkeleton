define(["require", "exports", 'main/app', 'main/router', 'main/autoreq'], function (require, exports, app, router) {
    console.log("main run");
    var container = "container";
    router(app.app);
    angular.bootstrap(document.getElementById(container), [app.app.name]);
    return app;
});
