//App definition

//Require this file if you need to:
// - Register a controller / service to the app module
// - Register a state for routing
import 'angular';
import 'angularUiRouter';

var appName = "app";
var depends = ['ui.router'];
var container = "container";
var app = angular.module(appName, depends);

/**Configure ui router with the cache busting version parameter */
function configureTemplateFactory($provide: ng.auto.IProvideService): void {
    //It looks like global variables such as 
    //application.version causes problems when doing unit tests!
    var OnTest = false;;
    try {
        application;
    } catch (error) {
        OnTest = true;
    }

    // Set a suffix outside the decorator function 
    var cacheBuster;
    if (OnTest)
        cacheBuster = "test";
    else
        cacheBuster = application.version;

    function templateFactoryDecorator($delegate) {

        var fromUrl = angular.bind($delegate, $delegate.fromUrl);

        $delegate.fromUrl = function (url, params) {
            if (url !== null && angular.isDefined(url) && angular.isString(url)) {
                url += (url.indexOf("?") === -1 ? "?" : "&");
                url += "v=" + cacheBuster;
            }

            return fromUrl(url, params);
        };

        return $delegate;
    }

    $provide.decorator('$templateFactory', ['$delegate', templateFactoryDecorator]);

}
app.config(["$provide", configureTemplateFactory]);

export = {
    /**Application main module */
    app: app,
    /**shortcut for configuring a router state */
    state:
    /**
     * @param name state name
     * @param config state config
     */
    function (name: string, config: ng.ui.IState) {
        app.config(['$stateProvider', function ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
            $stateProvider.state(name, config);
        }])
    },
    /**Declare a controller with the same name as the class
     */
    controller:
    /**
     * @param constructor The constructor of the controller to declare 
     */
    function (name: string, inject: string[], constructor: Function): void {
        app.controller(name, (<any[]>inject).concat([constructor]));
    },
    /**Declare a service with the same name as the class
    */
    service:
    /**
     * @param constructor The constructor of the service to declare 
     */
    function <T>(name: string, inject: string[], constructor: Function): void {
        app.service(name, (<any[]>inject).concat([constructor]));
    },
    /**Declare a directive with the same name as the class
  */
    directive:
    /**
     * @param constructor The constructor of the directive to declare 
     */
    function <T>(name: string, inject: string[], constructor: { factory: () => ng.IDirectiveFactory }): void {
        app.directive(name, (<any[]>inject).concat([constructor.factory()]));
    }
};

