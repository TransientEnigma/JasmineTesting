syOnAngularService = function (service, methodName, result) {
    return spyOn(service, methodName).and.returnValue({then: function (fn){
        fn(result);
    }});
}

syOnAngularServiceError = function (service, methodName, result) {
    return spyOn(service, methodName).and.returnValue({then: function (fn, errorFn){
            errorFn(result);
        }});
}