angular.module('app')
    .directive('qpBtn', function () {
        return {
            templateUrl: 'components/qp-btn/qp-btn.html',
            scope: {
                game: '@',
                price: '=',
                action: '&'
            }
        };
    });