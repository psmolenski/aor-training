angular.module('app')
    .directive('salesList', function () {
        return {
            templateUrl: 'components/sales-list/sales-list.html',
            scope: {
                wagers: '=',
                action: '&',
                total: '='
            }
        }
    });