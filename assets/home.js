define([ 'main' ], function () {
    require([ 'angular', 'app', 'init' ], function (angular, module) {
        angular.bootstrap(document, [ module.name ]);
    });
});
