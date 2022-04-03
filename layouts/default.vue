<template>
  <div class="root">
    <div class="bgSand" />
    <TheHeader class="root__header" />
    <main class="root__main">
      <Nuxt />
    </main>
    <TheFooter class="root__footer" />
    <div v-if="isPreLoaderShow" class="preLoader">
      <div class="bgSand" />
      <div class="preLoader__bar">
        <div class="preLoader__bar--amount" />
      </div>
      <div class="headSet preLoader__headSet">
        <span>TOHMA KITANO</span>
        <span>TOHMA KITANO</span>
        <span>TOHMA KITANO</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'default',
  data() {
    return {
      isPreLoaderShow: true
    }
  },
  computed: {
    ...mapGetters({
      isLoading: 'opening/isLoading'
    })
  },
  watch: {
    isLoading: async function(next, prev) {
      const GSAP = this.$gsap
      const isMobile = window.matchMedia(`screen and (max-width: ${900}px)`).matches
      const PRELOADER     = document.querySelector('.preLoader'),
            PRELOADER_BAR = document.querySelector('.preLoader__bar') 
            // HEADSET       = document.querySelector('.headSet')
      // console.log(HEADSET) 
      if (!next && prev) {
        GSAP.to(PRELOADER_BAR, .3, {
          // delay: .3,
          opacity: 0,
          zIndex: -1,
          ease: 'Power3.easeOut'
        })
        GSAP.to('.preLoader__headSet', .3, {
          // delay: .3,
          scale: 1.3,
          opacity: 0,
          ease: 'Power3.easeOut'
        })
        GSAP.to(PRELOADER, .7, {
          delay: .7,
          opacity: 0,
          ease: 'Power3.easeOut',
          onComplete: () => {
            this.isPreLoaderShow = false
          }
        })
      }
    }
  },
  mounted() {
    this.setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.setFillHeight()
    })
    window.addEventListener('load', async () => {
      this.bodyScrollPrevent(true)
      let width = 1
      let bar = document.querySelector('.preLoader__bar--amount')
      setInterval(() => {
        if (width <= 100) {
          width += 1
          bar.style.width = width + '%'
        }
      }, 10)
      await this.$delay(1000)
      this.endLoding()
      this.bodyScrollPrevent(false)
    })
    setInterval(this.randambackgroundPosition, 100)
  },
  methods: {
    setFillHeight() {
      const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'))
    },
    ...mapActions({
      endLoding: 'opening/endLoding'
    }),
    randambackgroundPosition() {
      const BG_SAND = document.querySelector('.bgSand')
      let counter = Math.ceil(80 * Math.random())
      BG_SAND.style.backgroundPosition = `${counter}% ${counter}%`;
    },
    bodyScrollPrevent(flag) {
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
    },
  } 
}
</script>

<style lang="scss" scoped>
.root {
  width: 100%;
  height: 100%;
}

.bgSand {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/bg_sand.png');
  background-repeat: repeat;
  background-position: 50%;
  opacity: 0.08;
}

.preLoader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  background-color: $base-color-primary;
  z-index: 99;
  // transform-origin: 0 50%;
  opacity: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  &__bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &--amount {
      width: 0%;
      padding: .1rem 0;
      background-color: $base-color-secondary;
    }
  }
}

.headSet {
  width: 207px;
  font-size: 32px;
  letter-spacing: 1px;
  span:nth-of-type(2) {
    left: -1px;
  }
  span:nth-of-type(3) {
    left: 1px;
  }
}
</style>