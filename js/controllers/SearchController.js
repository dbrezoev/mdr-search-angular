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
        /////////////////////////////////////////////////////////////////
        $scope.today = function() {
            $scope.dt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.dt = null;
        };

        // Disable weekend selection
        $scope.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();
        $scope.maxDate = new Date(2020, 5, 22);

        $scope.open = function($event) {
            $scope.status.opened = true;
        };

        $scope.setDate = function(year, month, day) {
            $scope.dt = new Date(year, month, day);
        };

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            class: 'datepicker'
        };

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];

        $scope.status = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 2);
        $scope.events =
            [
                {
                    date: tomorrow,
                    status: 'full'
                },
                {
                    date: afterTomorrow,
                    status: 'partially'
                }
            ];

        $scope.getDayClass = function(date, mode) {
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0,0,0,0);

                for (var i=0;i<$scope.events.length;i++){
                    var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        };
    }
);