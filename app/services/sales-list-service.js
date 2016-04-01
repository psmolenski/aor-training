angular.module('app')
    .service('SalesListService', function () {
        this.wagers = [
            {
                game: 'Lotto',
                price: 1
            },
            {
                game: 'Keno',
                price: 2
            },
            {
                game: 'Pick3',
                price: 5
            }
        ];

        this.addWager = function (wager) {
            this.wagers.push(wager);
        };

        this.remove = function (index) {
            this.wagers.splice(index, 1);
        };

        this.clear = function (index) {
            this.wagers.length = 0;
        };

        this.getTotal = function () {
            return this.wagers.reduce(function (sum, wager) {
                return sum + wager.price;
            }, 0);
        }
    });