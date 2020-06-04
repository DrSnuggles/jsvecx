var vecx = new VecX();
var transparentPixel = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
// 7ADB
Globals.romdata=atob('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');

var overlayDir = "img/overlays_1080/";
var overlayName = "";
var overlayErrCnt = 0;
var lastURL = "";
var lastCRC;
var proxyServer = "https://simpleproxy.drsnuggles.workers.dev?";

function switchRom(rom) {
  doinit(); // very late, but not late enough
  vecx.stop();  // Stop the emulator
  vecx.osint.osint_clearscreen(); // Clear the screen
  vecx.doBankSwitching = false;
  vecx.currentBank = 0;

  // Start the emulator
  if (typeof rom === "object") {
    // rom was dropped
    lastCRC = CRC32(Globals.cartdata).toString(16);
    console.info("dropped rom has CRC32", lastCRC);
    stat.innerText = "Loaded.";
    // stat.innerText = "CRC32: "+ crc;
    // sorry no bank switching for dropped roms. could check dropped rom size
    overlay.src = transparentPixel;
    romName = "";
    vecx.reset();
  } else {
    lastURL = "roms/"+ rom +".bin";
    // rom was chosen
    if (rom.indexOf("Academy") > -1 || rom.indexOf("Pouet") > -1) {
      setOverlay( rom.substr(rom.lastIndexOf("roms/")+1).split("_")[0].replace(/ /g,"") );
    } else {
      setOverlay( rom.substr(rom.lastIndexOf("/")+1).split("_")[0].replace(/ /g,"") );
    }
    // url was chosen
    if (rom.indexOf("_http") !== -1) {
      loadRom(proxyServer + rom.substr(rom.indexOf("_http")+1));
    } else {
      // look local
      if (rom.indexOf(".zip") === -1) {
        loadRom("roms/"+rom+".bin");
      } else {
        loadRom("roms/"+rom.split("/")[0]+"/"+rom.split("_")[1]); // just keep zip ending
      }
    }
  }

  // show quicklink
  quicklink.title = "https://DrSnuggles.github.io/jsvecx?rom="+ rom;
}
function loadRom(url) {
  lastURL = url;
  loadBinary(url, function(e) {
    doinit(); // very late
    var data = e.target.response;
    // do we have a zip?
    detectZIP(data, function(dat){
      // non ZIP
      Globals.cartdata = dat;
      lastCRC = CRC32(dat).toString(16);
      console.info("loaded rom", url, "has CRC32", lastCRC);
      stat.innerText = "Loaded.";
      // for Malban
      vecx.doBankSwitching = (url.toLowerCase().indexOf("vectorblade") > -1) ? true : false;
      // for Stevedore
      if (url.indexOf("Stevedore") !== -1) {
        vecx.RAMP_ON_DELAY = 9;
        vecx.RAMP_OFF_DELAY = 5;
      } else {
        vecx.RAMP_ON_DELAY = 3;
        vecx.RAMP_OFF_DELAY = 3;
      }
      vecx.reset();
      if (waitForNotice) {
        setTimeout( function(){
          vecx.stop(); // pause for reading
        }, 300);
      }

    });

  });
}
function detectZIP(data, cb_neg) {
  var zipped = false;
  if (data[0] === "P" && data[1] === "K") {
    zipped = true;
  }
  //console.log("ZIP detected: "+ zipped, data);

  if (zipped) {
    /* old JSZIP version
    if (typeof JSZip === 'undefined') {
      // need to load lib
      loadHead("script", "js/jszip.min.js", function(){
        // now loaded
        console.log("JSZip loaded");
        unZIP(data);
      });
    } else {
      // already loaded lib
      unZIP(data);
    }
    */
    // UZIP is always included, thanks to Regpack it's <10kB
    // check anyway
    if (typeof UZIP !== "undefined") {
      unUZIP(data);
    }
  } else {
    if (cb_neg) cb_neg(data);
  } // zipped?

}
/* old JSZIP function
function unZIP(data) {
  JSZip.loadAsync(data).then(function (d) {
    var zBIN, zPNG, zTXT;
    for (var i in d.files) {
      if (i.toLowerCase().indexOf("__macosx") === -1) {
        if (i.toLowerCase().indexOf(".bin") !== -1 || i.toLowerCase().indexOf(".vec") !== -1 || i.toLowerCase().indexOf(".rom") !== -1) zBIN = i;
        if (i.toLowerCase().indexOf(".png") !== -1) zPNG = i;
        if (i.toLowerCase().indexOf(".txt") !== -1) zTXT = i;
      }
    }
    //console.log(zBIN, zPNG, zTXT);
    if (zTXT) waitForNotice = true;
    // unpack the identified files
    if (zBIN) {
      d.files[zBIN].async("binarystring").then(function (dat){
        Globals.cartdata = dat;
        lastCRC = CRC32(dat).toString(16);
        console.info("unzipped rom has CRC32", lastCRC);
        stat.innerText = "Loaded.";
        // bankswitching for zipped roms??
        vecx.doBankSwitching = false;//(url.toLowerCase().indexOf("vectorblade") > -1) ? true : false;
        vecx.reset();
        //console.log("waitForNotice:", waitForNotice);
        if (waitForNotice) {
          setTimeout( function(){
            vecx.stop(); // pause for reading
          }, 300);
        }

      });
    }
    if (zPNG) {
      d.files[zPNG].async("binarystring").then(function (dat){
        overlay.src = "data:image/png;base64,"+ btoa(dat);
      });
    } else {
      overlay.src = transparentPixel;
    }
    if (zTXT) {
      d.files[zTXT].async("string").then(function (txt){
        showNotice(txt);
      });
    }
  });

}
*/
function rawStringToBuffer( str ) {
  //https://stackoverflow.com/questions/6965107/converting-between-strings-and-arraybuffers
  var idx, len = str.length, arr = new Array( len );
  for ( idx = 0 ; idx < len ; ++idx ) {
    arr[ idx ] = str.charCodeAt(idx) & 0xFF;
  }
  // You may create an ArrayBuffer from a standard array (of values) as follows:
  return new Uint8Array( arr ).buffer;
}
function uint8ArrayToRawString( arr ) {
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    ret.push( String.fromCharCode( arr[i] ) );
  }
  return ret.join("");
}
function unUZIP(data) {
  // binarystring to uint8Array
  //data = new TextEncoder("utf-8").encode(data);
  data = rawStringToBuffer(data);
  var myArchive = UZIP.parse(data);
  //console.log(myArchive);
  // find recognized files
  var zBIN, zPNG, zTXT;
  for (var i in myArchive) {
    if (i.toLowerCase().indexOf("__macosx") === -1) {
      if (i.toLowerCase().indexOf(".bin") !== -1 || i.toLowerCase().indexOf(".vec") !== -1 || i.toLowerCase().indexOf(".rom") !== -1) zBIN = i;
      if (i.toLowerCase().indexOf(".png") !== -1) zPNG = i;
      if (i.toLowerCase().indexOf(".txt") !== -1) zTXT = i;
    }
  }
  if (zTXT) waitForNotice = true;
  // unpack the identified files
  if (zBIN) {
    Globals.cartdata = uint8ArrayToRawString( myArchive[zBIN] );
    lastCRC = CRC32(Globals.cartdata).toString(16);
    console.info("unzipped rom has CRC32", lastCRC);
    stat.innerText = "Loaded.";
    // bankswitching for zipped roms??
    vecx.doBankSwitching = false;//(url.toLowerCase().indexOf("vectorblade") > -1) ? true : false;
    vecx.reset();
    //console.log("waitForNotice:", waitForNotice);
    if (waitForNotice) {
      setTimeout( function(){
        vecx.stop(); // pause for reading
      }, 300);
    }
  }
  if (zPNG) {
    overlay.src = "data:image/png;base64,"+ btoa( uint8ArrayToRawString( myArchive[zPNG] ) );
  } else {
    overlay.src = transparentPixel;
  }
  if (zTXT) {
    showNotice( uint8ArrayToRawString( myArchive[zTXT] ) );
  }
}
function loadBinary(url, cb) {
  lastURL = url;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.overrideMimeType('text/plain; charset=x-user-defined');
  xhr.onload = function(e) {
    cb(e);
  }
  xhr.send();
}
function copyQuicklink() {
  copyToClipboard(quicklink.title);
}
// https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
// const copyToClipboard = str => {
function copyToClipboard(str){
  var el = document.createElement('textarea');  // Create a <textarea> element
  el.value = str;                                 // Set its value to the string that you want copied
  el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
  el.style.position = 'absolute';
  el.style.left = '-9999px';                      // Move outside the screen to make it invisible
  document.body.appendChild(el);                  // Append the <textarea> element to the HTML document
  var selected =
    document.getSelection().rangeCount > 0        // Check if there is any content selected previously
      ? document.getSelection().getRangeAt(0)     // Store selection if found
      : false;                                    // Mark as false to know no selection existed before
  el.select();                                    // Select the <textarea> content
  document.execCommand('copy');                   // Copy - only works as a result of a user action (e.g. click events)
  document.body.removeChild(el);                  // Remove the <textarea> element
  if (selected) {                                 // If a selection existed before copying
    document.getSelection().removeAllRanges();    // Unselect everything on the HTML document
    document.getSelection().addRange(selected);   // Restore the original selection
  }
};
function doinit() {
  // catch me if we are here 2nd time, needed vor late init after loading URL
  if (romTbl.tbl !== null) return;

  stat.innerText = "Starting up...";

  // fill rom table
  romTbl.init(myTbl, romList);

  /*
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
 *-/
  roms.innerHTML = html.join("");
  roms.onchange = function(e) {
    e = e.srcElement;
    if (e.value == "") return;
    //e.blur(); // Remove focus from the roms element
    stat.innerText = "Loading " + e.text + " ...";
    switchRom( e.value ); // Get the newly selected rom
  }
*/

  overlay.onload = function(e) {
    overlayErrCnt = 0;
    resizer();
  }
  overlay.onerror = function(e) {
    overlayErrCnt++;
    if (overlayErrCnt === 1) {
      // try to find in local dir
      var tst = lastURL.replace(".rom",".png");
      tst = tst.replace(".vec",".png");
      tst = tst.replace(".bin",".png");
      overlay.src = tst;
    } else {
      overlay.src = transparentPixel;
    }
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
var waitForNotice = false;
function loadNotice(){
  if (lastURL.toLowerCase().indexOf(".zip") !== -1) return;
  var url = lastURL.replace(".bin",".txt");
  url = url.replace(".rom",".txt");
  url = url.replace(".vec",".txt");
  //console.log("Looking for notice at:", url)
  if (url.length > 0){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    //xhr.overrideMimeType('text/plain; charset=x-user-defined');
    xhr.onload = function(e) {
      if (e.target.status === 200) {
        waitForNotice = true;
        showNotice(e.target.responseText);
      } else {
        waitForNotice = false;
      }
    }
    xhr.send();
  } else {
    waitForNotice = false;
  }
}
function showNotice(txt){
  vecx.stop(); // pause, but also need to wait in loadRom
  menu.style.display = "none";
  notice.innerText = txt;
  notice.style.display = "block";
}

function toggleMenu(e) {
  if (e) e.preventDefault();
  //menu.classList.toggle("fadeIn");
  if (waitForNotice) {
    notice.style.display = "none";
    waitForNotice = false;
    setTimeout( function (){
      vecx.start(); // unpause
    }, 300);
    return;
  }
  if (menu.style.display == "block") {
    menu.style.display = "none";
    setTimeout( function (){
      vecx.start(); // unpause
    }, 300);
  } else {
    vecx.stop(); // pause
    notice.style.display = "none";
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
function toggleQuality(x, y) {
  if (!vecx.osint.ctx) return;
  //y = 410/330 * x;
  //x = Math.floor(x/8)*8;
  //y = Math.floor(y/8)*8;
  /*
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
  */
  Globals.SCREEN_X_DEFAULT = vecx.osint.screen_x = vecscr.width = x;
  Globals.SCREEN_Y_DEFAULT = vecx.osint.screen_y = vecscr.height = y;
  vecx.osint.init(vecx, vecscr);
  //vecx.osint.osint_updatescale();
  //vecx.osint.osint_clearscreen();
  stat.innerText = x + " x " + y;
  //vecx.main( vecscr );
}
function toggleOverlayDir() {
  if (overlayDir.indexOf("img/overlays") > -1) {
    overlayDir = (overlayDir === "img/overlays/") ? "img/overlays_1080/" : "img/overlays/";
    overlay.src = overlayDir + overlayName + ".png";
  }
}
function setOverlay(name) {
  overlayName = name;
  var url;
  if (name.indexOf("/") > -1) {
    // workaround for overlay subdirs
    overlayDir = name.substr(name.indexOf("/"));
    url = "img/"+ name +".png";
  } else {
    // look in overlays or overlays_1080
    overlayDir = "img/overlays_1080/";
    url = overlayDir + overlayName.replace(/%20/g,"") + ".png";
  }
  loadOverlay(url);
}
function loadOverlay(url) {
  overlay.src = url;
  // cascade to notice
  loadNotice();
}
function toggleRTM() {
  // check if already loaded
  if (document.getElementById("rtm6809")) {
    document.getElementById("rtm6809").classList.toggle("fadeIn");
    document.getElementById("rtm8912").classList.toggle("fadeIn");
    document.getElementById("rtm6522").classList.toggle("fadeIn");
    document.getElementById("rtmROMRAM").classList.toggle("fadeIn");
  } else {
    loadHead("script", "js/rtm.js", function(){});
  }
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

  // size and center the menu / notice
  menu.style.width = notice.style.width = overlay.clientWidth * 0.8 +'px';
  menu.style.height = notice.style.height = overlay.clientHeight * 0.8 +'px';
  menu.style.left = notice.style.left = overlay.clientWidth * 0.1 +'px';
  menu.style.top = notice.style.top = overlay.clientHeight * 0.1 +'px';

  // auto toggle quality
  toggleQuality(vecscr.clientWidth,vecscr.clientHeight);
}
function loadHead(tag, url, cb) {
  xhr(url, function(txt) {
    addHead(tag, txt, cb);
  });
}
function addHead(tag, txt, cb) {
  var tmp = document.createElement(tag);
  tmp.type = (tag==='script')? 'text/javascript':'text/css';
  //tmp.text = txt; // works for script only
  tmp.appendChild(document.createTextNode(txt)); // works for script and style
  document.head.appendChild(tmp);
  if (cb) cb();
}
function xhr(src, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", src, true);
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //log(this.responseText);
      cb(this.responseText);
    }
  };
  xhr.send();
}
function CRC32(r){for(var a,o=[],c=0;c<256;c++){a=c;for(var f=0;f<8;f++)a=1&a?3988292384^a>>>1:a>>>1;o[c]=a}for(var n=-1,t=0;t<r.length;t++)n=n>>>8^o[255&(n^r.charCodeAt(t))];return(-1^n)>>>0}
function visChg() {
  if (document.hidden || document.webkitHidden || document.msHidden) {
    // hidden
    // pause the emu
    if (vecx.running) {
      vecx.stop();
      stat.innerText = "Paused.";
    }
    // open menu
    menu.style.display = "block";
  } else {
    // visible
    // do not auto turn on. keep in menu
  }
}

//function printScreen() {
  //download(vecscr.toDataURL("image/png"), "JSVecX_screenshot_"+".png", "image/png");
//  download(vecscr.toDataURL("image/png"), "JSVecX_screenshot_"+".png", "image/png");
//}
function printScreen() {
  vecx.stop();
  var a = document.createElement("a");
  var d = new Date();
  d = d.toISOString();
  // PNG
  a.setAttribute('download', 'JSVecX_'+d+'.png');
  var dataURL = vecscr.toDataURL('image/png');
  var url = dataURL.replace(/^data:image\/png/,'data:application/octet-stream');
  vecx.osint.canvas.toBlob(function(blob) {
    var url = URL.createObjectURL(blob);
    a.setAttribute('href', url);
    a.click();
    console.log("Screenshot saved as: "+ 'JSVecX_'+d+'.png');

    // SVG
    var b = document.createElement("a");
    b.setAttribute("download", "JSVecX_"+d+".svg");
    var preface = '<?xml version="1.0" encoding="utf-8" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, makeSVG()], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    b.href = svgUrl;
    b.click();
    console.log("Screenshot saved as: JSVecX_"+d+".svg");

    vecx.start();
  });


  //vecx.start();
}
//
// maybe better done direct from vecx.vectors_draw
// but wanted generation in emu loop for later sending that data in compact way
//
function makeSVG() {
  var r = [], // ret object
  l, // line
  p, // parameters
  c; // color
  r.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 410" style="background:black">');
  for (var i = 0; i < vecx.osint.actImg.length; i++) {
    l = vecx.osint.actImg[i];
    p = l.split(",");
    //c = vecx.osint.color_set[ p[0] ];
    c = p[0]/127; // 0.0...1.0
    c = Math.pow(c, vecx.osint.gam); // apply gamma 2.2 = CRT
    if (p.length === 3) {
      // dot
      r.push('<rect x="'+ p[1]/100 +'" y="'+ p[2]/100 +'" width="0.1" height="0.1" stroke="rgba(255, 255, 255, '+ c +')" />');
    } else {
      // line
      r.push('<line x1="'+ p[1]/100 +'" y1="'+ p[2]/100 +'" x2="'+ p[3]/100 +'" y2="'+ p[4]/100 +'" stroke="rgba(255, 255, 255, '+ c +')" />');
    }
  }
  r.push('</svg>');
  return r.join('\r\n');
}

//
// hexMon wrapper
//
//
// still not happy
//
function toggleMemMon() {
  memMon.classList.toggle("fadeIn");
  hexMon.init(memMon, vecx.ram, 0xC880, (0xCC00-0xC880));

  if (hexMon.timer === null){
    hexMon.starter();
  } else {
    hexMon.stopper();
  }
}
function poke(a, v){
  hexMon.poke(a, v);
}
function peek(a){
  hexMon.peek(a);
}
/*
function setReg(r, v) {
  // at the moment only PC is supported
  switch (r) {
    case 'PC':
      vecx.e6809.reg_pc = v;
      break;
    default:
      break;
  }
}
*/
//
//
//
function toggleCocktail(){
  // later i want to load lib when needed, but it's not huge
  cocktail.toggle();
}
/*
function download(content, fileName, mimeType) {
  var a = document.createElement('a');
  mimeType = mimeType || 'application/octet-stream';
  if (navigator.msSaveBlob) { // IE10
    navigator.msSaveBlob(new Blob([content], {
      type: mimeType
    }), fileName);
  } else if (URL && 'download' in a) { //html5 A[download]
    a.href = URL.createObjectURL(new Blob([content], {
      type: mimeType
    }));
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    location.href = 'data:application/octet-stream,' + encodeURIComponent(content); // only this mime type is supported
  }
}
*/
/*
var lastState;
function saveState() {
  vecx.stop();
  lastState = {};
  lastState.rom = JSON.stringify(vecx.rom);
  lastState.cart = JSON.stringify(vecx.cart);
  lastState.ram = JSON.stringify(vecx.ram);
  lastState.snd_regs = JSON.stringify(vecx.snd_regs);

  for (var i in vecx) {
    //console.log(i, typeof vecx[i]);
    if (typeof vecx[i] !== "object" && typeof vecx[i] !== "function") {
      //console.log(i, typeof vecx[i]);
      lastState[i] = JSON.stringify(vecx[i]);
    }
  }

  lastState.e6809 = {};
  for (var i in vecx.e6809) {
    //console.log(i, typeof vecx[i]);
    if (typeof vecx.e6809[i] !== "object" && typeof vecx.e6809[i] !== "function") {
      //console.log(i, typeof vecx[i]);
      lastState.e6809[i] = JSON.stringify(vecx.e6809[i]);
    }
  }

  lastState.osint = {};
  for (var i in vecx.osint) {
    //console.log(i, typeof vecx[i]);
    if (typeof vecx.osint[i] !== "object" && typeof vecx.osint[i] !== "function") {
      //console.log(i, typeof vecx[i]);
      lastState.osint[i] = JSON.stringify(vecx.osint[i]);
    }
  }
  lastState.osint.data = [];
  for (var i = 0; i < vecx.osint.data.length; i++) {
    lastState.osint.data.push( vecx.osint.data[i] );
  }
  lastState.osint.color_set = [];
  for (var i = 0; i < vecx.osint.color_set.length; i++) {
    var tmp = [];
    tmp.push( vecx.osint.color_set[i][0] );
    tmp.push( vecx.osint.color_set[i][1] );
    tmp.push( vecx.osint.color_set[i][2] );
    lastState.osint.color_set.push( tmp );
  }

  console.log("state saved");
  vecx.start();
}
function resumeLastSaveState() {
  if (lastState.ram) {
    vecx.stop();
    //vecx = {};
    //vecx = JSON.parse(lastState.vecx);
    vecx.rom = JSON.parse(lastState.rom);
    vecx.cart = JSON.parse(lastState.cart);
    vecx.ram = JSON.parse(lastState.ram);

    //var state = JSON.parse(lastState);
    // use the source again
    for (var i in vecx) {
      //console.log(i, typeof vecx[i]);
      if (typeof vecx[i] !== "object" && typeof vecx[i] !== "function") {
        //console.log(i, typeof vecx[i]);
        vecx[i] = lastState[i]*1;
      }
    }
    for (var i in vecx.e6809) {
      //console.log(i, typeof vecx[i]);
      if (typeof vecx.e6809[i] !== "object" && typeof vecx.e6809[i] !== "function") {
        //console.log(i, typeof vecx[i]);
        vecx.e6809[i] = lastState.e6809[i]*1;
      }
    }
    for (var i in vecx.osint) {
      //console.log(i, typeof vecx[i]);
      if (typeof vecx.osint[i] !== "object" && typeof vecx.osint[i] !== "function") {
        //console.log(i, typeof vecx[i]);
        vecx.osint[i] = lastState.osint[i]*1;
      }
    }
    vecx.osint.data = [];
    for (var i = 0; i < lastState.osint.data.length; i++) {
      vecx.osint.data.push( lastState.osint.data[i] );
    }
    vecx.osint.color_set = [];
    for (var i = 0; i < lastState.osint.color_set.length; i++) {
      var tmp = [];
      tmp.push( lastState.osint.color_set[i][0] );
      tmp.push( lastState.osint.color_set[i][1] );
      tmp.push( lastState.osint.color_set[i][2] );
      vecx.osint.color_set.push( tmp );
    }

    console.log("state loaded");
    setTimeout(function() {
      vecx.start();
    }, 100);
  }
}
*/
(function(){
  //
  // onload
  //

  //
  // head work
  //
  /*
  var favIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAJFBMVEVHcExxmsk0brEcXagKUKFShL2Jq9LX4vC/0eelv93+/v/v9PmzZ5L/AAAAAXRSTlMAQObYZgAABPRJREFUeAHtmoFnXFkYR1+S6QJoGEEWVncKCazOEBTamdvNBthdUwhYthYB6JLVBQiqAAoNkJIkuQVSoPvP7dNR3zPv3L4cEwv7Dgh5L3PfuXe+3/vuTfW/o6enp6enp2ft+5Rm4/H40YPPPHy+YHOruhtGqcizirk3Scij+3AxXBvM6I5qnopMyxczs6rN0NywkRYISxvqhtTJd1XlbvmhajBIAFhVt/AMl/nZPvOTxnJLt+CpmrSamTJUUzUZiWcOQ2KaUzKOUrKOBikJR+spWUdzcUMMRzhyNwySdbSRkpmEebKOhu4DRsk6SgzWo1ils+Pj49c17xb8UbO1tbW5OWw5ilUxq5NpXJOQ6dJ4jjJyEXe0DO3k4J+a48/89WXISx+wn5lROFo29ObrQwpFC2WZ+XPJURh62nHD8iQf5Zvx+MGC5wt+2fy25SiW9eN89e51zfGCv2tJuWaemooay3QvX8PqbzmK0nXaeLrWH4lJHqRwBN+JN0uO7iW8PjR8XF6mgxhR/DJ4vOSoYQieeNr40CexrPkOdjSBwQY/5at2vU7G0RoNNtjONzGaVuCwo92mo4ah/XzVzoBPediuXS+Mo9FXDR3kSwjldeFoGj/FYIPD/D594UfKj9P8suAIpvOybehVfkuvXkNak+wo2I7BxqDzhwlF7IZw1JjOmLuoruf8dop/ix3BdAav8gm/nM69o8N8Dtd9GDUMoSP2Hc+F0xmjO2vGmXfE0wn3Rp2wjmA6g2fNq+5X3hFPJ9TdMOQdwXRCJQtD4Gj3No528xlHAfcr3hE95n6+hkInHPF0BttgCB3t5DN2hNMJ1TUMSUdYdLm6VgAsQXTEJZGjwDuK6eTqGmmMjqIMsKOOsJywIe9omjEsz7mn9o7i3acJhOUyAyiV4MiFpXdUDMszDssmo25HseBbj3dCX2PvKBY8TxAYCr5pBiI7CkMiCtjRecnRAT3dKYdl2dFB2VEhLOcQli3WeFk3HcVvRBSQo8OSI5z/o2IUeEc7GJYYBewoiiM7igUPfRMY0o44LN+XDHlH+UJFgXcEbwQHHJbMpNPR3EdBydElObru7JuEoxfg6KOLAu9ofvu+qcMR1/0k+ibmXocjHwXsiLOX4L5pVUc+Crwj7pvu3tEeR8GKjnwUsKMpOhJ90x042ocoUI6uEgBbaMJQOIL3aN5CiyjQjo7QkeibmAEqDrhv4ihA1suOfFgizWV+kwLdN3lHPgq8o3LfJOBS4MNyRUe70Dd5R1FsxBaadtQdBb9Vjljee+HI901I94Z57LloQwFvxem+qcwQQ9H3Td6RD0vviPsm7wgPXjjtKkA7En2Td/TSR4F35PumMnzwYvom78hFgXd0IaLAO4LmkrfQLNAE0BaaN8QHL65v8o5Gq0eBOFQQfZN35KPAO5J9k3e0ahTw4dSZ7Zu8I7eF5h2dmL7JO4ri4Psmhg5eVogCcajg+ibvqDbko6DMoOVIRoF35PsmBg9e5BaadzSBfz24W0duC807Ord9k3fk+6YydDj1NpLHFDpxqGD6pkAcKnRHgWet6UiGpXfkwtI7kn2Td/RJRoF3BP96cLeOZN/kHUlDfqNThqV3JKPAbwZ7Q96RDkvvyH+NvaNK4R2ZsPSOxBoSeEOSgZ9iSUo+ahTrydc5x+9+hiUbfvyWXyezh1VPT09PT09Pz3/Pv5hdgdrWVCVdAAAAAElFTkSuQmCC";

  // manifest
  var tmp = document.createElement("link");
  tmp.rel = "manifest";
  var manifest = {
    "short_name": "jsVecX",
    "name": "DrSnuggles: jsVecX",
    "start_url": "index.html",
    "display": "standalone",
    "orientation": "portrait",
    "background_color": "#000000",
    "theme_color": "#33FF33",
    "icons": [
     {
      "src": favIcon,
      "sizes": "192x192",
      "type": "image/png"
     }
    ]
  };
  tmp.href = "data:application/manifest+json," + JSON.stringify(manifest);
  document.head.appendChild(tmp);

  // favicons
  //stackoverflow.com/questions/2268204/favicon-dimensions/48646940
  // all other
  tmp = document.createElement("link");
  tmp.href = favIcon;
  tmp.rel = "shortcut icon";
  tmp.type = "image/png";
  document.head.appendChild(tmp);

  // android
  tmp = document.createElement("link");
  tmp.href = favIcon;
  tmp.rel = "shortcut icon";
  tmp.sizes = "192x192";
  document.head.appendChild(tmp);

  // apple
  tmp = document.createElement("link");
  tmp.href = favIcon;
  tmp.rel = "apple-touch-icon";
  document.head.appendChild(tmp);
  */

  //
  // parameters
  //
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  var rom = getUrlParameter('rom');//urlParams.get('rom');

  // BIOS
  var bios = getUrlParameter('bios');
  if (bios) {
    if (bios.indexOf("//") === -1) {
      bios = 'bios/'+ bios.toLowerCase() +'.bin';
    }
    // load bios
    // insert proxy
    bios = proxyServer + bios;

    loadBinary(bios, function(e) {
      Globals.romdata = e.target.response;
      patchBIOS();
    });
  } else {
    patchBIOS();
  }
  function patchBIOS() {
    var bopt = getUrlParameter('bopt');
    if (!bopt) bopt = "fast"; //default
    bopt = bopt.toLowerCase();
    if (bopt === "fast") {
      console.info("patch fast BIOS");
      var oriBIOS = Globals.romdata;
      Globals.romdata = oriBIOS.substr(0, 0x1067) + String.fromCharCode(0x26) + String.fromCharCode(0x81) + String.fromCharCode(0x20) + oriBIOS.substr(0x106A);
    } else if (bopt === "skip") {
      console.info("patch skip BIOS");
      var oriBIOS = Globals.romdata;
      Globals.romdata = oriBIOS.substr(0, 0x101C) + String.fromCharCode(0x20) + String.fromCharCode(0x4E) +
        oriBIOS.substr(0x101E, 0x10B2-0x101E) + String.fromCharCode(0x12) + String.fromCharCode(0x12) + String.fromCharCode(0x4F) + String.fromCharCode(0xBD) + String.fromCharCode(0xF2) + String.fromCharCode(0xAB) +
        oriBIOS.substr(0x10B8, 0x10DD-0x10B8) + String.fromCharCode(0x12) + String.fromCharCode(0x12) + String.fromCharCode(0xBD) + String.fromCharCode(0xF2) + String.fromCharCode(0xA9) + String.fromCharCode(0x8E) + String.fromCharCode(0x00) + String.fromCharCode(0x7D) + String.fromCharCode(0x12) + String.fromCharCode(0x12) +
        oriBIOS.substr(0x10E7);
    }
    if (!(rom)) doinit(); // we do later if we need to load from URL
  }

  cocktail.toggle();

  // set sound on/off
  var sound = getUrlParameter('sound');
  if (sound) {
    if (sound !== 'true' && sound !== 'on') {
      toggleSound();
    }
  }

  // paused
  var pause = getUrlParameter('pause');
  if (pause) {
    if (pause == 'true' || pause == 'on') {
      togglePause();
    }
  }

  // open menu
  var menu = getUrlParameter('menu');
  if (menu) {
    if (menu == 'true' || menu === 'on') {
      toggleMenu();
    }
  }

  // show real time monitoring
  var rtm = getUrlParameter('rtm');
  if (rtm) {
    if (rtm == 'true' || rtm == 'on') {
      toggleRTM();
    }
  }

  // antialias
  var aa = getUrlParameter('aa');
  if (aa) {
    if (aa !== 'true' && aa !== 'on') {
      toggleAA();
    }
  }

  // overlay
  var overlay = getUrlParameter('overlay');
  if (overlay && overlay == overlay*1) {
    for (var i = 0; i < overlay; i++) {
      toggleOverlay();
    }
  }

  // parameters for individual key settings
  var keys1 = getUrlParameter('keys1');
  if (keys1) {
    var tmp = keys1.split(",");
    if (tmp.length === 8) {
      input.keys.keys1 = [];
      for (var i = 0; i<tmp.length; i++) {
        input.keys.keys1.push(tmp[i]);
      }
      console.info('Keys for Player1 set to:', input.keys.keys1);
    }
  }
  var keys2 = getUrlParameter('keys2');
  if (keys2) {
    var tmp = keys2.split(",");
    if (tmp.length === 8) {
      input.keys.keys2 = [];
      for (var i = 0; i<tmp.length; i++) {
        input.keys.keys2.push(tmp[i]);
      }
      console.info('Keys for Player2 set to:', input.keys.keys2);
    }
  }
  // parameters for individual gamepad mappings
  var gp1 = getUrlParameter('gp1');
  if (gp1) {
    var tmp = gp1.split(",");
    if (tmp.length === 8) {
      input.gamepads.gp1 = [];
      for (var i = 0; i<tmp.length; i++) {
        input.gamepads.gp1.push(tmp[i]);
      }
      console.info('Gamepad for Player1 set to:', input.gamepads.gp1);
    }
  }
  var gp2 = getUrlParameter('gp2');
  if (gp2) {
    var tmp = gp2.split(",");
    if (tmp.length === 8) {
      input.gamepads.gp2 = [];
      for (var i = 0; i<tmp.length; i++) {
        input.gamepads.gp2.push(tmp[i]);
      }
      console.info('Gamepad for Player2 set to:', input.gamepads.gp2);
    }
  }

  // parameters for sliders
  var vol = getUrlParameter('vol');
  if (vol && vol == vol*1) {
    vecx.e8910.gain.gain.value = vol*1;
    vol_slider.value = vol*1;
  }
  var lum = getUrlParameter('lum');
  if (lum && lum == lum*1) {
    vecx.osint.lum = 1 - lum*1;
    lum_slider.value = lum*1;
  }
  var gam = getUrlParameter('gam');
  if (gam && gam == gam*1) {
    vecx.osint.gam = 1 - gam*1;
    gam_slider.value = gam*1;
  }

  // autopause on visibility change
  document.addEventListener("visibilitychange", visChg, false);
  document.addEventListener("webkitvisibilitychange", visChg, false);
  document.addEventListener("msvisibilitychange", visChg, false);

  window.addEventListener("blur", function() {
    vecx.stop();
    document.getElementById("menu").style.display = "block";
  }, false);

  // another keyhandler this time not for vecx input but for emulator
  document.addEventListener("keyup", keyHand, false);
  function keyHand(e) {
    //console.log(e);
    switch (e.key) {
      case 'PrintScreen':
        printScreen();
        break;
      case 'Pause':
      case 'Delete':
        togglePause();
        break;
      case 'Escape':
        toggleMenu();
        break;
      case 'Backspace':
        if (e.target.tagName !== 'INPUT') vecx.reset(); // only when no input field is focused
        break;
      case 'PageUp':
        //saveState();
        break;
      case 'PageDown':
        //resumeLastSaveState();
        break;
      default:
    }
  }


    // mobile vertical/all scroll
    addEventListener("touchmove", function(e){
      e.preventDefault();
    }, {passive:false});

    // sliders
    vol_slider.addEventListener("input", function(e){
      vecx.e8910.gain.gain.value = e.target.value*1;
      stat.innerText = "Volume: "+ (e.target.value*1).toFixed(2);
    }, false);
    lum_slider.addEventListener("input", function(e){
      vecx.osint.lum = 1 - e.target.value*1;
      stat.innerText = "Luminescence: "+ (e.target.value*1).toFixed(2);
    }, false);
    gam_slider.addEventListener("input", function(e){
      vecx.osint.gam = e.target.value*1;
      stat.innerText = "Gamma: "+ (e.target.value*1).toFixed(2);
    }, false);


  // last to do is load rom
  // no IE11 var urlParams = new URLSearchParams(window.location.search);
  // look above var rom = getUrlParameter('rom');//urlParams.get('rom');
  if (rom) {
    rom = location.search.substr(location.search.indexOf("rom=")+4);
    if (rom.indexOf("//") > -1) {
      // set quicklink
      quicklink.title = "https://DrSnuggles.github.io/jsvecx?rom="+ rom;
      // insert proxy
      rom = proxyServer + encodeURI(rom);
      // load rom from URL
      loadRom(rom);
      // also try to load overlay with same name but .png extension
      rom = rom.replace(".bin",".png");
      rom = rom.replace(".rom",".png");
      rom = rom.replace(".vec",".png");
      loadOverlay(rom);
    } else if (rom.indexOf("/") > -1) {
      // do not search we have a fixed path
      switchRom(rom);
      return;
    } else {
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
    }
  } else {
    setOverlay("MineStorm"); // no rom set
  }

})();
