input.onButtonPressed(Button.A, function () {
    kitronik_VIEW128x64.zeigeZahl(8888)
})
input.onButtonPressed(Button.AB, function () {
    kitronik_VIEW128x64.clear()
})
input.onButtonPressed(Button.B, function () {
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix16x16(`
        . . . # . . . # . . . . . . . .
        . . . # . . . # . . . . . . . .
        . . . # . . . # # # # # # # . .
        . . # . . . # . . . . . . # . .
        . # # . . # . . . . . . . # . .
        # . # . . . . . . # . . # . . .
        . . # . . . . . . # . . . . . .
        . . # . . . . . . # . . . . . .
        . . # . . . # . . # . . # . . .
        . . # . . # # . . # . . . # . .
        . . # . . # . . . # . . . # . .
        . . # . . . . . . # . . . . . .
        . . # . . . . # # # . . . . . .
        . . # . . . . . . # . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        `), 5, 5)
    kitronik_VIEW128x64.refresh()
})
basic.forever(function () {
	
})
