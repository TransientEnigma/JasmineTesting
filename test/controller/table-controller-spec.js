describe('TableController', function () {
    let $rootScope,
        $scope,
        $controller,
        dataServiceSpy,
        parentController,
        childController;

    beforeEach(function () {
        module('data', 'parent', 'child');

        inject(function ($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();

            $controller = $injector.get('$controller');

            dataServiceSpy = spyOnAngularService(
                $injector.get('DataService'),
                'getRemoteData',
                '{"data":[{"name":"Apple Pie","price":150},{"name":"Raspberry Pie","price":100},{"name":"Strawberry Pie","price":500000}]}'
            );

            // instantiate the parent before the child
            parentController = $controller("TableController", {$scope: $scope})

            // create a new $scope from the parent one
            // $scope = $scope.$new();

            // instantiate the child with the new scope from parent
            childController = $controller('CutleryController', {$scope: $scope});
        });
    });

    describe("Action Handlers", function () {
        it("should call the DataService.getRemoteData method", function () {
            $scope.setTableData();
            expect(dataServiceSpy).toHaveBeenCalledTimes(1);
            expect(dataServiceSpy).toHaveBeenCalledWith();
        });

        it("should set the data to the result of the service call", function () {
            $scope.setTableData();
            expect(dataServiceSpy).toHaveBeenCalledTimes(1);
            expect($scope.tableData).toEqual(
                '{"data":[{"name":"Apple Pie","price":150},{"name":"Raspberry Pie","price":100},{"name":"Strawberry Pie","price":500000}]}'
            );
        });
    });

    describe("Getters", function () {
        describe("getCutlery", function () {
            it("Should return a fork for 0", function () {
                expect($scope.getCutlery(0)).toEqual("Fork");
            });
            it("Should return a spoon for 1", function () {
                expect($scope.getCutlery(1)).toEqual("Spoon");
            });
            it("Should return a knife for 2", function () {
                expect($scope.getCutlery(2)).toEqual("Knife");
            });
            it("Should return None in other cases", function () {
                expect($scope.getCutlery(3)).toEqual("None");
            });
        });

        describe("checkStock", function () {
            it("Should return true if Fork is in stock", function () {
                expect($scope.checkStock('Fork')).toBeTrue();
            });
            it("Should return false if Knife is not in stock", function () {
                expect($scope.checkStock('Knife')).toBeFalse();
            });
            it("Should return true if Spoon is in stock", function () {
                expect($scope.checkStock('Spoon')).toBeTrue();
            });
            it("Should return error if Chopsticks is not an item in stock", function () {
                expect($scope.checkStock('Chopsticks')).toEqual( 'Chopsticks is not a Fork, Knife, Spoon');
            });
        });
    });

    describe("Initialisation", function () {
        it("should initialise data to null", function () {
            expect($scope.tableData).toBeNull();
        });
    });
});