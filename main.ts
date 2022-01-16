/**
 * Delfine Stamm Thema
 * 
 * Roboter von: Leo und Hla
 */
Rover.setBrightness(255)
basic.showString("Hallo Delfine")
basic.forever(function () {
    Rover.Move(100)
    if (Rover.Ultrasonic() <= 50) {
        Rover.MotorRunDual(-100, -100)
        basic.pause(100)
        Rover.MotorRunDual(-200, 200)
        basic.pause(100)
    }
})
basic.forever(function () {
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.colors(RoverColors.Red))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.colors(RoverColors.Blue))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.colors(RoverColors.Orange))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.colors(RoverColors.Indigo))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.colors(RoverColors.Orange))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.colors(RoverColors.Indigo))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.colors(RoverColors.Yellow))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.colors(RoverColors.Violet))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.colors(RoverColors.Yellow))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.colors(RoverColors.Violet))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.colors(RoverColors.Green))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.colors(RoverColors.Purple))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.colors(RoverColors.Green))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.colors(RoverColors.Purple))
    basic.pause(1000)
    Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.colors(RoverColors.Blue))
    basic.pause(1000)
})
