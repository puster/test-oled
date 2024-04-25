input.onButtonPressed(Button.A, function () {
    basic.showNumber(DS3231.temperatureUpper())
})
loops.everyInterval(1000, function () {
    kitronik_VIEW128x64.writeImageOLED(kitronik_VIEW128x64.matrix8x8(`
        . . . # # . . .
        . . # # # # . .
        . # # # # # # .
        # # # # # # # #
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        `), 59, 53)
    kitronik_VIEW128x64.refresh()
    kitronik_VIEW128x64.zeigeZahl(DS3231.hour() * 100 + DS3231.minute())
})
