/* jshint -W117, -W030 */
describe('PokedexController', function() {
    var controller;
    var pokedex = mockData.getMockPokedex();

    var dataservice = dataserviceMock();

    beforeEach(function() {
        bard.appModule('app.pokedex');
        bard.inject('$controller', '$log', '$q', '$rootScope');
    });

    beforeEach(function () {
        dataservice.injectPromisse($q);

        controller = $controller('PokedexController',{
            dataservice: dataservice
        });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Pokedex controller', function() {

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });

        describe('after activate', function() {
            it('should have title of Pokedex', function () {
                expect(controller.title).to.equal('Pokédex');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            it('should have a pokedex', function(){
                expect(controller.pokedex).to.not.be.empty;
            });

            it('should have at least 1 pokedex', function () {
                expect(controller.pokedex).to.have.length.above(0);
            });

            it('should have an ordered list of pokemons', function() {
                expect(controller.pokemons).to.have.deep.property('[0].resource_uri', 'api/v1/pokemon/1/');
            });

            it('should init loading 16 items', function() {                    
                expect(controller.pageSize).to.equal(16);
            });

            it('should enable load more button', function() {                    
                expect(controller.showLoadMore).to.equal(true);
            });

            it('should disable infinte scroll', function() {                    
                expect(controller.infiniteScrollEnable).to.equal(false);
            });


            describe('after load more clicked', function() {
                
                beforeEach(function(){
                    controller.loadMore();
                });

                it('should load more items', function() {                    
                    expect(controller.pageSize).to.equal(32);
                });

                it('should disable button', function() {                    
                    expect(controller.showLoadMore).to.equal(false);
                });

                it('should enable infinte scroll', function() {                    
                    expect(controller.infiniteScrollEnable).to.equal(true);
                });
            });


            
        });
    });
});
