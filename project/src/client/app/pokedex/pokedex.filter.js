(function () {
    'use strict';

    angular
        .module('app.pokedex')
        .filter('startFrom', function() {
		    return function(input, start)
		    {
		        start = +start;
		        if(angular.isArray(input) && input.length > 0) {
		             return input.slice(start);
		        }
		        
		        return input;
		    };
		})
		.filter('zpad', function() {
			return function(input, n) {
				if(input === undefined)
					input = ""
				if(input.length >= n)
					return input
				var zeros = "0".repeat(n);
				return (zeros + input).slice(-1 * n)
			};
		});
    
    /* @ngInject */
    
    function StartFromFilter(input, start) {
    	start = +start; //parse to int
        return input.slice(start);
    }



})();