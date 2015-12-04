'use strict';

mdrSearchApp.controller('SearchController',
    function SearchController($scope, $route, dataProvider) {
        dataProvider.getMembers().then(function(members) {
            $scope.members = members;
        });
    }
);