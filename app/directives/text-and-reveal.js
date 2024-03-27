angular.module('directives').directive('textAndReveal', function () {
    // @ binding is for passing strings
    // if template is not in cache then templateUrl will error on get
    return {
        restrict: 'E',
        templateUrl: 'text-and-reveal.html',
        scope: {
            text: "@",
            reveal: "@"
        },
        link: function (scope, element, attributes) {
            // console.log('link function scope', scope);
            // console.log('link function element', element);
            // console.log('link function scope', attributes);
        }
    };
});

