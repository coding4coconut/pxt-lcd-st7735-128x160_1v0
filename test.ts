pins.spiPins(DigitalPin.P3, DigitalPin.C16, DigitalPin.P0)
RBTFT18.init()
RBTFT18.setDisplayOffset(0, 1)
RBTFT18.clearScreen()
RBTFT18.showString(
"HELLO S U N !",
1,
0,
1,
Color.Red,
Color.Black
)
basic.pause(1000)
RBTFT18.drawCircle(
65,
50,
30,
Color.Yellow
)
RBTFT18.showString(
"Happy DAY !",
30,
100,
1,
Color.Green,
Color.Black
)
basic.forever(function () {
	
})
