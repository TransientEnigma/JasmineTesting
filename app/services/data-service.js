angular.module('data', []).value('Pies', {
    data: [
        {name: 'Apple Pie', price: 150},
        {name: 'Raspberry Pie', price: 100},
        {name: 'Strawberry Pie', price: 500000},
    ]
});

// dummy data service
angular.module('data').factory('DataService', function (Pies, $q) {
    return {
        //dummy request returns a promise
        getRemoteData: function () {
            let deferred = $q.defer();
            // return setTimeout(function() {deferred.resolve(angular.toJson(Pies))}, 1000);
            deferred.resolve(angular.toJson(Pies));
            return deferred.promise
        }
    }
});