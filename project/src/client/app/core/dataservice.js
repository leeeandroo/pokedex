(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var cachedNationalIds =  [];
        var service = {
            getPokedex: getPokedex,
            getPokemonInfo: getPokemonInfo,
            getCachedNationalIds: getCachedNationalIds,
            setCachedNationalIds: setCachedNationalIds,
            getPokemonName: getPokemonName
        };

        return service;

        function getCachedNationalIds(){
            return cachedNationalIds;
        }

        function setCachedNationalIds(){
            var deferred  = $q.defer();

            deferred.resolve(
                getPokedex()
                    .then(function(data) {                        
                        for (var i =0; i < data.length; i++){
                            cachedNationalIds.push({ 'nationalId' : parseInt(data[i].resource_uri.split("/")[3]), 'name': '' });
                        }

                        cachedNationalIds.sort(function(a,b){ return a['nationalId'] - b['nationalId']; });

                    })
            );


        
            return deferred.promise;
            
        }

        function getPokedex() {
            return $http.get('http://pokeapi.co/api/v1/pokedex/1/')
                .then(success)
                .catch(fail);

            function success(response) {
                
                return response.data.pokemon;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPokedex')(e);
            }
        }

        function getPokemonInfo(resource_uri) {

            return $http.get('http://pokeapi.co/'+resource_uri)
                .then(success)
                .catch(fail);

            function success (response) {
                return response.data;
            }

            function fail (e) {
                return exception.catcher('XHR Failed for getLengthPokemons')(e);
            }
        }

        function getPokemonName(index){
            if (getCachedNationalIds()[index].name === "") {
                var resource_uri = "api/v1/pokemon/" + getCachedNationalIds()[index].nationalId + "/";

                getPokemonInfo(resource_uri).then(function(data) {
                    
                    getCachedNationalIds()[index].name = data.name;

                });
            }

            return getCachedNationalIds()[index].name;
        }


    }
})();
