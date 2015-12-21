(function () {
    'use strict';

    angular
        .module('app.pokemon')
        .controller('PokemonController', PokemonController);

    PokemonController.$inject = ['$q', '$state', '$rootScope', 'dataservice', 'logger', 'PokemonService'];
    
    /* @ngInject */
    function PokemonController($q, $state, $rootScope, dataservice, logger, PokemonService) {
        
        var vm = this;

        vm.title = 'Pokemon';

              
        vm.item = [];
        vm.movesColumns = [];
        vm.resourceUri = "api/v1/pokemon/" + $state.params.national_id;

        var cachedIds = [];
        
        vm.getNavigationIndexes = function() {            
            cachedIds = dataservice.getCachedNationalIds();
            if (cachedIds.length === 0) {
                
                var promise = dataservice.setCachedNationalIds();

                promise.then(function(){
                    vm.getNavigationIndexes();
                });                    
            }
            

            vm.index = PokemonService.binaryIndexOf.call(cachedIds, parseInt($state.params.national_id));

            vm.prevIndex = vm.index == 0 ? (cachedIds.length - 1) : (vm.index - 1);
            vm.nextIndex = vm.index == (cachedIds.length - 1) ? 0 : (vm.index + 1);
            
            vm.prev = cachedIds[vm.prevIndex];
            vm.next = cachedIds[vm.nextIndex];

            if (cachedIds.length != 0) 
                vm.getInfoNavigationPokemon();
        }   

        vm.getPokemon = function() {
            var deferred  = $q.defer();
            dataservice.getPokemonInfo(vm.resourceUri).then(function(data){
                deferred.resolve(data);
            });

            return deferred.promise;
        }        

        vm.treatPokemonInfo = function() {
            vm.getPokemon().then(function(data){
                vm.item = data;
                vm.movesColumns = PokemonService.chunk(vm.item.moves, 4);
                vm.getInfoNavigationPokemon();
            });            
        }

        vm.getInfoNavigationPokemon = function() {
            
            if(vm.index === -1){
                return;
            }
            cachedIds[vm.index].name = vm.item.name;
            cachedIds[vm.nextIndex].name = dataservice.getPokemonName(vm.nextIndex);
            cachedIds[vm.prevIndex].name = dataservice.getPokemonName(vm.prevIndex);
        }

        vm.activate = function() {            
            var promises = [ vm.getNavigationIndexes(), vm.treatPokemonInfo()];
            
            return $q.all(promises).then(function() {
                logger.info('Activated Pokemon View');
                
            });            
        }

        vm.activate();
    }

})();
