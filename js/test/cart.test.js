const { assert}  = require('chai')
const Cart = require('../src/cart.js')

describe('Cart#getPrice', function() {
    let cart;
    beforeEach(function() {
        cart = new Cart();
    });

    it('should return 0 when the cart is empty', function(){
        assert.equal(cart.getPrice(), 0);
    });

    it('should return 8 when the cart contains one book', function(){
        cart.addBook("À l’école des sorciers");
        assert.equal(cart.getPrice(), 8);
    });

    it('should apply a 5% discount when the cart contains two books', function(){
        cart.addBook("À l’école des sorciers");
        cart.addBook("La Chambre des secrets");
        assert.equal(cart.getPrice(), 16 * 0.95);
    });

    it('should apply a 10% discount when the cart contains three books', function(){
        cart.addBook("À l’école des sorciers");
        cart.addBook("La Chambre des secrets");
        cart.addBook("Le Prisonnier d'Azkaban");
        assert.equal(cart.getPrice(), 3 * 8 * 0.90);
    });

    it('should apply a discount based on lots', function(){
        cart.addBook("À l’école des sorciers");
        cart.addBook("La Chambre des secrets");
        cart.addBook("Le Prisonnier d'Azkaban");

        cart.addBook("À l’école des sorciers");
        cart.addBook("La Chambre des secrets");

        assert.equal(cart.getPrice(), 3 * 8 * 0.90 + 2 * 8 * 0.95);
    });


});