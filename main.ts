input.onButtonPressed(Button.A, function () {
    basic.showString("ON")
    for (let index = 0; index < 60; index++) {
        basic.pause(5000)
    }
    music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once)
    basic.showString("BREAK")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("OFF")
    basic.clearScreen()
})
basic.forever(function () {
	
})
