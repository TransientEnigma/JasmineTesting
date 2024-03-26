angular.module('child', [])
    .controller('CutleryController', ['$scope', function ($scope) {
        // child controller uses parent controller to instantiate itself
        $scope.fork = $scope.getCutlery(0);
        $scope.spoon = $scope.getCutlery(1);
        $scope.knife = $scope.getCutlery(2);
        $scope.none = $scope.getCutlery(3);

        $scope.stock = $scope.checkStock('Fork');
        $scope.stock = $scope.checkStock('Knife');
        $scope.stock = $scope.checkStock('Spoon');
        // $scope.stock = $scope.checkStock('Chopsticks');
    }]);