'use strict';

var mdrSearchApp = angular
    .module('mdrSearchApp', ['ngRoute', 'ngTouch', 'ui.grid'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'templates/home.html'
            })
            .when('/search', {
                templateUrl: 'templates/search.html'
            })
            .otherwise({redirectTo: '/home'});
    });