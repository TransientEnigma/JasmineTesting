describe("textAndReveal", function () {
    // test variables
    let $rootScope,
        $scope,
        $compile,
        $element,
        $body = $('body'),
        textRevealElement = '<text-and-reveal text="{{scopeText}}" reveal="{{scopeReveal}}"></text-and-reveal>',
        textRevealHtmlElement = '';

    beforeEach(function () {
        // import directives
        module('directives');

        // use Angular inject to get rootScope (to create scope) and compile (to compile html)
        inject(function($injector){
            // grab rootScope
            $rootScope = $injector.get('$rootScope');
            //create a scope
            $scope = $rootScope.$new();

            // put the template into the cache
            $templateCache = $injector.get('$templateCache');
            // note the key is the same as the templateUrl (in directive)
            $templateCache.put(
                'text-and-reveal.html',
                '<span class="text-and-reveal"><h3 ng-bind="text"></h3><h5 ng-bind="reveal" ng-show="reveal"></h5></span>'
            );

            // use this to check and confirm we can get template from the cache
            // htmlTemplate = $templateCache.get('text-and-reveal.html');
            // console.log('htmlTemplate:', htmlTemplate );

            // grab compile
            $compile = $injector.get('$compile');
            // compile with scope, so we have the angular html element and scope
            textRevealHtmlElement = $compile(angular.element(textRevealElement))($scope)

        });
        // the HTML element is then added to our body
        $body.append(textRevealHtmlElement);

        // kick off the angular life cycle
        $rootScope.$digest();

        // Grabs from the body. If it is there it confirms element has been compiled
        $element = $('text-and-reveal');
    });

    afterEach(function () {
        $body.empty();
    })

    it("should render the directive in the DOM", function () {
        expect($element.length).toEqual(1);
    });

    it("should render out the text from the scope", function () {
        // set the scopeText
        $scope.scopeText = "Sample Text";
        // fire all the watches, so the scope expression {{something}} will be evaluated
        $rootScope.$digest();
        // console.log('$element:', $element.length);
        expect($element.length).toEqual(1);
    });

    it("should render out the text from the scope", function () {
        // set the scopeText
        $scope.scopeText = "Sample Text";
        // fire all the watches, so the scope expression {{something}} will be evaluated
        $rootScope.$digest();
        // console.log('$element:', $element.attr('text'));
        expect($element.attr('text')).toEqual("Sample Text");
    });

    it("it should render out the reveal from the scope", function () {
        // set the scopeText
        $scope.scopeReveal= "Yes";
        // fire all the watches, so the scope expression {{something}} will be evaluated
        $rootScope.$digest();
        // console.log('$element:', $element.attr('reveal'));
        expect($element.attr('reveal')).toEqual("Yes");
    });

    it("it should reveal the H5 with inner text when the scopeReveal is set", function () {
        $scope.scopeReveal= "Sample Text";
        $scope.$digest();
        // check we have the h5
        // console.log($body.find('h5')[0]);
        expect($body.find('h5')[0].innerHTML).toEqual("Sample Text");
    });

    it("it should hide the h5 when the scopeReveal is not set", function () {
        $scope.scopeReveal= "";
        $scope.$digest();
        // check we have the class ng-hide
        // console.log($body.find('h5')[0].className);
        expect($body.find('h5')[0].className).toContain('ng-hide');
    });
});