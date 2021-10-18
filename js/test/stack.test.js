const { assert}  = require('chai')
const Stack = require('../src/stack.js')

describe('Stack', function() {
    it('push should stake the provided value - 42',function() {
        let stack = new Stack();
        stack.push(42);
        assert.equal(stack.pop(), 42);
    });

    it('push should stake the provided value - 69',function() {
        let stack = new Stack();
        stack.push(69);
        assert.equal(stack.pop(), 69);
    });

    it('push shoud stack FILO style',function() {
        let stack = new Stack();
        stack.push(42);
        stack.push(69);
        assert.equal(stack.pop(), 69);
        assert.equal(stack.pop(), 42);
    });

    it('count should return the stack size', function() {
        let stack = new Stack();
        stack.push(42);
        assert.equal(stack.count(), 1);
        stack.push(69);
        assert.equal(stack.count(), 2);
    });
});