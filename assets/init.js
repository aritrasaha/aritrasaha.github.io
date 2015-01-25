define([ './app', './config' ], function (module) {
    module.run([ '$log',
    function ($log) {
        $log.info("App Loaded");
    } ]);
});
