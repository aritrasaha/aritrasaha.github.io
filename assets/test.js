define([ 'main' ], function () {
    require([ 'angular', 'test-app' ], function (angular, module) {
        angular.bootstrap(document, [ module.name ]);
    });
});
