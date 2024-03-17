describe('CakeController', function () {
    let $rootScope,
        $scope,
        controller,
        dessertManager;

    // SETUP
    beforeEach(function () {
        // instantiate the module
        module('cake', 'desserts');

        // use the inject method to run a function passing in $injector service
        inject(function ($injector) {
            // use injector to create a rootScope object
            $rootScope = $injector.get('$rootScope');

            // instantiate a new scope
            $scope = $rootScope.$new();

            // get the dessertManager
            dessertManager = $injector.get('DessertManager');

            // create a cake controller and link the controller $scope to our local scope, for access to it locally
            controller = $injector.get('$controller')('CakeController', {$scope: $scope, DessertManager:dessertManager});
        });

        // set up for the test, variables are set on the scope (no surprises)
        $scope.$digest();
    });
    
    describe("Listeners", function () {
        describe("cakeIsSoldOut", function () {
            it("sets the warning to OUT OF CAKE!! GET MORE CAKE!!", function () {
                $rootScope.$broadcast("cakeIsSoldOut");
                $scope.$digest();
                expect($scope.warning).toEqual("OUT OF CAKE!! GET MORE CAKE!!");
            });

            it("sets pieces to 0", function () {
                $rootScope.$broadcast("cakeIsSoldOut");
                $scope.$digest();
                expect($scope.pieces).toEqual(0);
            });
        });
    })

    describe('Initialised', function() {
        it('should be sponge cake', function () {
            expect($scope.cake.type).toBe('sponge');
        });
        it('should have icing', function () {
            expect($scope.cake.icing).toBeTruthy();
        });
        it('should have 12 slices', function () {
            expect($scope.cake.pieces).toEqual(12);
        });
    })

    describe('Action Handlers', function () {
        describe('sellPiece', function () {
            it('should decrement pieces if we sell a piece', function () {
                expect($scope.cake.pieces).toEqual(12);
                $scope.sellPiece();
                expect($scope.cake.pieces).toEqual(11);
            });

            it('should do nothing if we there are no more pieces', function () {
                $scope.cake.pieces = 0;
                $scope.sellPiece();
                expect($scope.cake.pieces).toEqual(0);
            })
        });
    });

    describe('toggleDesertType', function () {
        // since we are using spies why want to make the dessertManager available to us
        let dessertSettingSpy;

        beforeEach(function() {
            dessertSettingSpy = spyOn(dessertManager, 'setDessertType');
        });

        it('should switch the dessertType to doughnuts when the default is cake', function () {
           const dessertType = dessertManager.getDessertType();
           expect(dessertType).toEqual('cake');
           $scope.toggleDesertType();
           expect(dessertSettingSpy).toHaveBeenCalledWith("doughnuts");
        });
    });
});