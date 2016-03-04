//Configure requireJS here
require.config({
    paths: {
        'angular': "/node_modules/angular/angular",
        'angular-ui-router': "/node_modules/angular-ui-router/release/angular-ui-router",
        'jQuery': "https://code.jquery.com/jquery-2.2.1.min.js",
        'bootstrap': "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"
    },
    shim: {
        'angular': { exports: 'angular' },
        'angular-ui-router': { exports: 'angular-ui-router', deps: ['angular'] },
        'bootstrap': { deps: ['jQuery'] }
    },
    deps: ["main/main"]
});
