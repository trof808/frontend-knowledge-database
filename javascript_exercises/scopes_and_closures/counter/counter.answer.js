/**
 * 
 * Каунтер хранит числовое значение внутри своего лексического окружения
 * Умеет его увеличивать, уменьшать и возвращать 
 * 
 * Такой каунтер мы можем использовать сколько угодно раз
 * и каждый вызов функции counter будет хранить в себе независимое от других вызовов значение каунтера
 * 
 */
function counter() {
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
    }
}

export { counter }