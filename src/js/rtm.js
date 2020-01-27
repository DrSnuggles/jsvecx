// Memory Map
// http://www.playvectrex.com/designit/chrissalo/memorymap.htm
// 0000-7FFF CART
// 8000-C7FF Unmapped space
// C800-CFFF RAM 1Kx8
  // C800-C880 Vectrex housekeeping
  // C880-CBEA RAM that can be used by the programmer!
  // CBEA-CBFE Vectrex housekeeping
// D000-D7FF VIA
// D800-DFFF VIA/RAM
// E000-FFFF ROM 8Kx8

var myChipMon = (function() {
  var my = {};

  //
  // init
  //
  loadHead("style", "css/rtm.css", function() {
    xhr("overlay_rtm.html", function(txt) {
      document.body.insertAdjacentHTML("beforeend", txt);
      setTimeout(function(){
        document.getElementById("rtm6809").classList.add("fadeIn");
        document.getElementById("rtm8912").classList.add("fadeIn");
        document.getElementById("rtm6522").classList.add("fadeIn");
        document.getElementById("rtmROMRAM").classList.add("fadeIn");
        requestAnimationFrame(myChipMon.doLoop);
      },50);
    });
  });

  //
  // external functions
  //
  my.doLoop = function() {
    requestAnimationFrame(my.doLoop);
    if (vecx.e8910.psg.VolA == vecx.e8910.psg.VolA*1) {
      rtm6809(); // CPU
      rtm8912(); // PSG
      rtm6522(); // VIA
      rtm2363(); // ROM
      rtm2114a(); // ROM1
      rtm2114b(); // ROM2
      rtmCart(); // CART
      rtm1408(); // DA
      rtm4052(); // DualMultiplexer
    }
  }

  //
  // helper functions
  //
  function prtHex(num) {
    return num.toString(16).toUpperCase();
  }
  function prtBin(state) {
    return state ? "ON" : "OFF";
  }
  function prtCol(color) {
    color = Math.min(color, 4095);
    color = prtHex(color);
    color = pad(color, 3);
    return '#'+ color;
  }
  function pad(num, size) { // ECMA2017 outdated https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
  /*
  function pad( // https://gist.github.com/aemkei/1180489
    a, // the number to convert
    b // number of resulting characters
  ){
    return (
      1e15 + a + // combine with large number
      "" // convert to string
    ).slice(-b) // cut leading "1"
  }
  */
  function rtm6809() {
    //
    // CPU : Motorola 6809A
    //
    var mc = vecx.e6809;
    rtm_6809_reg_pc.innerText = prtHex(mc.reg_pc);
    rtm_6809_reg_a.innerText = prtHex(mc.reg_a);
    rtm_6809_reg_b.innerText = prtHex(mc.reg_b);
    rtm_6809_reg_dp.innerText = prtHex(mc.reg_dp);
    rtm_6809_reg_cc.innerText = prtHex(mc.reg_cc);
    rtm_6809_reg_x.innerText = prtHex(mc.reg_x.value);
    rtm_6809_reg_y.innerText = prtHex(mc.reg_y.value);
    rtm_6809_reg_u.innerText = prtHex(mc.reg_u.value);
    rtm_6809_reg_s.innerText = prtHex(mc.reg_s.value);

    //rtm_6809_irq_status.innerText = prtHex(mc.irq_status);

    //
    // 6809A PIN layout
    //
    var rtm = vecx.rtm;
    (vecx.e8910.psg.ready) ? rtm_6809_pin_Res.classList.add("set") : rtm_6809_pin_Res.classList.remove("set");
    (rtm.lastRW) ? rtm_6809_pin_RW.classList.add("set") : rtm_6809_pin_RW.classList.remove("set");
    var bits = rtm.lastAbsAdr;
    for (var i = 0; i < 16; i++) {
      (bits & (1 << i)) ? document.getElementById('rtm_6809_pin_A'+i).classList.add("set") : document.getElementById('rtm_6809_pin_A'+i).classList.remove("set");
    }
    bits = rtm.lastVal;
    for (var i = 0; i < 8; i++) {
      (bits & (1 << i)) ? document.getElementById('rtm_6809_pin_D'+i).classList.add("set") : document.getElementById('rtm_6809_pin_D'+i).classList.remove("set");
    }
    // E = Clk
    (rtm.clk) ? rtm_6809_pin_E.classList.add("set") : rtm_6809_pin_E.classList.remove("set");
    // FIRQ
    (vecx.shadow_snd_regs14 & (1 << 3)) ? rtm_6809_pin_FIRQ.classList.add("set") : rtm_6809_pin_FIRQ.classList.remove("set");


  }
  function rtm8912() {
    //
    // Sound / IO : AY-3-8912 variant used in vectrex
    //
    var psg = vecx.e8910.psg;
    rtm_8912_tpA.innerText = prtHex(psg.PeriodA);
    rtm_8912_tpB.innerText = prtHex(psg.PeriodB);
    rtm_8912_tpC.innerText = prtHex(psg.PeriodC);
    rtm_8912_tcA.innerText = prtHex(psg.CountA);
    rtm_8912_tcB.innerText = prtHex(psg.CountB);
    rtm_8912_tcC.innerText = prtHex(psg.CountC);
    rtm_8912_vA.innerText = prtHex(psg.VolA);
    rtm_8912_vB.innerText = prtHex(psg.VolB);
    rtm_8912_vC.innerText = prtHex(psg.VolC);
    rtm_8912_tbA.innerText = prtBin(psg.OutputA);
    rtm_8912_tbB.innerText = prtBin(psg.OutputB);
    rtm_8912_tbC.innerText = prtBin(psg.OutputC);
    // Noise
    rtm_8912_np.innerText = prtHex(psg.PeriodN);
    rtm_8912_nc.innerText = prtHex(psg.CountN);
    rtm_8912_nr.innerText = prtHex(psg.RNG);
    rtm_8912_nb.innerText = prtBin(psg.OutputN);
    // Envelope
    rtm_8912_ep.innerText = prtHex(psg.PeriodE);
    rtm_8912_ec.innerText = prtHex(psg.CountE);
    rtm_8912_ea.innerText = prtHex(psg.VolE);
    rtm_8912_eA.innerText = prtHex(psg.EnvelopeA);
    rtm_8912_eB.innerText = prtHex(psg.EnvelopeB);
    rtm_8912_eC.innerText = prtHex(psg.EnvelopeC);

    //
    // 8912 PIN layout
    //
    // right controller = playerA IO0 - IO3
    var bits = vecx.shadow_snd_regs14;
    (bits & (1 << 0)) ? rtm_8912_pin_IOA0.classList.add("set") : rtm_8912_pin_IOA0.classList.remove("set");
    (bits & (1 << 1)) ? rtm_8912_pin_IOA1.classList.add("set") : rtm_8912_pin_IOA1.classList.remove("set");
    (bits & (1 << 2)) ? rtm_8912_pin_IOA2.classList.add("set") : rtm_8912_pin_IOA2.classList.remove("set");
    (bits & (1 << 3)) ? rtm_8912_pin_IOA3.classList.add("set") : rtm_8912_pin_IOA3.classList.remove("set");
    (bits & (1 << 4)) ? rtm_8912_pin_IOA4.classList.add("set") : rtm_8912_pin_IOA4.classList.remove("set");
    (bits & (1 << 5)) ? rtm_8912_pin_IOA5.classList.add("set") : rtm_8912_pin_IOA5.classList.remove("set");
    (bits & (1 << 6)) ? rtm_8912_pin_IOA6.classList.add("set") : rtm_8912_pin_IOA6.classList.remove("set");
    (bits & (1 << 7)) ? rtm_8912_pin_IOA7.classList.add("set") : rtm_8912_pin_IOA7.classList.remove("set");

    // Analog PINs
    rtm_8912_pin_AnaA.style.backgroundColor = prtCol(psg.AnaA);
    rtm_8912_pin_AnaB.style.backgroundColor = prtCol(psg.AnaB);
    rtm_8912_pin_AnaC.style.backgroundColor = prtCol(psg.AnaC);
    // /Reset
    (psg.ready) ? rtm_8912_pin_Res.classList.add("set") : rtm_8912_pin_Res.classList.remove("set");
    // BDir / BC1 / BC2
    (psg.BDir) ? rtm_8912_pin_BDir.classList.add("set") : rtm_8912_pin_BDir.classList.remove("set");
    (psg.BC1) ? rtm_8912_pin_BC1.classList.add("set") : rtm_8912_pin_BC1.classList.remove("set");

    // Registers
    bits = psg.lastVal;
    (bits & (1 << 0)) ? rtm_8912_pin_DA0.classList.add("set") : rtm_8912_pin_DA0.classList.remove("set");
    (bits & (1 << 1)) ? rtm_8912_pin_DA1.classList.add("set") : rtm_8912_pin_DA1.classList.remove("set");
    (bits & (1 << 2)) ? rtm_8912_pin_DA2.classList.add("set") : rtm_8912_pin_DA2.classList.remove("set");
    (bits & (1 << 3)) ? rtm_8912_pin_DA3.classList.add("set") : rtm_8912_pin_DA3.classList.remove("set");
    (bits & (1 << 4)) ? rtm_8912_pin_DA4.classList.add("set") : rtm_8912_pin_DA4.classList.remove("set");
    (bits & (1 << 5)) ? rtm_8912_pin_DA5.classList.add("set") : rtm_8912_pin_DA5.classList.remove("set");
    (bits & (1 << 6)) ? rtm_8912_pin_DA6.classList.add("set") : rtm_8912_pin_DA6.classList.remove("set");
    (bits & (1 << 7)) ? rtm_8912_pin_DA7.classList.add("set") : rtm_8912_pin_DA7.classList.remove("set");

    (vecx.rtm.clk) ? rtm_8912_pin_Clk.classList.add("set") : rtm_8912_pin_Clk.classList.remove("set");
  }
  function rtm6522() {
    // VIA : MOS 6522A
    var rtm = vecx.rtm;
    (vecx.e8910.psg.ready) ? rtm_6522_pin_Res.classList.add("set") : rtm_6522_pin_Res.classList.remove("set");
    (rtm.lastRW) ? rtm_6522_pin_RW.classList.add("set") : rtm_6522_pin_RW.classList.remove("set");
    (rtm.clk) ? rtm_6522_pin_Clk.classList.add("set") : rtm_6522_pin_Clk.classList.remove("set");
    if (rtm.lastTyp === "via") {
      rtm_6522_pin_CE.classList.add("set");
      var bits = rtm.lastAdr;
      for (var i = 0; i < 4; i++) {
        (bits & (1 << i)) ? document.getElementById('rtm_6522_pin_A'+i).classList.add("set") : document.getElementById('rtm_6522_pin_A'+i).classList.remove("set");
      }
      bits = rtm.lastVal;
      for (var i = 0; i < 8; i++) {
        (bits & (1 << i)) ? document.getElementById('rtm_6522_pin_D'+i).classList.add("set") : document.getElementById('rtm_6522_pin_D'+i).classList.remove("set");
      }
    } else {
      // clear
      //rtm_6522_pin_RW.classList.remove("set");
      rtm_6522_pin_CE.classList.remove("set");
      for (var i = 0; i < 8; i++) {
        document.getElementById('rtm_6522_pin_D'+i).classList.remove("set");
        (i < 4) ? document.getElementById('rtm_6522_pin_A'+i).classList.remove("set") : false;
      }
    }
    // CA1
    if (vecx.via_ca1) {
      rtm_6522_pin_CA1.classList.add("set");
    } else {
      rtm_6522_pin_CA1.classList.remove("set");
    }
  }
  function rtm4052() {
    // Analog Device 4052B
    // joystick axis
    rtm_4052_pin_In2A.style.backgroundColor = prtCol(vecx.alg_jch0+128);
    rtm_4052_pin_In2B.style.backgroundColor = prtCol(vecx.alg_jch1+128);
    rtm_4052_pin_In2C.style.backgroundColor = prtCol(vecx.alg_jch2+128);
    rtm_4052_pin_In2D.style.backgroundColor = prtCol(vecx.alg_jch3+128);
    rtm_4052_pin_Out2.style.backgroundColor = prtCol(vecx.alg_compare+128);
    rtm_4052_pin_Out1A.style.backgroundColor = prtCol(vecx.alg_rsh+128);
    rtm_4052_pin_Out1B.style.backgroundColor = prtCol(vecx.alg_xsh+128);
    rtm_4052_pin_Out1C.style.backgroundColor = prtCol(vecx.alg_ysh+128);
    rtm_4052_pin_Out1D.style.backgroundColor = prtCol(vecx.alg_zsh+128);
  }
  function rtm1408() {
    // Digital Analog Converter
  }
  function rtm2363() {
    // ROM
    var rtm = vecx.rtm;
    if (rtm.lastTyp === "rom") {
      rtm_2363_pin_CE.classList.remove("set");
      rtm_2363_pin_OE.classList.remove("set");
      var bits = rtm.lastAdr;
      for (var i = 0; i < 13; i++) {
        (bits & (1 << i)) ? document.getElementById('rtm_2363_pin_A'+i).classList.add("set") : document.getElementById('rtm_2363_pin_A'+i).classList.remove("set");
      }
      bits = rtm.lastVal;
      for (var i = 0; i < 8; i++) {
        (bits & (1 << i)) ? document.getElementById('rtm_2363_pin_D'+i).classList.add("set") : document.getElementById('rtm_2363_pin_D'+i).classList.remove("set");
      }
    } else {
      // clear
      rtm_2363_pin_CE.classList.add("set");
      rtm_2363_pin_OE.classList.add("set");
      for (var i = 0; i < 13; i++) {
        document.getElementById('rtm_2363_pin_A'+i).classList.remove("set");
        (i < 8) ? document.getElementById('rtm_2363_pin_D'+i).classList.remove("set") : false;
      }
    }

  }
  function rtm2114a() {
    // RAM
    var rtm = vecx.rtm;
    (rtm.lastRW) ? rtm_2114a_pin_RW.classList.add("set") : rtm_2114a_pin_RW.classList.remove("set");
    if (rtm.lastTyp === "ram" && rtm.lastAdr < 0x200) {
      rtm_2114a_pin_CE.classList.remove("set");
      var bits = rtm.lastAdr;
      for (var i = 0; i < 10; i++) {
        (bits & (1 << i)) ? document.getElementById('rtm_2114a_pin_A'+i).classList.add("set") : document.getElementById('rtm_2114a_pin_A'+i).classList.remove("set");
      }
      bits = rtm.lastVal;
      for (var i = 0; i < 4; i++) {
        (bits & (1 << i)) ? document.getElementById('rtm_2114a_pin_IO'+(i+1)).classList.add("set") : document.getElementById('rtm_2114a_pin_IO'+(i+1)).classList.remove("set");
      }
    } else {
      // clear
      //rtm_2114a_pin_RW.classList.remove("set");
      rtm_2114a_pin_CE.classList.add("set");
      for (var i = 0; i < 10; i++) {
        document.getElementById('rtm_2114a_pin_A'+i).classList.remove("set");
        (i < 4) ? document.getElementById('rtm_2114a_pin_IO'+(i+1)).classList.remove("set") : false;
      }
    }

  }
  function rtm2114b() {
    // RAM
    var rtm = vecx.rtm;
    (rtm.lastRW) ? rtm_2114b_pin_RW.classList.add("set") : rtm_2114b_pin_RW.classList.remove("set");
    if (rtm.lastTyp === "ram" && rtm.lastAdr > 0x1FF) {
      rtm_2114b_pin_CE.classList.remove("set");
      var bits = rtm.lastAdr - 0x1FF;
      for (var i = 0; i < 10; i++) {
        (bits & (1 << i)) ? document.getElementById('rtm_2114b_pin_A'+i).classList.add("set") : document.getElementById('rtm_2114b_pin_A'+i).classList.remove("set");
      }
      bits = rtm.lastVal;
      for (var i = 0; i < 4; i++) {
        (bits & (1 << i)) ? document.getElementById('rtm_2114b_pin_IO'+(i+1)).classList.add("set") : document.getElementById('rtm_2114b_pin_IO'+(i+1)).classList.remove("set");
      }
    } else {
      // clear
      //rtm_2114b_pin_RW.classList.remove("set");
      rtm_2114b_pin_CE.classList.add("set");
      for (var i = 0; i < 10; i++) {
        document.getElementById('rtm_2114b_pin_A'+i).classList.remove("set");
        (i < 4) ? document.getElementById('rtm_2114b_pin_IO'+(i+1)).classList.remove("set") : false;
      }
    }
  }
  function rtmCart() {
    // CART
  }

  return my;
})();
