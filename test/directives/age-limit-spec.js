describe("ageLimit", function () {
    var $rootScope,
        $scope,
        el,
        $body = $('body'),
        simpleHtml = '<input ng-model="acceptableAge" age-limit="18">';

    beforeEach(function () {
        module('validators');

        inject(function ($injector, $compile) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            el = $compile(angular.element(simpleHtml))($scope);
        });

        $body.append(el);
        $rootScope.$digest();
    });

    afterEach(function () {
        $body.empty()
    });

    it("should add a ng-valid and ng-invalid-adult class for when the age is 18", function () {
        // set the elements value (age)
        el.val('18');
        // trigger an input event on the element
        el.trigger("input");
        // initiate angular lifecycle
        $scope.$digest();
        // check classes are present
        // console.log('input set to 18: ',el);
        expect(el.hasClass('ng-valid')).toBeTruthy();
        expect(el.hasClass('ng-valid-adult')).toBeTruthy();
    });

    it("should add a ng-valid and ng-valid-adult class for when the age is over 18", function () {
        // set the elements value (age)
        el.val('19');
        // trigger an input event on the element
        el.trigger("input");
        // initiate angular lifecycle
        $scope.$digest();
        // check classes are present
        // console.log('input set to 19: ',el);
        expect(el.hasClass('ng-valid')).toBeTruthy();
        expect(el.hasClass('ng-valid-adult')).toBeTruthy();
    });

    it("should add an ng-invalid and ng-invalid-adult class for when the age is under 18", function () {
        // set the elements value (age)
        el.val('17');
        // trigger an input event on the element
        el.trigger("input");
        // initiate angular lifecycle
        $scope.$digest();
        // check classes are present
        // console.log('input set to 17: ', el);
        expect(el.hasClass('ng-invalid')).toBeTruthy();
        expect(el.hasClass('ng-invalid-adult')).toBeTruthy();
    });

    it("should add an ng-invalid class for when value is NaN", function () {
        // set the elements value (age)
        el.val('J. Masiano');
        // trigger an input event on the element
        el.trigger("input");
        // initiate angular lifecycle
        $scope.$digest();
        // check classes are present
        // console.log('input set to A1: ', el);
        // it should be invalid if age is not a number
        expect(el.hasClass('ng-invalid')).toBeTruthy();
        // these do not exist (since we are not using $setValidity for NaN)
        expect(el.hasClass('ng-invalid-adult')).toBeFalse();
        expect(el.hasClass('ng-valid-adult')).toBeFalse();
    });
});