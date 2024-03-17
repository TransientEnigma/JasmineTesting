angular.module('cake', [])
    .controller('CakeController', ['$scope', 'DessertManager', function ($scope, DessertManager) {
        let dessertManager = DessertManager;

        // Listeners
        $scope.$on("cakeIsSoldOut", function () {
            $scope.warning = "OUT OF CAKE!! GET MORE CAKE!!";
            $scope.pieces = 0;
        });

        $scope.cake = {
            pieces : 12,
            icing : true,
            type : 'sponge',
        }

        // Action Handlers
        $scope.sellPiece = function() {
            if ($scope.cake.pieces) {
                $scope.cake.pieces-- ;
            }
        };

        $scope.toggleDesertType = function () {
            if (dessertManager.getDessertType() === "cake") {
                // console.log('dessertManager.setDessertType("doughnuts")', dessertManager.getDessertType() );
                dessertManager.setDessertType("doughnuts");
            } else {
                // console.log('dessertManager.setDessertType("cake")', dessertManager.getDessertType() );
                dessertManager.setDessertType("cake");
            }
        }
    }]);