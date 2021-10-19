const { assert}  = require('chai')
const Roman = require('../src/roman.js')

describe('Roman', function() {
    let roman;
    beforeEach(function() {
        roman = new Roman();
    });

    it('should decode "CDXLVIII" into integer', function() {
        assert.equal(roman.decode("CDXLVIII"), 448);
    });

    it('should decode "MCMXCVIII" into integer', function() {
        assert.equal(roman.decode("MCMXCVIII"), 1998);
    });

    it('should decode "I" into integer', function() {
        assert.equal(roman.decode("I"), 1);
    });

    it('should decode "V" into integer', function() {
        assert.equal(roman.decode("V"), 5);
    });

    it('should decode "X" into integer', function() {
        assert.equal(roman.decode("X"), 10);
    });

    it('should be able to sum', function() {
        assert.equal(roman.decode("II"), 2);
    });

    it('should be able to substract', function() {
        assert.equal(roman.decode("IV"), 4);
    });
});