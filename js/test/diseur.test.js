const { assert}  = require('chai')
const Diseur = require('../src/diseur.js')

describe('Diseur', function() {
    let diseur;
    beforeEach(function() {
      diseur = new Diseur();
    });

  it('should read basic string', function(){
    assert.equal(diseur.suivant("1"), "11");
  });
});