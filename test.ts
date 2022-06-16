// Hier kann man Tests durchführen; diese Datei wird nicht kompiliert, wenn dieses Paket als Erweiterung verwendet wird.

basic.showIcon(IconNames.Happy)
pins.spiPins(DigitalPin.P3, DigitalPin.C16, DigitalPin.P0)
pins.spiFormat(8, 2)
pins.spiFrequency(1000000)
RBTFT18.init()
RBTFT18.SetDisplayOffset(2, 1)
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
basic.pause(500)
RBTFT18.drawLine(
20,
120,
110,
120,
Color.Blue
)
basic.pause(500)
RBTFT18.drawLine(
20,
130,
110,
140,
Color.Navy
)
basic.forever(function () {
	
})
