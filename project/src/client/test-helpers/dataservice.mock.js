/* jshint -W079 */
var dataserviceMock = function() {
	var promise = {};

	return {
		injectPromisse:injectPromisse,
		getCachedNationalIds: getCachedNationalIds,
		setCachedNationalIds: setCachedNationalIds,
		getPokedex: getPokedex,
		getPokemonInfo: getPokemonInfo,
		getPokemonName: getPokemonName
	};

	function injectPromisse(q){
		promise=q;
	}

	function getCachedNationalIds(){
        return mockData.getCachedIds();
    }

    function setCachedNationalIds(){
        var deferred  = promise.defer();
        deferred.resolve(getPokedex());
        
        return deferred.promise;
    }

    function getPokedex() {
        var deferred  = promise.defer();
        deferred.resolve(mockData.getMockPokedex());
        return deferred.promise;
    }

    function getPokemonInfo(resource_uri) {
    	var deferred  = promise.defer();
        deferred.resolve(mockData.getMockPokemon());
        return deferred.promise;
    }

    function getPokemonName(index){       

        return mockData.getMockPokemon().name;
    }
};