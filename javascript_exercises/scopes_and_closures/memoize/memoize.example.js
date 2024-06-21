/**
 * memoize функция умеет сохранять результаты вызовов переданной функции с одинаковыми аргументами
 * 
 * Сохранение происходит в переменной cache внутри своего лексического окружения, доступ к которому есть также у возвращаемой функции
 * 
 * @param {*} func - декорируемая функция
 */
function memoize(func) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        const result = func(...args);
        cache[key] = result;
        return result;
    }
}

export { memoize }; 