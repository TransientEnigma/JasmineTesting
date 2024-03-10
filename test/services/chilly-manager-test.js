describe('ChillyManager', function () {
    let chillyValues, chillyManager;

    // initialise module variables
    beforeEach(function () {
        // get the chillies module
        module('chillies');

        // use injector to inject the ChillyValues and ChillyManager
        inject(function ($injector) {
            chillyValues = $injector.get('ChillyValues');
            chillyManager = $injector.get('ChillyManager');
        });
    });

    // test chilly values
    describe('ChillyValues', function () {
        it('should instantiate global ChillyValues', function () {
            expect(chillyValues.chillies).toEqual([
                {name: 'Carolina Reaper', scovilleScale: 1500000},
                {name: 'Bhut Jolokia', scovilleScale: 1000000},
                {name: 'Red Savana', scovilleScale: 500000},
                {name: 'Habanero', scovilleScale: 250000},
            ]);
        });
    });

    // test chilly manager
    describe('ChillyManager', function () {
        it('should return all 4 of the chilly names', function () {
            let chillies = chillyManager.chillyNames();
            expect(chillies.length).toEqual(4);
            expect(chillies[0]).toEqual('Carolina Reaper');
            expect(chillies[1]).toEqual('Bhut Jolokia');
            expect(chillies[2]).toEqual('Red Savana');
            expect(chillies[3]).toEqual('Habanero');
        });

        it('should return an error if there are no chillies', function () {
            chillyValues.chillies = null;

            expect(function () {
                chillyManager.chillyNames();
            }).toThrow();

            chillyValues.chillies = [
                {name: 'Carolina Reaper', scovilleScale: 1500000},
                {name: 'Bhut Jolokia', scovilleScale: 1000000},
                {name: 'Red Savana', scovilleScale: 500000},
                {name: 'Habanero', scovilleScale: 250000},
            ];
        })
    });
});