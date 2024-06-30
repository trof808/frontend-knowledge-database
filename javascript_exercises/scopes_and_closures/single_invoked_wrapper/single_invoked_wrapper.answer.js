const singleInvokedWrapper = (fn) => {
    let isInvoked = false;

    return (...args) => {
        if (!isInvoked) {
            isInvoked = true;
            return fn(...args);
        }
    }
};

const logSum = (a, b) => console.log(a + b);

const singleInvokedSum = singleInvokedWrapper(logSum);

singleInvokedSum(1, 2);
singleInvokedSum(1, 2);
singleInvokedSum(1, 3);
singleInvokedSum(4, 2);

export { singleInvokedWrapper };