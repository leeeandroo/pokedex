/* jshint -W117, -W030 */
describe('PokemonController', function() {
    var controller;
    var item = mockData.getMockPokemon();
    var cachedIds = mockData.getCachedIds();
    var pokedex = mockData.getMockPokedex();


    var dataservice = dataserviceMock();


    beforeEach(function() {
        bard.appModule('app.pokemon');
        bard.inject('$controller', '$log', '$q', '$state', '$rootScope', 'logger', 'PokemonService');
    });

    beforeEach(function () {
        //sinon.stub(dataservice, 'getCachedNationalIds').returns(cachedIds);
        dataservice.injectPromisse($q);

        controller = $controller('PokemonController', {
            $state: { "params": { "national_id": 1 } },  
            dataservice: dataservice          
        });

        $rootScope.$apply();
    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Pokemon controller', function() {        

        it('should be created successfully', function () {
           expect(controller).to.be.defined;
        });

        describe('after activate', function(){

            it('should have title of Pokemon', function () {
                expect(controller.title).to.equal('Pokemon');
            });

            it('should have logged "Activated"', function() {
                expect($log.info.logs).to.match(/Activated/);
            });

            describe('Pokemon Item', function(){
                it('should be exists', function() {
                    expect(controller.item).to.be.defined;
                });

                it('should have a national id', function() {
                    expect(controller.item.national_id).to.be.defined;
                });

                it('should have a name', function() {
                    expect(controller.item.name).to.be.defined;
                });

                it('should have a height', function() {
                    expect(controller.item.height).to.be.defined;
                });               

                it('should have a abilities', function() {
                    expect(controller.item.abilities).to.be.defined;
                });

                it('should have a weight', function() {
                    expect(controller.item.weight).to.be.defined;
                });

                it('should have a hp', function() {
                    expect(controller.item.hp).to.be.defined;
                });

                it('should have a attack', function() {
                    expect(controller.item.attack).to.be.defined;
                });

                it('should have a special attack', function() {
                    expect(controller.item.sp_atk).to.be.defined;
                });

                it('should have a special defense', function() {
                    expect(controller.item.sp_def).to.be.defined;
                });

                it('should have a speed', function() {
                    expect(controller.item.speed).to.be.defined;
                });

                it('should have moves', function() {
                    expect(controller.item.moves).to.be.defined;
                });

                it('should have 4 columns of moves', function() {
                    expect(controller.movesColumns).to.have.length(4);
                });

            });

            
            

            

            describe('cached objects', function() {

                beforeEach(function () {
                    dataservice.setCachedNationalIds();
                    controller.getNavigationIndexes();
                });

                it('should is defined cachedIds on service', function(){
                    expect(cachedIds).to.be.defined;
                });

                it('should is load next and prev', function(){
                    expect(controller.prev).to.be.defined;
                    expect(controller.next).to.be.defined;
                });

                it('should have name and nationalId on next pokemon', function() {
                    expect(controller.prev.name).to.be.defined;
                    expect(controller.prev.nationalId).to.be.defined;
                });

                it('should have name on prev pokemon', function() {
                    expect(controller.prev.name).to.be.defined;
                    expect(controller.prev.nationalId).to.be.defined;
                });
            });            

            



        });

        


        
        
    });
});
