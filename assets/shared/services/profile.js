define([ '../app' ], function (module) {
    module.factory("$_profile",
    [ '$_api',
    function ($_api) {
        var getProfile = function (key) {
            return $_api.getInfo("", "/profile.json");
        };

        return {
            getProfile : getProfile
        };
    } ]);
});
