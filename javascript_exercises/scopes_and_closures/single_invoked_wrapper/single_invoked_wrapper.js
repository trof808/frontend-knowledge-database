const singleInvokedWrapper = (fn) => {
    // Тут должен быть код
    // Пример реализации в single_invoked_wrapper.answer.js
};

const logSum = (a, b) => console.log(a + b);

const singleInvokedSum = singleInvokedWrapper(logSum);

singleInvokedSum(1, 2);
singleInvokedSum(1, 2);
singleInvokedSum(1, 3);
singleInvokedSum(4, 2);