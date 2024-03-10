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
            if (dessertManager.dessertType === "cake") {
                dessertManager.dessertSetting("doughnuts");
            } else {
                dessertManager.dessertSetting("cake");
            }

            $scope.$digest();

            // Note: when using spyOn in tests the values will set to null so this does not work
            // var chosenDessert = dessertManager.dessertSetting();
            // Now the 'dessertType' property is set to the default value "cake"
            // console.log('Chosen dessert type:', chosenDessert); // Output: "Chosen dessert type: Cake"
        }

    }]);