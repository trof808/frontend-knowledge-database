import { test, expect } from "vitest";
import { productService } from './productService';

test('Products filtered by currentFilter field', () => {
    expect(productService.getFilteredProducts()).toBe([ { name: 'iPhone 12', status: 'sold' } ]);
})