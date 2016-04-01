angular.module('app').directive('section', function () {
    return {
        templateUrl: 'components/section/section.html',
        scope: {
            name: '@'
        },
        transclude: true
    };
});