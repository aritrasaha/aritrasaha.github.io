require.config({
    baseUrl : 'assets',
    packages : [ 'shared', 'test' ],
    paths : {
        'angular' : 'vendor/angular-1.3.9/angular.min',
        'angular-route' : 'vendor/angular-1.3.9/angular-route.min',
        'angular-sanitize': 'vendor/angular-1.3.9/angular-sanitize.min',
        'angular-cookies': 'vendor/angular-1.3.9/angular-cookies.min',
        
        'bootstrap' : 'vendor/bootstrap-3.3.2-dist/js/bootstrap.min',
        'ui-bootstrap': 'vendor/angular-lib/ui-bootstrap-tpls-0.12.0',
        'jquery' : 'vendor/jquery-2.1.3/jquery-2.1.3.min',
    },
    shim : {
        'angular' : {
            deps: [ 'jquery' ],
            exports : 'angular'
        },
        'angular-route' : {
            deps : [ 'angular' ]
        },
        'angular-sanitize': {
            deps: [ 'angular' ]
        },
        'angular-cookies': {
            deps: [ 'angular']
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
