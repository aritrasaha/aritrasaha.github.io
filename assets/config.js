define([ './app' ], function (module) {
    module.config(
    [ '$httpProvider', '$locationProvider', '$logProvider',
    function ($httpProvider, $locationProvider, $logProvider) {
        $httpProvider.interceptors.push([ '$q',
        function ($q) {
            return {
                request : function (config) {
                    return config || $q.when(config);
                }, responseError : function (rejection) {
                    return $q.reject(rejection);
                }
            };
        } ]);
        
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        
        $logProvider.debugEnabled(false);
    } ]);
});
