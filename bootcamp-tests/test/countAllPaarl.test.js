// Write a function called countAllPaarl that takes a parameter string with registration numbers separated with commas and returns the number of registration numbers in the string for Paarl. 
// Remember Paarl registration numbers starts with CJ.

describe('countAllPaarl', () => {
    it('is a function', () => {
        assert.equal(typeof countAllPaarl, 'function')
    });

    it('returns a number a number of all the registrations from Paarl', () => {
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });

    it('returns a number of all the registrations from Paarl', () => {
        assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
    });

})