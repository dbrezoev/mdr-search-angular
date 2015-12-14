'use strict';

var mdrSearchApp = angular
    .module('mdrSearchApp', ['ngRoute', 'ui.grid', 'ui.grid.pagination', 'ui.grid.selection', 'ui.grid.resizeColumns'])
    .config(function($routeProvider) {
        $routeProvider
            //.when('/home', {
            //    templateUrl: 'templates/home.html'
            //})
            .when('/search', {
                templateUrl: 'templates/search.html'
            })
            .otherwise({redirectTo: '/search'});
    });