//app definition:
//Components such as controllers that need to register to the app module can do it from here;
import 'angular';

var appName = "app";
var depends = [ 'ui.router' ];
var container = "container";
var app = angular.module(appName, depends);


export = { 
    /**Application main module */
    app : app,
     }; 

