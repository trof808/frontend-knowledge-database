// Arrow function
const productServiceSolution1 = {
    currentFilter: 'sold',
    products: [
        { name: 'iPhone 12', status: 'sold' },
        { name: 'iPhone 14', status: 'on_sale' },
    ],
    getFilteredProducts() {
        return this.products.filter((product) => {
            return product.status === this.currentFilter;
        });
    }
}

// Pass this into filter as argument
const productServiceSolution2 = {
    currentFilter: 'sold',
    products: [
        { name: 'iPhone 12', status: 'sold' },
        { name: 'iPhone 14', status: 'on_sale' },
    ],
    getFilteredProducts() {
        return this.products.filter(function(product) {
            return product.status === this.currentFilter;
        }, this);
    }
}

// Bind filter callback
const productServiceSolution3 = {
    currentFilter: 'sold',
    products: [
        { name: 'iPhone 12', status: 'sold' },
        { name: 'iPhone 14', status: 'on_sale' },
    ],
    getFilteredProducts() {
        return this.products.filter((function(product) {
            return product.status === this.currentFilter;
        }).bind(this));
    }
}

// Чтобы вместо ошибочного ответа выводилось исключение надо добавить 'use strict'

console.log(productServiceSolution3.getFilteredProducts());