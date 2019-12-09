var vecx = new VecX();
var transparentPixel = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
Globals.romdata=atob('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');
var overlayDir = "img/overlays_1080/";
var overlayName = "";

function switchRom(rom) {
  vecx.stop();  // Stop the emulator
  vecx.osint.osint_clearscreen(); // Clear the screen

  // Start the emulator
  if (typeof rom === "object") {
    // rom was dropped
    overlay.src = transparentPixel;
    romName = "";
    vecx.reset();
  } else {
    // rom was chosen
    setOverlay( rom.substr(rom.lastIndexOf("/")+1).split("_")[0].replace(/ /g,"") );
    // Load the the new rom
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "roms/"+rom+".vec", true);
    xhr.overrideMimeType('text/plain; charset=x-user-defined');
    xhr.onload = function(e) {
      Globals.cartdata = e.target.response;
      stat.innerText = "Loaded.";
      vecx.reset();
    }
    xhr.send();
  }
}

function doinit() {
  stat.innerText = "Starting up...";

  // fill select
  var html = [];
  html.push('<option value="">Select a cartridge...</option>');

  for (var i in romList) {
    html.push('<optgroup label="'+ i +'">');
    for (var j in romList[i]) {
      //console.log(i, romList[i][j]);
      html.push('<option value="'+ i +'/'+ romList[i][j]+'">'+romList[i][j]+'</option>');
    }
    html.push('</optgroup>');
  }
  /*
  for (var i = 0; i < romList.length; i++) {
    html.push('<optgroup label="'+ romList[i][0]+'">');
    for (var j = 0; j < romList[i][1].length; j++) {
      html.push('<option value="'+ romList[i][1][j][1]+'">'+romList[i][1][j][0]+'</option>');
    }
    html.push('</optgroup>');
  }
*/
  roms.innerHTML = html.join("");
  roms.onchange = function(e) {
    e = e.srcElement;
    if (e.value == "") return;
    //e.blur(); // Remove focus from the roms element
    stat.innerText = "Loading " + e.text + " ...";
    switchRom( e.value ); // Get the newly selected rom
  }

  overlay.onload = function(e) {
    resizer();
  }
  overlay.onerror = function(e) {
    overlay.src = transparentPixel;
  }

  //
  // mouse handler
  //
  addEventListener("contextmenu", toggleMenu, false);
  //addEventListener("dblclick", toggleFullscreen, false); // doesn't work with touchCTRL

  addEventListener("resize", resizer, false);
  resizer();

  Globals.SCREEN_X_DEFAULT = vecscr.width;
  Globals.SCREEN_Y_DEFAULT = vecscr.height;
  vecx.main( vecscr );

  // poll vecx status
  setInterval(function(){
    stat.innerText = vecx.status;
  }, 2000);

};

function toggleMenu(e) {
  if (e) e.preventDefault();
  //menu.classList.toggle("fadeIn");
  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
function toggleFullscreen() {
  if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}
function toggleAA() {
  vecscr.classList.toggle("noAA");
  overlay.classList.toggle("noAA");
  if (overlay.classList.contains("noAA")) {
    stat.innerText = "AntiAlias turned off.";
  } else {
    stat.innerText = "AntiAlias turned on.";
  }
}
function toggleGP() {
  if ( input.gamepads.toggleGP() ) {
    stat.innerText = "Gamepad turned on.";
  } else {
    stat.innerText = "Gamepad turned off.";
  }
}
function toggleSound() {
  var ret = vecx.toggleSoundEnabled();
  if (ret) {
    stat.innerText = "Sound turned on.";
  } else {
    stat.innerText = "Sound turned off.";
  }
}
function toggleOverlay() {
  overlay.classList.toggle('fadeOut');
  if (overlay.classList.contains("fadeOut")) {
    stat.innerText = "Overlay turned off.";
    setTimeout(toggleOverlayDir, 500);
  } else {
    stat.innerText = "Overlay turned on.";
  }
}
function togglePause() {
  if (vecx.running) {
    vecx.stop();
    stat.innerText = "Paused.";
  } else {
    vecx.start();
    stat.innerText = "Resumed.";
  }
}
function toggleSwitchKeys() {
  input.keys.switchKeys = !input.keys.switchKeys;
  if (input.keys.switchKeys) {
    stat.innerText = "Keyboard = Player 2";
  } else {
    stat.innerText = "Keyboard = Player 1";
  }
}
function toggleSwitchGP() {
  input.gamepads.switchGP = !input.gamepads.switchGP;
  if (input.gamepads.switchGP) {
    stat.innerText = "Joy 1=Player 2, Joy 2=Player 1";
  } else {
    stat.innerText = "Joy 1=Player 1, Joy 2=Player 2";
  }
}
function toggleQuality() {
  var y, x = Globals.SCREEN_X_DEFAULT;
  if (x == 330) {
    x = 660;
    y = 820;
  } else if (x == 660) {
    x = 990;
    y = 1230;
  } else {
    x = 330;
    y = 410;
  }
  Globals.SCREEN_X_DEFAULT = vecscr.width = x;
  Globals.SCREEN_Y_DEFAULT = vecscr.height = y;
  stat.innerText = x + " x " + y;
  vecx.main( vecscr );
}
function toggleOverlayDir() {
  overlayDir = (overlayDir === "img/overlays/") ? "img/overlays_1080/" : "img/overlays/";
  overlay.src = overlayDir + overlayName + ".png";
}
function setOverlay( name ) {
  overlayName = name;
  overlay.src = overlayDir + overlayName + ".png";
}
function resizer() {
  var viewportWidth = window.innerWidth;
  var viewportHeight = window.innerHeight;
  var viewportRatio = viewportWidth / viewportHeight;
  if (viewportRatio < 351/449) {
    //console.log("overlay fits horizontally");
    overlay.style.width = viewportWidth +'px';
    overlay.style.height = 'auto';
    // fit screen canvas in mid with same aspect ratio
    vecscr.style.width = 330/351 * viewportWidth +'px';
    vecscr.style.height = 'auto';
  } else {
    //console.log("overlay fits vertically");
    overlay.style.height = viewportHeight +'px';
    overlay.style.width = 'auto';
    // fit screen canvas in mid with same aspect ratio
    vecscr.style.height = 410/449 * viewportHeight +'px';
    vecscr.style.width = 'auto';
  }

  // shift the inner screen canvas into the mid
  var xdiff = overlay.clientWidth - vecscr.clientWidth;
  var ydiff = overlay.clientHeight - vecscr.clientHeight;
  vecscr.style.left = xdiff/2 +'px';
  vecscr.style.top = ydiff/2 +'px';

  // center wrapper
  xdiff = viewportWidth - overlay.clientWidth;
  ydiff = viewportHeight - overlay.clientHeight;
  wrapper.style.left = xdiff/2 +'px';
  wrapper.style.top = ydiff/2 +'px';

  // size and center the menu
  menu.style.width = overlay.clientWidth * 0.8 +'px';
  menu.style.height = overlay.clientHeight * 0.8 +'px';
  menu.style.left = overlay.clientWidth * 0.1 +'px';
  menu.style.top = overlay.clientHeight * 0.1 +'px';
}

(function(){
  doinit();

  function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null){
     return null;
    }
    else {
     return decodeURI(results[1]) || 0;
    }
  }

  // load rom
  // no IE11 var urlParams = new URLSearchParams(window.location.search);
  var rom = urlParam('rom');//urlParams.get('rom');
  if (rom) {
    // search for rom in romlist
    for (var i in romList) {
      for (var j in romList[i]) {
        if (romList[i][j].toLowerCase().indexOf(rom.toLowerCase()) !== -1 ) {
          switchRom( i+"/"+romList[i][j] );
          return;
        }
      }
    }
    setOverlay("MineStorm"); // rom not found
  } else {
    setOverlay("MineStorm"); // no rom set
  }

  // set sound on/off
  var sound = urlParam('sound');
  if (sound) {
    if (sound !== 'true') {
      toggleSound();
    }
  }
})();
