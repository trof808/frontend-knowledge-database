const isIterable = (value) => {
    return value !== null && value !== undefined && typeof value[Symbol.iterator] === 'function';
}

const isThenable = (value) => {
    return value instanceof Promise || (typeof value === 'object' && typeof value.then === 'function');
}

const promiseAll = (promises) => {
    if (!isIterable(promises)) throw new Error('Argument is not iterable');
    const result = [];
    const promisesSize = promises.length;
    let count = 0;
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promisesSize; i++) {
            if (!isThenable(promises[i])) throw new Error('Is not a promise');
            promises[i]
                .then(res => {
                    result[i] = res;
                    count++;
                    if (count === promisesSize) {
                        resolve(result);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        }
    });
}

export { promiseAll }