angular.module('pie', []).controller('PieController',
    ['$scope', function ($scope) {

        // function that compares old and new values using key
        function compareAndWarn(newNutritionalValues, oldNutritionalValues) {
            let changes = [];
            if (newNutritionalValues && oldNutritionalValues) {
                // for each key in the nutritionalValue
                for (let key in newNutritionalValues) {
                    // only if the nutritional value has gone up add the key name to the array
                    if (newNutritionalValues[key] > oldNutritionalValues[key]) {
                        // make key name start with upper case and add it to the changes array
                        changes.push(key.charAt(0).toUpperCase() + key.slice(1));
                    }
                }
            }

            return changes;
        }

        //Watchers
        // watches for a change in nutritionalValues then returns message alerting of changes
        $scope.$watch('nutritionalValues', function (newNutritionalValues, oldNutritionalValues) {
            let changes = compareAndWarn(newNutritionalValues, oldNutritionalValues);
            if (changes && changes.length) {
                // separate out the n
                $scope.warning = changes.join(", ") + " have gone up!";
            } else {
                $scope.warning = null;
            }
        }, true);

        //Action Handlers
        $scope.eatSlice = function () {
            if ($scope.slices) {
                $scope.slices--;
            }
        } ;

        // defines a requestFlavour function
        this.requestFlavour = function (flavour) {
            $scope.lastRequestedFlavour = flavour;
        }

        // initialise variables
        $scope.lastRequestedFlavour;
        $scope.nutritionalValues = {calories: 500, fat: 200, carbs: 100};
        $scope.warning = null;
        $scope.slices = 8;
    }]);