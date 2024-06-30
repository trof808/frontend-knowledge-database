class PubSub {
    // Тут должна быть реализация
    // Готовое решение смотри в pubSub.answer.js
}

const pubSub = new PubSub();

const cb1 = data => console.log(data)
const cb2 = () => console.log(`updated at ${(new Date()).getDate()}`)

pubSub
    .subscribe('update', cb1)
    .subscribe('update', cb2)
    .publish('update', 'Some update')
    .unsubscribe('update', cb2)
    .publish('update', 'Some update')

export { PubSub };