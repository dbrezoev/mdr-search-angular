'use strict';

mdrSearchApp.factory('dataProvider', function($http, $q) {

    var dataUrl = 'http://localhost:51329/api/members/mocked-data';
    var complexDataUrl = 'http://localhost:51329/api/members/more-mocked-data';
    return {
        getMembers: function () {
            var deferred = $q.defer();
            $http.get(dataUrl)
                .success(function (data) {
                    deferred.resolve(data);
                })
                .error(function (err) {
                    deferred.reject(error);
                });

            return deferred.promise;
        },

        getMoreMembers: function () {
            var deferred = $q.defer();
            $http.get(complexDataUrl)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(err) {
                    deferred.reject(err);
                });

            return deferred.promise;
        }
    }
});