// basic.showIcon(IconNames.Heart)
input.onButtonPressed(Button.A, function () {
    RBTFT18.showString(
    "HAPPY DAY",
    0,
    120,
    2,
    Color.White,
    Color.Black
    )
    RBTFT18.drawLine(
    8,
    125,
    120,
    160,
    Color.Magenta
    )
})
// basic.showIcon(IconNames.Yes)
input.onButtonPressed(Button.AB, function () {
    RBTFT18.drawCircle(
    37,
    93,
    20,
    Color.Green
    )
})
// basic.showIcon(IconNames.No)
input.onButtonPressed(Button.B, function () {
    RBTFT18.drawLine(
    20,
    41,
    110,
    40,
    Color.Yellow
    )
})
basic.showIcon(IconNames.Happy)
pins.spiPins(DigitalPin.P3, DigitalPin.C16, DigitalPin.P0)
pins.spiFormat(8, 2)
pins.spiFrequency(1000000)
RBTFT18.init()
RBTFT18.SetDisplayOffset(2, 1)
RBTFT18.clearScreen()
RBTFT18.showString(
"HELLO Folks !",
1,
0,
1,
Color.Blue,
Color.Black
)
basic.forever(function () {
	
})
