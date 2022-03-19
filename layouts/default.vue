<template>
  <div class="root">
    <div class="bgSand"></div>
    <div class="preLoader">
      <div class="preLoder__percent"></div>
      <div class="preLoader__bar">
        <div class="preLoader__bar--amount"></div>
      </div>
      <div class="headSet">
        <span>HOGEHOHE FUGAFUGA</span>
        <span>HOGEHOHE FUGAFUGA</span>
        <span>HOGEHOHE FUGAFUGA</span>
        <strong class="textEn-large">,</strong>
      </div>
    </div>
    <TheHeader class="root__header" />
    <main class="root__main">
      <Nuxt />
    </main>
    <TheFooter class="root__footer" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.setFillHeight()
    })
    setInterval(this.randambackgroundPosition, 100)
  },
  methods: {
    setFillHeight() {
      const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'))
    },
    randambackgroundPosition() {
      const BG_SAND = document.querySelector('.bgSand')
      let counter = Math.ceil(80 * Math.random())
      BG_SAND.style.backgroundPosition = `${counter}% ${counter}%`;
    }
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
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  background: $base-color-primary; // 後で変更するかも
  z-index: 99;
  &__percent {
    color: $text-color-primary;
  }
  &__bar {
    width: 60%;
    height: auto;
    margin-top: 20px;
    &--amount {
      width: 1%;
      padding: 1px 0;
      background: $base-color-secondary;
    }
  }
}

.headSet {
  width: 315px; // 後で変更する
  margin: 16px auto 4px;
  font-size: 32px;
  letter-spacing: 1px;
  span:nth-of-type(2) {
    left: -1px;
  }
  span:nth-of-type(3) {
    left: 1px;
  }
  strong {
    display: inline-block;
    margin-left: -8px;
  }
  @include mq() {
    width: 529px; // 後で変更する
    font-size: 56px;
  }
}
</style>