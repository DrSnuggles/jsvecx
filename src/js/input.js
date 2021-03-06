/*
  input.js
  maps inputs from various sources to vecx.js
  - keyboard (digital)
  - gamepad (analog)
  - touch (analog)
*/

var input = (function() {
  var my = {};

  //
  // keyboard
  //
  my.keys = (function() {
    var my = {
      "switchKeys" : false, // false := keyboard is used for player one
      "keys1" : ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyA","KeyS","KeyD","KeyF"],
      "keys2" : ["Numpad8","Numpad5","Numpad4","Numpad6","Numpad1","Numpad2","Numpad3","Numpad0"],
    };
    var pressed = [
      {"left":false, "right":false, "up":false, "down":false},
      {"left":false, "right":false, "up":false, "down":false}
    ];
    var keyHandler = function(e) {
      //console.log( e );
      if (typeof vecx !== "undefined") {
        var handled = true;
        var held = (e.type == "keydown"); // which event keyup or -down
        var controller = my.switchKeys ? 1 : 0;
        var other = my.switchKeys ? 0 : 1;
        switch( e.code ) {
          case my.keys1[0]: // up
            pressed[controller].up = held;
            break;
          case my.keys1[1]: // down
            pressed[controller].down = held;
            break;
          case my.keys1[2]: // left
            pressed[controller].left = held;
            break;
          case my.keys1[3]: // right
            pressed[controller].right = held;
            break;
          case my.keys1[4]: // a
            vecx.button(controller, 0, held);
            break;
          case my.keys1[5]: // s
            vecx.button(controller, 1, held);
            break;
          case my.keys1[6]: // d
            vecx.button(controller, 2, held);
            break;
          case my.keys1[7]: // f
            vecx.button(controller, 3, held);
            break;

          //case 56: // 8
          case my.keys2[0]: // Numpad8
            pressed[other].up = held;
            break;
          //case 73: // i
          case my.keys2[1]: // Numpad5
            pressed[other].down = held;
            break;
          //case 85: // u
          case my.keys2[2]: // Numpad4
            pressed[other].left = held;
            break;
          //case 79: // o
          case my.keys2[3]: // Numpad6
            pressed[other].right = held;
            break;          //case 81: // q
          case my.keys2[4]: // Numpad1
            vecx.button(other, 0, held);
            break;
          //case 87: // w
          case my.keys2[5]: // Numpad2
            vecx.button(other, 1, held);
            break;
          //case 69: // e
          case my.keys2[6]: // Numpad3
            vecx.button(other, 2, held);
            break;
          //case 82: // r
          case my.keys2[7]: // Numpad0
            vecx.button(other, 3, held);
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
          //e.preventDefault();
        }

      } // vecx?

    }; // handler

    addEventListener("keydown", keyHandler, false);
    addEventListener("keyup", keyHandler, false);

    return my;
  })();

  //
  // gamepad
  //
  my.gamepads = (function(){
    var my = {
      switchGP : false, // false := 1st found gamepad is used for player one
      gp1 : [12,13,14,15,2,3,0,1],
      gp2 : [12,13,14,15,2,3,0,1],
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
      if (typeof vecx === "undefined") return;
      
      var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
      var gp;
      var controller = my.switchGP ? [1,0] : [0,1];
      for (var i = 0; i < gamepads.length; i++) {
        gp = gamepads[i];
        if (gp) {
          //console.log("Gamepad connected at index " + gp.index + ": " + gp.id + ". It has " + gp.buttons.length + " buttons and " + gp.axes.length + " axes.");

          if (i < 2) {
            vecx.button(controller[i], 0, gp.buttons[my["gp"+(i+1)][4]].pressed);
            vecx.button(controller[i], 1, gp.buttons[my["gp"+(i+1)][5]].pressed);
            vecx.button(controller[i], 2, gp.buttons[my["gp"+(i+1)][6]].pressed);
            vecx.button(controller[i], 3, gp.buttons[my["gp"+(i+1)][7]].pressed);

            if (gp.axes.length > 1) {
              // analog stick
              vecx.axis(controller[i], 0, Math.min(255,Math.floor(gp.axes[0]*128)+128) ); //left/right
              vecx.axis(controller[i], 1, Math.min(255,Math.floor(gp.axes[1]*-128)+128) ); //up/down
            } else {
              // digital gamepad stick, only if analog is not available
              if (gp.buttons[my["gp"+(i+1)][2]].pressed) {
                vecx.axis(controller[i], 0, 0);
              } else if(gp.buttons[my["gp"+(i+1)][3]].pressed) {
                vecx.axis(controller[i], 0, 255);
              } else {
                vecx.axis(controller[i], 0, 128);
              }
              if (gp.buttons[my["gp"+(i+1)][0]].pressed) {
                vecx.axis(controller[i], 1, 255);
              } else if(gp.buttons[my["gp"+(i+1)][1]].pressed) {
                vecx.axis(controller[i], 1, 0);
              } else {
                vecx.axis(controller[i], 1, 128);
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
    my.onFirstTouch = function() {
      loadHead("style", "css/touch.css", function(){
        xhr("overlay_touch.html", function(txt) {
          document.body.insertAdjacentHTML("beforeend", txt);
          setTimeout(function(){
            createJoystick( document.getElementById("joy") );
            // fade in ctrl overlay
            touchctrl.classList.toggle("fadeIn");
            removeEventListener("touchstart", input.touch.onFirstTouch, false);

            // better on single buttons?
            touchctrl.addEventListener("touchstart", touchHandler, {passive:false});
            touchctrl.addEventListener("touchend", touchHandler, {passive:false});
            // DEBUG or forever ??
            touchctrl.addEventListener("mousedown", touchHandler, {passive:false});
            touchctrl.addEventListener("mouseup", touchHandler, {passive:false});

          },50);
        });
      });
    };
    addEventListener("touchstart", my.onFirstTouch, {passive:false});

    // https://jsfiddle.net/aa0et7tr/5/

    var touchHandler = function(e) {
      // exit if not faded in
      if (!document.getElementById("touchctrl") || !(document.getElementById("touchctrl").classList.contains("fadeIn")) ) return;
      var handled = true;
      var held = (e.type == "touchstart") || (e.type == "mousedown"); // which event keyup or -down
      var controller = my.switchTouch ? 1 : 0;
      var id = (e.originalTarget) ? e.originalTarget.id : e.srcElement.id;
      switch (id) {
        /*
        case "o_l":
          pressed[controller].left = held;
          break;
        case "o_r":
          pressed[controller].right = held;
          break;
        case "o_u":
          pressed[controller].up = held;
          break;
        case "o_d":
          pressed[controller].down = held;
          break;
        */
        case "o_1":
        case "o_2":
        case "o_3":
        case "o_4":
          vecx.button(controller, id.substr(2)*1-1, held);
          break;
        case "o_m":
          if (held) toggleMenu();
          break;
        default:
          handled = false;
      }

      // send axis to vecx
      /*
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
      */

      if( handled && e.preventDefault ) {
        e.preventDefault();
      }

    };

    // https://jsfiddle.net/aa0et7tr/5/
    function createJoystick(parent) {
      //var maxDiff = 100;
      var stick = document.createElement("div");
      stick.classList.add("joystick");

      stick.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      stick.addEventListener("touchstart", handleMouseDown);
      document.addEventListener("touchmove", handleMouseMove);
      document.addEventListener("touchend", handleMouseUp);

      var dragStart = null;
      var currentPos = { x: 0, y: 0 };

      function handleMouseDown(event) {
        stick.style.transition = "0s";
        if (event.changedTouches) {
          dragStart = {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY,
          };
          return;
        }
        dragStart = {
          x: event.clientX,
          y: event.clientY,
        };

      }

      function handleMouseMove(event) {
        if (dragStart === null) return;
        event.preventDefault();
        if (event.changedTouches) {
          event.clientX = event.changedTouches[0].clientX;
          event.clientY = event.changedTouches[0].clientY;
        }
        var xDiff = event.clientX - dragStart.x;
        var yDiff = event.clientY - dragStart.y;
        var angle = Math.atan2(yDiff, xDiff);
        // not sure if i really want maxdiff, because in corners i do not get extreme vals
        var maxDiff = joy.clientWidth/4;
    		var distance = Math.min(maxDiff, Math.hypot(xDiff, yDiff));
    		var xNew = distance * Math.cos(angle);
    		var yNew = distance * Math.sin(angle);
        // stick.style.transform = `translate3d(${xNew}px, ${yNew}px, 0px)`; // not sure if that makes problems while minimizing
        stick.style.transform = "translate3d("+ xNew +"px, "+ yNew +"px, 0px)";
        currentPos = { x: xNew/maxDiff*128+128, y: yNew/maxDiff*-128+128 };
        setAxis();
      }

      function handleMouseUp(event) {
        if (dragStart === null) return;
        stick.style.transition = ".2s";
        stick.style.transform = "translate3d(0px, 0px, 0px)";
        dragStart = null;
        currentPos = { x: 0x80, y: 0x80 };
        setAxis();
      }

      function setAxis() {
        //console.log( currentPos );
        vecx.axis(0, 0, currentPos.x);
        vecx.axis(0, 1, currentPos.y);
      }

      parent.appendChild(stick);
      return {
        getPosition: currentPos,
      };
    }

    return my;
  })();

  //
  // mouse = lightpen
  //
  my.mouse = (function(){
    var my = {
      down : false,
      x: 0,
      y: 0,
    };

    function mouseHandler(e) {
      if (e.target !== vecscr) return;
      if (e.type === "mousedown") {
        my.down = true;
      } else if (e.type === "mouseup") {
        my.down = false;
      }
      my.x = e.layerX / vecscr.clientWidth * Globals.ALG_MAX_X;
      my.y = e.layerY / vecscr.clientHeight * Globals.ALG_MAX_Y;
    }
    addEventListener("mousedown", mouseHandler, {passive:false});
    addEventListener("mouseup", mouseHandler, {passive:false});
    addEventListener("mousemove", mouseHandler, {passive:false});

    return my;

  })();

  return my;
})();
