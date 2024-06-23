import { expect, test } from 'vitest'
import { counter } from './counter'

test('check increment', () => {
    const counterInstance = counter();
    expect(counterInstance.getValue()).toBe(0);
    counterInstance.increment();
    expect(counterInstance.getValue()).toBe(1);
})

test('check decrement', () => {
    const counterInstance = counter();
    expect(counterInstance.getValue()).toBe(0);
    counterInstance.decrement();
    expect(counterInstance.getValue()).toBe(-1);
})

test('check encapsulation', () => {
    const counter1 = counter("First counter");
    const counter2 = counter("Second counter");
    const counter3 = counter("Third counter");

    expect(counter1.getValue()).toBe(0);
    expect(counter2.getValue()).toBe(0);
    expect(counter3.getValue()).toBe(0);

    counter1.increment();
    counter3.decrement();

    expect(counter1.getValue()).toBe(1);
    expect(counter2.getValue()).toBe(0);
    expect(counter3.getValue()).toBe(-1);
})