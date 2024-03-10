angular.module('filters', []).filter('titleCase', function () {
    return function (title) {
        return title ? title.replace(/\w\S*/gmi, function (text) {

            return `${text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()}`;
        }) : title
    }
})