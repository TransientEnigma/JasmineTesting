angular.module('directives', []).directive('classToggler', function () {
    return {
        // directive used as attribute
        restrict: 'A',
        scope: false,
        link: function (scope, element, attributes) {
            // if there is the classToggler on the attribute, expect it to be assigned a value
            if (!attributes.classToggler) {
                throw 'please provide a class name';
            }

            element.bind('click', function (e) {
                scope.$apply(function () {
                    if (!element.hasClass(attributes.classToggler)) {
                        element.addClass(attributes.classToggler);
                    } else {
                        element.removeClass(attributes.classToggler);
                    }
                });
            });
        }
    }
});