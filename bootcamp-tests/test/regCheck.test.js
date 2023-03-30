describe('regCheck', () => {
    it('is a function', () => {
        assert.equal(typeof regCheck, 'function');
    });

    it('returns a boolean value', () => {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('returns a boolean value', () => {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('returns a boolean value', () => {
        assert.equal(regCheck('5566 L', 'L'), true);
    })
});