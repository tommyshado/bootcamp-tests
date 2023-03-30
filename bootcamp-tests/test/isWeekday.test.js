describe('isWeekday', () => {
    it('is a function', () => {
        assert.equal(typeof isWeekday, 'function');
    })

    it('returns a boolean value', () => {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('returns a boolean value', () => {
        assert.equal(isWeekday('Sunday'), false);
    });

    it('returns a boolean value', () => {
        assert.equal(isWeekday('Monday'), true);
    });

    it('returns a boolean value', () => {
        assert.equal(isWeekday('Thursday'), true);
    })

})