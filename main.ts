let temperatur = 0
basic.forever(function () {
    temperatur = input.temperature() - 2
    basic.showNumber(temperatur)
    basic.pause(3000)
    if (temperatur < 21 || temperatur < 24) {
    	
    }
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.clearScreen()
})
