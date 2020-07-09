let x = 0
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        x += 1
        led.plot(x, 0)
        led.unplot(x + -1, 0)
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        x += -1
        led.plot(x, 0)
        led.unplot(x + 1, 0)
        basic.pause(500)
    }
})
