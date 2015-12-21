(function () {
    'use strict';

    angular
        .module('app.pokemon')
        .factory('PokemonService', PokemonService);


    function PokemonService(){
    	var vm = this;

    	vm.chunk = function(a, n) {
    		var len = a.length,out = [], i = 0;
            while (i < len) {
                var size = Math.ceil((len - i) / n--);
                out.push(a.slice(i, i + size));
                i += size;
            }
            return out;

    	}


    	vm.binaryIndexOf = function(searchElement) {
         
            var minIndex = 0;
            var maxIndex = this.length - 1;
            var currentIndex;
            var currentElement;

            while (minIndex <= maxIndex) {
                currentIndex = (minIndex + maxIndex) / 2 | 0;
                currentElement = this[currentIndex].nationalId;
         
                if (currentElement < searchElement) {
                    minIndex = currentIndex + 1;
                }
                else if (currentElement > searchElement) {
                    maxIndex = currentIndex - 1;
                }
                else {
                    return currentIndex;
                }
            }
         
            return -1;
        }

        return vm;

    }

})();