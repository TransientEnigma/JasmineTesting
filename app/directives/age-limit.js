angular.module('validators', []).directive('ageLimit',
    function () {
        return {
            restrict: 'A',
            scope: false,
            require: 'ngModel',
            link: function (scope, element, attributes, ngModelController) {
                // require ngModel gives access to $parsers
                ngModelController.$parsers.push(function (val) {
                    if (!isNaN(parseInt(val))) {
                        if(parseInt(val) >= parseInt(attributes.ageLimit)) {
                            // ngModelController validation works by adding classes: ng-valid-adult
                            ngModelController.$setValidity("adult", true);
                            // also add class ng-valid
                            return val;
                        } else {
                            // ngModelController validation works by adding classes:  ng-invalid-adult
                            ngModelController.$setValidity("adult", false);
                            // also add class ng-invalid
                            return undefined;
                        }
                    } else {
                        // add class ng-invalid
                        return undefined;
                    }
                })
            }
        }
    });