'use strict';

mdrSearchApp.controller('SearchController',
    function SearchController($scope, $route, dataProvider, consts) {

        $scope.filter = {};
        $scope.showGrid = false;
        $scope.gettingData = false;

        var gridOptions = {
            enableGridMenu: true,
            enablePagination: true,
            enablePaginationControls: true,
            paginationPageSizes: [5, 10, 20],
            paginationPageSize: 5
        };

        $scope.gridOptions = gridOptions;

        $scope.search = function(filter) {
            console.log($scope.filter)
        };

        $scope.reset = function(date) {
            //$scope.gridOptions.data = [];
            //$scope.showGrid = false;
        };

        $scope.gridOptions.columnDefs = [];

        $scope.getMockedData = function() {
            $scope.gettingData = true;

            dataProvider.getMockedData().then(function (data) {
                $scope.gridOptions.columnDefs = [];
                var firstObject = data[0];
                var property;
                for (property in firstObject) {
                    if (firstObject.hasOwnProperty(property) && property !== '$$hashKey') {
                        $scope.gridOptions.columnDefs.push({
                            displayName: consts.bothSourcesColumnsMap[property],
                            field: property,
                            width: consts.columnWidth
                        });
                    }
                }

                $scope.gettingData = false;
                $scope.showGrid = true;
                $scope.gridOptions = gridOptions;
                $scope.gridOptions.data = data;
            });
        };

        $scope.getMockedDataLong = function() {
            $scope.gettingData = true;

            dataProvider.getMoreMockedData().then(function(data) {
                $scope.gridOptions.columnDefs = [];
                var firstObject = data[0];
                var property;
                for (property in firstObject) {
                    if (firstObject.hasOwnProperty(property) && property !== '$$hashKey') {
                        $scope.gridOptions.columnDefs.push({
                            displayName: consts.bothSourcesColumnsMap[property],
                            field: property,
                            width: consts.columnWidth
                        });
                    }
                }

                $scope.gettingData = false;
                $scope.showGrid = true;
                $scope.gridOptions = gridOptions;
                $scope.gridOptions.data = data;
            });
        };
    }
);