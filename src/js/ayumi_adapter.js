/* JSVecX-Ayumi adapter by: DrSnuggles */

Ayumi.prototype.init = function(regs) {
  this.regs = regs;
  this.ena = true;
  this.running = true;
  // for virtual chip PIN monitoring
  this.psg = {};
  this.psg.AnaA = 0;
  this.psg.AnaB = 0;
  this.psg.AnaC = 0;
  this.psg.lastReg = 0;
  this.psg.lastVal = 0;
  this.psg.BDir = 0;
  this.psg.BC1 = 0;
}
Ayumi.prototype.fillBuffer = function(e) {
  var left = e.outputBuffer.getChannelData(0);
  var right = e.outputBuffer.getChannelData(1);
  //vecx.e8910.updateState();
  if (vecx.e8910.ena && vecx.e8910.running) {
    for(var i = 0; i < left.length; i++) {
      vecx.e8910.process();
      vecx.e8910.removeDC();
      left[i] = vecx.e8910.left;
      right[i] = vecx.e8910.right;
    }
  } else {
    for(var i = 0; i < left.length; i++) {
      left[i] = right[i] = 0;
    }
  }

  return true;
}
Ayumi.prototype.updateState = function() {
  var r = this.regs;
  this.setTone(0, (r[1] << 8) | r[0]);
  this.setTone(1, (r[3] << 8) | r[2]);
  this.setTone(2, (r[5] << 8) | r[4]);
  this.setNoise(r[6]);
  this.setMixer(0, r[7] & 1, (r[7] >> 3) & 1, r[8] >> 4);
  this.setMixer(1, (r[7] >> 1) & 1, (r[7] >> 4) & 1, r[9] >> 4);
  this.setMixer(2, (r[7] >> 2) & 1, (r[7] >> 5) & 1, r[10] >> 4);
  this.setVolume(0, r[8] & 0xf);
  this.setVolume(1, r[9] & 0xf);
  this.setVolume(2, r[10] & 0xf);
  this.setEnvelope((r[12] << 8) | r[11]);
  if (r[13] != 255) {
    this.setEnvelopeShape(r[13]);
  }
}
Ayumi.prototype.start = function(regs) {
  if (!window['ctx']) {
    var sampleRate = 48000;
    var clockRate = Globals.VECTREX_MHZ; // 1500000

    this.configure(false, clockRate, sampleRate);
    // stereo separation
    //this.setPan(0, 0.1, 0);
    //this.setPan(1, 0.5, 0);
    //this.setPan(2, 0.9, 0);

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    window['ctx'] = new AudioContext();

    var audioNode = ctx.createScriptProcessor(4096, 0, 2);
    audioNode.onaudioprocess = this.fillBuffer;
    audioNode.connect(ctx.destination);

    var resumeFunc = function() {
      if (ctx.state !== "running") ctx.resume();
    };
    document.documentElement.addEventListener("keydown", resumeFunc);
    document.documentElement.addEventListener("click", resumeFunc);
  }
  this.running = true;
}
Ayumi.prototype.e8910_write = function(r, v) {
  this.regs[r] = v;
  this.psg.lastReg = r; // for rtm
  this.psg.lastVal = v; // for rtm

  this.updateState();
}
Ayumi.prototype.stop = function() {
  this.running = false;
}
Ayumi.prototype.toggleEnabled = function() {
 this.ena = !this.ena;
 return this.ena;
}
