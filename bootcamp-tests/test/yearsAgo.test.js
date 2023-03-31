describe('yearsAgo', () => {
    it('is a function', () => {
        assert.equal(typeof yearsAgo, 'function')
    });

    it('returns a number for how many years ago from the current day', () => {
        assert.equal(yearsAgo(1976), 47);
    })

    it('returns a number for how many years ago from the current day', () => {
        assert.equal(yearsAgo(2000), 23);
    })
});