define([ './app' ], function (module) {
    module.config(
    [ '$routeProvider', '$logProvider',
    function ($routeProvider, $logProvider) {
        $routeProvider.when('/test/google', {
            templateUrl: 'assets/test/templates/google.html'
            
        });
        
        $logProvider.debugEnabled(false);
    } ]);
});
