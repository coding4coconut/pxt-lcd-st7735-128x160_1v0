
> Diese Seite bei [https://coding4coconut.github.io/pxt-lcd-st7735-128x160_1v0/](https://coding4coconut.github.io/pxt-lcd-st7735-128x160_1v0/) öffnen

## Beschreibung

Dieses PXT-Paket funktioniert als LCD-Display Treiber für LCD-Displays basierend auf dem ST7735-Chipsatz.
Ich verwende dazu das LCD-Display "1.8inch LCD Module" von waveshare. Wichtige Eckdaten des Displays:
   * Interface: SPI
   * LCD type: TFT
   * Controller: ST7735S
   * Resolution: 128 x 160 (Pixel)

Diese Erweiterung basiert auf einer microbit-Erweiterung von joy-it - https://github.com/joy-it/pxt-RB-TFT1.8  
Diese microbit-Erweiterung läuft jedoch nicht auf dem Calliope mini.
Es wurden daher die Treiberanpassungen für das Target Callipe mini vorgenommen.
U.a. wurden die PINs für die SPI-Signale sowie für CS (Chipselect) und DC (Command/Data-Line) angepasst sowie die Initialisierung des Chipsatzes angepasst.
Weiterhin wurden Funktion für die Festlung eines Display-Offsets vorgenommen sowie das Farbschema korrigiert.

Der calliope kommunziert über das SPI-Interface mit dem LCD-Display.
Jedoch kommt es bei der Verwendung der SPI-Schnittstelle mit dem Calliope zu Problemen.
Insbesondere dann, wenn die SPI-Signalleitung auf Pins liegen, welche auch von der 5x5-LED-Matrix benutzt werden.
Selbst das Ausschalten der LED-Matrix führte zu keiner einwandfreien SPI-Kommunikation.

Um einen einwandfreier Betrieb der SPI-Schnittstelle zusammen mit dem LDC-Display zu ermöglichen, war es notwendig, folgende SPI-Belegung vorzunehmen:

*  SCK -> Pin P0 (SPI SCK)
*  SDA -> Pin P3 (SPI MOSI)  
*  CS  -> Pin P2 (Chipselect Signalleitung)
*  DC  -> Pin P1 (Data/Command Signalleitung)
*  SPI MISO -> belibig (da diese pxt-Paket keine Data-Read-Funktion des Displays benutzt)

Für einen einwandfreien Betrieb ist es daher notwendig, die SPI-PINs in makecode im Start-Block zu initialisieren (vor der ersten Verwendung eines Blocks aus dieser PXT-Erweiterung).
Hier ein Beispiel:

![PXT-Init-SPI-Signallines](https://user-images.githubusercontent.com/91993589/174061301-2d2bacc9-7f0c-4daf-8586-45e0fc8e6a90.png)


## Connection

The display needs to be connected with seven pins to the Calliope mini:

| LCD Modul     | Calliope     |
| ------------- |:------------:|
| VCC           | 3V           |
| GND           | GND          |
| CLK           | P0           |
| DIN           | P3           |
| DC            | P1           |
| RST           | 3V           |
| CS            | P2           |

## Color possibilities

All graphical objects (e.g. pixels, lines, rectangles) can be drawn in different colors. The following color options are available:

* Black
* Navy
* Dark Green
* Dark Cyan
* Maroon
* Purple
* Olive
* Light Grey
* Dark Grey
* Blue
* Green
* Cyan
* Red
* Magenta
* Yellow
* White
* Orange
* Green Yellow
* Pink

## Initialize display

The TFT display needs to be initialized before it is ready to use. All necessary TFT-Commands will be transfered via SPI here.
Before initialising the LCD Display with this function it is necessary to set the correponding SPI Signallines for the Calliope with Block "SPI Pins einstellen"
```typescript
// Initialize TFT Display
RBTFT18.init()
```

## Single pixels
Single pixels can be shown on the screen. The function takes three values. The x and y coordinates as well as the color for the pixel.

```typescript
// Draw a single red pixel
RBTFT18.drawPixel(10, 10, Color.Red)
```

## Straight lines
Straight lines can be drawn across the screen (horizontal, vertical and diagonal). The function takes five values: The x and y coordinates of the starting point, the x and y coordinates of the ending point and the color for the line.

```typescript
// Draw a straight blue line
RBTFT18.drawLine(0, 0, 100, 100, Color.Blue)
```

## Rectangles
Rectangles can be drawn on the screen. The function takes four five values: The x and y coordinate of the rectangles origin, the width of the rectangle, the height of the rectangle and the color for the rectangle.

```typescript
// Draw a yellow rectangle
RBTFT18.drawRectangle(0, 0, 100, 120, Color.Yellow)
```

## Circles
Circles can be drawn on the screen as well. Depending on the size of the circle, the drawing process can take a little more time than drawing straight lines or rectangles. The function takes four values: The x and y coordinate (center point) of the circle, the radius and the color of the circle.

```typescript
// Draw a green circle
RBTFT18.drawCircle(50, 50, 50, Color.Green)
```

## Show text
You can also show text on the display. The font size can be set in 5 different zoom levels (1-5). You can specify the font color as well as the background color. The function takes six arguments: The string, the x and y coordinates of the starting point, the zoom level, the text color and the background color.

```typescript
// Show white text with black background
RBTFT18.showString("I am your RB-TFT1.8!", 10, 10, 1, Color.White, Color.Black)
```

## Clear screen
New objects never replace already drawn objects on the screen. Instead, they are drawn in front of them. The clearScreen()-function will draw a black rectangle across the whole screen dimensions. The function does not expect any parameters.

```typescript
// Clear screen - replaces whole screen with a black rectangle
RBTFT18.clearScreen()
```

## Turn off display
You can turn off the display. In this mode, the frame memory is disabled and a blank (white) page will be shown. The function does not expect any parameters.

```typescript
// Turn off display
RBTFT18.turnOff()
```

## Turn on display
You turn the display on again and enable the output from the frame memory. The function does not expect any parameters.

```typescript
// Turn on display
RBTFT18.turnOn()
```

## Set Pixel-Offset of display
In case the Display does not start to draw the first pixel at X=0 / Y=0, you can adjust a offset for X and Y direction.
The offset is statet as number of pixels

```typescript
// Set Pixel Offset
RBTFT18. SetDisplayOffset(0, 0)
```

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/coding4coconut/pxt-lcd-st7735-128x160_1v0** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/coding4coconut/pxt-lcd-st7735-128x160_1v0/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/coding4coconut/pxt-lcd-st7735-128x160_1v0** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/coding4coconut/pxt-lcd-st7735-128x160_1v0/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

## License
MIT License

See License-file

The core of this LCD-Dirver results from original code from https://github.com/joy-it/pxt-RB-TFT1.8  
Thanks to joy-it for the great work! 
MIT License  Copyright (c) 2021 Joy-IT powered by SIMAC Electronics GmbH

MIT License Copyright (c) 2022 Franz Stolz
