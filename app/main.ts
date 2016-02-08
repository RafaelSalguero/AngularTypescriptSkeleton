//Angular application name normalized to app:
console.log("main run");

var appName = "app";
var depends = [ 'ui.router' ];
var container = "container";
var app = angular.module(appName, depends); 

angular.bootstrap( document.getElementById(container), [ appName ]);

//Explicity export 'app' so the typescript compiler output a module definition
export = app;