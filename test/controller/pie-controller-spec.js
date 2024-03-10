describe("PieController", function () {
    let $rootScope, $scope, controller;

    beforeEach(function () {
        // import the module
        module('pie');

        // set up controller and map scope to local test $scope
        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')("PieController", {$scope: $scope});
            // console.log('PieController:', controller);
        });
    });

    describe("Watchers", function () {
        beforeEach(function () {
            // we run the $scope.$digest before, to make sure the watcher fires the initial time it needs to.
            // this happens normally in the DOM and Controller so its good idea to replicate here.
            $scope.$digest();
        });

        describe("nutritionalValue", function () {
            it("should set the warning that carbs have gone up, when only carbs go up", function () {
                // in theory once the digest cycle fires then the warning should be set
                $scope.nutritionalValues.carbs++;
                $scope.$digest();
                expect($scope.warning).toEqual("Carbs have gone up!");
            });

            it("should set the warning that fat have gone up, when only carbs go up", function () {
                $scope.nutritionalValues.fat++;
                $scope.$digest();
                expect($scope.warning).toEqual("Fat have gone up!");
            });

            it("should set the warning that calories have gone up, when only carbs go up", function () {
                $scope.nutritionalValues.calories++;
                $scope.$digest();
                expect($scope.warning).toEqual("Calories have gone up!");
            });

            it("should set the warning that combination has gone up, when only carbs go up", function () {
                $scope.nutritionalValues.carbs++;
                $scope.nutritionalValues.fat++;
                $scope.nutritionalValues.calories++;
                $scope.$digest();
                expect($scope.warning).toEqual("Calories, Fat, Carbs have gone up!");
            });

            it("should set the warning to null if no carbs go up", function () {
                expect($scope.warning).toBeNull();
            });

            it("should set the warning to null if nothing has gone up, even if some things", function () {
                $scope.nutritionalValues.carbs--;
                $scope.nutritionalValues.fat--;
                $scope.nutritionalValues.calories--;
                $scope.$digest();
                expect($scope.warning).toBeNull();
            });
        });

        describe("Action Handlers", function () {
            describe("eatSlice", function () {
                it("should decrement the number of slices", function () {
                    expect($scope.slices).toEqual(8);
                    $scope.eatSlice();
                    expect($scope.slices).toEqual(7);
                });

                it("Should do nothing when slices is 0", function () {
                    $scope.slices = 0;
                    $scope.eatSlice();
                    expect($scope.slices).toEqual(0);
                });
            });

            describe("requestFlavour", function () {
                it("Should set $scope.lastRequestedFlavour to the passed in argument", function () {
                    controller.requestFlavour("Cherry");
                    expect($scope.lastRequestedFlavour).toEqual("Cherry");
                });
            });
        });

        describe("Initialization", function () {
            it("should initiate nutritionalValue to its default", function () {
                expect($scope.nutritionalValues).toEqual({calories: 500, fat: 200, carbs: 100});
            });
            it("should initiate warning to null", function () {
                expect($scope.warning).toBeNull();
            });
            it("should initiate slices to 8", function () {
                expect($scope.slices).toEqual(8);
            });
            it("should initiate $scope.lastRequestFlavour", function () {
                expect($scope.lastRequestedFlavour).toBeUndefined();
            });
        });
    });

})