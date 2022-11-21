function Jaune () {
    pins.digitalWritePin(DigitalPin.P1, 1)
}
function Rouge () {
    pins.digitalWritePin(DigitalPin.P2, 1)
}
function Orange () {
    pins.digitalWritePin(DigitalPin.P8, 1)
}
input.onButtonPressed(Button.A, function () {
    Vert()
    basic.pause(10000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    Jaune()
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Rouge()
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P2, 0)
    Blanc()
    basic.pause(15000)
    pins.digitalWritePin(DigitalPin.P16, 0)
    Orange()
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    Vert()
})
function Vert () {
    pins.digitalWritePin(DigitalPin.P0, 1)
}
function Blanc () {
    pins.digitalWritePin(DigitalPin.P16, 1)
}
Vert()
