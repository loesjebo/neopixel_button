input.onPinPressed(TouchPin.P0, function () {
	
})
input.onPinReleased(TouchPin.P0, function () {
    for (let index = 0; index <= 3; index++) {
        strip.setBrightness(randint(0, 255))
        strip.shift(1)
        strip.setPixelColor(0, neopixel.rgb(randint(0, 150), randint(0, 120), randint(150, 255)))
        strip.show()
        music.changeTempoBy(15)
        music.playTone(randint(130, 750), music.beat(BeatFraction.Sixteenth))
        basic.pause(50)
    }
})
let strip: neopixel.Strip = null
let numLeds = 10
strip = neopixel.create(DigitalPin.P0, numLeds, NeoPixelMode.RGB)
/**
 * knop zoals bij makey makey (pin - gnd)
 */
basic.forever(function () {
    strip.setBrightness(randint(20, 255))
    strip.shift(2)
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    strip.show()
    basic.pause(200)
})
