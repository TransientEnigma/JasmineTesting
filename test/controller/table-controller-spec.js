describe('TableController', function () {
    let $rootScope,
        $scope,
        controller,
        dataServiceSpy;

    beforeEach(function () {
        module('data', 'table');

        inject(function ($injector){
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            dataServiceSpy = spyOnAngularService(
                $injector.get('DataService'),
                'getRemoteData',
                '{"data":[{"name":"Apple Pie","price":150},{"name":"Raspberry Pie","price":100},{"name":"Strawberry Pie","price":500000}]}'
            );
            controller = $injector.get('$controller')('TableController', {$scope: $scope});
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

    describe("Initialisation", function () {
        it("should initialise data to null", function () {
            expect($scope.tableData).toBeNull();
        });
    });
});