// Global variable
// adding chillyValues as a global variable
angular.module('chillies', []).value('ChillyValues', {
    chillies: [
        {name: 'Carolina Reaper', scovilleScale: 1500000},
        {name: 'Bhut Jolokia', scovilleScale: 1000000},
        {name: 'Red Savana', scovilleScale: 500000},
        {name: 'Habanero', scovilleScale: 250000},
    ]
});

// Factory
// chillyValues is a global variable on the module and can be passed into any factory service like so
angular.module('chillies').factory('ChillyManager',
    ['ChillyValues', function (chillyValues) {
    return {
        chillyNames: function () {
            return chillyValues.chillies.map(function (chilly) {
                return chilly.name;
            });
        }
    };
}]);