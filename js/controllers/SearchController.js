'use strict';

mdrSearchApp.controller('SearchController',
    function SearchController($scope, $route, dataProvider) {
        dataProvider.getMembers().then(function(members) {
            $scope.members = members;
        });

        $scope.myData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true,
                "samo tuka ": "ooooo",
                "sdf": "sdfgsdfg",
                "sdfgsdfg": "sdfgsdfg",
                "fffff": "sdfg",
                "sdfgsdffg": "sfgsdfgsdfg"
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }
        ];
    }
);