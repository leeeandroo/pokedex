describe('PokemonService', function() {
    var service;


    beforeEach(function() {
        bard.appModule('app.pokemon');        
    });

    beforeEach(function () {   
        bard.inject('PokemonService');


    });

    bard.verifyNoOutstandingHttpRequests();

    describe('Pokemon Service', function() {

        it('should be created successfully', function() {
            expect(PokemonService).to.be.defined;
        });

        describe('Chunk function', function(){
            it('should be defined', function(){
                expect(PokemonService.chunk).to.be.defined;
            });

            it('should return an array according of the passed size', function(){
                expect(PokemonService.chunk([1,2,3,4], 4)).have.to.length(4);
            });
        });

        describe('BinaryIndexOf function', function(){
            it('should be defined', function(){
                expect(PokemonService.binaryIndexOf).to.be.defined;
            });

            it('should return the index of searched element on array', function(){
                var cachedIds = mockData.getCachedIds();
                expect(PokemonService.binaryIndexOf.call(cachedIds, 1)).to.equal(0);
                expect(PokemonService.binaryIndexOf.call(cachedIds, 3)).to.equal(2);
            });

            it('should return -1 when nationalId not exists', function(){
                var cachedIds = mockData.getCachedIds();
                expect(PokemonService.binaryIndexOf.call(cachedIds, 4)).to.equal(-1);
            });
        });
        




    });
});