describe('totalPhoneBill', () => {
    it('is a function', () => {
        assert.equal(typeof totalPhoneBill, 'function');
    })

    it('returns a string', () => {
        const smsAndCall = totalPhoneBill('call, sms, call, sms, sms');
        assert.equal(smsAndCall, 'R7.45');
    })

    it('returns a string', () => {
        assert.equal(totalPhoneBill('sms, call'), 'R3.40');
    })

})