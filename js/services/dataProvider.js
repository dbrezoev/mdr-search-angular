'use strict';

mdrSearchApp.factory('dataProvider', function($http, $q) {

    var url = 'http://localhost:1234/';
    return {
        getMembers: function () {
            var deferred = $q.defer();
            $http.get(url)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (err) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
});