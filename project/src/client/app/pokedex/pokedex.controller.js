(function () {
    'use strict';

    angular
        .module('app.pokedex')
        .controller('PokedexController', PokedexController);

    PokedexController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function PokedexController($q, dataservice, logger) {
        var vm = this;
        
        vm.title = 'Pokédex';
        vm.pokemons = [];

        vm.pokedex = [];
        
        vm.currentPage = 0;
        vm.pageLimit = 16;
        vm.pageSize = 16;
        vm.showLoadMore = true;

        vm.infiniteScrollEnable = false;

        

        vm.getPokedex = function() {
            return dataservice.getPokedex().then(function (data) {
                vm.pokedex = data;
                vm.getPokemons();

                
                return vm.pokedex;
            });
        }             

        vm.getNationalId = function(resource_uri) {            
            return resource_uri.split("/")[3];
        }
        

        vm.getPokemons = function() {
            vm.pokemons = vm.pokedex;
           
            vm.pokemons.sort(function(a, b) {
                return vm.getNationalId(a["resource_uri"]) - vm.getNationalId(b["resource_uri"]);
            });
        }

        vm.loadMore = function() {
            vm.showLoadMore = false;
            vm.infiniteScrollEnable = true;
            vm.pageSize  = vm.pageSize + vm.pageLimit;
        }


        vm.activate = function() {
            var promises = [vm.getPokedex()];
            return $q.all(promises).then(function() {
                logger.info('Activated Pokédex View');
            });
        }

        vm.activate();
    }


})();
