class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(products) {
        this.products = products;
    }
    
    addProduct(product) {
        // Implement functionality here
    }

    removeProduct(product) {
        // Implement functionality here
    }

    searchProduct(productName) {
        // Implement functionality here
    }

    getTotal() {
        // Implement functionality here
    }

    renderProducts() {
        // Implement functionality here
    }

    getUser() {
        // Implement functionality here
    }
}

const flatscreen = new Product('flat-screen', 5000);
const shoppingCart = new ShoppingCart([flatscreen]);