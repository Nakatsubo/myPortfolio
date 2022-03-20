<template>
  <div class="root">
    <div class="bgSand"></div>
    <TheHeader class="root__header" />
    <main class="root__main">
      <Nuxt />
    </main>
    <TheFooter class="root__footer" />
    <div v-if="isCurtainShown" class="Curtain" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'default',
  data() {
    return {
      isCurtainShown: true
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
      const isMobile = window.matchMedia(`screen and (max-width: ${767}px)`)
        .matches
      if (!next && prev) {
        const winWidth = window.innerWidth
        // Curtain
        GSAP.to('.Curtain', isMobile ? 1.5 : 3, {
          x: '-10%',
          scaleX: 0,
          scaleY: 1.2,
          skewX: isMobile ? 5 : 10,
          ease: 'Power3.easeOut',
          onComplete: () => {
            this.isCurtainShown = false
          }
        })
      }
    }
  },
  mounted() {
    window.addEventListener('load', async () => {
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

.Curtain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 1;
  transform-origin: 0 50%;
}
</style>