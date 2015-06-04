define([ '../app' ], function (module) {
    module.factory('$_api', [ '$http', '$q', '$log',
    function ($http, $q, $log) {
        var apiLocation = "../data";
        
        /**
         * utility method to construct get call
         */
        var constructGet = function (url, headers) {
            var getCall = function (params) {
                var deferred = $q.defer();
                $log.info("GET " + apiLocation + url);
                $http({
                    method : 'GET',
                    url : apiLocation + url,
                    headers : headers,
                    params : params
                }).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    $log.error("GET " + url + " failed.");
                    deferred.reject(data);
                });
                return deferred.promise;
            };
            return getCall;
        };
        
        /**
         * utility method to construct post call
         */
        var constructPost = function (url, headers) {
            var postCall = function (postData, params) {
                var deferred = $q.defer();
                $log.info("POST " + apiLocation + url);
                $http({
                    method : 'POST',
                    url : apiLocation + url,
                    data : postData,
                    headers : headers,
                    transformRequest : angular.identity,
                    params : params
                }).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    $log.error("POST " + url + " failed.");
                    deferred.reject(data);
                });
                return deferred.promise;
            };
            return postCall;
        };
        
        /**
         * Construct a head method for the specified url
         * 
         * @param {String}
         *            url the url to post on
         * @return {Object} headers of the head
         */
        var constructHead = function (url, headers) {
            /**
             * Makes a head request at the specified url and returns a promise
             * object.
             * 
             * @param {Object}
             *            postData the data to post
             * @param {Object}
             *            params the parameters for this url
             * @return a promise object
             */
            var head = function (params) {
                var deferred = $q.defer();
                // config of the head request
                $log.info("HEAD " + apiLocation + url);
                $http({
                    method : 'HEAD',
                    url : apiLocation + url,
                    headers : headers,
                    params : params
                }).success(function (data, status, headers, config) {
                    deferred.resolve({
                        data    : data,
                        status  : status,
                        headers : headers,
                        config  : config
                    });
                }).error(function (data, status, headers, config) {
                    $log.error("HEAD " + url + " failed.");
                    deferred.reject({
                        data    : data,
                        status  : status,
                        headers : headers,
                        config  : config
                    });
                });
                return deferred.promise;
            };
            return head;
        };
        
        /**
         * utility method to construct put call
         */
        var constructPut = function (url, headers) {
            var putCall = function (postData, params) {
                var deferred = $q.defer();
                $log.info("PUT " + apiLocation + url);
                $http({
                    method : 'PUT',
                    url : apiLocation + url,
                    data : postData,
                    headers : headers,
                    transformRequest : angular.identity,
                    params : params
                }).success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    $log.error("PUT " + url + " failed.");
                    deferred.reject(data);
                });
                return deferred.promise;
            };
            return putCall;
        };
        
        /**
         * utility method to get data
         */
        var getInfo = function (module, path, params) {
            var get = constructGet(module + path);
            return get(params);
        };
        
        /**
         * utility method make post call and return data
         * Content-Type = undefined means multipart/form-data
         * this Content-Type is inserted by the browser. 
         */
        var postFormInfo = function (module, path, formData, params) {
            var post = constructPost(module + path, {
                'Content-Type' : undefined
            });
            return post(formData, params);
        };
        
        /**
         * utility method make post call and return data
         */
        var postJsonInfo = function (module, path, data, params) {
            var post = constructPost(module + path, {
                'Content-Type' : 'application/json'
            });
            return post(angular.toJson(data), params);
        };
        
        /**
         * utility method make post call and return data
         */
        var postWWWInfo = function (module, path, data, params) {
            var post = constructPost(module + path, {
                'Content-Type' : 'application/x-www-form-urlencoded'
            });
            return post(data, params);
        };
        
        /**
         * utility method make post call and return data
         */
        var putUrlEncodedInfo = function (module, path, data, params) {
            var put = constructPut(module + path, {
                'Content-Type' : 'application/x-www-form-urlencoded'
            });
            return put(data, params);
        };
        
        var putFormInfo = function (module, path, formData, params) {
            var put = constructPut(module + path, {
                'Content-Type' : undefined
            });
            return put(formData, params);
        };
        
        var urlEncodeParams = function (params) {
            var urlEncode = "";
            for (var key in params) {
                urlEncode += key + "=" + encodeURIComponent(params[key]) + "&";
            }
            return urlEncode;
        };
        
        /**
         * Construct the url for the given base url and the params.
         * 
         * @param {String}
         *            module name of the module making the call
         * @param {String}
         *            url relative path
         * @param {Object}
         *            map of params and their values
         */
        var constructUrl = function (module, path, params) {
            var u = apiLocation + module + path + "?";
            for ( var key in params) {
                u += key + "=" + params[key] + "&";
            }
            u = u.substring(0, u.length - 1);
            return u;
        };
        
        return {
            apiLocation : apiLocation,
            constructGet : constructGet,
            constructHead : constructHead,
            constructUrl : constructUrl,
            getInfo : getInfo,
            constructPost : constructPost,
            constructPut : constructPut,
            postFormInfo : postFormInfo,
            postJsonInfo : postJsonInfo,
            postWWWInfo : postWWWInfo,
            urlEncodeParams : urlEncodeParams,
            putUrlEncodedInfo : putUrlEncodedInfo,
            putFormInfo : putFormInfo
        };
    } ]);
});
