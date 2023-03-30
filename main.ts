bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
    bluetooth.uartWriteString("done")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # # # # #
    . . . . .
    `)
bluetooth.startLEDService()
bluetooth.startButtonService()
bluetooth.startUartService()
bluetooth.startTemperatureService()
basic.forever(function () {
	
})
