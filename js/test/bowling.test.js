const { assert}  = require('chai')
const Bowling = require('../src/bowling.js')

describe('Bowling', function() {
    let bowling;
    beforeEach(function() {
        bowling = new Bowling();
    });

    it('should sum pins when no bonus', function() {
      bowling.roll(1);
      bowling.roll(4);
      assert.equal(bowling.score(), 5);
    });

    it('should sum pins when spare', function() {
      bowling.roll(1);
      bowling.roll(9);
      bowling.roll(4);
      assert.equal(bowling.score(), (1+9+4)+(4));
    });

    it('should sum pins when strike', function() {
      bowling.roll(10);
      bowling.roll(3);
      bowling.roll(4);
      assert.equal(bowling.score(), (10+3+4)+(3+4));
    });

    it('should mark 300 pts in a perfect game', function() {
      for(let i = 0; i<12; i++){
        bowling.roll(10);
      }

      assert.equal(bowling.score(), 300);
    });

    it('should work with sample data', function() {
      const rolls = [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6];

      for (const r of rolls) {
        bowling.roll(r);
      }

      assert.equal(bowling.score(), 133);
    });

  });