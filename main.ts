/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Bain Liao
 * Created on: Sep 2024
 * This program finds out the temperature.
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)
pause(1000)

input.onButtonPressed(Button.A, function () {
    let findTemperature = input.temperature()
    basic.clearScreen()
    basic.showString("The temperature is:")
    basic.showNumber(findTemperature)
    basic.showString("C.")
    basic.showIcon(IconNames.Happy)
})