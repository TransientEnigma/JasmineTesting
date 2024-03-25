angular.module('table', [])
    .controller('TableController', ['$scope', 'DataService', function ($scope, dataService) {
        $scope.setTableData = function () {
            dataService.getRemoteData().then(
                function (result) {
                    // console.log('result', result);
                    $scope.tableData = result;
                },
                function (error)  {
                    console.log('error', error);
                }
            );
        };

        $scope.tableData = null;
    }]);