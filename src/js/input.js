/*
  input.js
  maps inputs from various sources to vecx.js
  - keyboard
  - gamepad
  - touch
*/

var input = (function() {
  var my = {};

  //
  // keyboard
  //
  my.keys = (function() {
    var my = {
      'switchKeys' : false, // false := keyboard is used for player one
    };
    var pressed = [
      {"left":false, "right":false, "up":false, "down":false},
      {"left":false, "right":false, "up":false, "down":false}
    ];
    var keyHandler = function(e) {
      var handled = true;
      var held = (e.type == "keydown"); // which event keyup or -down
      var controller = my.switchKeys ? 1 : 0;
      switch( e.keyCode ) {
        case 37:
        case 76: // left
          pressed[controller].left = held;
          break;
        case 38:
        case 80: // up
          pressed[controller].up = held;
          break;
        case 39:
        case 222: // right
          pressed[controller].right = held;
          break;
        case 40:
        case 59:
        case 186: // down
          pressed[controller].down = held;
          break;
        case 65: // a
          vecx.button(controller, 0, held);
          break;
        case 83: // s
          vecx.button(controller, 1, held);
          break;
        case 68: // d
          vecx.button(controller, 2, held);
          break;
        case 70: // f
          vecx.button(controller, 3, held);
          break;
        default:
        handled = false;
      }

      // send axis to vecx
      for (var i = 0; i < pressed.length; i++) {
        if (pressed[i].left) {
          vecx.axis(i, 0, 0x00);
        } else if (pressed[i].right) {
          vecx.axis(i, 0, 0xFF);
        } else {
          vecx.axis(i, 0, 0x80);
        }
        if (pressed[i].down) {
          vecx.axis(i, 1, 0x00);
        } else if (pressed[i].up) {
          vecx.axis(i, 1, 0xFF);
        } else {
          vecx.axis(i, 1, 0x80);
        }
      }

      if( handled && e.preventDefault ) {
        e.preventDefault();
      }

    };

    addEventListener("keydown", keyHandler, false);
    addEventListener("keyup", keyHandler, false);

    return my;
  })();

  //
  // gamepad
  //
  my.gamepads = (function(){
    var my = {
      switchGP : true, // false := 1st found gamepad is used for player one
    };
    var raf = null;

    my.toggleGP = function() {
       // toggle gamepad polling
      if (raf) {
        cancelAnimationFrame(raf);
        raf = null;
        return false;
      } else {
        raf = requestAnimationFrame(loop);
        return true;
      }
    };
    var loop = function() {
      raf = requestAnimationFrame(loop);
      var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
      var gp;
      var controller = my.switchGP ? [1,0] : [0,1];
      for (var i = 0; i < gamepads.length; i++) {
        gp = gamepads[i];
        if (gp) {
          //console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");

          if (i < 2) {
            vecx.button(controller[i], 0, gp.buttons[2].pressed);
            vecx.button(controller[i], 1, gp.buttons[3].pressed);
            vecx.button(controller[i], 2, gp.buttons[0].pressed);
            vecx.button(controller[i], 3, gp.buttons[1].pressed);

            if (gp.axes.length > 1) {
              // analog stick
              vecx.axis(controller[i], 0, Math.min(255,Math.floor(gp.axes[0]*128)+128) );
              vecx.axis(controller[i], 1, Math.min(255,Math.floor(gp.axes[1]*128)+128) );
            } else {
              // digital gamepad stick, only if analog is not available
              if (gp.buttons[14].pressed) {
                vecx.axis(controller[i], 0, 0);
              } else if(gp.buttons[15].pressed) {
                vecx.axis(controller[i], 0, 255);
              } else {
                vecx.axis(controller[i], 0, 128);
              }
              if (gp.buttons[12].pressed) {
                vecx.axis(controller, 1, 255);
              } else if(gp.buttons[13].pressed) {
                vecx.axis(controller, 1, 0);
              } else {
                vecx.axis(controller, 1, 128);
              }
            }

          } else {
            break; // just use two gamepads
          }

        }
      }
    };
    raf = requestAnimationFrame(loop);

    return my;
  })();

  //
  // touch
  //
  my.touch = (function(){
    var my = {
      switchTouch: false, // false := Player 1
    };
    var pressed = [
      {"left":false, "right":false, "up":false, "down":false},
      {"left":false, "right":false, "up":false, "down":false}
    ];
    // detect touch
    addEventListener('touchstart', function onFirstTouch() {
      // fade in ctrl overlay
      touchctrl.classList.toggle('fadeIn');
      removeEventListener('touchstart', onFirstTouch, false);
    }, false);

    // https://jsfiddle.net/aa0et7tr/5/

    var touchHandler = function(e) {
      // exit if not faded in
      if (!(document.getElementById("touchctrl").classList.contains("fadeIn")) ) return;
      var handled = true;
      var held = (e.type == "touchstart") || (e.type == "mousedown"); // which event keyup or -down
      var controller = my.switchTouch ? 1 : 0;
      var id = (e.originalTarget) ? e.originalTarget.id : e.srcElement.id;
      switch (id) {
        case 'o_l':
          pressed[controller].left = held;
          break;
        case 'o_r':
          pressed[controller].right = held;
          break;
        case 'o_u':
          pressed[controller].up = held;
          break;
        case 'o_d':
          pressed[controller].down = held;
          break;
        case 'o_1':
        case 'o_2':
        case 'o_3':
        case 'o_4':
          vecx.button(controller, id.substr(2)*1-1, held);
          break;
        case 'o_m':
          if (held) toggleMenu();
          break;
        default:
          handled = false;
      }

      // send axis to vecx
      for (var i = 0; i < pressed.length; i++) {
        if (pressed[i].left) {
          vecx.axis(i, 0, 0x00);
        } else if (pressed[i].right) {
          vecx.axis(i, 0, 0xFF);
        } else {
          vecx.axis(i, 0, 0x80);
        }
        if (pressed[i].down) {
          vecx.axis(i, 1, 0x00);
        } else if (pressed[i].up) {
          vecx.axis(i, 1, 0xFF);
        } else {
          vecx.axis(i, 1, 0x80);
        }
      }

      if( handled && e.preventDefault ) {
        e.preventDefault();
      }

    };

    addEventListener('mousedown', touchHandler, false);
    addEventListener('mouseup', touchHandler, false);
    addEventListener('touchstart', touchHandler, false);
    addEventListener('touchend', touchHandler, false);

    return my;
  })();

  return my;
})();
