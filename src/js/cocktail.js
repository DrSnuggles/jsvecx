var cocktail = (function(){
  var my = {
    raf: null,
  },
  cocktailCRCs = ["f2160e6c","cbfafd6e","60b3cd6f","80738ec6"];

  my.toggle = function() {
    if (my.raf) {
      // stop
      cancelAnimationFrame(my.raf);
      my.raf = null;
      vecscr.classList.remove("mirrored");
      document.getElementById("overlay").classList.remove("mirrored");
      console.log("Cocktail check off");
    } else {
      // start
      my.raf = requestAnimationFrame(check);
      console.log("Cocktail check on");
    }
  }

  function check(){
    my.raf = requestAnimationFrame(check);
    if (typeof vecx === "undefined") return; // emu not ready
    if (cocktailCRCs.indexOf(lastCRC) === -1) return; // not a known rom

    switch(lastCRC){
      case "f2160e6c": // MineStorm
        mirr( (vecx.ram[0x80 + 0x1B] === 2) );
        break;
      case "cbfafd6e": // SolarQuest
        mirr( (vecx.ram[0x80 + 0x289] === 1) );
        break;
      case "60b3cd6f": // StarCastle1 (coop = 2player + gamemode3 ==> not mirrored)
      case "80738ec6": // StarCastle2
        mirr( (vecx.ram[0x80 + 0x5C] === 255) );
        break;
      default:
    }
  }

  function mirr(state){
    if (state){
      vecscr.classList.add("mirrored");
      document.getElementById("overlay").classList.add("mirrored");
    } else {
      vecscr.classList.remove("mirrored");
      document.getElementById("overlay").classList.remove("mirrored");
    }
  }

  return my;
})();
