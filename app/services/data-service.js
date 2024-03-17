angular.module('data', []).value('Pies', {
    data: [
        {name: 'Apple Pie', price: 150},
        {name: 'Raspberry Pie', price: 100},
        {name: 'Strawberry Pie', price: 500000},
    ]
});

angular.module('data').factory('DataService', function (Pies, $timeout, $q) {
    const getData = function () {
        return angular.toJson(Pies);
    };

    return {
        getRemoteData: function () {
            console.log('>>> TableController: getRemoteData')
            let deferred = $q.defer();
            deferred.resolve($timeout(getData(), 1000));
            return deferred.promise
        }
    }
});