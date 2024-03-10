// let app = angular.module('myApp', []);
//
// app.run(function($templateCache, $http) {
//     $http.get('app/directives/text-and-reveal.html').then(function (response) {
//
//         console.log('response:', response);
//
//         $templateCache.put('text-and-reveal.html', response.data);
//     });
// });

angular.module('directives').directive('textAndReveal', function () {
    return {
        restrict: 'E',
        templateUrl: 'text-and-reveal.html',
        scope: {
            text: "@",
            reveal: "@"
        },
        link: function (scope, element, attributes) {
        }
    };
});

