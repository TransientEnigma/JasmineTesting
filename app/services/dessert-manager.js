angular.module('desserts', []).factory('DessertManager', function () {

    var dessertType = 'cake';

    var updateDessert = function (dessert) {
        if (dessert) {
            dessertType = dessert;
        }
    }

    return {
        setDessertType: function (dessert) {
            updateDessert(dessert);
        },

        getDessertType: function () {
            return dessertType;
        }
    };

});