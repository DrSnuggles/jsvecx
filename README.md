# JSVecX

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Ported by raz0red

Touched by DrSnuggles

## Overview

JSVecX is a JavaScript port of the VecX emulator. The emulator was ported from
the original C version as developed by Valavan Manohararajah to JavaScript/HTML5.
This port relies on the HTML5 Canvas element for display and the Web Audio API
for sound (no flash is required).

## This Fork

This fork will only give you the display view without the machine and the box art next to it.

Key Features:
  - Choose which Overlay style you prefer
  - Internal Quality 1x (330x410), 2x (660x820), 3x (990x1230)
  - New build process for smaller deploy footprint
  - Viewport scales on resize
  - Gamepads, yes 2 players, needs two gampads with 2x analog + 4x digital
  - Most roms

## raz0red's Version

The emulator can be found at the following location:

http://www.twitchasylum.com/jsvecx/

[![JSVecX](https://raw.githubusercontent.com/raz0red/jsvecx/master/screenshots/jsvecx.jpg)](http://www.twitchasylum.com/jsvecx/)

It is also worth noting that there is nothing illegal about posting the
commercial Vectrex roms, they were made available for non-commercial use in the 90's.

## Known issues

  * Buggy Sound ~ While the emulator now has sound support, it is a bit
    quirky. Several games will experience periodic audio issues (Berzerk,
    Star Trek, Armor Attack). Sound can be toggled on and off by clicking
    the "speaker" button.
  * Overlays are misaligned ~ (core bug) The vector rendering code of VecX
    doesn't appear to be 100% accurate. As a result, some of the overlays
    are a bit misaligned. In addition, text is also sometimes unreadable.
    I will be looking at the vector rendering code to see if this can be
    resolved.

## Tested Browser Support
  - Windows
    + Chrome
    + Firefox
    + Edge
    + IE11 (no audio)
    - Safari 5.1.7
  - Mac
    - Safari 12.0.1
    - Safari 10.1.2
  - Mobile
    - Android Chrome
    - iPhone6+ Safari (no audio)
    - iPad1 Safari 5.1.1 (no audio)

## Change Log

### 12/18/19 (0.3.1) (Malban Patches)
    – corrected the SHIFT Bug
    – implemented 48kB ROM support
    – implemented IRQ/PB6 bankswitching
    – implemented R/C law zero reference

### 12/17/19 (0.3.0) (DrSnuggles)
    - Added Chip/PIN usage
    - Added parameters: aa, pause, menu, rtm

### 12/09/19 (0.2.7) (DrSnuggles)
    - Added ?sound= parameter

### 12/06/19 (0.2.6) (DrSnuggles)
    - Added Touchscreen input (digital, don't get used to it)

### 12/05/19 (Build process)
    - Using Gulp for build process
    - Changed directory structure for quick dev and build

### 12/04/19 (0.2.5) (DrSnuggles)
    - Added most roms from GoodVect1.06
    - Added 2nd overlay set from https://github.com/libretro/overlay-borders
    - Added Quality x1, x2, x3
    - Compressed images

### 12/02/19 (0.2.4) (DrSnuggles)
    - Added swap for keys and gamepads Player 1 <-> Player 2
      Default: Keys = Player 1 and Gamepad 1 = Player 2

### 11/29/19 (0.2.3) (DrSnuggles)
    - Added gamepad as input device (Xbox360)
    - Added analog Stick input
    - Added 2nd gamepad
    - Added menu (RMB) with infos + settings
    - New scaleable interface with vectrex + overlay only
    - AntiAlias on/off
    - Added querystring ?rom=rip-off

### 11/28/19 (0.2.2) (DrSnuggles)
    - Load ROMS as binary from server
    - Renamed roms to match images
    - Hide mouse when overlay, then changed to crosshair
    - Reduced file count to make it load quicker
    - Fade via CSS
    - Removed jQuery

### 05/19/19 (0.2.1) (base version from raz0red)
    - Added ability to "drag and drop" local ROM files
    - Added "Birds of Prey" homebrew game
    - Added "Patriots III" homebrew game
    - Updated to latest version of jQuery (3.4.1)

### 05/14/19 (0.2.0) (raz0red)
    - Initial sound support (still quite buggy)
    - Added "Asteroid Cowboy" homebrew game
    - Added box art for Thrust and Minestorm
    - Removed Chrome frame extension (deprecated long ago)

### 05/22/10 (0.1.0) (raz0red)
    - Added support for Google Chrome Frame. This will prompt IE users to install
      this plugin which allows JSVecX to run within Internet Explorer.

### 05/19/10 (raz0red)
    - Thanks to an awesome tip from Parabellum, author of the great Vectrex
      emulator ParaJVE, it appears that the Mine Storm bug is now resolved.
    - Another fix thanks to Parabellum's notes, Bedlam is now working
    - Added Polar Rescue, now works thanks to fixes listed above.

### 05/18/10 (raz0red)
    - Updated to use "fast boot rom", reduces the Vectrex intro screen time
    - Several optimizations.

### 05/09/10 (raz0red)
    - Initial release