const productService = {
    currentFilter: 'sold',
    products: [
        { name: 'iPhone 12', status: 'sold' },
        { name: 'iPhone 14', status: 'on_sale' },
    ],
    getFilteredProducts() {
        return this.products.filter(function(product) {
            return product.status === this.currentFilter;
        });
    }
}

// 1. Что выведется в консоли?
// console.log(productService.getFilteredProducts());

// 2. Почему и какие есть способы решить проблему?

// 3. Как сделать так, чтобы вместо некорректного ответа выводилось исключение?