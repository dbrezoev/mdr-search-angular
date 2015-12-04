'use strict';

var mdrSearchApp = angular
    .module('mdrSearchApp', ['ngResource', 'ngRoute'])
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