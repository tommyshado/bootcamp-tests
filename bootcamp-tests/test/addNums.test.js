describe('addNums', () => {
    it('is a function', () => {
        assert.equal(typeof addNums, 'function');
    });

    it('returns a number', () => {
        let returnedValue = addNums(1, '1');
        assert.equal(typeof returnedValue, 'number');
    });

    it('returns a number', () => {
        assert.equal(addNums(2, '5'), 25);
    });
    
});