## Single invoked wrapper

Это функция-декоратор, которая позволяет отслеживать, что определенная функция уже была взвана хотя бы один раз и игнорировать последующие вызовы. Это классическая задача, которую можно реализовать с использованием замыкания

Пример использования

```javascript
    const logSum = (a, b) => console.log(a + b);

    const singleInvokedSum = singleInvokedWrapper(logSum);

    singleInvokedSum(1, 2); // Вызовется
    singleInvokedSum(1, 2); // Не вызовется
    singleInvokedSum(1, 3); // Не вызовется
    singleInvokedSum(4, 2); // Не вызовется
```

## Внимание!!!

В файле с название *.answer.js находится готовое решение

## Как решать и запускать тесты

Свое решение нужно написать в файле `single_invoked_wrapper.js`.
В файле `single_invoked_wrapper.test.js` находятся тест кейсы, которые должны пройти, если решение верное.
Как запустить тесты?

Чтобы запустить тест нужно вызвать в терминале
`npx vitest single_invoked_wrapper.test.js`

## Полезные ссылки

1. [Паттерн декоратор](https://refactoring.guru/ru/design-patterns/decorator)
2. [Замыкание в javascript](https://learn.javascript.ru/closure)