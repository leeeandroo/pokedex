(function() {
    'use strict';

    angular
        .module('app.pokemon')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'pokemon',
                config: {
                    url: '/pokemon/:national_id',
                    templateUrl: 'app/pokemon/pokemon.html',
                    controller: 'PokemonController',
                    controllerAs: 'vm',
                    title: 'Pokemon',
                    settings: {
                        nav: 1                        
                    }
                }
            }
        ];
    }
})();
