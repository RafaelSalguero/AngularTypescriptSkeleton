//Explicitly use import modules, this is the only way to force TypeScript to include it on the definition
import router = require('angular-ui-router');
router;

import angular = require('angular');
angular;

var dummy = router;
console.log("main run");

//Angular application name normalized to app:

var appName = "app";
var depends = [ 'ui.router' ];
var container = "container";
var app = angular.module(appName, depends); 

angular.bootstrap( document.getElementById(container), [ appName ]);

//Explicity export 'app' so the typescript compiler output a module definition
export = app;