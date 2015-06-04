define([ '../app' ], function (module) {
    module.controller('BodyController',
    [ '$scope', '$location', '$log', '$_profile',
    function ($scope, $location, $log, $_profile) {
        $scope.name = "Aritra Saha";

        $scope.testUrl = function () {
            $location.path("/test/google");
        };

        $_profile.getProfile().then(
            function (data) {
                $log.info(data);
                $scope.records = data.records;
            });
    } ]);
});
