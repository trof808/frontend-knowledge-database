class PubSub {
    events = {};

    constructor() {}

    subscribe(event, callback) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
        return this;
    }

    unsubscribe(event, callback) {
        this.events[event] = this.events[event].filter(cb => cb!== callback)
        return this;
    }

    publish(event, data) {
        if (this.events[event]) this.events[event].forEach(callback => callback(data));
        return this;
    }
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