(function() {
    'use strict';

    angular
        .module('app.pokedex')
        .directive('pokedexItem', pokedexItem)
        //By http://sroze.github.io/ngInfiniteScroll/
        .directive('infiniteScroll', [
          '$rootScope', '$window', '$timeout', function($rootScope, $window, $timeout) {
            return {
              link: function(scope, elem, attrs) {
                var checkWhenEnabled, handler, scrollDistance, scrollEnabled;
                $window = angular.element($window);
                scrollDistance = 0;
                if (attrs.infiniteScrollDistance != null) {
                  scope.$watch(attrs.infiniteScrollDistance, function(value) {
                    return scrollDistance = parseInt(value, 10);
                  });
                }
                scrollEnabled = true;
                checkWhenEnabled = false;
                if (attrs.infiniteScrollDisabled != null) {
                  scope.$watch(attrs.infiniteScrollDisabled, function(value) {
                    scrollEnabled = !value;
                    if (scrollEnabled && checkWhenEnabled) {
                      checkWhenEnabled = false;
                      return handler();
                    }
                  });
                }
                handler = function() {
                  var elementBottom, remaining, shouldScroll, windowBottom;
                  windowBottom = $window.height() + $window.scrollTop();
                  elementBottom = elem.offset().top + elem.height();
                  remaining = elementBottom - windowBottom;
                  shouldScroll = remaining <= $window.height() * scrollDistance;
                  if (shouldScroll && scrollEnabled) {
                    if ($rootScope.$$phase) {
                      return scope.$eval(attrs.infiniteScroll);
                    } else {
                      return scope.$apply(attrs.infiniteScroll);
                    }
                  } else if (shouldScroll) {
                    return checkWhenEnabled = true;
                  }
                };
                $window.on('scroll', handler);
                scope.$on('$destroy', function() {
                  return $window.off('scroll', handler);
                });
                return $timeout((function() {
                  if (attrs.infiniteScrollImmediateCheck) {
                    if (scope.$eval(attrs.infiniteScrollImmediateCheck)) {
                      return handler();
                    }
                  } else {
                    return handler();
                  }
                }), 0);
              }
            };
          }
        ]);

        pokedexItem.$inject = ['dataservice', 'logger'];

        function pokedexItem(dataservice, logger) 
        {
            var directive = {
                bindToController: true,
                controller: PokedexItemController,
                controllerAs: 'vm',
                restrict: 'EA',
                scope: { 
                    'resourceUri': '=resourceUri'
                    
                },
                templateUrl: 'app/pokedex/pokedex-item.html'
            };

            /* @ngInject */
            function PokedexItemController($scope) {
                
                var vm = this;
                vm.loaded = false;

                dataservice.getPokemonInfo(vm.resourceUri).then(function (data) {
                    vm.item = data;

                    vm.loaded = true;
                });

            }


            return directive;
        }






})();
