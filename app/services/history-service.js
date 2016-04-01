angular.module('app')
    .service('HistoryService', function () {
        this.wagers = [];

        this.addWagers = function (wagers) {
            Array.prototype.push.apply(this.wagers, wagers);
        };

        this.clear = function () {
            this.wagers.length = 0;
        };
    });