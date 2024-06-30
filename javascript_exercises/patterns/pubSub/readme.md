## Паттерн publication/subscribtion

Это реактивный паттерн, который предполагает создание сущности, с 2 методами.`subscribe`, который позволяет подписаться на событие сколько угодно раз, и `publish` который вызывает конкретное событие и уведомляет подписчиков.

Пример использования

```javascript
const pubSub = new PubSub();

const cb1 = data => console.log(data)
const cb2 = () => console.log(`updated at ${(new Date()).getDate()}`)

pubSub
    .subscribe('update', cb1)
    .subscribe('update', cb2)
    .publish('update', 'Some update') // будут результаты cb1, cb2
    .unsubscribe('update', cb2)
    .publish('update', 'Some update') // будет результат cb1
```

## Внимание!!!

В файле с название *.answer.js находится готовое решение

## Как решать и запускать тесты

Свое решение нужно написать в файле `pubSub.js`.
В файле `pubSub.test.js` находятся тест кейсы, которые должны пройти, если решение верное.
Как запустить тесты?

Чтобы запустить тест нужно вызвать в терминале
`npx vitest pubSub.test.js`

## Полезные ссылки

1. https://www.patterns.dev/vanilla/observer-pattern
2. [Примеры реализаций reactivity паттернов на чистом javascript](https://frontendmasters.com/blog/vanilla-javascript-reactivity/)