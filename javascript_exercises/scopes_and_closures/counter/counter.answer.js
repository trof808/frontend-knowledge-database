/**
 * Мы хотим иметь каунтер, который хранит какое-то значение
 * Умеет его увеличивать, уменьшать и возвращать 
 * 
 * Такой каунтер мы можем использовать сколько угодно раз
 * и каждый вызов будет хранить в себе независимое от других вызовов значение каунтера
 */
function counter(title) {
    let value = 0;

    return {
        increment: function() {
            value += 1
        },
        decrement: function() {
            value -= 1
        },
        getValue: function() {
            return value;
        },
        title,
    }
}

// Создадим 3 каунтера
const counter1 = counter("First counter");
const counter2 = counter("Second counter");
const counter3 = counter("Third counter");

// Все каунтеры имеют одинаковое первоначальное значение
console.log(`${counter1.title} = ${counter1.getValue()}`); // 0
console.log(`${counter2.title} = ${counter2.getValue()}`); // 0
console.log(`${counter3.title} = ${counter3.getValue()}`); // 0

// Увеличим первый канунтер и уменьшим третий, а второй оставим как есть
counter1.increment();
counter3.decrement();

// Первый кантуер увеличился, второй остался неизменным, а третий уменьшился
console.log(`${counter1.title} = ${counter1.getValue()}`); // 1
console.log(`${counter2.title} = ${counter2.getValue()}`); // 0
console.log(`${counter3.title} = ${counter3.getValue()}`); // -1

export { counter }