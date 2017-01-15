define([ '../app' ], function (module) {
    module.controller('BodyController',
    [ '$scope', '$location',
    function ($scope, $location) {
        $scope.name = "Aritra Saha";
        
        $scope.openTest = function () {
            $location.path("/test/google");
        };
    } ]);
});
