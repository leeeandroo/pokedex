/* jshint -W117, -W030 */
describe('Pokedex routes', function () {
    describe('state', function () {
        var view = 'app/pokedex/pokedex.html';

        beforeEach(function() {
            module('app.pokedex', bard.fakeToastr);
            bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
        });

        beforeEach(function() {
            $templateCache.put(view, '');
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should map state pokedex to url / ', function() {
            expect($state.href('pokedex', {})).to.equal('/');
        });

        it('should map /pokedex route to pokedex View template', function () {
            expect($state.get('pokedex').templateUrl).to.equal(view);
        });

        it('of pokedex should work with $state.go', function () {
            $state.go('pokedex');
            $rootScope.$apply();
            expect($state.is('pokedex'));
        });
    });
});
