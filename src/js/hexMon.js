var hexMon = (function(){
  var my = {
    timer : null,
    interval: 1000,
  };

  my.init = function(c, r, s, l) { // container, ram, start, length
    //console.log(r);
    my.cont = c;
    my.ram = r;
    my.start = s & 0x3FF;
    my.length = l & 0x3FF;

    my.fillAll();
    //my.starter();
  }
  my.starter = function(){
    if (my.timer === null) {
      my.timer = setInterval(function(){hexMon.fillAll();}, my.interval);
    }
  }
  my.stopper = function(){
    if (my.timer !== null) {
      clearInterval(my.timer);
      my.timer = null;
    }
  }

  my.peek = function(a) { // address
    return vecx.ram[a].toString(16).toUpperCase();
  }
  my.poke = function(a, v) { // address, value
    my.ram[a] = v & 0xFF;
  }
  my.fillAll = function() {
    // insert html into wrapper div
    var h = [];
    var cls;
    for (var i = 0; i < my.length; i++) {
      switch (i) {
        /*
        case 89: // CURRENT SHIP COUNT FOR ACTIVE PLAYER
          cls = "cel green";
          break;
        case 121:
          cls = "cel red";
          break;
        */
        default:
          cls = "cel";
      }
      if (my.peek(my.start+i) === "80") { // string end
        cls = "cel blue";
      }
      h.push('<input class="'+ cls +'" value="'+ my.peek(my.start+i) +'" onchange="hexMon.poke('+ (my.start+i) +',this.value)" title="+0x'+ i.toString(16).toUpperCase() +'"/>');
      if (i % 0x20 === 0x1F) h.push('<br/>');
    }
    my.cont.innerHTML = h.join("");

  }

  return my;
})();
