const product = {
    name: 'pen',
    stock: 10,
    buy: function (amount) {
        if (amount > this.stock) {
            console.log(`Insufficient stock, quantity in stock is, ${this.stock}`);
            return null
        }

        console.log('Buy pen');
        this.stock -= amount;
    },
    test() {
        console.log('Test');
        console.log(this);
    },
    test1: () => {
        console.log('Test1');
        this.stock = 1000,
        console.log(this) // Window
    }
}
console.log(product);

// Buy 3 pens
// product.stock = 7;
product.stock -= 3;
console.log(product);

// Buy 14 pens
product.stock -= 14;

product.stock = 10;
product.buy(3);
product.buy(13);

product.test();
product.test1();
console.log(product);