<template>
  <div class="root__header-wrapper">
    <header class="header">
      <component :is="isTopPage ? 'h1' : 'p'" class="header__logo">
        <nuxt-link to="/">TOHMA<br>KITANO</nuxt-link>
      </component>
      <div class="header__menu">
        <div class="header__menu--bg"></div>
        <div class="header__menu--g"></div>
      </div>
    </header>
    <div class="glMenu">
      <div class="glMenu__scroll">
        <div class="glMenu__scroll--content">
          <div class="menuSet">
            <div class="menuSet__left">
              <nuxt-link to="./" class="menuSet__left--items">HOME</nuxt-link>
              <nuxt-link to="./" class="menuSet__left--items">MY PORTFOLIO</nuxt-link>
              <!-- <nuxt-link to="./" class="menuSet__left--items">BLOG</nuxt-link> -->
              <span class="menuSet__left--items notActive">BLOG</span>
              <nuxt-link to="./" class="menuSet__left--items">CONTACT</nuxt-link>
            </div>
            <div class="menuSet__right">
              <div class="menuSet__right--items items">
                <p class="items__text textEn">
                  This site is not open to the public. It is confidential. <br>
                  Please note that this site is not open to the public.
                </p>
                <p class="items__text textJa">
                  このサイトは一般公開していません。<br>
                  極秘とさせていただきます、予めご了承くだい。
                </p>
              </div>
              <div class="headSet">
                <span>TOHMA KITANO</span>
                <span>TOHMA KITANO</span>
                <span>TOHMA KITANO</span>
              </div>
              <div class="items__copyright textEn">
                <small> &copy; TOHMA KITANO All rights reserved.</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="glMenu__close">
        <div class="glMenu__close--bg"></div>
        <div class="glMenu__close--g"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
  mounted() {
    this.setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.setFillHeight()
    })
    this.glMenu()
  },
  methods: {
    setFillHeight() {
      const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'))
    },
    glMenu() {
      const GSAP = this.$gsap
      const MENU_WRAP      = document.querySelector('.glMenu'),
            MENU_LEFT      = document.querySelector('.menuSet__left'),
            MENU_RIGHT     = document.querySelector('.menuSet__right'),
            OPEN_BTN_WRAP  = document.querySelector('.header__menu'),
            OPEN_BTN       = document.querySelector('.header__menu--g'),
            OPEN_BTN_BG    = document.querySelector('.header__menu--bg'),
            CLOSE_BTN_WRAP = document.querySelector('.glMenu__close'),
            CLOSE_BTN      = document.querySelector('.glMenu__close--g'),
            CLOSE_BTN_BG   = document.querySelector('.glMenu__close--bg')
      OPEN_BTN.addEventListener('click', () => {
        GSAP.killTweensOf(MENU_WRAP),
        GSAP.set(MENU_WRAP,
          { display: 'block', x: '-100%' }),
        GSAP.to(MENU_WRAP,
          .5,
          { x: '0%', ease: 'Power3.easeIn',
            onComplete: function(){
              GSAP.killTweensOf(CLOSE_BTN_WRAP),
              GSAP.to(CLOSE_BTN_WRAP,
                .4, { opacity: 1, ease: 'Power3.easeOut' })
            }
          }
        ),
        GSAP.killTweensOf(MENU_LEFT),
        GSAP.set(MENU_LEFT,
          { opacity: 0 }),
        GSAP.to(MENU_LEFT,
          .8, { delay: .6, opacity: 1, ease: 'Power3.easeOut' }),
        GSAP.killTweensOf(MENU_RIGHT),
        GSAP.set(MENU_RIGHT, { opacity: 0 }),
        GSAP.to(MENU_RIGHT,
          .8, { delay: .7, opacity: 1, ease: 'Power3.easeOut' })
        this.$bodyScrollPrevent(true)
      }),
      OPEN_BTN.addEventListener('mouseenter', () => {
        GSAP.killTweensOf(OPEN_BTN_BG),
        GSAP.to(OPEN_BTN_BG,
          .3, { scale: 1.3, ease: 'Power3.easeInOut' })
      }),
      OPEN_BTN.addEventListener('mouseleave', () => {
        GSAP.killTweensOf(OPEN_BTN_BG),
        GSAP.to(OPEN_BTN_BG,
          .3, { scale: 1, ease: 'Power3.easeInOut' })
      }),
      CLOSE_BTN.addEventListener('click', () => {
        GSAP.killTweensOf(CLOSE_BTN_WRAP),
        GSAP.to(CLOSE_BTN_WRAP,
          .3, { opacity: 0, ease: 'Power3.easeOut' }),
        GSAP.killTweensOf(MENU_LEFT),
        GSAP.to(MENU_LEFT,
          .4, { opacity: 0, ease: 'Power3.easeOut' }),
        GSAP.killTweensOf(MENU_RIGHT),
        GSAP.to(MENU_RIGHT,
          .4, { opacity: 0, ease: 'Power3.easeOut'}),
        GSAP.killTweensOf(MENU_WRAP),
        GSAP.to(MENU_WRAP,
          .4,
          { delay: .2, x: '-100%', ease: 'Power2.easeIn',
            onComplete: function(){
              MENU_WRAP.style.display = 'none'
            }
          }
        )
        this.$bodyScrollPrevent(false)
      }),
      CLOSE_BTN.addEventListener('mouseenter', () => {
        GSAP.killTweensOf(CLOSE_BTN_BG),
        GSAP.to(CLOSE_BTN_BG,
          .3, { scale: 1.3, ease: 'Power3.easeOut' })
      }),
      CLOSE_BTN.addEventListener('mouseleave', () => {
        GSAP.killTweensOf(CLOSE_BTN_BG),
        GSAP.to(CLOSE_BTN_BG,
          .3, { scale: 1, ease: 'Power3.easeOut' })
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  z-index: 1;
  &__logo {
    position: absolute;
    top: 12px;
    left: 12px;
    padding: 5px 10px;
    background-color: $base-color-secondary;
    font-family: $font-base-bold;
    font-size: 12px;
    color: $base-color-primary;
    // letter-spacing: 1px;
  }
  &__menu {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 48px;
    height: 48px;
    &--bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/menu_bg.png');
      background-size: contain;
    }
    &--g {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/menu_open.png');
      background-size: contain;
    }
  }
  @include mq() {
    &__logo {
      // padding: 10px 15px;
      font-size: 2vw;
    }
    &__menu {
      top: 24px;
      right: 24px;
      cursor: pointer;
    }
  }
}

.glMenu {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  background-image: url('/sand_w.png');
  background-repeat: repeat;
  background-position: 50%;
  background-attachment: fixed;
  backface-visibility: hidden;
  z-index: 2;
  &__scroll {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    &--content {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 100%;
    } 
  }
  &__close {
    position: absolute;
    width: 48px;
    height: 48px;
    top: 12px;
    right: 12px;
    opacity: 0;
    &--bg {
      position:absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url('/menu_bg.png');
      background-size: contain;
    }
    &--g {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-image: url('/menu_close.png');
      background-size: contain;
      cursor: pointer;
    }
  }
  @include mq() {
    &__close {
      top: 24px;
      right: 24px;
    }
  }
}

.menuSet {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 120px 0;
  &__left {
    width: 100%;
    text-align: center;
    &--items {
      display: block;
      font-family: $font-base-bold;
      font-size: 14vw;
      font-weight: 700;
      transition: 0.2s;
      &:hover {
        color: $text-color-secondary;
      } 
    }
  }
  &__right {
    width: 100%;
    margin-top: 80px;
    line-height: 1.25;
    text-align: center;
    .items {
      &__text {
        margin-bottom: 10px;
        font-size: 3vw;
      }
      &__copyright {
        color: $text-color-secondary;
      }
    }
  }
  @include mq() {
    padding: 0;
    flex-flow: row nowrap;
    width: 900px;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    &__left {
      &--items {
        width: 600px;
        height: 80px;
        font-size: 80px;
      }
    }
    &__right {
      margin-top: 0;
      margin-left: 34px;
      .items {
        &__text {
          font-size: 14px;
        }
      }
    }
  }
}

.headSet {
  width: 161px;
  margin: 40px auto 20px;
  font-size: 24px;
  letter-spacing: 1px;
  span:nth-of-type(2) {
    left: 1px;
  }
  span:nth-of-type(3) {
    left: 3px;
  }
  @include mq() {
    width: 185px;
    font-size: 28px;
    span:nth-of-type(2) {
      left: 1px;
    }
    span:nth-of-type(3) {
      left: 3px;
    }
  }
}
</style>