import 'angular';
import router = require('main/router');

console.log("main run");

var appName = "app";
var depends = [ 'ui.router' ];
var container = "container";
var app = angular.module(appName, depends); 

router(app);

angular.bootstrap( document.getElementById(container), [ appName ]);

//Explicity export 'app' so the typescript compiler output a module definition
export = app;