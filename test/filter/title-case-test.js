describe('titleCase', function () {
   let $filter, titleCaseFilter;

   beforeEach(function () {
       // get the filters module
       module('filters');

       // use injector to get angulars $filter service so we can use it to get title case filter
       inject(function ($injector) {
           $filter = $injector.get('$filter');
           titleCaseFilter = $filter('titleCase');
       });
   });

   it('should return undefined if title is undefined', function () {
       expect(titleCaseFilter(undefined)).toBeUndefined();
   });

   it('should return null when title is null', function () {
       expect(titleCaseFilter(null)).toBeNull();
   });

   it('should return a blank string when title is blank', function () {
       expect(titleCaseFilter('')).toEqual('');
   });

   it('should change the casing of a lower case title', function () {
       expect(titleCaseFilter('this is a title')).toEqual('This Is A Title');
   });
    
   it('should change the casing of an upper case title', function () {
       expect(titleCaseFilter('THIS IS A TITLE')).toEqual('This Is A Title');
   });

   it('should change the title to title tecase if title is not title case', function () {
       expect(titleCaseFilter('tHiS iS a tItLe')).toEqual('This Is A Title');
   });
});