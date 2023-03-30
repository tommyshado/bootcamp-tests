// Write a function called isFromBellville that returns true if a registration number is for Bellville otherwise returns false. 
// Registration numbers for Bellville starts with CY.

describe('isFromBellvile', () => {
    it('is a function', () => {
        assert.equal(typeof isFromBellville, 'function');
    });

    it('returns a boolean value', () => {
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('returns a boolean value', () => {
        assert.equal(isFromBellville('CJ 123'), false);
    })

});