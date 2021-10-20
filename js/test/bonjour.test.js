const { assert}  = require('chai')
const Bonjour = require('../src/bonjour.js')

class ClockMock {
  constructor(_value) {
    this.value = _value;
  }
  getHours() {
    return this.value;
  }
}

describe('Bonjour', function() {
    let bonjour;
    beforeEach(function() {
      bonjour = new Bonjour(new Date());
    });

  it('should say hi - rule #1', function() {
    assert.equal(bonjour.greet("Benoit"), 'Bonjour Benoit');
  });

  it('should trim firstname - rule #2', function() {
    assert.equal(bonjour.greet("  Benoit   "), 'Bonjour Benoit');
  });

  it('should capitalize first letter', function() {
    assert.equal(bonjour.greet("benoit"), 'Bonjour Benoit');
  })

  it("should respond 'Bonjour' if it's day time", function() {
    bonjour = new Bonjour(new ClockMock(10));
    assert.equal(bonjour.greet("Benoit"), 'Bonjour Benoit');
  })

  it("should respond 'Bonsoir' if it's late", function() {
    bonjour = new Bonjour(new ClockMock(19));
    assert.equal(bonjour.greet("Benoit"), 'Bonsoir Benoit');
  })
});