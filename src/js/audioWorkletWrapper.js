/***************************************************************************
  DrSnuggles:
    Wrapper for new audio worklet processor
***************************************************************************/
// 'use strict'
// preTersered
const inlineWorker = `class VecxAudioProcessor extends AudioWorkletProcessor{constructor(){super(),this.port.onmessage=this.handleMessage_.bind(this),this.psg={index:0,ready:0,lastEnable:0,PeriodA:0,PeriodB:0,PeriodC:0,PeriodN:0,PeriodE:0,CountA:0,CountB:0,CountC:0,CountN:0,CountE:0,VolA:0,VolB:0,VolC:0,VolE:0,EnvelopeA:0,EnvelopeB:0,EnvelopeC:0,OutputA:0,OutputB:0,OutputC:0,OutputN:0,CountEnv:0,Hold:0,Alternate:0,Attack:0,Holding:0,RNG:0,VolTable:[0,23,27,33,39,46,55,65,77,92,109,129,154,183,217,258,307,365,434,516,613,728,865,1029,1223,1453,1727,2052,2439,2899,3446,4095],Regs:new Array(16).fill(0)},this.enabled=!0}init(){this.psg.Regs=new Array(16).fill(0),this.psg.RNG=1,this.psg.OutputA=0,this.psg.OutputB=0,this.psg.OutputC=0,this.psg.OutputN=255,this.psg.ready=1}start(){this.psg.ready=1}stop(){this.psg.ready=0}toggleEnabled(){return this.enabled=!this.enabled,this.enabled}write(s,t){var i;this.psg.Regs[s]=t;const g=13;switch(s){case 0:case 1:this.psg.Regs[1]&=15,i=this.psg.PeriodA,this.psg.PeriodA=1*(this.psg.Regs[0]+256*this.psg.Regs[1]),0==this.psg.PeriodA&&(this.psg.PeriodA=1),this.psg.CountA+=this.psg.PeriodA-i,this.psg.CountA<=0&&(this.psg.CountA=1);break;case 2:case 3:this.psg.Regs[3]&=15,i=this.psg.PeriodB,this.psg.PeriodB=1*(this.psg.Regs[2]+256*this.psg.Regs[3]),0==this.psg.PeriodB&&(this.psg.PeriodB=1),this.psg.CountB+=this.psg.PeriodB-i,this.psg.CountB<=0&&(this.psg.CountB=1);break;case 4:case 5:this.psg.Regs[5]&=15,i=this.psg.PeriodC,this.psg.PeriodC=1*(this.psg.Regs[4]+256*this.psg.Regs[5]),0==this.psg.PeriodC&&(this.psg.PeriodC=1),this.psg.CountC+=this.psg.PeriodC-i,this.psg.CountC<=0&&(this.psg.CountC=1);break;case 6:this.psg.Regs[6]&=31,i=this.psg.PeriodN,this.psg.PeriodN=1*this.psg.Regs[6],0==this.psg.PeriodN&&(this.psg.PeriodN=1),this.psg.CountN+=this.psg.PeriodN-i,this.psg.CountN<=0&&(this.psg.CountN=1);break;case 7:this.psg.lastEnable=this.psg.Regs[7];break;case 8:this.psg.Regs[8]&=31,this.psg.EnvelopeA=16&this.psg.Regs[8],this.psg.VolA=this.psg.EnvelopeA?this.psg.VolE:this.psg.VolTable[this.psg.Regs[8]?2*this.psg.Regs[8]+1:0];break;case 9:this.psg.Regs[9]&=31,this.psg.EnvelopeB=16&this.psg.Regs[9],this.psg.VolB=this.psg.EnvelopeB?this.psg.VolE:this.psg.VolTable[this.psg.Regs[9]?2*this.psg.Regs[9]+1:0];break;case 10:this.psg.Regs[10]&=31,this.psg.EnvelopeC=16&this.psg.Regs[10],this.psg.VolC=this.psg.EnvelopeC?this.psg.VolE:this.psg.VolTable[this.psg.Regs[10]?2*this.psg.Regs[10]+1:0];break;case 11:case 12:i=this.psg.PeriodE,this.psg.PeriodE=1*(this.psg.Regs[11]+256*this.psg.Regs[12]),0==this.psg.PeriodE&&(this.psg.PeriodE=1),this.psg.CountE+=this.psg.PeriodE-i,this.psg.CountE<=0&&(this.psg.CountE=1);break;case g:this.psg.Regs[13]&=15,this.psg.Attack=4&this.psg.Regs[13]?31:0,0==(8&this.psg.Regs[13])?(this.psg.Hold=1,this.psg.Alternate=this.psg.Attack):(this.psg.Hold=1&this.psg.Regs[13],this.psg.Alternate=2&this.psg.Regs[13]),this.psg.CountE=this.psg.PeriodE,this.psg.CountEnv=31,this.psg.Holding=0,this.psg.VolE=this.psg.VolTable[this.psg.CountEnv^this.psg.Attack],this.psg.EnvelopeA&&(this.psg.VolA=this.psg.VolE),this.psg.EnvelopeB&&(this.psg.VolB=this.psg.VolE),this.psg.EnvelopeC&&(this.psg.VolC=this.psg.VolE)}}callback(s,t){var i=0,g=0;for(t<<=1,1&this.psg.Regs[7]?(this.psg.CountA<=t&&(this.psg.CountA+=t),this.psg.OutputA=1):0==this.psg.Regs[8]&&this.psg.CountA<=t&&(this.psg.CountA+=t),2&this.psg.Regs[7]?(this.psg.CountB<=t&&(this.psg.CountB+=t),this.psg.OutputB=1):0==this.psg.Regs[9]&&this.psg.CountB<=t&&(this.psg.CountB+=t),4&this.psg.Regs[7]?(this.psg.CountC<=t&&(this.psg.CountC+=t),this.psg.OutputC=1):0==this.psg.Regs[10]&&this.psg.CountC<=t&&(this.psg.CountC+=t),56==(56&this.psg.Regs[7])&&this.psg.CountN<=t&&(this.psg.CountN+=t),g=this.psg.OutputN|this.psg.Regs[7];t>0;){var p,h,e,o,u=2;h=e=o=0;do{var n;if(n=this.psg.CountN<u?this.psg.CountN:u,8&g){for(this.psg.OutputA&&(h+=this.psg.CountA),this.psg.CountA-=n;this.psg.CountA<=0;){if(this.psg.CountA+=this.psg.PeriodA,this.psg.CountA>0){this.psg.OutputA^=1,this.psg.OutputA&&(h+=this.psg.PeriodA);break}this.psg.CountA+=this.psg.PeriodA,h+=this.psg.PeriodA}this.psg.OutputA&&(h-=this.psg.CountA)}else for(this.psg.CountA-=n;this.psg.CountA<=0;){if(this.psg.CountA+=this.psg.PeriodA,this.psg.CountA>0){this.psg.OutputA^=1;break}this.psg.CountA+=this.psg.PeriodA}if(16&g){for(this.psg.OutputB&&(e+=this.psg.CountB),this.psg.CountB-=n;this.psg.CountB<=0;){if(this.psg.CountB+=this.psg.PeriodB,this.psg.CountB>0){this.psg.OutputB^=1,this.psg.OutputB&&(e+=this.psg.PeriodB);break}this.psg.CountB+=this.psg.PeriodB,e+=this.psg.PeriodB}this.psg.OutputB&&(e-=this.psg.CountB)}else for(this.psg.CountB-=n;this.psg.CountB<=0;){if(this.psg.CountB+=this.psg.PeriodB,this.psg.CountB>0){this.psg.OutputB^=1;break}this.psg.CountB+=this.psg.PeriodB}if(32&g){for(this.psg.OutputC&&(o+=this.psg.CountC),this.psg.CountC-=n;this.psg.CountC<=0;){if(this.psg.CountC+=this.psg.PeriodC,this.psg.CountC>0){this.psg.OutputC^=1,this.psg.OutputC&&(o+=this.psg.PeriodC);break}this.psg.CountC+=this.psg.PeriodC,o+=this.psg.PeriodC}this.psg.OutputC&&(o-=this.psg.CountC)}else for(this.psg.CountC-=n;this.psg.CountC<=0;){if(this.psg.CountC+=this.psg.PeriodC,this.psg.CountC>0){this.psg.OutputC^=1;break}this.psg.CountC+=this.psg.PeriodC}this.psg.CountN-=n,this.psg.CountN<=0&&(this.psg.RNG+1&2&&(this.psg.OutputN=255&~this.psg.OutputN,g=this.psg.OutputN|this.psg.Regs[7]),1&this.psg.RNG&&(this.psg.RNG^=147456),this.psg.RNG>>=1,this.psg.CountN+=this.psg.PeriodN),u-=n}while(u>0);if(0==this.psg.Holding&&(this.psg.CountE-=2,this.psg.CountE<=0)){do{this.psg.CountEnv--,this.psg.CountE+=this.psg.PeriodE}while(this.psg.CountE<=0);this.psg.CountEnv<0&&(this.psg.Hold?(this.psg.Alternate&&(this.psg.Attack^=31),this.psg.Holding=1,this.psg.CountEnv=0):(this.psg.Alternate&&32&this.psg.CountEnv&&(this.psg.Attack^=31),this.psg.CountEnv&=31)),this.psg.VolE=this.psg.VolTable[this.psg.CountEnv^this.psg.Attack],this.psg.EnvelopeA&&(this.psg.VolA=this.psg.VolE),this.psg.EnvelopeB&&(this.psg.VolB=this.psg.VolE),this.psg.EnvelopeC&&(this.psg.VolC=this.psg.VolE)}if(this.psg.AnaA=h*this.psg.VolA,this.psg.AnaB=e*this.psg.VolB,this.psg.AnaC=o*this.psg.VolC,p=(h*this.psg.VolA+e*this.psg.VolB+o*this.psg.VolC)/6,1&--t){var C=p/4095;s[i++]=C}}}handleMessage_(s){switch(s.data.msg){case"init":this.init();break;case"start":this.start();break;case"stop":this.stop();break;case"toggleMute":return this.toggleEnabled();case"write":this.write(s.data.r,s.data.v)}}process(s,t,i){return this.firstRun||(this.firstRun=!0),this.psg.ready&&this.callback(t[0][0],t[0][0].length),!0}}registerProcessor("vecx-audio-processor",VecxAudioProcessor);`

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
    let ctx = new AudioContext({sampleRate: SOUND_FREQ})
    this.ctx = ctx
    /*
    await this.ctx.audioWorklet.addModule('./js/audioWorkletProcessor.js')
    this.node = new AudioWorkletNode(this.ctx, 'vecx-audio-processor')
    */

    const blob = new Blob([inlineWorker], {type: "application/javascript"})
    let url = URL.createObjectURL(blob)
    /*
    this.ctx.audioWorklet.addModule(url).then(() => {
      var node = new AudioWorkletNode(this.ctx, 'vecx-audio-processor');
    })
    */
    await this.ctx.audioWorklet.addModule(url)
    this.node = new AudioWorkletNode(this.ctx, 'vecx-audio-processor');


    // message port
    this.node.port.onmessage = (e) => console.log(e.data) // this direction is not used
    
    // rewire with gain node for volume control
    this.gain = this.ctx.createGain()
    this.node.connect(this.gain)
    this.gain.connect(this.ctx.destination)
    this.gain.gain.value = 0.3

    var resumeFunc = function(){if (ctx.state !== 'running') ctx.resume()}
    document.documentElement.addEventListener("keydown", resumeFunc)
    document.documentElement.addEventListener("click", resumeFunc)
    document.documentElement.addEventListener("touchstart", resumeFunc)

    //console.log(this.ctx, this.node)
    
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
