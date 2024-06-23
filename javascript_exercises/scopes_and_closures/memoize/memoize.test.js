import { test, expect } from 'vitest';
import { memoize } from './memoize';

test('should return same output with same arguments', () => {
    const sum = (a, b) => a + b;
    const memoizedSum = memoize(sum);

    const result1 = memoizedSum(1, 2);
    const result2 = memoizedSum(1, 2);

    expect(result1).toBe(result2);
})

test('should return different output with different arguments', () => {
    const sum = (a, b) => a + b;
    const memoizedSum = memoize(sum);

    const result1 = memoizedSum(1, 2);
    const result2 = memoizedSum(1, 3);

    expect(result1).not.toBe(result2);
})