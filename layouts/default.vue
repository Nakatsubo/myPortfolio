<template>
  <div class="root">
    <div class="bgSand" />
    <TheHeader class="root__header" />
    <main class="root__main">
      <Nuxt />
    </main>
    <TheFooter class="root__footer" />
    <div v-if="isPreLoaderShow" class="preLoader">
      <div class="preLoader__bar">
        <div class="preLoader__bar--amount" />
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
      const PRELOADER = document.querySelector('.preLoader'),
            PRELOADER_BAR = document.querySelector('.preLoader__bar')
      
      if (!next && prev) {
        GSAP.to(PRELOADER_BAR, isMobile ? 1 : 1.5, {
          duration: .2,
          opacity: 0,
          zIndex: -1
        })
        GSAP.to(PRELOADER, isMobile ? 1 : 1.5, {
          duration: .2,
          opacity: 0,
          onComplete: () => {
            this.isPreLoaderShow = false
          }
        })
      }
    }
  },
  mounted() {
    window.addEventListener('load', async () => {
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
    })
    setInterval(this.randambackgroundPosition, 100)
  },
  methods: {
    ...mapActions({
      endLoding: 'opening/endLoding'
    }),
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $base-color-primary;
  z-index: 99;
  // transform-origin: 0 50%;
  opacity: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  &__bar {
    width: 100%;
    height: auto;
    &--amount {
      width: 0%;
      padding: .1rem 0;
      background-color: $base-color-secondary;
    }
  }
}
</style>