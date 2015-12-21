describe('DataService', function() {
    var pokedex = mockData.getMockPokedex();
    var pokemon = mockData.getMockPokemon();


    beforeEach(function() {
        bard.appModule('app.core');        
    });

    beforeEach(function () {   
        bard.inject('dataservice','$q');


    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Data Service', function() {

        it('should be created successfully', function() {
            expect(dataservice).to.be.defined;
        });

        describe('getPokedex function', function(){

            beforeEach(function() {
                sinon.stub(dataservice, 'getPokedex').returns($q.when(pokedex));
            });
            
            it('should be defined', function(){
                expect(dataservice.getPokedex).to.be.defined;
            });

            it('should have a list of pokedex on return', function(){
                expect(dataservice.getPokedex().$$state.value).to.have.length.above(0);
            });
        });


        describe('getPokemonInfo function', function(){

            beforeEach(function() {
                sinon.stub(dataservice, 'getPokemonInfo').returns($q.when(pokemon));
            });
            
            it('should be defined', function(){
                expect(dataservice.getPokemonInfo).to.be.defined;
            });

            it('should have a pokemon on return', function(){
                expect(dataservice.getPokemonInfo('api/v1/1/').$$state.value).to.be.defined;
            });
        });


    });
});