describe("textAndReveal", function () {
    // test variables
    let $rootScope,
        $scope,
        $compile,
        htmlTemplate,
        element,
        $element,
        $body = $('body'),
        textRevealElement = '<text-and-reveal text="{{scopeText}}" reveal="{{scopeReveal}}"></text-and-reveal>',
        textRevealHtmlElement = '';

    beforeEach(function () {
        // import our directives module and templates
        // module('template.html','directives');
        // module('directives');

        // use Angular inject to get rootScope (to create scope) and compile (to compile html)
        inject(function($injector){
            // grab rootScope
            $rootScope = $injector.get('$rootScope');
            //create a scope
            $scope = $rootScope.$new();


            // $templateCache = $injector.get('$templateCache');

            // $templateCache.put('text-and-reveal.html',
            //     '<span class="text-and-reveal">\n' +
            //     '    <h3 ng-bind="text"></h3>\n' +
            //     '    <h5\n' +
            //     '        ng-bind="reveal"\n' +
            //     '        ng-show="reveal"\n' +
            //     '    >\n' +
            //     '    </h5>\n' +
            //     '</span>');


            // htmlTemplate = $templateCache.get('text-and-reveal.html');
            // console.log('htmlTemplate:', htmlTemplate );

            // grab compile
            $compile = $injector.get('$compile');
            textRevealHtmlElement = $compile(angular.element(textRevealElement))($scope)

        });
        // the simple HTML element is then added to our body
        $body.append(textRevealHtmlElement);

        // kick of the angular life cycle
        $rootScope.$digest();

        // Grabs from the body. If it is there it confirms element html has been compiled
        $element = $('text-and-reveal');
    });

    afterEach(function () {
        $body.empty();
    })

    it("should render the directive in the DOM", function () {
        expect($element.length).toEqual(1);
    });

    // it("should render out the text from the scope", function () {
    //     // set the scopeText
    //     $scope.scopeText = "Sample Text";
    //
    //     // fire all the watches, so the scope expression {{something}} will be evaluated
    //     $rootScope.$digest();
    //
    //     console.log('$element:', $element.length);
    //
    //     expect($element.length).toEqual(1);
    //
    // });


    it("should render out the text from the scope", function () {
        // set the scopeText
        $scope.scopeText = "Sample Text";

        // fire all the watches, so the scope expression {{something}} will be evaluated
        $rootScope.$digest();

        console.log('$element:', $element.attr('text'));

        expect($element.attr('text')).toEqual("Sample Text");

    });


    it("it should render out the reveal from the scope", function () {
        // set the scopeText
        $scope.scopeReveal= "Yes";

        // fire all the watches, so the scope expression {{something}} will be evaluated
        $rootScope.$digest();

        console.log('$element:', $element.attr('reveal'));

        expect($element.attr('reveal')).toEqual("Yes");
    });

    // it("it should hide the reveal text when reveal is not set", function () {
    //     $rootScope.$digest();
    //     console.log($body.find('h5'))
    // });

    //
    // it("should render the reveal text when reveal is provided", function () {
    //
    // });

});