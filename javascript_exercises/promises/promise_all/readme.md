## Promise all

Задача - реализовать стандартную функцию промисов promise.all

1. Метод ожидает выполнение всех переданных промисов и возвращает массив ответов в том порядке, в которм были переданы промисы
2. Входной аргумент должен быть массивом
3. В массиве должны содержаться только промисы
4. В случае падения одного из промисов, метод отдает reject

```javascript
var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});

//Выведет:
// [3, 1337, "foo"]
```

## Внимание!!!

В файле с название *.answer.js находится готовое решение

## Как решать и запускать тесты

Свое решение нужно написать в файле `promise_all.js`.
В файле `promise_all.test.js` находятся тест кейсы, которые должны пройти, если решение верное.
Как запустить тесты?

Чтобы запустить тест нужно вызвать в терминале
`npx vitest promise_all.test.js`

## Ссылки для изучения

1. https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
