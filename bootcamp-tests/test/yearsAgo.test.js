describe('yearsAgo', () => {
    it('is a function', () => {
        assert.equal(typeof yearsAgo, 'function')
    });

    it('returns a number', () => {
        assert.equal(yearsAgo(1976), 47);
    })
});