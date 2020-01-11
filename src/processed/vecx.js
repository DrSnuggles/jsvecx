/*
JSVecX : JavaScript port of the VecX emulator by raz0red.
         Copyright (C) 2010-2019 raz0red

The original C version was written by Valavan Manohararajah
(http://valavan.net/vectrex.html).
*/

/*
  Emulation of the AY-3-8910 / YM2149 sound chip.

  Based on various code snippets by Ville Hallik, Michael Cuddy,
  Tatsuyuki Satoh, Fabrice Frances, Nicola Salmoria.
*/

/*
// Malban
// regardless of interrup, the t1pb7 is set when timer expired
// changed for VectorPatrol 13.01.2018, string print routine
// via_t1on and via_t1on are not allowed to go "off" - timers are ALWAYS running!
Vectorblade loop scheint im spiel bei & 0x40 stecken zu bleiben - also wait recal
*/

function VecX()
{
    // Create the system components

    this.osint = new osint();
    this.e6809 = new e6809();
    this.e8910 = new Ayumi();

    /* Memory */

    //unsigned char rom[8192];
    this.rom = new Array(0x2000);
    utils.initArray(this.rom, 0);
    //unsigned char cart[32768];
    this.cart = new Array(0x10000*4); // Malban
    utils.initArray(this.cart, 0);
    //static unsigned char ram[1024];
    this.ram = new Array(0x400);
    utils.initArray(this.ram, 0);

    /* the sound chip registers */

    //unsigned snd_regs[16];
    this.snd_regs = new Array(16);
    this.e8910.init(this.snd_regs);

    //static unsigned snd_select;
    this.snd_select = 0;

    /* the via 6522 registers */

    //static unsigned via_ora;
    this.via_ora = 0;
    //static unsigned via_orb;
    this.via_orb = 0;
    //static unsigned via_ddra;
    this.via_ddra = 0;
    //static unsigned via_ddrb;
    this.via_ddrb = 0;
    //static unsigned via_t1on;  /* is timer 1 on? */
    this.via_t1on = 0;
    //static unsigned via_t1int; /* are timer 1 interrupts allowed? */
    this.via_t1int = 0;
    //static unsigned via_t1c;
    this.via_t1c = 0;
    //static unsigned via_t1ll;
    this.via_t1ll = 0;
    //static unsigned via_t1lh;
    this.via_t1lh = 0;
    //static unsigned via_t1pb7; /* timer 1 controlled version of pb7 */
    this.via_t1pb7 = 0;
    //static unsigned via_t2on;  /* is timer 2 on? */
    this.via_t2on = 0;
    //static unsigned via_t2int; /* are timer 2 interrupts allowed? */
    this.via_t2int = 0;
    //static unsigned via_t2c;
    this.via_t2c = 0;
    //static unsigned via_t2ll;
    this.via_t2ll = 0;
    //static unsigned via_sr;
    this.via_sr = 0;
    //static unsigned via_srb;   /* number of bits shifted so far */
    this.via_srb = 0;
    //static unsigned via_src;   /* shift counter */
    this.via_src = 0;
    //static unsigned via_srclk;
    this.via_srclk = 0;
    //static unsigned via_acr;
    this.via_acr = 0;
    //static unsigned via_pcr;
    this.via_pcr = 0;
    //static unsigned via_ifr;
    this.via_ifr = 0;
    //static unsigned via_ier;
    this.via_ier = 0;
    //static unsigned via_ca2;
    this.via_ca2 = 0;
    //static unsigned via_cb2h;  /* basic handshake version of cb2 */
    this.via_cb2h = 0;
    //static unsigned via_cb2s;  /* version of cb2 controlled by the shift register */
    this.via_cb2s = 0;

    /* analog devices */

    //static unsigned alg_rsh;  /* zero ref sample and hold */
    this.alg_rsh = 0;
    //static unsigned alg_xsh;  /* x sample and hold */
    this.alg_xsh = 0;
    //static unsigned alg_ysh;  /* y sample and hold */
    this.alg_ysh = 0;
    //static unsigned alg_zsh;  /* z sample and hold */
    this.alg_zsh = 0;
    //unsigned alg_jch0;		  /* joystick direction channel 0 */
    this.alg_jch0 = 0;
    //unsigned alg_jch1;		  /* joystick direction channel 1 */
    this.alg_jch1 = 0;
    //unsigned alg_jch2;		  /* joystick direction channel 2 */
    this.alg_jch2 = 0;
    //unsigned alg_jch3;		  /* joystick direction channel 3 */
    this.alg_jch3 = 0;
    //static unsigned alg_jsh;  /* joystick sample and hold */
    this.alg_jsh = 0;

    //static unsigned alg_compare;
    this.alg_compare = 0;

    //static long alg_dx;     /* delta x */
    this.alg_dx = 0;
    //static long alg_dy;     /* delta y */
    this.alg_dy = 0;
    //static long alg_curr_x; /* current x position */
    this.alg_curr_x = 0.00; // Malban
    //static long alg_curr_y; /* current y position */
    this.alg_curr_y = 0.00; // Malban

    this.alg_max_x = Globals.ALG_MAX_X >> 1;
    this.alg_max_y = Globals.ALG_MAX_Y >> 1;

    //static unsigned alg_vectoring; /* are we drawing a vector right now? */
    this.alg_vectoring = 0;
    //static long alg_vector_x0;
    this.alg_vector_x0 = 0;
    //static long alg_vector_y0;
    this.alg_vector_y0 = 0;
    //static long alg_vector_x1;
    this.alg_vector_x1 = 0;
    //static long alg_vector_y1;
    this.alg_vector_y1 = 0;
    //static long alg_vector_dx;
    this.alg_vector_dx = 0;
    //static long alg_vector_dy;
    this.alg_vector_dy = 0;
    //static unsigned char alg_vector_color;
    this.alg_vector_color = 0;

    //long vector_draw_cnt;
    this.vector_draw_cnt = 0;
    //long vector_erse_cnt;
    this.vector_erse_cnt = 0;

    //static vector_t vectors_set[2 * VECTOR_CNT];
    //this.vectors_set = new Array(2 * Globals.VECTOR_CNT);

    //vector_t *vectors_draw;
    this.vectors_draw = new Array(Globals.VECTOR_CNT);

    //vector_t *vectors_erse;
    this.vectors_erse = new Array(Globals.VECTOR_CNT);

    //static long vector_hash[VECTOR_HASH];
    this.vector_hash = new Array(Globals.VECTOR_HASH);
    utils.initArray(this.vector_hash, 0);

    //static long fcycles;
    this.fcycles = 0;

    // DrSnuggles: added for monitoring
    this.rtm = {
      lastAdr: 0,
      lastAbsAdr: 0,
      lastVal: 0,
      lastTyp: "rom",
      lastRW: 1,
      clk: 0,
    };
    this.doBankSwitching = false; // for Malban's Patch

    // Malban
    this.alternate = 0;
    this.currentBank = 0;
    this.currentIRQ = 1;
    this.currentPB6 = 1;
    this.BANK_MAX = 1;
    this.zero0CountDown = 0;
    this.zero1CountDown = 0;
    this.ZERO_DELAY = 5;

    this.rampOnCountDown = 0;
    this.rampOffCountDown = 0;
    this.oldSigRamp = 1;

    this.RAMP_ON_DELAY = 3;
    this.RAMP_OFF_DELAY = 3;
    this.realSigRamp = 1;

    this.resistorOhm = 175;
    this.capacitorFarad = 0.00000001;

    this.currentVoltage=0;
    this.supplyVoltage=0;
    this.timeConstant = this.resistorOhm*this.capacitorFarad;

    this.VECTREX_CYCLE_TIME = 1.0/1500000.0;
    this.percentageDifChangePerCycle = Math.exp(-this.VECTREX_CYCLE_TIME/this.timeConstant);

  	this.getIntVoltageValue = function()
    {
        return this.currentVoltage;
    }
    this.getVoltageValue = function()
    {
        return this.currentVoltage;
    }
    this.getDigitalValue = function()
    {
        return this.currentVoltage/5.0*128.0;
    }
    this.getDigitalIntValue = function()
    {
        return this.currentVoltage/5.0*128.0;
    }

    this.doStep = function()
    {
        var charging = (Math.abs(this.currentVoltage) < Math.abs(this.supplyVoltage));
        var dif = this.supplyVoltage - this.currentVoltage;
        if (charging)
        {
            this.currentVoltage += this.percentageDifChangePerCycle*dif;
        }
        else
        {
            this.currentVoltage += this.percentageDifChangePerCycle*dif;
        }
    }
    // -128 - +127
    this.setDigitalVoltage = function(v)
    {
        if (v<=127)
        {
            this.supplyVoltage = (v/127.0)*5.0;
        }
        else
        {
            this.supplyVoltage = ((v-256)/128.0)*5.0;
        }
    }
    this.setBank = function()
  	{
  		this.currentBank = 0;
  		if (this.BANK_MAX == 1) return;
  		if (this.BANK_MAX >= 2)
  		{
  			if (this.currentPB6) this.currentBank++;
  		}
  		if (this.BANK_MAX >= 4)
  		{
  			if (this.currentIRQ) this.currentBank+=2;
  		}
  	}
  	this.setPB6FromVectrex = function(tobe_via_orb, tobe_via_ddrb, orbInitiated)
    {
  		if (this.BANK_MAX <= 1) return;
      var b=0;

      var npb6 = tobe_via_orb & tobe_via_ddrb & 0x40; // all output (0x40)
      if ((tobe_via_ddrb & 0x40) == 0x00)  npb6 = npb6 | 0x40; // all input (0x40)
      b = npb6 != 0;

  		this.currentPB6 = npb6 != 0;
  		this.setBank();
    }
    this.setIRQFromVectrex = function(irq)
    {
  		if (this.BANK_MAX <= 2) return;
      this.currentIRQ = !irq;
  		this.setBank();
    }

    /* update the snd chips internal registers when via_ora/via_orb changes */

    //static einline void snd_update (void)
    this.snd_update = function()
    {
        switch( this.via_orb & 0x18 )
        {
            case 0x00:
                /* the sound chip is disabled */
                this.e8910.psg.BDir = 0; // DrSnuggles
                this.e8910.psg.BC1 = 0; // DrSnuggles
                break;
            case 0x08:
                /* the sound chip is sending data */
                this.e8910.psg.BDir = 0; // DrSnuggles
                this.e8910.psg.BC1 = 1; // DrSnuggles
                break;
            case 0x10:
                /* the sound chip is recieving data */
                this.e8910.psg.BDir = 1; // DrSnuggles
                this.e8910.psg.BC1 = 0; // DrSnuggles

                if( this.snd_select != 14 )
                {
                    this.snd_regs[this.snd_select] = this.via_ora;
                    this.e8910.e8910_write(this.snd_select, this.via_ora);
                }
                break;
            case 0x18:
                /* the sound chip is latching an address */
                this.e8910.psg.BDir = 1; // DrSnuggles
                this.e8910.psg.BC1 = 1; // DrSnuggles

                if( (this.via_ora & 0xf0) == 0x00 )
                {
                    this.snd_select = this.via_ora & 0x0f;
                }
                break;
        }
    }

    /* update the various analog values when orb is written. */

    //static einline void alg_update (void)
    this.alg_update = function()
    {
        switch( this.via_orb & 0x06 )
        {
            case 0x00:
                this.alg_jsh = this.alg_jch0;

                if( (this.via_orb & 0x01) == 0x00 )
                {
                    /* demultiplexor is on */
                    this.alg_ysh = this.alg_xsh ^ 0x80; // Malban
                }

                break;
            case 0x02:
                this.alg_jsh = this.alg_jch1;

                if( (this.via_orb & 0x01) == 0x00 )
                {
                    /* demultiplexor is on */
                    //this.alg_rsh = this.alg_xsh;
                    //this.alg_rsh = this.alg_xsh ^ 0x80;
                   // Malban
                   var digit = this.alg_xsh ^ 0x80;
                   if (digit > 127) digit = 0-(256-digit);

                   this.alg_rsh = digit;
                   this.setDigitalVoltage(digit);
                }

                break;
            case 0x04:
                this.alg_jsh = this.alg_jch2;

                if( (this.via_orb & 0x01) == 0x00 )
                {
                    /* demultiplexor is on */

                    if( this.alg_xsh > 0x80 )
                    {
                        this.alg_zsh = this.alg_xsh - 0x80;
                    }
                    else
                    {
                        this.alg_zsh = 0;
                    }
                }

                break;
            case 0x06:
                /* sound output line */
                this.alg_jsh = this.alg_jch3;
                break;
        }

        /* compare the current joystick direction with a reference */

        if( this.alg_jsh > this.alg_xsh )
        {
            this.alg_compare = 0x20;
        }
        else
        {
            this.alg_compare = 0;
        }

        /* compute the new "deltas" */
        //this.alg_dx = this.alg_xsh - this.alg_rsh;
        //this.alg_dy = this.alg_rsh - this.alg_ysh;

        // Malban
       var digitx = this.alg_xsh ^ 0x80;
       if (digitx > 127) digitx = 0-(256-digitx);

       var digity = this.alg_ysh;
       if (digity > 127) digity = 0-(256-digity);

       this.alg_dx = digitx - this.getDigitalValue();
       this.alg_dy = this.getDigitalValue() - digity;

      //        this.alg_dx = digitx - this.alg_rsh;
      //        this.alg_dy = this.alg_rsh - digity;

    }

    /*
    * update IRQ and bit-7 of the ifr register after making an adjustment to
    * ifr.
    */

//    //static einline void int_update (void)
//    this.int_update = function()
//    {
//        if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
//        {
//            this.via_ifr |= 0x80;
//        }
//        else
//        {
//            this.via_ifr &= 0x7f;
//        }
//    }

    //unsigned char read8 (unsigned address)
    this.read8 = function( address )
    {
        address &= 0xffff;
        this.rtm.lastRW = 1; // DrSnuggles
        this.rtm.lastAbsAdr = address; // DrSnuggles

        if( (address & 0xe000) == 0xe000 )
        {
            /* rom */
            this.rtm.lastAdr = address & 0x1fff; // DrSnuggles
            this.rtm.lastVal = this.rom[address & 0x1fff] & 0xff; // DrSnuggles
            this.rtm.lastTyp = "rom"; // DrSnuggles

            return this.rom[address & 0x1fff] & 0xff;
            //if( utils.logCount-- > 0 ) console.log( "read8, rom: %d, %d\n", ( address & 0x1fff ), data );
        }

        if( (address & 0xe000) == 0xc000 )
        {
            if( address & 0x800 )
            {
                /* ram */
                this.rtm.lastAdr = address & 0x3ff; // DrSnuggles
                this.rtm.lastVal = this.ram[address & 0x3ff] & 0xff; // DrSnuggles
                this.rtm.lastTyp = "ram"; // DrSnuggles

                return this.ram[address & 0x3ff] & 0xff;
            }

            var data = 0;

            /* io */
            this.rtm.lastAdr = address & 0xf; // DrSnuggles
            this.rtm.lastVal = 0; // DrSnuggles
            this.rtm.lastTyp = "via"; // DrSnuggles

            switch( address & 0xf )
            {
                case 0x0:
                /* compare signal is an input so the value does not come from
                 * via_orb.
                 */

                    if( this.via_acr & 0x80 )
                    {
                        /* timer 1 has control of bit 7 */

                        data = ((this.via_orb & 0x5f) | this.via_t1pb7 | this.alg_compare);
                    }
                    else
                    {
                        /* bit 7 is being driven by via_orb */

                        data = ((this.via_orb & 0xdf) | this.alg_compare);
                    }
                    return data & 0xff;
                case 0x1:
                /* register 1 also performs handshakes if necessary */

                    if( (this.via_pcr & 0x0e) == 0x08 )
                    {
                        /* if ca2 is in pulse mode or handshake mode, then it
                        * goes low whenever ira is read.
                        */

                        //this.via_ca2 = 0;
                        this.zero0CountDown = this.ZERO_DELAY; // Malban
                    }
                    this.via_ifr = this.via_ifr & (0xff-0x02); // Malban: clear ca1 interrupt
                    /* fall through */
                case 0xf:
                    if( (this.via_orb & 0x18) == 0x08 )
                    {
                        /* the snd chip is driving port a */

                        data = this.snd_regs[this.snd_select];
                    }
                    else
                    {
                        data = this.via_ora;
                    }
                    return data & 0xff;
                case 0x2:
                    return this.via_ddrb & 0xff;
                case 0x3:
                    return this.via_ddra & 0xff;
                case 0x4:
                /* T1 low order counter */

                    data = this.via_t1c;
                    this.via_ifr &= 0xbf; /* remove timer 1 interrupt flag */

                    //this.via_t1on = 0; /* timer 1 is stopped */
                    this.via_t1int = 1; // Malban 0 --> 1
                    this.via_t1pb7 = 0x80;

                    //this.int_update();
                    // int_update inline begin
                    if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                    {
                        this.via_ifr |= 0x80;
                    }
                    else
                    {
                        this.via_ifr &= 0x7f;
                    }
                    // int_update inline end

                    this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban

                    return data & 0xff;
                case 0x5:
                /* T1 high order counter */
                    return (this.via_t1c >> 8) & 0xff;
                case 0x6:
                /* T1 low order latch */
                    return this.via_t1ll & 0xff;
                case 0x7:
                /* T1 high order latch */
                    return this.via_t1lh & 0xff;
                case 0x8:
                /* T2 low order counter */
                    data = this.via_t2c;
                    this.via_ifr &= 0xdf; /* remove timer 2 interrupt flag */
                    // Malban this.via_t2on = 0; /* timer 2 is stopped */
                    this.via_t2int = 1; // Malban

                    //this.int_update();
                    // int_update inline begin
                    if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                    {
                        this.via_ifr |= 0x80;
                    }
                    else
                    {
                        this.via_ifr &= 0x7f;
                    }
                    // int_update inline end

                    this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban

                    return data & 0xff;
                case 0x9:
                /* T2 high order counter */
                    return (this.via_t2c >> 8) & 0xff; // Malban
                case 0xa:
                    this.alternate = 1; // Malban
                    data = this.via_sr;
                    this.via_ifr &= 0xfb; /* remove shift register interrupt flag */
                    this.via_srb = 0;
                    this.via_srclk = 1;

                    //this.int_update();
                    // int_update inline begin
                    if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                    {
                        this.via_ifr |= 0x80;
                    }
                    else
                    {
                        this.via_ifr &= 0x7f;
                    }
                    // int_update inline end

                    this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban

                    return data & 0xff;
                case 0xb:
                    return this.via_acr & 0xff;
                case 0xc:
                    return this.via_pcr & 0xff;
                case 0xd:
                /* interrupt flag register */
                    return this.via_ifr & 0xff;
                case 0xe:
                /* interrupt enable register */
                    return (this.via_ier | 0x80) & 0xff;
            }
        }

        // Malban
        if( address < 0xc000 )
        {
            this.rtm.lastAdr = address; // DrSnuggles
            this.rtm.lastVal = this.cart[address+(this.currentBank *65536)] & 0xff; // DrSnuggles
            this.rtm.lastTyp = "cart"; // DrSnuggles
            return this.cart[address+(this.currentBank *65536)] & 0xff; // Malban
        }

        return 0xff;
    }

    //void write8 (unsigned address, unsigned char data)
    this.write8 = function( address, data )
    {
        address &= 0xffff;
        data &= 0xff;
        this.rtm.lastRW = 0; //DrSnuggles
        this.rtm.lastAbsAdr = address; //DrSnuggles
        this.rtm.lastVal = data; //DrSnuggles

        if( (address & 0xe000) == 0xe000 )
        {
            /* rom */
        }
        else if( (address & 0xe000) == 0xc000 )
        {
            /* it is possible for both ram and io to be written at the same! */

            if( address & 0x800 )
            {
                this.rtm.lastAdr = address & 0x3ff; //DrSnuggles
                this.rtm.lastTyp = "ram"; //DrSnuggles
                this.ram[address & 0x3ff] = data;
            }

            if( address & 0x1000 )
            {
                this.rtm.lastAdr = address & 0xf; // DrSnuggles
                this.rtm.lastTyp = "via"; // DrSnuggles
                switch( address & 0xf )
                {
                    case 0x0:
                        this.setPB6FromVectrex(data, this.via_ddrb, 1); // Malban
                        this.via_orb = data;
                        this.snd_update();
                        this.alg_update();

                        if( (this.via_pcr & 0xe0) == 0x80 )
                        {
                            /* if cb2 is in pulse mode or handshake mode, then it
                            * goes low whenever orb is written.
                            */

                            this.via_cb2h = 0;
                        }

                        break;
                    case 0x1:
                    /* register 1 also performs handshakes if necessary */

                        if( (this.via_pcr & 0x0e) == 0x08 )
                        {
                            /* if ca2 is in pulse mode or handshake mode, then it
                            * goes low whenever ora is written.
                            */

                            //this.via_ca2 = 0;
                            this.zero0CountDown = this.ZERO_DELAY; // Malban
                        }

                        /* fall through */

                    case 0xf:
                        this.via_ora = data;

                        this.snd_update();

                    /* output of port a feeds directly into the dac which then
                     * feeds the x axis sample and hold.
                     */

                        this.alg_xsh = data ^ 0x80;
                        this.alg_update();

                        break;
                    case 0x2:
                        this.setPB6FromVectrex(this.via_orb, data, 0); // Malban
                        this.via_ddrb = data;
                        break;
                    case 0x3:
                        this.via_ddra = data;
                        break;
                    case 0x4:
                    /* T1 low order counter */

                        this.via_t1ll = data;

                        break;
                    case 0x5:
                    /* T1 high order counter */

                        this.via_t1lh = data;
                        this.via_t1c = (this.via_t1lh << 8) | this.via_t1ll;
                        this.via_ifr &= 0xbf; /* remove timer 1 interrupt flag */

                        this.via_t1on = 1; /* timer 1 starts running */
                        this.via_t1int = 1;
                        this.via_t1pb7 = 0;

                        //this.int_update();
                        // int_update inline begin
                        if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                        {
                            this.via_ifr |= 0x80;
                        }
                        else
                        {
                            this.via_ifr &= 0x7f;
                        }
                        // int_update inline end

                        this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban
                        break;
                    case 0x6:
                    /* T1 low order latch */

                        this.via_t1ll = data;
                        break;
                    case 0x7:
                    /* T1 high order latch */

                        this.via_t1lh = data;
                        break;
                    case 0x8:
                    /* T2 low order latch */

                        this.via_t2ll = data;
                        break;
                    case 0x9:
                    /* T2 high order latch/counter */

                        this.via_t2c = (data << 8) | this.via_t2ll;
                        this.via_ifr &= 0xdf;

                        this.via_t2on = 1; /* timer 2 starts running */
                        this.via_t2int = 1;

                        //this.int_update();
                        // int_update inline begin
                        if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                        {
                            this.via_ifr |= 0x80;
                        }
                        else
                        {
                            this.via_ifr &= 0x7f;
                        }
                        // int_update inline end

                        this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban
                        break;
                    case 0xa:
                        this.alternate = 1; // Malban
                        this.via_sr = data;
                        this.via_ifr &= 0xfb; /* remove shift register interrupt flag */
                        this.via_srb = 0;
                        this.via_srclk = 1;

                        //this.int_update();
                        // int_update inline begin
                        if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                        {
                            this.via_ifr |= 0x80;
                        }
                        else
                        {
                            this.via_ifr &= 0x7f;
                        }
                        // int_update inline end

                        this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban
                        break;
                    case 0xb:
                        this.via_acr = data;
                        break;
                    case 0xc:
                        this.via_pcr = data;


                        if( (this.via_pcr & 0x0e) == 0x0c )
                        {
                            /* ca2 is outputting low */

                            //this.via_ca2 = 0;
                            this.zero0CountDown = this.ZERO_DELAY; // Malban
                        }
                        else
                        {
                            /* ca2 is disabled or in pulse mode or is
                            * outputting high.
                            */

                            //this.via_ca2 = 1;
                            this.zero1CountDown = this.ZERO_DELAY; // Malban
                        }

                        if( (this.via_pcr & 0xe0) == 0xc0 )
                        {
                            /* cb2 is outputting low */

                            this.via_cb2h = 0;
                        }
                        else
                        {
                            /* cb2 is disabled or is in pulse mode or is
                            * outputting high.
                            */

                            this.via_cb2h = 1;
                        }

                        break;
                    case 0xd:
                    /* interrupt flag register */

                        this.via_ifr &= (~(data & 0x7f)); // & 0xffff ); // raz

                        //this.int_update();
                        // int_update inline begin
                        if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                        {
                            this.via_ifr |= 0x80;
                        }
                        else
                        {
                            this.via_ifr &= 0x7f;
                        }
                        // int_update inline end

                        this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban
                        break;
                    case 0xe:
                    /* interrupt enable register */

                        if( data & 0x80 )
                        {
                            this.via_ier |= data & 0x7f;
                        }
                        else
                        {
                            this.via_ier &= (~(data & 0x7f)); // & 0xffff ); // raz
                        }

                        //this.int_update();
                        // int_update inline begin
                        if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                        {
                            this.via_ifr |= 0x80;
                        }
                        else
                        {
                            this.via_ifr &= 0x7f;
                        }
                        // int_update inline end

                        this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban
                        break;
                }
            }
        }
        else if( address < 0x8000 )
        {
            /* cartridge */
        }
    }

    //void vecx_reset (void)
    this.vecx_reset = function()
    {
        /* ram */
        for( var r = 0; r < this.ram.length; r++ )
        {
            this.ram[r] = r & 0xff;
        }

        for( var r = 0; r < 16; r++ )
        {
            this.snd_regs[r] = 0;
            this.e8910.e8910_write(r, 0);
        }

        /* input buttons */

        this.snd_regs[14] = 0xff;
        this.e8910.e8910_write(14, 0xff);

        this.snd_select = 0;

        this.via_ora = 0;
        this.via_orb = 0;
        this.via_ddra = 0;
        this.via_ddrb = 0;
        this.via_t1on = 0;
        this.via_t1int = 0;
        this.via_t1c = 0;
        this.via_t1ll = 0;
        this.via_t1lh = 0;
        this.via_t1pb7 = 0x80;
        this.via_t2on = 0;
        this.via_t2int = 0;
        this.via_t2c = 0;
        this.via_t2ll = 0;
        this.via_sr = 0;
        this.via_srb = 8;
        this.via_src = 0;
        this.via_srclk = 0;
        this.via_acr = 0;
        this.via_pcr = 0;
        this.via_ifr = 0;
        this.via_ier = 0;
        this.via_ca2 = 1;
        this.via_cb2h = 1;
        this.via_cb2s = 0;

        this.alg_rsh = 128;
        this.alg_xsh = 128;
        this.alg_ysh = 128;
        this.alg_zsh = 0;
        this.alg_jch0 = 128;
        this.alg_jch1 = 128;
        this.alg_jch2 = 128;
        this.alg_jch3 = 128;
        this.alg_jsh = 128;

        this.alg_compare = 0;
        /* check this */

        this.alg_dx = 0;
        this.alg_dy = 0;
        this.alg_curr_x = Globals.ALG_MAX_X >> 1;
        this.alg_curr_y = Globals.ALG_MAX_Y >> 1;

        this.alg_vectoring = 0;

        this.vector_draw_cnt = 0;
        this.vector_erse_cnt = 0;
        this.alternate = 0; // Malban
       	this.setDigitalVoltage(128); // Malban

        for( var i = 0; i < this.vectors_draw.length; i++ )
        {
            if( !this.vectors_draw[i] )
            {
                this.vectors_draw[i] = new vector_t();
            }
            else
            {
                this.vectors_draw[i].reset();
            }
        }

        for( var i = 0; i < this.vectors_erse.length; i++ )
        {
            if( !this.vectors_erse[i] )
            {
                this.vectors_erse[i] = new vector_t();
            }
            else
            {
                this.vectors_erse[i].reset();
            }
        }

        /* load the rom into memory */
        var len = Globals.romdata.length;
        for( var i = 0; i < len; i++ )
        {
            this.rom[i] = Globals.romdata.charCodeAt(i);
        }

        /* the cart is empty by default */
        len = this.cart.length;
        for( var b = 0; b < len; b++ )
        {
            this.cart[b] = 0x01; // parabellum
        }

        /* Malban */
        this.currentPB6 = 1;
        this.currentIRQ = 1;
        this.BANK_MAX = 1;
        if (this.doBankSwitching) {
          this.currentBank = 0; // vblade
          if (len > 50000)
          {
            this.BANK_MAX = 2;
            this.currentBank = 1; // vblade
          }
          if (len > 100000)
          {
            this.BANK_MAX = 4;
            this.currentBank = 3; // vblade
          }
        }

        if( Globals.cartdata != null )
        {
            /* load the rom into memory */
            len = Globals.cartdata.length;
            for( var i = 0; i < len; i++ )
            {
                this.cart[i] = Globals.cartdata.charCodeAt(i);
            }
        }

        this.fcycles = Globals.FCYCLES_INIT;

        this.e6809.e6809_reset();
    }

    this.t2shift = 0;

//    /* perform a single cycle worth of via emulation.
//     * via_sstep0 is the first postion of the emulation.
//     */
//    //static einline void via_sstep0 (void)
//    this.via_sstep0 = function()
//    {
//        //unsigned t2shift;
//        this.t2shift = 0;
//
//        if( this.via_t1on )
//        {
//            this.via_t1c = ( this.via_t1c > 0 ? this.via_t1c - 1 : 0xffff );
//            // On PC is 0xffffffff
//            if( (this.via_t1c & 0xffff) == 0xffff )
//            {
//                /* counter just rolled over */
//
//                if( this.via_acr & 0x40 )
//                {
//                    /* continuous interrupt mode */
//
//                    this.via_ifr |= 0x40;
//                    this.int_update();
//                    this.via_t1pb7 = 0x80 - this.via_t1pb7;
//
//                    /* reload counter */
//
//                    this.via_t1c = (this.via_t1lh << 8) | this.via_t1ll;
//                }
//                else
//                {
//                    /* one shot mode */
//
//                    if( this.via_t1int )
//                    {
//                        this.via_ifr |= 0x40;
//                        this.int_update();
//                        this.via_t1pb7 = 0x80;
//                        this.via_t1int = 0;
//                    }
//                }
//            }
//        }
//
//        if( this.via_t2on && (this.via_acr & 0x20) == 0x00 )
//        {
//            this.via_t2c = ( this.via_t2c > 0 ? this.via_t2c - 1 : 0xffff );
//
//            if( (this.via_t2c & 0xffff) == 0xffff )
//            {
//                /* one shot mode */
//
//                if( this.via_t2int )
//                {
//                    this.via_ifr |= 0x20;
//                    this.int_update();
//                    this.via_t2int = 0;
//                }
//            }
//        }
//
//        /* shift counter */
//
//        this.via_src = ( this.via_src > 0 ? this.via_src - 1 : 0xffff );
//
//        if( (this.via_src & 0xff) == 0xff )
//        {
//            this.via_src = this.via_t2ll;
//
//            if( this.via_srclk )
//            {
//                this.t2shift = 1;
//                this.via_srclk = 0;
//            }
//            else
//            {
//                this.t2shift = 0;
//                this.via_srclk = 1;
//            }
//        }
//        else
//        {
//            this.t2shift = 0;
//        }
//
//        if( this.via_srb < 8 )
//        {
//            switch( this.via_acr & 0x1c )
//            {
//                case 0x00:
//                /* disabled */
//                    break;
//                case 0x04:
//                /* shift in under control of t2 */
//
//                    if( this.t2shift )
//                    {
//                        /* shifting in 0s since cb2 is always an output */
//
//                        this.via_sr <<= 1;
//                        this.via_srb++;
//                    }
//
//                    break;
//                case 0x08:
//                /* shift in under system clk control */
//
//                    this.via_sr <<= 1;
//                    this.via_srb++;
//
//                    break;
//                case 0x0c:
//                /* shift in under cb1 control */
//                    break;
//                case 0x10:
//                /* shift out under t2 control (free run) */
//
//                    if( this.t2shift )
//                    {
//                        this.via_cb2s = (this.via_sr >> 7) & 1;
//
//                        this.via_sr <<= 1;
//                        this.via_sr |= this.via_cb2s;
//                    }
//
//                    break;
//                case 0x14:
//                /* shift out under t2 control */
//
//                    if( this.t2shift )
//                    {
//                        this.via_cb2s = (this.via_sr >> 7) & 1;
//
//                        this.via_sr <<= 1;
//                        this.via_sr |= this.via_cb2s;
//                        this.via_srb++;
//                    }
//
//                    break;
//                case 0x18:
//                /* shift out under system clock control */
//
//                    this.via_cb2s = (this.via_sr >> 7) & 1;
//
//                    this.via_sr <<= 1;
//                    this.via_sr |= this.via_cb2s;
//                    this.via_srb++;
//
//                    break;
//                case 0x1c:
//                /* shift out under cb1 control */
//                    break;
//            }
//
//            if( this.via_srb == 8 )
//            {
//                this.via_ifr |= 0x04;
//                this.int_update();
//            }
//        }
//    }

    /* perform the second part of the via emulation */

//    //static einline void via_sstep1 (void)
//    this.via_sstep1 = function()
//    {
//        if( (this.via_pcr & 0x0e) == 0x0a )
//        {
//            /* if ca2 is in pulse mode, then make sure
//             * it gets restored to '1' after the pulse.
//             */
//
//            this.via_ca2 = 1;
//        }
//
//        if( (this.via_pcr & 0xe0) == 0xa0 )
//        {
//            /* if cb2 is in pulse mode, then make sure
//             * it gets restored to '1' after the pulse.
//             */
//
//            this.via_cb2h = 1;
//        }
//    }

    //this.cacheHit = 0;

    //static einline void alg_addline (long x0, long y0, long x1, long y1, unsigned char color)
    this.alg_addline = function( x0, y0, x1, y1, color )
    {

        //if( utils.logCount-- > 0 ) console.log( "alg_addline: %d %d %d %d %d", x0, y0, x1, y1, color );

        //unsigned long key;
        //long index;
        var key = 0;
        var index = 0;
        var curVec = null;

        key = x0;
        key = key * 31 + y0;
        key = key * 31 + x1;
        key = key * 31 + y1;
        key %= Globals.VECTOR_HASH;

        /* first check if the line to be drawn is in the current draw list.
         * if it is, then it is not added again.
         */

        curVec = null;
        index = this.vector_hash[key];
        if( index >= 0 && index < this.vector_draw_cnt )
        {
            curVec = this.vectors_draw[index];
        }

        if( curVec != null &&
            x0 == curVec.x0 && y0 == curVec.y0 &&
            x1 == curVec.x1 && y1 == curVec.y1 )
        {
            curVec.color = color;
            //this.cacheHit ++;
        }
        else
        {
            /* missed on the draw list, now check if the line to be drawn is in
             * the erase list ... if it is, "invalidate" it on the erase list.
             */

            curVec = null;
            if( index >= 0 && index < this.vector_erse_cnt )
            {
                curVec = this.vectors_erse[index];
            }

            if( curVec != null &&
                x0 == curVec.x0 && y0 == curVec.y0 &&
                x1 == curVec.x1 && y1 == curVec.y1 )
            {
                this.vectors_erse[index].color = Globals.VECTREX_COLORS;
                //this.cacheHit++;
            }

            curVec = this.vectors_draw[this.vector_draw_cnt];
            curVec.x0 = x0; curVec.y0 = y0;
            curVec.x1 = x1; curVec.y1 = y1;
            curVec.color = color;

            this.vector_hash[key] = this.vector_draw_cnt;
            this.vector_draw_cnt++;
        }
    }

//    /* perform a single cycle worth of analog emulation */
//    //static einline void alg_sstep (void)
//    this.alg_sstep = function()
//    {
//        //long sig_dx, sig_dy;
//        //unsigned sig_ramp;
//        //unsigned sig_blank;
//        var sig_dx = 0;
//        var sig_dy = 0;
//        var sig_ramp = 0;
//        var sig_blank = 0;
//
//        if( (this.via_acr & 0x10) == 0x10 )
//        {
//            sig_blank = this.via_cb2s;
//        }
//        else
//        {
//            sig_blank = this.via_cb2h;
//        }
//
//        if( this.via_ca2 == 0 )
//        {
//            /* need to force the current point to the 'orgin' so just
//             * calculate distance to origin and use that as dx,dy.
//             */
//            sig_dx = this.alg_max_x - this.alg_curr_x;
//            sig_dy = this.alg_max_y - this.alg_curr_y;
//        }
//        else
//        {
//            if( this.via_acr & 0x80 )
//            {
//                sig_ramp = this.via_t1pb7;
//            }
//            else
//            {
//                sig_ramp = this.via_orb & 0x80;
//            }
//
//            if( sig_ramp == 0 )
//            {
//                sig_dx = this.alg_dx;
//                sig_dy = this.alg_dy;
//            }
//            else
//            {
//                sig_dx = 0;
//                sig_dy = 0;
//            }
//        }
//
//        if( this.alg_vectoring == 0 )
//        {
//            if( sig_blank == 1 &&
//                this.alg_curr_x >= 0 && this.alg_curr_x < Globals.ALG_MAX_X &&
//                this.alg_curr_y >= 0 && this.alg_curr_y < Globals.ALG_MAX_Y )
//            {
//                /* start a new vector */
//                this.alg_vectoring = 1;
//                this.alg_vector_x0 = this.alg_curr_x;
//                this.alg_vector_y0 = this.alg_curr_y;
//                this.alg_vector_x1 = this.alg_curr_x;
//                this.alg_vector_y1 = this.alg_curr_y;
//                this.alg_vector_dx = sig_dx;
//                this.alg_vector_dy = sig_dy;
//                this.alg_vector_color = this.alg_zsh & 0xff;
//            }
//        }
//        else
//        {
//            /* already drawing a vector ... check if we need to turn it off */
//
//            if( sig_blank == 0 )
//            {
//                /* blank just went on, vectoring turns off, and we've got a
//                 * new line.
//                 */
//                this.alg_vectoring = 0;
//
//                this.alg_addline(this.alg_vector_x0, this.alg_vector_y0,
//                    this.alg_vector_x1, this.alg_vector_y1,
//                    this.alg_vector_color);
//            }
//            else if( sig_dx != this.alg_vector_dx ||
//                     sig_dy != this.alg_vector_dy ||
//                     ( this.alg_zsh & 0xff ) != this.alg_vector_color )
//            {
//
//                /* the parameters of the vectoring processing has changed.
//                 * so end the current line.
//                 */
//
//                this.alg_addline(this.alg_vector_x0, this.alg_vector_y0,
//                    this.alg_vector_x1, this.alg_vector_y1,
//                    this.alg_vector_color);
//
//                /* we continue vectoring with a new set of parameters if the
//                 * current point is not out of limits.
//                 */
//
//                if( this.alg_curr_x >= 0 && this.alg_curr_x < Globals.ALG_MAX_X &&
//                    this.alg_curr_y >= 0 && this.alg_curr_y < Globals.ALG_MAX_Y )
//                {
//                    this.alg_vector_x0 = this.alg_curr_x;
//                    this.alg_vector_y0 = this.alg_curr_y;
//                    this.alg_vector_x1 = this.alg_curr_x;
//                    this.alg_vector_y1 = this.alg_curr_y;
//                    this.alg_vector_dx = sig_dx;
//                    this.alg_vector_dy = sig_dy;
//                    this.alg_vector_color = this.alg_zsh & 0xff;
//                }
//                else
//                {
//                    this.alg_vectoring = 0;
//                }
//            }
//        }
//
//        this.alg_curr_x += sig_dx;
//        this.alg_curr_y += sig_dy;
//
//        if( this.alg_vectoring == 1 &&
//            this.alg_curr_x >= 0 && this.alg_curr_x < Globals.ALG_MAX_X &&
//            this.alg_curr_y >= 0 && this.alg_curr_y < Globals.ALG_MAX_Y )
//        {
//            /* we're vectoring ... current point is still within limits so
//             * extend the current vector.
//             */
//            this.alg_vector_x1 = this.alg_curr_x;
//            this.alg_vector_y1 = this.alg_curr_y;
//        }
//    }

    //void vecx_emu (long cycles, int ahead)
    this.vecx_emu = function( cycles, ahead )
    {
        var icycles = 0;
        var c = 0;
        var tmp = null;
        var e6809 = this.e6809;
        var osint = this.osint;
        var fcycles_add = Globals.FCYCLES_INIT;

        // alg_sstep inline
        var sig_dx = 0;
        var sig_dy = 0;
        var sig_ramp = 0;
        var sig_blank = 0;

        while( cycles > 0 )
        {
            icycles = e6809.e6809_sstep(this.via_ifr & 0x80, 0);

            for( c = 0; c < icycles; c++ )
            {
                //this.via_sstep0();
//
// via_sstep0 inline begin
//
                this.t2shift = 0;
                if( this.via_t1on )
                {
                    this.via_t1c = ( this.via_t1c > 0 ? this.via_t1c - 1 : 0xffff );
                    if( (this.via_t1c & 0xffff) == 0xffff )
                    {
                        /* counter just rolled over */
                        if( this.via_acr & 0x40 )
                        {
                            /* continuous interrupt mode */
                            this.via_ifr |= 0x40;

                            //this.int_update();
                            // int_update inline begin
                            if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                            {
                                this.via_ifr |= 0x80;
                            }
                            else
                            {
                                this.via_ifr &= 0x7f;
                            }
                            // int_update inline end

                            this.via_t1pb7 = 0x80 - this.via_t1pb7;
                            /* reload counter */
                            this.via_t1c = (this.via_t1lh << 8) | this.via_t1ll;

                            this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban
                        }
                        else
                        {
                            /* one shot mode */

                            if( this.via_t1int )
                            {
                                this.via_ifr |= 0x40;

                                //this.int_update();
                                // int_update inline begin
                                if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                                {
                                    this.via_ifr |= 0x80;
                                }
                                else
                                {
                                    this.via_ifr &= 0x7f;
                                }
                                // int_update inline end

                                this.via_t1pb7 = 0x80;
                                this.via_t1int = 0;

                                this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban
                            }
                        }
                    }
                }

                if( this.via_t2on && (this.via_acr & 0x20) == 0x00 )
                {
                    this.via_t2c = ( this.via_t2c > 0 ? this.via_t2c - 1 : 0xffff );
                    if( (this.via_t2c & 0xffff) == 0xffff )
                    {
                        /* one shot mode */
                        if( this.via_t2int )
                        {
                            this.via_ifr |= 0x20;

                            //this.int_update();
                            // int_update inline begin
                            if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                            {
                                this.via_ifr |= 0x80;
                            }
                            else
                            {
                                this.via_ifr &= 0x7f;
                            }
                            // int_update inline end

                            this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban

                            this.via_t2int = 0;
                        }
                    }
                }

                /* shift counter */
                this.via_src = ( this.via_src > 0 ? this.via_src - 1 : 0xff ); // raz was 0xffffffff
                if( (this.via_src & 0xff) == 0xff )
                {
                    this.via_src = this.via_t2ll;

                    if( this.via_srclk )
                    {
                        this.t2shift = 1;
                        this.via_srclk = 0;
                    }
                    else
                    {
                        this.t2shift = 0;
                        this.via_srclk = 1;
                    }
                }
                else
                {
                    this.t2shift = 0;
                }

                if( this.via_srb < 8 )
                {
                    switch( this.via_acr & 0x1c )
                    {
                        case 0x00:
                        /* disabled */
                            break;
                        case 0x04:
                        /* shift in under control of t2 */

                            if( this.t2shift )
                            {
                                /* shifting in 0s since cb2 is always an output */
                                this.via_sr <<= 1;
                                this.via_srb++;
                            }
                            break;
                        case 0x08:
                            /* shift in under system clk control */
                            this.via_sr <<= 1;
                            this.via_srb++;
                            break;
                        case 0x0c:
                            /* shift in under cb1 control */
                            break;
                        case 0x10:
                            /* shift out under t2 control (free run) */
                            if( this.t2shift )
                            {
                                this.via_cb2s = (this.via_sr >> 7) & 1;
                                this.via_sr <<= 1;
                                this.via_sr |= this.via_cb2s;
                            }
                            break;
                        case 0x14:
                        /* shift out under t2 control */

                            if( this.t2shift )
                            {
                                this.via_cb2s = (this.via_sr >> 7) & 1;

                                this.via_sr <<= 1;
                                this.via_sr |= this.via_cb2s;
                                this.via_srb++;
                            }
                            break;
                        case 0x18:
                        /* shift out under system clock control */
                            this.alternate = (this.alternate + 1)%2;
                            // alternate by Malban
              							if (this.alternate)
              							{
              								this.via_cb2s = (this.via_sr >> 7) & 1;
              								this.via_sr <<= 1;
              								this.via_sr |= this.via_cb2s;
              								this.via_srb++;
              							}
                            break;
                        case 0x1c:
                        /* shift out under cb1 control */
                            break;
                    }

                    if( this.via_srb == 8 )
                    {
                        this.via_ifr |= 0x04;

                        //this.int_update();
                        // int_update inline begin
                        if( (this.via_ifr & 0x7f) & (this.via_ier & 0x7f) )
                        {
                            this.via_ifr |= 0x80;
                        }
                        else
                        {
                            this.via_ifr &= 0x7f;
                        }
                        // int_update inline end

                        this.setIRQFromVectrex(((this.via_ifr&0x80) !=0 )); // Malban
                    }
                }
//
// via_sstep0 inline end
//

                //this.alg_sstep();

                // Malban
        				if (this.zero1CountDown >0)
        				{
        					this.zero1CountDown--;
        					if (this.zero1CountDown == 0) this.via_ca2 = 1;
        				}
        				if (this.zero0CountDown >0)
        				{
        					this.zero0CountDown--;
        					if (this.zero0CountDown == 0) this.via_ca2 = 0;
        				}

//
// alg_sstep inline begin
//
                //long sig_dx, sig_dy;
                //unsigned sig_ramp;
                //unsigned sig_blank;
                sig_dx = 0;
                sig_dy = 0;
                sig_ramp = 0;
                sig_blank = 0;

                if( (this.via_acr & 0x10) == 0x10 )
                {
                    sig_blank = this.via_cb2s;
                }
                else
                {
                    sig_blank = this.via_cb2h;
                }

                if( this.via_ca2 == 0 )
                {
                    /* need to force the current point to the 'orgin' so just
                     * calculate distance to origin and use that as dx,dy.
                     */
                    sig_dx = this.alg_max_x - this.alg_curr_x;
                    sig_dy = this.alg_max_y - this.alg_curr_y;
                }
                // Malban else
                // Malban{
                    if( this.via_acr & 0x80 )
                    {
                        sig_ramp = this.via_t1pb7;
                    }
                    else
                    {
                        sig_ramp = this.via_orb & 0x80;
                    }

                    // Malban
       if (this.oldSigRamp != sig_ramp)
       {
         if (sig_ramp == 0)
         {
           this.rampOnCountDown = this.RAMP_ON_DELAY;
         }
         else
         {
           this.rampOffCountDown = this.RAMP_OFF_DELAY;
         }
       }
       if (this.rampOnCountDown>0)
       {
         this.rampOnCountDown--;
         if (this.rampOnCountDown == 0)
             this.realSigRamp = 0;
       }
       if (this.rampOffCountDown>0)
       {
         this.rampOffCountDown--;
         if (this.rampOffCountDown == 0)
             this.realSigRamp = 1;
       }


            				if( this.realSigRamp == 0 )
            				{
            					sig_dx += this.alg_dx;
            					sig_dy += this.alg_dy;
            				}
                    this.oldSigRamp = sig_ramp;


                    /* Malban
                    if( sig_ramp == 0 )
                    {
                        sig_dx = this.alg_dx;
                        sig_dy = this.alg_dy;
                    }
                    else
                    {
                        sig_dx = 0;
                        sig_dy = 0;
                    }
                    */
                // Malban}

                if( this.alg_vectoring == 0 )
                {
                    if( sig_blank == 1 &&
                        this.alg_curr_x >= 0 && this.alg_curr_x < Globals.ALG_MAX_X &&
                        this.alg_curr_y >= 0 && this.alg_curr_y < Globals.ALG_MAX_Y )
                    {
                        /* start a new vector */
                        this.alg_vectoring = 1;
                        this.alg_vector_x0 = this.alg_curr_x;
                        this.alg_vector_y0 = this.alg_curr_y;
                        this.alg_vector_x1 = this.alg_curr_x;
                        this.alg_vector_y1 = this.alg_curr_y;
                        this.alg_vector_dx = sig_dx;
                        this.alg_vector_dy = sig_dy;
                        this.alg_vector_color = this.alg_zsh & 0xff;
                    }
                }
                else
                {
                    /* already drawing a vector ... check if we need to turn it off */

                    if( sig_blank == 0 )
                    {
                        /* blank just went on, vectoring turns off, and we've got a
                         * new line.
                         */
                        this.alg_vectoring = 0;

                        this.alg_addline(this.alg_vector_x0, this.alg_vector_y0,
                            this.alg_vector_x1, this.alg_vector_y1,
                            this.alg_vector_color);
                    }
                    else if( sig_dx != this.alg_vector_dx ||
                             sig_dy != this.alg_vector_dy ||
                             ( this.alg_zsh & 0xff ) != this.alg_vector_color )
                    {

                        /* the parameters of the vectoring processing has changed.
                         * so end the current line.
                         */

                        this.alg_addline(this.alg_vector_x0, this.alg_vector_y0,
                            this.alg_vector_x1, this.alg_vector_y1,
                            this.alg_vector_color);

                        /* we continue vectoring with a new set of parameters if the
                         * current point is not out of limits.
                         */

                        if( this.alg_curr_x >= 0 && this.alg_curr_x < Globals.ALG_MAX_X &&
                            this.alg_curr_y >= 0 && this.alg_curr_y < Globals.ALG_MAX_Y )
                        {
                            this.alg_vector_x0 = this.alg_curr_x;
                            this.alg_vector_y0 = this.alg_curr_y;
                            this.alg_vector_x1 = this.alg_curr_x;
                            this.alg_vector_y1 = this.alg_curr_y;
                            this.alg_vector_dx = sig_dx;
                            this.alg_vector_dy = sig_dy;
                            this.alg_vector_color = this.alg_zsh & 0xff;
                        }
                        else
                        {
                            this.alg_vectoring = 0;
                        }
                    }
                }

                // Malban
                if (((this.via_orb & 0x01) == 0) && ((this.via_orb & 0x06) == 0x02))
          					this.doStep();

                this.alg_curr_x += sig_dx;
                this.alg_curr_y += sig_dy;

                if( this.alg_vectoring == 1 &&
                    this.alg_curr_x >= 0 && this.alg_curr_x < Globals.ALG_MAX_X &&
                    this.alg_curr_y >= 0 && this.alg_curr_y < Globals.ALG_MAX_Y )
                {
                    /* we're vectoring ... current point is still within limits so
                     * extend the current vector.
                     */
                    this.alg_vector_x1 = this.alg_curr_x;
                    this.alg_vector_y1 = this.alg_curr_y;
                }
//
// alg_sstep inline end
//

                //this.via_sstep1();
//
// alg_sstep1 inline begin
//
                if( (this.via_pcr & 0x0e) == 0x0a )
                {
                    /* if ca2 is in pulse mode, then make sure
                     * it gets restored to '1' after the pulse.
                     */

                    //this.via_ca2 = 1;
                    this.zero1CountDown = this.ZERO_DELAY; // Malban
                }

                if( (this.via_pcr & 0xe0) == 0xa0 )
                {
                    /* if cb2 is in pulse mode, then make sure
                     * it gets restored to '1' after the pulse.
                     */

                    this.via_cb2h = 1;
                }
            }
//
// alg_sstep1 inline end
//

//this.validateState();

            cycles -= icycles;
            this.fcycles -= icycles;

            if( this.fcycles < 0 )
            {
                this.fcycles += fcycles_add;

                osint.osint_render();

                // everything that was drawn during this pass now now enters
                // the erase list for the next pass.
                //
                this.vector_erse_cnt = this.vector_draw_cnt;
                this.vector_draw_cnt = 0;

                tmp = this.vectors_erse;
                this.vectors_erse = this.vectors_draw;
                this.vectors_draw = tmp;
            }
        }
    }

    this.count = 0;
    this.startTime = null;
    this.nextFrameTime = null;
    this.extraTime = 0;
    this.fpsTimer = null;

    this.running = false;

    this.vecx_emuloop = function()
    {
        if( this.running ) return;

        this.running = true;

        var EMU_TIMER = this.osint.EMU_TIMER;
        var cycles = ( Globals.VECTREX_MHZ / 1000 >> 0 ) * EMU_TIMER;
        var vecx = this;

        this.startTime = this.nextFrameTime = new Date().getTime() + EMU_TIMER;
        this.count = 0;
        this.extraTime = 0;

        this.fpsTimer = setInterval(
            function()
            {
              vecx.status =  "FPS: " +
                    ( vecx.count / ( new Date().getTime() - vecx.startTime )
                        * 1000.0 ).toFixed(2) + " (50)" +
                    ( vecx.extraTime > 0 ?
                       ( ", extra: " +
                            ( vecx.extraTime / ( vecx.count / 50 ) ).toFixed(2)
                                + " (ms)" ) : "" );
                if( vecx.count > 500 )
                {
                    vecx.startTime = new Date().getTime();
                    vecx.count = 0;
                    vecx.extraTime = 0;
                }
            }, 2000
        );

        var f = function()
        {
            if( !vecx.running ) return;
            /* moved to input.js
            vecx.alg_jch0 =
                 ( vecx.leftHeld ? 0x00 :
                     ( vecx.rightHeld ? 0xff :
                        0x80 ) );

            vecx.alg_jch1 =
                 ( vecx.downHeld ? 0x00 :
                    ( vecx.upHeld ? 0xff :
                        0x80 ) );
            */
            vecx.snd_regs[14] = vecx.shadow_snd_regs14;
            vecx.rtm.clk = !vecx.rtm.clk; // DrSnuggles
            vecx.vecx_emu.call( vecx, cycles, 0 );
            vecx.count++;

            var now = new Date().getTime();
            var waitTime = vecx.nextFrameTime - now;
            vecx.extraTime += waitTime;
            if( waitTime < -EMU_TIMER ) waitTime = -EMU_TIMER;

            vecx.nextFrameTime = now + EMU_TIMER + waitTime;

            setTimeout( function() { f(); }, waitTime );
        };

        setTimeout( f, 15 );
    }

    this.stop = function()
    {
        if( this.running )
        {
            if( this.fpsTimer != null )
            {
                clearInterval( this.fpsTimer );
                this.fpsTimer = null;
            }

            this.running = false;
            this.e8910.stop();
        }
    }

    this.start = function()
    {
        if( !this.running )
        {
            this.e8910.start();
            this.vecx_emuloop();
        }
    }

    this.main = function( canv )
    {
        this.osint.init( this, canv );  // need to pass reference to canvas
        this.e6809.init( this );

        this.status = "Loaded.";

        /* message loop handler and emulator code */
        /* reset the vectrex hardware */
        this.vecx_reset();
        this.start();
    }

    this.reset = function()
    {
        this.stop();
        this.vecx_reset();
        this.osint.osint_clearscreen();

        var vecx = this;
        setTimeout( function() { vecx.start(); }, 200 );
    }

    this.toggleSoundEnabled = function()
    {
        return this.e8910.toggleEnabled();
    }
    /* since analog and digital stick this is no longer needed
    this.leftHeld = false;
    this.rightHeld = false;
    this.upHeld = false;
    this.downHeld = false;
    */
    this.shadow_snd_regs14 = 0xff;

    this.button = function(controller, button, state) {
      var buttonVal = Math.pow(2, button);
      buttonVal = buttonVal * Math.pow(2, controller*4);
      state ? vecx.shadow_snd_regs14 &= ~buttonVal : vecx.shadow_snd_regs14 |= buttonVal;
    };

    this.axis = function(controller, axis, val) {
      // controller 0 = player1
      // axis 0 = left/right
      vecx["alg_jch"+(controller*2+axis)] = val;
    };
    /* moved to input.js
    this.onkeydown = function( event )
    {
        var handled = true;
        switch( event.keyCode )
        {
            case 37: // left
            case 76:
                //this.leftHeld = true;
                this.shadow_alg_jch0 = 0x00;
                break;
            case 38: // up
            case 80:
                //this.upHeld = true;
                this.shadow_alg_jch1 = 0xff;
                break;
            case 39: // right
            case 222:
                //this.rightHeld = true;
                this.shadow_alg_jch0 = 0xff;
                break;
            case 40: // down
            case 59:
            case 186:
                //this.downHeld = true;
                this.shadow_alg_jch1 = 0x00;
                break;
            case 65: // a
                this.shadow_snd_regs14 &= (~0x01);
                break;
            case 83: // s
                this.shadow_snd_regs14 &= (~0x02);
                break;
            case 68: // d
                this.shadow_snd_regs14 &= (~0x04);
                break;
            case 70: // f
                this.shadow_snd_regs14 &= (~0x08);
                break;
            default:
                handled = false;
        }

        if( handled && event.preventDefault )
        {
            event.preventDefault();
        }
    }

    this.onkeyup = function( event )
    {
        var handled = true;
        switch( event.keyCode )
        {
            case 37: // left
            case 76:
                //this.leftHeld = false;
                this.shadow_alg_jch0 = 0x80;
                break;
            case 38: // up
            case 80:
                //this.upHeld = false;
                this.shadow_alg_jch1 = 0x80;
                break;
            case 39: // right
            case 222:
                //this.rightHeld = false;
                this.shadow_alg_jch0 = 0x80;
                break;
            case 40: // down
            case 59:
            case 186:
                //this.downHeld = false;
                this.shadow_alg_jch1 = 0x80;
                break;
            case 65: // a
                this.shadow_snd_regs14 |= 0x01;
                break;
            case 83: // s
                this.shadow_snd_regs14 |= 0x02;
                break;
            case 68: // d
                this.shadow_snd_regs14 |= 0x04;
                break;
            case 70: // f
                this.shadow_snd_regs14 |= 0x08;
                break;
            default:
                handled = false;
        }

        if( handled && event.preventDefault )
        {
            event.preventDefault();
        }
    }
    */
}

//Globals.vecx = new VecX();
