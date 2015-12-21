(function() {
    'use strict';

    angular
        .module('app.pokedex')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'pokedex',
                config: {
                    url: '/',
                    templateUrl: 'app/pokedex/pokedex.html',
                    controller: 'PokedexController',
                    controllerAs: 'vm',
                    title: 'Pokédex',
                    settings: {
                        nav: 1                        
                    }
                }
            }
        ];
    }
})();
