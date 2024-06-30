import { expect, test } from "vitest";
import { singleInvokedWrapper } from './single_invoked_wrapper.answer';

test('Check if function has been invoked single time', () => {
    const logSum = (a, b) => a + b;

    const singleInvokedSum = singleInvokedWrapper(logSum);

    expect(singleInvokedSum(1, 2)).toBe(3);
    expect(singleInvokedSum(1, 2)).toBe(undefined);
    expect(singleInvokedSum(1, 3)).toBe(undefined);
    expect(singleInvokedSum(4, 2)).toBe(undefined);
})