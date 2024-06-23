import { describe, test, expect } from "vitest";
import { promiseAll } from './promise_all';

describe('promise.all', () => {
    test('Check argument is not iterable', () => {
        expect(() => promiseAll(1)).toThrowError("Argument is not iterable");
    })

    test('Check array element is not promise', async () => {
        expect(() => promiseAll([1])).rejects.toThrowError("Is not a promise");
    })

    test('Check all promises resolved', async () => {
        const promise1 = new Promise((resolve) => resolve(1));
        const promise2 = new Promise((resolve) => setTimeout(resolve(2), 1000));
        const promise3 = new Promise((resolve) => setTimeout(resolve(3), 500));

        const result = await promiseAll([promise1, promise2, promise3]);

        expect(result).toStrictEqual([1, 2, 3]);
    })

    test('Check one promise rejected', async () => {
        const promise1 = new Promise((resolve) => resolve(1));
        const promise2 = new Promise((resolve, reject) => reject(2));
        const promise3 = new Promise((resolve) => resolve(3));

        expect(promiseAll([promise1, promise2, promise3])).rejects.toBe(2);
    })
})