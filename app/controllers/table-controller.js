angular.module('parent', [])
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

        $scope.getCutlery = function (id) {
            return { '0': "Fork", '1': "Spoon", '2': "Knife" } [String(id)] ?? 'None';
        };

        $scope.checkStock =  function (name) {
            // get all the names of cutlery items
            let names = $scope.cutlery.map(function (item) {
                return item.name;
            });

            // check we stock them
            const found = $scope.cutlery.find(
                (item) => item.name === name
                );

            // if not found return an error
            if(!found) {
                // return `${name} is not a ${String(names).split(',').join(', ').trim()}`
                return `${name} is not a ${String(names).replace(/,/g, ", ")}`;
            }

            // check they are in stock
            return Object.keys($scope.cutlery).some(function (key) {
                return $scope.cutlery[key].name === name && $scope.cutlery[key].count > 0;
            });
        }

        $scope.cutlery =  [
            { name: 'Fork', count: 1 },
            { name: 'Knife', count: 0 },
            { name: 'Spoon', count: 3 },
        ]

        $scope.tableData = null;
    }]);