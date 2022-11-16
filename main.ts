radio.setGroup(23)
basic.forever(function () {
    radio.sendNumber(input.temperature())
    basic.pause(5000)
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
})
