describe('greet', () => {
    it ('is a function', () => {
        assert.equal(typeof greet, 'function')
    });

    it ('returns a string', () => {
        assert.equal(greet('Nick'), 'Hello, Nick');
    })

    it ('returns a string', () => {
        assert.equal(greet('Malebo'), 'Hello, Malebo');
    })

});