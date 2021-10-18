class Stack {
    constructor() {
        this.value = [];
    }

    push(_value) {
        this.value.push(_value);
    }

    pop() {
        return this.value.pop();
    }

    count() {
        return this.value.length;
    }
}

module.exports = Stack;