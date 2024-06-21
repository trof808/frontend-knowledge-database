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