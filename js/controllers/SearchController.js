'use strict';

mdrSearchApp.controller('SearchController',
    function SearchController($scope, $route, dataProvider) {
        //dataProvider.getMembers().then(function(members) {
        //    $scope.members = members;
        //});

        $scope.myData = [{
                "name": "Cox",
                "gender": "Carney",
                "company": "Enormo",
                "employed": "sdsdfgsdfg"
            },{
                "name": "Lorraine",
                "gender": "Wise",
                "company": "Comveyer",
                "employed": "sdgsdf"
            },{
                "name": "Nancy",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "pesho",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "gosho",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "secret",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "kiro",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "stefan",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": " ",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "aaa",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "1",
                "gender": "Carney",
                "company": "Enormo",
                "employed": "sdsdfgsdfg"
            },{
                "name": "2",
                "gender": "Wise",
                "company": "Comveyer",
                "employed": "sdgsdf"
            },{
                "name": "3",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "4",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "5",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "6",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "7",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "8",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "9",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            },{
                "name": "10",
                "gender": "Waters",
                "company": "Fuelton",
                "employed": "sdfg"
            }];

        //
        $scope.gridOptions = {
            enableGridMenu: true,
            enablePagination: true,
            enablePaginationControls: true,
            paginationPageSizes: [5, 7, 9],
            paginationPageSize: 3,
            columnDefs: [
                { name: 'name' },
                { name: 'gender' },
                { name: 'company' },
                { name: 'employed'}
            ]
        };

        $scope.gridOptions2 = {
            enablePaginationControls: false,
            paginationPageSize: 25,
            columnDefs: [
                { name: 'name' },
                { name: 'gender' },
                { name: 'company' }
            ]
        };
        $scope.gridOptions.data = $scope.myData;
    }
);