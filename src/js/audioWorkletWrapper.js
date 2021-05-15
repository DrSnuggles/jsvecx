/***************************************************************************
  DrSnuggles:
    Wrapper for new audio worklet processor
***************************************************************************/
// 'use strict'

function e8910() {
  
  const SOUND_FREQ = 22050,
  SOUND_SAMPLE = 512
  
  this.node = false
  this.msgStack = []
  this.enabled = true
  this.ctx = null
  this.psg = {
    // for virtual chip PIN monitoring
    AnaA: 0,
    AnaB: 0,
    AnaC: 0,
    lastReg: 0,
    lastVal: 0,
    BDir: 0,
    BC1: 0,
  }
  
  this.e8910_write = function(r, v) {
    this.msg('write', r, v)
    this.psg.lastReg = r; // DrSnuggles
    this.psg.lastVal = v; // DrSnuggles
  }

  this.toggleEnabled = function() {
    this.msg('toggleEnabled')
    this.enabled = !this.enabled
    return this.enabled
  }

  /* .. then() way
  this.init = function(regs) {
    this.ctx = new AudioContext()
    this.ctx.audioWorklet.addModule('./js/audioWorkletProcessor.js')
    .then(n => {
      console.log(n)
      this.node = new AudioWorkletNode(this.ctx, 'vecx-audio-processor')
      this.node.port.onmessage = (e) => console.log(e.data) // this way is not used
      this.node.connect(this.ctx.destination)
      
      console.log(this.node)
      
      this.msg('init', this.node)
    })
  }
  */

/* from 8910.js start()
var self = this
if (this.ctx == null && (window.AudioContext || window.webkitAudioContext)) {
  // already precalced self.e8910_build_mixer_table()
  var ctx = window.AudioContext ?
    new window.AudioContext({sampleRate: SOUND_FREQ}) :
    new window.webkitAudioContext()
  this.ctx = ctx
  this.node = this.ctx.createScriptProcessor(SOUND_SAMPLE, 0, 1)
  this.node.onaudioprocess = function(e) {
    self.callback(e.outputBuffer.getChannelData(0), SOUND_SAMPLE)
  }

  // rewire with gain node for volume control
  this.gain = this.ctx.createGain()
  this.node.connect(this.gain)
  this.gain.connect(this.ctx.destination)
  this.gain.gain.value = 0.3

  var resumeFunc =
    function(){if (ctx.state !== 'running') ctx.resume()}
  document.documentElement.addEventListener("keydown", resumeFunc)
  document.documentElement.addEventListener("click", resumeFunc)
  document.documentElement.addEventListener("touchstart", resumeFunc)
}
if (this.ctx) ... ready=true

*/

  // async await way
  this.init = async function(regs) {
    this.ctx = new AudioContext({sampleRate: SOUND_FREQ}) // check which browsers need special care. i.e. do not allow other samplerate
    await this.ctx.audioWorklet.addModule('./js/audioWorkletProcessor.js')
    this.node = new AudioWorkletNode(this.ctx, 'vecx-audio-processor')
    this.node.port.onmessage = (e) => console.log(e.data) // this way is not used
    
    // rewire with gain node for volume control
    this.gain = this.ctx.createGain()
    this.node.connect(this.gain)
    this.gain.connect(this.ctx.destination)
    this.gain.gain.value = 0.3

    console.log(this.ctx, this.node)
    
    this.msg('init', this.node)
  }

  this.start = function() {
    this.msg('start')
  }

  this.stop = function() {
    this.msg('stop')
  }
  
  this.msg = function(cmd,r,v) {
    // msg
    //console.log('send msg', ...args)
    let msg = {
      msg: cmd,
      r: r,
      v: v
    }
    
    try {
      while (this.msgStack.length>0) {
        this.node.port.postMessage( JSON.parse(JSON.stringify(this.msgStack[0])) )
        this.msgStack.shift()
      }
      this.node.port.postMessage( JSON.parse(JSON.stringify(msg)) )
    } catch(e) {
      // not ready yet
      // console.log('new msg stack size:', this.msgStack.length)
      this.msgStack.push( JSON.parse(JSON.stringify(msg)) )
    }
  }
}
