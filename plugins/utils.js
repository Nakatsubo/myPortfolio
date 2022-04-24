// インポート
import { gsap } from 'gsap';

// Promise で setTimeOut を返す
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// 背景を固定する
const bodyScrollPrevent = (flag) => {
  let currentPosition, body = document.getElementsByTagName('body')[0]
  let getuserAgent = window.navigator.userAgent.toLowerCase()
  let isUserAgent = getuserAgent.indexOf('iphone') > -1 || getuserAgent.indexOf('ipad') > -1 || getuserAgent.indexOf('macintosh')>-1 && 'ontouchend' in document
  let scrollBarWidth = window.innerWidth - document.body.clientWidth
  if (flag) {
    body.style.paddingRight = scrollBarWidth + 'px'
    if (isUserAgent) {
      currentPosition =- window.pageYOffset,
      body.style.position = 'fixed'
      body.style.width = '100%'
      body.style.top = currentPosition +'px'
    }
    else {
      body.style.overflow = 'hidden'
    }
  } else if (!flag) {
    body.style.paddingRight = ''
    if (isUserAgent) {
      currentPosition = parseInt(body.style.top.replace(/[^0-9]/g,''))
      body.style.position = ''
      body.style.width = ''
      body.style.top = ''
      window.scrollTo(0, currentPosition)
    }
    else {
      body.style.overflow = ''
    }
  }
}

// 画面の高さいっぱいに要素を表示させる
const setFillHeight = () => {
  const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'))
}

// ファーストビューでテキストをアニメーションさせる
const creareFirstViewTitEffectContent= (bool, el) => {
  if (bool) {
    el.find('.titEffect__clone').remove()
    el.find('.titEffect__cover').remove()
  }
  else {
    let titEffectClone       = `<span class="titEffect__clone" style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; width: 100%;">${el.textContent}</span>`,
        titEffectCover       = `<span class="titEffect__cover" style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; width: 100%; opacity: 0.25;">${el.textContent}</span>`,
        titEffectDuplication = `<span class="titEffect__detail" style="display: inline-block; opacity: 0;">${el.textContent}</span>`
    el.innerHTML = `${titEffectDuplication}${titEffectClone}${titEffectCover}`
    animateFirstViewTitEffectContent(bool, el)
  }
}
function animateFirstViewTitEffectContent (bool, el) {
  const GSAP = gsap
  if (!bool) {
    let newTitEffectClone       = el.querySelector('.titEffect__clone'),
        newTitEffectCover       = el.querySelector('.titEffect__cover'),
        newtitEffectDuplication = el.querySelector('.titEffect__detail')
    let elemHeight = el.offsetHeight,
        elemWidth  = el.offsetWidth;
    let initialCloneRect  = `rect(0px 0px ${elemHeight}px 0px)`,
        archivedCloneRect = `rect(0px ${elemWidth}px ${elemHeight}px 0px)`,
        initialCoverRect  = `rect(0px ${elemWidth}px ${elemHeight}px 0px)`,
        archivedCoverRect = `rect(0px ${elemWidth}px ${elemHeight}px ${elemWidth}px)`
    newTitEffectClone.style.clip = initialCloneRect
    newTitEffectCover.style.clip = initialCoverRect
    el.classList.add('titEffect-visible')
    GSAP.to(newTitEffectClone, 3, {
      clip: archivedCloneRect,
      ease: 'Power3.easeOut',
    })
    GSAP.to(newTitEffectCover, 3, {
      clip: archivedCoverRect,
      ease: 'Power3.easeOut',
      onComplete: () => {
        newtitEffectDuplication.style.opacity = 1
        newTitEffectClone.remove()
        newTitEffectCover.remove()
      }
    })
  }
}

// ポインターをアニメーションさせる
const mouseStalker = (remove) => {
  if(!remove) {
    let ctx, hue, logo, form, buffer,
        target   = {},
        tendrils = [],
        settings = {};
    settings.debug = false;
    settings.friction = 0.5;
    settings.trails = 30;
    settings.size = 50;
    settings.dampening = 0.25;
    settings.tension = 0.98;
    Math.TWO_PI = Math.PI * 2;

    // Set Class Oscillator
    function Oscillator(options) {
      this.init(options || {});
    }
    Oscillator.prototype = (function() {
      var value = 0;
      return {
        init: function(options) {
          this.phase = options.phase || 0;
          this.offset = options.offset || 0;
          this.frequency = options.frequency || 0.001;
          this.amplitude = options.amplitude || 1;
        },
        update: function() {
          this.phase += this.frequency;
          value = this.offset + Math.sin(this.phase) * this.amplitude;
          return value;
        },
        value: function() {
          return value;
        }
      };
    })();

    // Set Class Tendril
    function Tendril(options) {
      this.init(options || {});
    }
    Tendril.prototype = (function() {
      function Node() {
        this.x  = 0;
        this.y  = 0;
        this.vy = 0;
        this.vx = 0;
      }
      return {
        init: function(options) {
          this.spring   = options.spring + (Math.random() * 0.1) - 0.05;
          this.friction = settings.friction + (Math.random() * 0.01) - 0.005;
          this.nodes    = [];

          for (var i = 0, node; i < settings.size; i += 1) {
            node   = new Node();
            node.x = target.x;
            node.y = target.y;
            this.nodes.push(node);
          }
        },
        update: function() {
          let spring = this.spring,
              node   = this.nodes[0];

          node.vx += (target.x - node.x) * spring;
          node.vy += (target.y - node.y) * spring;

          for (var prev, i = 0, n = this.nodes.length; i < n; i += 1) {
            node = this.nodes[i];
            if (i > 0) {
              prev    = this.nodes[i - 1];
              node.vx += (prev.x - node.x) * spring;
              node.vy += (prev.y - node.y) * spring;
              node.vx += prev.vx * settings.dampening;
              node.vy += prev.vy * settings.dampening;
            }
            node.vx *= this.friction;
            node.vy *= this.friction;
            node.x  += node.vx;
            node.y  += node.vy;
            spring  *= settings.tension;
          }
        },
        draw: function() {
          var x = this.nodes[0].x,
              y = this.nodes[0].y,
              a, b;

          ctx.beginPath();
          ctx.moveTo(x, y);

          for (var i = 1, n = this.nodes.length - 2; i < n; i += 1) {
            a = this.nodes[i];
            b = this.nodes[i + 1];
            x = (a.x + b.x) * 0.5;
            y = (a.y + b.y) * 0.5;
            ctx.quadraticCurveTo(a.x, a.y, x, y);
          }

          a = this.nodes[i];
          b = this.nodes[i + 1];

          ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
          ctx.stroke();
          ctx.closePath();
        }
      };
    })();

    function init(event) {
      document.removeEventListener('mousemove', init);
      document.removeEventListener('touchstart', init);
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('touchmove', mousemove);
      document.addEventListener('touchstart', touchstart);
      mousemove(event);
      reset();
      loop();
    }

    function reset() {
      tendrils = [];
      for (var i = 0; i < settings.trails; i++) {
        tendrils.push(new Tendril({
          spring: 0.45 + 0.025 * (i / settings.trails)
        }));
      }
    }

    // Random Color
    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let color = randomIntFromInterval(1, 2);

    function loop() {
      if (!ctx.running) return;
      
      // Canvas setting
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = 'xor';
      ctx.strokeStyle = 'hsla(190, 100%, 50%, 0.25)';
      ctx.lineWidth = 1;

      if (color === 1) ctx.strokeStyle = 'hsla(190, 100%, 50%, 0.25)';
      else ctx.strokeStyle = 'hsla(340, 100%, 50%, 0.25)';

      for (var i = 0, tendril; i < settings.trails; i += 1) {
        tendril = tendrils[i];
        tendril.update();
        tendril.draw();
      }

      ctx.frame++;
      requestAnimFrame(loop);
    }

    function resize() {
      ctx.canvas.width  = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }

    function start() {
      if (!ctx.running) {
        ctx.running = true;
        loop();
      }
    }

    function stop() {
      ctx.running = false;
    }

    function mousemove(event) {
      if (event.touches) {
        target.x = event.touches[0].pageX;
        target.y = event.touches[0].pageY;
      } else {
        target.x = event.clientX
        target.y = event.clientY;
      }
      event.preventDefault();
    }

    function touchstart(event) {
      if (event.touches.length == 1) {
        target.x = event.touches[0].pageX;
        target.y = event.touches[0].pageY;
      }
    }

    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (fn) {
        window.setTimeout(fn, 1000 / 60)
      };
    })();

    ctx = document.querySelector('canvas').getContext('2d');

    ctx.running = true;
    ctx.frame = 1;

    hue = new Oscillator({
      phase: Math.random() * Math.TWO_PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285
    });

    document.addEventListener('mousemove', init);
    document.addEventListener('touchstart', init);
    document.body.addEventListener('orientationchange', resize);
    window.addEventListener('resize', resize);
    window.addEventListener('focus', start);
    window.addEventListener('blur', stop);

    resize();
  } else {
    document.body.removeEventListener('orientationchange', resize);
    window.removeEventListener('resize', resize);
    window.removeEventListener('focus', start);
    window.removeEventListener('blur', stop);
    document.removeEventListener('mousemove', mousemove);
    document.removeEventListener('touchmove', mousemove);
    document.removeEventListener('touchstart', touchstart);
  }
}

// エクスポート
export default (context, inject) => {  
  inject('delay', delay)
  inject('bodyScrollPrevent', bodyScrollPrevent)
  inject('setFillHeight', setFillHeight)
  inject('creareFirstViewTitEffectContent', creareFirstViewTitEffectContent)
  inject('mouseStalker', mouseStalker)
}