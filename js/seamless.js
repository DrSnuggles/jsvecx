var vecx=new VecX,transparentPixel="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";Globals.romdata=atob("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");var lastCRC,overlayDir="img/overlays_1080/",overlayName="",overlayErrCnt=0,lastURL="",proxyServer="https://simpleproxy.drsnuggles.workers.dev?";function switchRom(e){doinit(),vecx.stop(),vecx.osint.osint_clearscreen(),vecx.doBankSwitching=!1,vecx.currentBank=0,"object"==typeof e?(lastCRC=CRC32(Globals.cartdata).toString(16),console.info("dropped rom has CRC32",lastCRC),stat.innerText="Loaded.",overlay.src=transparentPixel,romName="",vecx.reset()):(lastURL="roms/"+e+".bin",-1<e.indexOf("Academy")||-1<e.indexOf("Pouet")?setOverlay(e.substr(e.lastIndexOf("roms/")+1).split("_")[0].replace(/ /g,"")):setOverlay(e.substr(e.lastIndexOf("/")+1).split("_")[0].replace(/ /g,"")),-1!==e.indexOf("_http")?loadRom(proxyServer+e.substr(e.indexOf("_http")+1)):-1===e.indexOf(".zip")?loadRom("roms/"+e+".bin"):loadRom("roms/"+e.split("/")[0]+"/"+e.split("_")[1])),quicklink.title="https://DrSnuggles.github.io/jsvecx?rom="+e}function loadRom(A){loadBinary(lastURL=A,function(e){doinit(),detectZIP(e.target.response,function(e){Globals.cartdata=e,lastCRC=CRC32(e).toString(16),console.info("loaded rom",A,"has CRC32",lastCRC),stat.innerText="Loaded.",vecx.doBankSwitching=-1<A.toLowerCase().indexOf("vectorblade"),-1!==A.indexOf("Stevedore")?(vecx.RAMP_ON_DELAY=9,vecx.RAMP_OFF_DELAY=5):(vecx.RAMP_ON_DELAY=3,vecx.RAMP_OFF_DELAY=3),vecx.reset(),waitForNotice&&setTimeout(function(){vecx.stop()},300)})})}function detectZIP(e,A){var t=!1;"P"===e[0]&&"K"===e[1]&&(t=!0),t?"undefined"!=typeof UZIP&&unUZIP(e):A&&A(e)}function rawStringToBuffer(e){var A,t=e.length,n=new Array(t);for(A=0;A<t;++A)n[A]=255&e.charCodeAt(A);return new Uint8Array(n).buffer}function uint8ArrayToRawString(e){for(var A=[],t=0;t<e.length;t++)A.push(String.fromCharCode(e[t]));return A.join("")}function unUZIP(e){e=rawStringToBuffer(e);var A,t,n,o=UZIP.parse(e);for(var i in o)-1===i.toLowerCase().indexOf("__macosx")&&(-1===i.toLowerCase().indexOf(".bin")&&-1===i.toLowerCase().indexOf(".vec")&&-1===i.toLowerCase().indexOf(".rom")||(A=i),-1!==i.toLowerCase().indexOf(".png")&&(t=i),-1!==i.toLowerCase().indexOf(".txt")&&(n=i));n&&(waitForNotice=!0),A&&(Globals.cartdata=uint8ArrayToRawString(o[A]),lastCRC=CRC32(Globals.cartdata).toString(16),console.info("unzipped rom has CRC32",lastCRC),stat.innerText="Loaded.",vecx.doBankSwitching=!1,vecx.reset(),waitForNotice&&setTimeout(function(){vecx.stop()},300)),overlay.src=t?"data:image/png;base64,"+btoa(uint8ArrayToRawString(o[t])):transparentPixel,n&&showNotice(uint8ArrayToRawString(o[n]))}function loadBinary(e,A){lastURL=e;var t=new XMLHttpRequest;t.open("GET",e,!0),t.overrideMimeType("text/plain; charset=x-user-defined"),t.onload=function(e){A(e)},t.send()}function copyQuicklink(){copyToClipboard(quicklink.title)}function copyToClipboard(e){var A=document.createElement("textarea");A.value=e,A.setAttribute("readonly",""),A.style.position="absolute",A.style.left="-9999px",document.body.appendChild(A);var t=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);A.select(),document.execCommand("copy"),document.body.removeChild(A),t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t))}function doinit(){null===romTbl.tbl&&(stat.innerText="Starting up...",romTbl.init(myTbl,romList),overlay.onload=function(e){overlayErrCnt=0,resizer()},overlay.onerror=function(e){if(1===++overlayErrCnt){var A=lastURL.replace(".rom",".png");-1==(A=(A=A.replace(".vec",".png")).replace(".bin",".png")).indexOf(".zip")&&(overlay.src=A)}else overlay.src=transparentPixel},addEventListener("contextmenu",toggleMenu,!1),addEventListener("resize",resizer,!1),resizer(),Globals.SCREEN_X_DEFAULT=vecscr.width,Globals.SCREEN_Y_DEFAULT=vecscr.height,vecx.main(vecscr),setInterval(function(){stat.innerText=vecx.status},2e3))}var waitForNotice=!1;function loadNotice(){if(-1===lastURL.toLowerCase().indexOf(".zip")){var e=lastURL.replace(".bin",".txt");if(0<(e=(e=e.replace(".rom",".txt")).replace(".vec",".txt")).length){var A=new XMLHttpRequest;A.open("GET",e,!0),A.onload=function(e){200===e.target.status&&0!==e.target.responseText.indexOf("<!")?(waitForNotice=!0,showNotice(e.target.responseText)):waitForNotice=!1},A.send()}else waitForNotice=!1}}function showNotice(e){vecx.stop(),menu.style.display="none",notice.innerText=e,notice.style.display="block"}function toggleMenu(e){if(e&&e.preventDefault(),waitForNotice)return notice.style.display="none",waitForNotice=!1,void setTimeout(function(){vecx.start()},300);"block"==menu.style.display?(menu.style.display="none",setTimeout(function(){vecx.start()},300)):(vecx.stop(),notice.style.display="none",menu.style.display="block")}function toggleFullscreen(){window.innerWidth==screen.width&&window.innerHeight==screen.height?document.exitFullscreen():document.documentElement.requestFullscreen()}function toggleAA(){vecscr.classList.toggle("noAA"),overlay.classList.toggle("noAA"),overlay.classList.contains("noAA")?stat.innerText="AntiAlias turned off.":stat.innerText="AntiAlias turned on."}function toggleGP(){input.gamepads.toggleGP()?stat.innerText="Gamepad turned on.":stat.innerText="Gamepad turned off."}function toggleSound(){var e=vecx.toggleSoundEnabled();stat.innerText=e?"Sound turned on.":"Sound turned off."}function toggleOverlay(){overlay.classList.toggle("fadeOut"),overlay.classList.contains("fadeOut")?(stat.innerText="Overlay turned off.",setTimeout(toggleOverlayDir,500)):stat.innerText="Overlay turned on."}function togglePause(){vecx.running?(vecx.stop(),stat.innerText="Paused."):(vecx.start(),stat.innerText="Resumed.")}function toggleSwitchKeys(){input.keys.switchKeys=!input.keys.switchKeys,input.keys.switchKeys?stat.innerText="Keyboard = Player 2":stat.innerText="Keyboard = Player 1"}function toggleSwitchGP(){input.gamepads.switchGP=!input.gamepads.switchGP,input.gamepads.switchGP?stat.innerText="Joy 1=Player 2, Joy 2=Player 1":stat.innerText="Joy 1=Player 1, Joy 2=Player 2"}function toggleQuality(e,A){vecx.osint.ctx&&(Globals.SCREEN_X_DEFAULT=vecx.osint.screen_x=vecscr.width=e,Globals.SCREEN_Y_DEFAULT=vecx.osint.screen_y=vecscr.height=A,vecx.osint.init(vecx,vecscr),stat.innerText=e+" x "+A)}function toggleOverlayDir(){-1<overlayDir.indexOf("img/overlays")&&(overlayDir="img/overlays/"===overlayDir?"img/overlays_1080/":"img/overlays/",overlay.src=overlayDir+overlayName+".png")}function setOverlay(e){loadOverlay(-1<(overlayName=e).indexOf("/")?(overlayDir=e.substr(e.indexOf("/")),"img/"+e+".png"):(overlayDir="img/overlays_1080/")+overlayName.replace(/%20/g,"")+".png")}function loadOverlay(A){-1!==A.indexOf("//")?xhr(A,function(e){0!==e.indexOf("<?")&&-1==A.indexOf(".zip")&&(overlay.src=A)}):overlay.src=A,loadNotice()}function toggleRTM(){document.getElementById("rtm6809")?(document.getElementById("rtm6809").classList.toggle("fadeIn"),document.getElementById("rtm8912").classList.toggle("fadeIn"),document.getElementById("rtm6522").classList.toggle("fadeIn"),document.getElementById("rtmROMRAM").classList.toggle("fadeIn")):loadHead("script","js/rtm.js",function(){})}function resizer(){var e=window.innerWidth,A=window.innerHeight;e/A<351/449?(overlay.style.width=e+"px",overlay.style.height="auto",vecscr.style.width=330/351*e+"px",vecscr.style.height="auto"):(overlay.style.height=A+"px",overlay.style.width="auto",vecscr.style.height=410/449*A+"px",vecscr.style.width="auto");var t=overlay.clientWidth-vecscr.clientWidth,n=overlay.clientHeight-vecscr.clientHeight;vecscr.style.left=t/2+"px",vecscr.style.top=n/2+"px",t=e-overlay.clientWidth,n=A-overlay.clientHeight,wrapper.style.left=t/2+"px",wrapper.style.top=n/2+"px",menu.style.width=notice.style.width=.8*overlay.clientWidth+"px",menu.style.height=notice.style.height=.8*overlay.clientHeight+"px",menu.style.left=notice.style.left=.1*overlay.clientWidth+"px",menu.style.top=notice.style.top=.1*overlay.clientHeight+"px",toggleQuality(vecscr.clientWidth,vecscr.clientHeight)}function loadHead(A,e,t){xhr(e,function(e){addHead(A,e,t)})}function addHead(e,A,t){var n=document.createElement(e);n.type="script"===e?"text/javascript":"text/css",n.appendChild(document.createTextNode(A)),document.head.appendChild(n),t&&t()}function xhr(e,A){var t=new XMLHttpRequest;t.open("GET",e,!0),t.onreadystatechange=function(){4==this.readyState&&200==this.status&&A(this.responseText)},t.send()}function CRC32(e){for(var A,t=[],n=0;n<256;n++){A=n;for(var o=0;o<8;o++)A=1&A?3988292384^A>>>1:A>>>1;t[n]=A}for(var i=-1,r=0;r<e.length;r++)i=i>>>8^t[255&(i^e.charCodeAt(r))];return(-1^i)>>>0}function visChg(){(document.hidden||document.webkitHidden||document.msHidden)&&(vecx.running&&(vecx.stop(),stat.innerText="Paused."),menu.style.display="block")}function printScreen(){vecx.stop();var i=document.createElement("a"),r=new Date;r=r.toISOString(),i.setAttribute("download","JSVecX_"+r+".png");vecscr.toDataURL("image/png").replace(/^data:image\/png/,"data:application/octet-stream");vecx.osint.canvas.toBlob(function(e){var A=URL.createObjectURL(e);i.setAttribute("href",A),i.click(),console.log("Screenshot saved as: JSVecX_"+r+".png");var t=document.createElement("a");t.setAttribute("download","JSVecX_"+r+".svg");var n=new Blob(['<?xml version="1.0" encoding="utf-8" standalone="no"?>\r\n',makeSVG()],{type:"image/svg+xml;charset=utf-8"}),o=URL.createObjectURL(n);t.href=o,t.click(),console.log("Screenshot saved as: JSVecX_"+r+".svg"),vecx.start()})}function makeSVG(){var e,A,t=[];t.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 410" style="background:black">');for(var n=0;n<vecx.osint.actImg.length;n++)A=(e=vecx.osint.actImg[n].split(","))[0]/127,A=Math.pow(A,vecx.osint.gam),3===e.length?t.push('<rect x="'+e[1]/100+'" y="'+e[2]/100+'" width="0.1" height="0.1" stroke="rgba(255, 255, 255, '+A+')" />'):t.push('<line x1="'+e[1]/100+'" y1="'+e[2]/100+'" x2="'+e[3]/100+'" y2="'+e[4]/100+'" stroke="rgba(255, 255, 255, '+A+')" />');return t.push("</svg>"),t.join("\r\n")}function toggleMemMon(){memMon.classList.toggle("fadeIn"),hexMon.init(memMon,vecx.ram,51328,896),null===hexMon.timer?hexMon.starter():hexMon.stopper()}function poke(e,A){hexMon.poke(e,A)}function peek(e){hexMon.peek(e)}function toggleCocktail(){cocktail.toggle()}!function(){function t(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var A=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===A?"":decodeURIComponent(A[1].replace(/\+/g," "))}var n=t("rom"),e=t("bios");function A(){var e=t("bopt");if("fast"===(e=(e=e||"fast").toLowerCase())){console.info("patch fast BIOS");var A=Globals.romdata;Globals.romdata=A.substr(0,4199)+String.fromCharCode(38)+String.fromCharCode(129)+String.fromCharCode(32)+A.substr(4202)}else if("skip"===e){console.info("patch skip BIOS");A=Globals.romdata;Globals.romdata=A.substr(0,4124)+String.fromCharCode(32)+String.fromCharCode(78)+A.substr(4126,148)+String.fromCharCode(18)+String.fromCharCode(18)+String.fromCharCode(79)+String.fromCharCode(189)+String.fromCharCode(242)+String.fromCharCode(171)+A.substr(4280,37)+String.fromCharCode(18)+String.fromCharCode(18)+String.fromCharCode(189)+String.fromCharCode(242)+String.fromCharCode(169)+String.fromCharCode(142)+String.fromCharCode(0)+String.fromCharCode(125)+String.fromCharCode(18)+String.fromCharCode(18)+A.substr(4327)}n||doinit()}e?(-1===e.indexOf("//")&&(e="bios/"+e.toLowerCase()+".bin"),-1!==e.indexOf("//")&&(e=proxyServer+e),loadBinary(e,function(e){Globals.romdata=e.target.response,A()})):A(),cocktail.toggle();var o=t("sound");o&&"true"!==o&&"on"!==o&&toggleSound();var i=t("pause");i&&("true"!=i&&"on"!=i||togglePause());var r=t("menu");r&&("true"!=r&&"on"!==r||toggleMenu());var a=t("rtm");a&&("true"!=a&&"on"!=a||toggleRTM());var g=t("aa");g&&"true"!==g&&"on"!==g&&toggleAA();var s=t("overlay");if(s&&s==1*s)for(var l=0;l<s;l++)toggleOverlay();var c=t("keys1");if(c&&8===(y=c.split(",")).length){input.keys.keys1=[];for(l=0;l<y.length;l++)input.keys.keys1.push(y[l]);console.info("Keys for Player1 set to:",input.keys.keys1)}var I=t("keys2");if(I&&8===(y=I.split(",")).length){input.keys.keys2=[];for(l=0;l<y.length;l++)input.keys.keys2.push(y[l]);console.info("Keys for Player2 set to:",input.keys.keys2)}var C=t("gp1");if(C&&8===(y=C.split(",")).length){input.gamepads.gp1=[];for(l=0;l<y.length;l++)input.gamepads.gp1.push(y[l]);console.info("Gamepad for Player1 set to:",input.gamepads.gp1)}var y,v=t("gp2");if(v&&8===(y=v.split(",")).length){input.gamepads.gp2=[];for(l=0;l<y.length;l++)input.gamepads.gp2.push(y[l]);console.info("Gamepad for Player2 set to:",input.gamepads.gp2)}var d=t("vol");d&&d==1*d&&(vecx.e8910.gain.gain.value=1*d,vol_slider.value=1*d);var u=t("lum");u&&u==1*u&&(vecx.osint.lum=1-1*u,lum_slider.value=1*u);var f=t("gam");if(f&&f==1*f&&(vecx.osint.gam=1-1*f,gam_slider.value=1*f),document.addEventListener("visibilitychange",visChg,!1),document.addEventListener("webkitvisibilitychange",visChg,!1),document.addEventListener("msvisibilitychange",visChg,!1),window.addEventListener("blur",function(){vecx.stop(),document.getElementById("menu").style.display="block"},!1),document.addEventListener("keyup",function(e){switch(e.key){case"PrintScreen":printScreen();break;case"Pause":case"Delete":togglePause();break;case"Escape":toggleMenu();break;case"Backspace":"INPUT"!==e.target.tagName&&vecx.reset()}},!1),addEventListener("touchmove",function(e){e.preventDefault()},{passive:!1}),vol_slider.addEventListener("input",function(e){vecx.e8910.gain.gain.value=1*e.target.value,stat.innerText="Volume: "+(1*e.target.value).toFixed(2)},!1),lum_slider.addEventListener("input",function(e){vecx.osint.lum=1-1*e.target.value,stat.innerText="Luminescence: "+(1*e.target.value).toFixed(2)},!1),gam_slider.addEventListener("input",function(e){vecx.osint.gam=1*e.target.value,stat.innerText="Gamma: "+(1*e.target.value).toFixed(2)},!1),n)if(-1<(n=location.search.substr(location.search.indexOf("rom=")+4)).indexOf("//"))quicklink.title="https://DrSnuggles.github.io/jsvecx?rom="+n,loadRom(n=proxyServer+encodeURI(n)),loadOverlay(n=(n=(n=n.replace(".bin",".png")).replace(".rom",".png")).replace(".vec",".png"));else{if(-1<n.indexOf("/"))return switchRom(n);for(var l in romList)for(var w in romList[l])if(-1!==romList[l][w].toLowerCase().indexOf(n.toLowerCase()))return switchRom(l+"/"+romList[l][w]);setOverlay("MineStorm")}else setOverlay("MineStorm")}();