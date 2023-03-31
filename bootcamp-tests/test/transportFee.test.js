describe('transportFee', () => {
    it('is a function', () => {
        assert.equal(typeof transportFee, 'function');
    });

    it('returns a string', () => {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('returns a string', () => {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('returns a string', () => {
        assert.equal(transportFee('evening'), 'free');
    });

})