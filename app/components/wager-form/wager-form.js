angular.module('app')
    .directive('wagerForm', function () {
        return {
            scope: true,
            templateUrl: 'components/wager-form/wager-form.html',
            controller: function () {

                this.game = null;
                this.price = null;

                this.submit = function () {
                    this.action({
                        wager: {
                            game: this.game,
                            price: this.price
                        }
                    });
                }
            },
            controllerAs: 'ctrl',
            bindToController: {
                games: '=',
                action: '&'
            }
        }
    });