describe('transportFee', () => {
    it('is a function', () => {
        assert.equal(typeof transportFee, 'function');
    });

    it('returns a string "R20" for the morning', () => {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('returns a string "R10" for the afternoon', () => {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('returns a string "free" if it is the evening', () => {
        assert.equal(transportFee('evening'), 'free');
    });

})