/* jshint -W117, -W030 */
describe('Pokemon routes', function () {
    describe('state', function () {
        var view = 'app/pokemon/pokemon.html';

        beforeEach(function() {
            module('app.pokemon', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state pokemon to url /pokemon/:national_id ', function() {
            expect($state.href('pokemon', { national_id: 1 })).to.equal('/pokemon/1');
        });

        it('should map /pokemon route to pokedex View template', function () {
            expect($state.get('pokemon').templateUrl).to.equal(view);
        });

        
        it('of pokedex should work with $state.go', function () {
            $state.go('pokemon');
            $rootScope.$apply();
            expect($state.is('pokemon'));
        });
    });
});
