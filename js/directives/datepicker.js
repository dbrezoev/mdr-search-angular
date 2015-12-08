'use strict';

mdrSearchApp.directive('datepicker', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.datepicker({

            });
        }
    }
});