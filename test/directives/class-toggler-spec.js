describe('classToggler', function () {
    let $rootScope,
        $scope,
        $compile,
        element,
        // DOM body element
        $body = $('body');
        // some simple
        simpleElement = '<button type="submit" id="btn" class-toggler="myClass"></button>'

    beforeEach(function () {
        // initialise the module
        module('directives');

        inject(function ($injector) {
            // grab rootScope
            $rootScope = $injector.get('$rootScope');
            //create a scope
            $scope = $rootScope.$new();
            // grab compile
            $compile = $injector.get('$compile');
        });
    })

    it('should toggle the class when we click on the button', function () {
        // use compile service to compile our simple HTML element
        let htmlElement = $compile(angular.element(simpleElement))($scope);
        // the simple HTML element is then added to our body
        $body.append(htmlElement);
        // kick of the angular life cycle
        $rootScope.$digest();
        // console.log('start:', htmlElement);
        // initially it will not have a class
        expect(htmlElement.hasClass('myClass')).toBeFalsy();
        // when we click it a class is added
        htmlElement.click();
        // required to trigger the Angular life cycle
        $scope.$digest();
        // console.log('1st click:', htmlElement);
        // it should now have the class
        expect(htmlElement.hasClass('myClass')).toBeTruthy();
        // when we click it again class is removed
        htmlElement.click();
        // required to trigger the Angular life cycle
        $scope.$digest();
        // console.log('2nd click:', htmlElement);
        // it should now have been removed
        expect(htmlElement.hasClass('myClass')).toBeFalsy();
    });

   it('should throw an error if we do not provide class-toggler attribute a class name', function () {
       let failingElement = '<button type="submit" id="btn" class-toggler=""></button>'
       expect(function () {
           $compile(angular.element(failingElement))($scope);
       }).toThrow();
   });
})