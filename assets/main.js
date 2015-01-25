require.config({
    baseUrl : 'assets',
    paths : {
        'angular' : 'vendor/angular-1.2.26/angular.min',
        'bootstrap' : 'vendor/bootstrap-3.3.2-dist/js/bootstrap.min',
        'ui-bootstrap': 'vendor/angular-lib/ui-bootstrap-tpls-0.12.0',
        'jquery' : 'vendor/jquery-2.1.3/jquery-2.1.3.min',
    },
    shim : {
        'angular' : {
            deps: [ 'jquery' ],
            exports : 'angular'
        },
        'ui-bootstrap' : {
            deps : [ 'angular', 'bootstrap']
        },
        'bootstrap' : {
            deps : [ 'jquery' ]
        },
        'jquery' : {
            exports : '$'
        },
    }
});
