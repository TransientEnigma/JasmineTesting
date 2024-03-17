angular.module('desserts', []).factory('DessertManager', function () {

    let dessertType = 'cake';

    const updateDessert = function (dessert) {
        if (dessert) {
            dessertType = dessert;
        }
    };

    return {
        setDessertType: function (dessert) {
            updateDessert(dessert);
        },

        getDessertType: function () {
            return dessertType;
        }
    };

});