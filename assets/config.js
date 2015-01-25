define([ './app' ], function (module) {
    module.config(
    [ '$httpProvider', '$logProvider',
    function ($httpProvider, $logProvider) {
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
        
        $logProvider.debugEnabled(false);
    } ]);
});
