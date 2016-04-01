angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl as ctrl'
        });

        $stateProvider.state('history', {
            url: '/history',
            templateUrl: 'views/history.html',
            controller: 'HistoryCtrl as ctrl'
        });

        $urlRouterProvider.otherwise('dashboard');
    })
    .controller('DashboardCtrl', function (SalesListService, HistoryService) {
        this.salesListService = SalesListService;

        this.games = [
            'Lotto',
            'Keno',
            'Pick3'
        ];

        this.sell = function () {
            HistoryService.addWagers(SalesListService.wagers);
            SalesListService.clear();
        };
    })
    .controller('HistoryCtrl', function (HistoryService) {
        this.historyService = HistoryService;
    });