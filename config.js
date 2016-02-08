//Configure requireJS here
console.log("config run");
require.config({
    baseUrl: "/app",
    paths: {
        'angular': "/node_modules/angular/angular",
        'angular-ui-router': "/node_modules/angular-ui-router/release/angular-ui-router"
    },
    shim: {
        'angular': { exports: 'angular' },
        'angular-ui-router': { exports: 'angular-ui-router', deps: ['angular'] }
    },
    deps: ["main"]
});
