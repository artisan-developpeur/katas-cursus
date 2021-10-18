class Cart {
    constructor() {
        this.books = [];
    }

    addBook(title) {
        this.books.push(title);
    }

    getPrice() {
        let discount = (this.books.length - 1) * 0.05;
        return 8 * this.books.length * (1-discount);
    }
}

module.exports = Cart;