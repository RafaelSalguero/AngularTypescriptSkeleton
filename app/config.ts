//Configure requireJS here
require.config(
    {
        baseUrl: '../',

        paths: {
            'angular': "/node_modules/angular/angular",
            'angular-ui-router': "/node_modules/angular-ui-router/release/angular-ui-router",
            'jQuery': "https://code.jquery.com/jquery-2.2.1.min",
            'bootstrap': "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min"
        },
        shim: {
            'angular': { exports: 'angular' },
            'angular-ui-router': { exports: 'angular-ui-router', deps: ['angular'] },
            'bootstrap': { deps: ['jQuery'] }
        },

        /**Cache busting for javascript files */
        urlArgs: "version=" + application.version,
        deps: ["app/main/main", "bootstrap"]
    }
);