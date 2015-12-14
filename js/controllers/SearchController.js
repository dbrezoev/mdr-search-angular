'use strict';

mdrSearchApp.controller('SearchController',
    function SearchController($scope, $route, dataProvider) {
        $scope.filter = {};

        var columnWidth = '150';
        var shortDataColmnDefs = [
            { field: 'memberName', width: columnWidth },
            { field: 'callDate', width: columnWidth},
            { field: 'callerFirstName', width: columnWidth},
            { field: 'callerLastName', width: columnWidth},
            { field: 'callerRelationship', width: columnWidth},
            { field: 'callStatus', width: columnWidth},
            { field: 'callerPhoneNumber', width: columnWidth},
            { field: 'callDuration', width: columnWidth},
            { field: 'callType', width: columnWidth},
            { field: 'anotherCallProperty', width: columnWidth},
        ];
        //
        var longDataColmnDefs = [
            { field: 'memberName', width: columnWidth },
            { field: 'callDate', width: columnWidth},
            { field: 'callerFirstName', width: columnWidth},
            { field: 'callerLastName', width: columnWidth},
            { field: 'callerRelationship', width: columnWidth},
            { field: 'callStatus', width: columnWidth},
            { field: 'callerPhoneNumber', width: columnWidth},
            { field: 'callDuration', width: columnWidth},
            { field: 'callType', width: columnWidth},
            { field: 'anotherCallProperty', width: columnWidth},
            { field: 'additionalProperty1', width: columnWidth},
            { field: 'additionalProperty2', width: columnWidth},
            { field: 'additionalProperty3', width: columnWidth},
            { field: 'additionalProperty4', width: columnWidth},
            { field: 'additionalProperty5', width: columnWidth},
            { field: 'additionalProperty6', width: columnWidth},
            { field: 'additionalProperty7', width: columnWidth},
            { field: 'additionalProperty8', width: columnWidth},
            { field: 'additionalProperty9', width: columnWidth},
            { field: 'additionalProperty10', width: columnWidth},
            { field: 'additionalProperty11', width: columnWidth},
            { field: 'additionalProperty12', width: columnWidth},
            { field: 'additionalProperty13', width: columnWidth},
            { field: 'additionalProperty14', width: columnWidth},
            { field: 'additionalProperty15', width: columnWidth},
            { field: 'additionalProperty16', width: columnWidth},
            { field: 'additionalProperty17', width: columnWidth},
            { field: 'additionalProperty18', width: columnWidth},
            { field: 'additionalProperty19', width: columnWidth},
            { field: 'additionalProperty20', width: columnWidth}
        ];

        $scope.showGrid = false;
        $scope.gettingData = false;

        var gridOptions = {
            enableGridMenu: true,
            enablePagination: true,
            enablePaginationControls: true,
            paginationPageSizes: [5, 7, 9],
            paginationPageSize: 5
        };

        $scope.gridOptions = gridOptions;
        //$scope.gridOptions.data = data;

        $scope.gridOptions = gridOptions;
        //$scope.gridOptions.data = data;

        $scope.search = function(filter) {
            debugger
            console.log($scope.filter)
            debugger
        };

        $scope.reset = function(date) {
            //$scope.gridOptions.data = [];
            //$scope.showGrid = false;
        };

        $scope.getMockedData = function() {
            $scope.gettingData = true;

            dataProvider.getMockedData().then(function (data) {
                $scope.gettingData = false;
                $scope.showGrid = true;
                $scope.gridOptions = gridOptions;
                $scope.gridOptions.data = data;
                $scope.gridOptions.columnDefs = shortDataColmnDefs;
            });

            //dataProvider.getMembers().then(function(members) {
            //    $scope.members = members;
            //    $scope.gridOptions = gridOptions;
            //    $scope.gridOptions.data = members;
            //    $scope.gridOptions.columnDefs = shortDataColmnDefs;
            //    $scope.showGrid = true;
            //});
        };

        $scope.getMockedDataLong = function() {
            $scope.gettingData = true;

            dataProvider.getMoreMockedData().then(function(data) {
                $scope.gettingData = false;
                $scope.showGrid = true;
                $scope.gridOptions = gridOptions;
                $scope.gridOptions.data = data;
                $scope.gridOptions.columnDefs = longDataColmnDefs;
            });

            //dataProvider.getMoreMembers().then(function(members) {
            //    $scope.members = members;
            //    $scope.gridOptions = gridOptions;
            //    $scope.gridOptions.data = members;
            //    $scope.gridOptions.columnDefs = longDataColmnDefs;
            //    $scope.showGrid = true;
            //});
        };
    }
);