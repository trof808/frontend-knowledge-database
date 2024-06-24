// 1. Запишите, в каком порядке значения выведутся в консоль
console.log(1)

setTimeout(function () {
    console.log(2)
})

Promise.resolve(3).then(console.log)

console.log(4)

setTimeout(function () {
    console.log(5)
}, 0)

console.log(6)