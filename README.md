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

### Key Features
  - View chips
  - Set Quality 1x, 2x (default), 3x (nice for UHD and/or pivot)
  - Additional overlay set for higher resolutions (you can switch back or turn it off)
  - Viewport scales on resize (and fits)
  - Menu with RMB
  - Touchscreen
  - Gamepads, 2 players, two gamepads with 2x analog + 4x digital (swappable)
  - Seamless integration into website/forum
  - Small footprint, less files + size, loads faster
  - No ads, no cookies, no counters

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
    the "Sound" in the menu.

## Parameter list
  - ?rom=Accepts URL, filename or simple rom name
  - &sound=on | off : Nice for office playing and if you want to link to a rom with known audio problems (Berzerk)
  - &pause=on | off : Opens in paused mode
  - &menu=on | off : Opens menu with instructions
  - &rtm= on | off : Opens chips view
  - &aa=on | off : Toggles antialias
  - &overlay=1 | 2 : Numeric, how often ToggleOverlay is pressed when opened
  - &keys1=Up,Down,Left,Right,Button1,Button2,Button3,Button4
  - &keys2=Up,Down,Left,Right,Button1,Button2,Button3,Button4
  - &gp1=Up,Down,Left,Right,Button1,Button2,Button3,Button4
  - &gp2=Up,Down,Left,Right,Button1,Button2,Button3,Button4
  - &bios=B796 | 7931 | 7ADB (default)
  - &bopt=ori | fast (default) | skip
  - &vol=0.00...1.00 (default:0.3)
  - &lum=0.00...1.00 (default:0.5)

## ZIP supported
  - Roms can be named .rom, .vec or .bin
  - Found .png is used as overlay
  - Found .txt is displayed. Nice for game infos and copyright disclaimers
  - MACOSX system dir is ignored

## Tested Browser Support +=working o=untested -=not working
    + Windows
      + Chrome
      + Firefox
      - Edge (no KeyboardEvent.code)
      - IE11 (no KeyboardEvent.code, no audio)
      - Safari 5.1.7 (no KeyboardEvent.code, no audio, no requestAnimationFrame)
    o Mac
      o Safari 12.x.x
      + Safari 10.1.2
    + Mobiles
      + Android more modern
      - Android 5.1 (no touch input)
      + iPhone6+ iOS 12.x.x
        + Safari
        + Chrome
      o iPhone4 iOS7.1.2
        o Safari
        o Chrome
      - iPad1 Safari 5.1.1 (no KeyboardEvent.code, no audio, no requestAnimationFrame)

## Hints
    - Don't know the button numbers for gamepad config? https://html5gamepad.com/

## ToDo
    BUG:
      - TXT display also displays file not found texts
    Input:
      - analog touch stick has still problem while using buttons
    Usability:
      - save/load state
      - speed adjustment (no, not timing)
      - inform user about home screen installation
      - generate QR as link
      - improve hex editor with ar like value search
      - enhance parameter configuration for emulator keys (Menu for gamepad, screenshot, reset, pause)
      - select rom via gamepad
      - let user select overlay from selection/preview
    Emu:
      - emulate colors (Jason Kopp colortable)
      - emulate flash rom for Vectorblade
      - Vectrexer: LightPen (Info: http://vectrex.playntradeonline.com/technical.html)
      - JoyPort output: used for VecLink Cable and LED control
    Simulation:
      - UV Overlays + LEDs
    Audio:
      - choose 11kHz,22kHz,33kHz,44kHz,48kHz
      - maybe switch to different AY-3-89xx emulation
    Communication:
      - save highscores
      - multiplayer player (player1 = server) (WebRTC, WebSocket, STUN, TURN) (will try serverless first with a google STUN)
      - vectrex audio, video, input
      - voice chat
      - vecLink cable

## Change Log

### 02/16/20 (0.5.1) (DrSnuggles)
    - if ZIP file is found load lib and parse content

### 02/15/20 (0.5.0) (DrSnuggles)
    - display local found .txt files

### 02/15/20 (0.4.9) (DrSnuggles)
    - look for overlay .png file in local dir

### 02/15/20 (0.4.8) (DrSnuggles)
    - fixed display of linked roms

### 02/14/20 (0.4.7) (DrSnuggles)
    - added and renamed roms

### 02/10/20 (0.4.6) (DrSnuggles)
    - added roms

### 02/06/20 (0.4.5) (DrSnuggles)
    - Cocktail: default is now on, but only applied to BinaryStars Cocktail roms (MineStorm, StarCastle, SolarQuest)
    - Moved Proxy to own repo
    - MemMon now displays offset in hex and removed MineStorm specific cell colors
    - Added roms

### 01/29/20 (0.4.4) (DrSnuggles)
    - Added Del=Pause, Backspace=Reset

### 01/28/20 (0.4.3) (DrSnuggles)
    - Bugfix for drag'n'drop caused by new interface
    - Added proxy for loading roms via URL (bypass CORS and mixed content trouble)

### 01/27/20 (0.4.2) (DrSnuggles)
    - Rom selection: Table instead of DropDown (ToDo: step by step rename roms, gamepad input)
    - Cocktail: Flipped screen for MineStorm Cocktail rom
    - CA1 interrupt (LightPen still not really working)
    - showMem, Peek, Poke, setReg

### 01/14/20 (0.4.1) (DrSnuggles)
    - volume slider (known issue with iPhone)
    - luminescence slider (known issue with iPhone)
    - parameter: &vol=0.25
    - parameter: &lum=0.33

### 01/14/20 (0.4.0) (DrSnuggles)
    - osint rework: dropped >80% code and went back to.... Vectors!
    - PrintScreen now saves png and svg files

### 01/13/20 (0.3.13) (DrSnuggles)
    - automatic quality (one button less YES, attached to resize)
    - analog touch input (known issue while using buttons)
    - ~reduce amount of requests (manifest + favicon)~

### 01/12/20 (0.3.12) (DrSnuggles)
    - favIcon

### 01/11/20 (0.3.11) (DrSnuggles)
    - improved mobile experience (manifest)
    - a lot of tests... and roll-backs
      - GFX (branch rAF-test):
        - use reqAnimFrame everywhere: 50.0fps are hard to get
        - try to use more canvas draw like routines instead of pixel stream: worked but had some flickering, felt different to play
      - SFX (branch Audio-test): use Ayumi as audio renderer: sounded "colorful"

### 01/08/20 (0.3.10) (DrSnuggles)
    - Idea by Vectrexer: load BIOS from URL (looks for // in bios parameter, take care of mixed content and CORS)
    - also take care of default BIOS patch = fast
    - https://drsnuggles.github.io/jsvecx/?bios=https://drsnuggles.github.io/jsvecx/bios/b796.bin&bopt=ori

### 01/07/20 (0.3.9) (DrSnuggles)
    - Added BIOS versions via parameter &bios=B796 &bopt=skip
        B796: v1 GCE
        7931: v2 MB
        7ADB: v3 MB EU (default)
        options: ori, fast (default), skip (hack by Frank Chevassu)

### 01/03/20 (0.3.8) (DrSnuggles)
    - Controller fixes after MineStorm day with Dani
      - individual gamepad mappings (&gp1=12,13,14,15,2,3,0,1)
      - default gamepad settings had up/down reversed
      - 1st gamepad found is now player1 (you can use Toggle GP to use for player2)

### 12/31/19 (0.3.7) (DrSnuggles)
    - Fixed Keyboard mappings (no longer case sensitive)
    - Added parameter to map keys individually
    default: &keys1=ArrowUp,ArrowDown,ArrowLeft,ArrowRight,KeyA,KeyS,KeyD,KeyF
    &keys2=Numpad8,Numpad5,Numpad4,Numpad6,Numpad1,Numpad2,Numpad3,Numpad0
    (playvectrex settings: &keys2=Digit8,KeyI,KeyU,KeyO,KeyQ,KeyW,KeyE,KeyR)
    - removed double Player2 key settings

### 12/30/19 (0.3.6) (DrSnuggles)
    - Idea by playvectrex: copy link of actual rom

### 12/30/19 (0.3.5) (DrSnuggles)
    - Idea by Graham Toal: load roms from URL (looks for // in rom parameter, take care of mixed content and CORS)
    - Also tries to load overlay from same URL but with extension .png

### 12/29/19 (0.3.4) (DrSnuggles)
    - Idea by playvectrex: added 2nd player keyboard input. It's still possible to switch keys for Player1 <-> Player2 QWER8UIO and also on Numpad 85461230

### 12/24/19 (0.3.3) (DrSnuggles)
    - added Binary Star Software roms. Thanks !!

### 12/20/19 (0.3.2) (DrSnuggles)
    - pause on visibility change
    - pause on menu
    - show CRC (in console)
    - save screenshots (PrintScr)

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
