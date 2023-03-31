describe('fromWhere', () => {
    it('is a function', () => {
        assert.equal(typeof fromWhere, 'function')
    })

    it('returns the town name', () => {
        assert.equal(fromWhere('CY'), 'Bellville')
    })

    it('returns the town name', () => {
        assert.equal(fromWhere('CJ'), 'Paarl')
    })

    it('returns the town name', () => {
        assert.equal(fromWhere('CA'), 'Cape Town')
    })

    it('returns some other place', () => {
        assert.equal(fromWhere('CK 1234'), 'Some other place!')
    })
})