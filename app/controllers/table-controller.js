angular.module('table', [])
    .controller('TableController', ['$scope', 'DataService', function ($scope, dataService) {
        $scope.setTableData = function () {
            dataService.getRemoteData().then(function (result) {
                console.log(' >>> TableController getRemoteData result:', result);

                $scope.tableData = result;
            });
        };

        $scope.tableData = null;
    }]);