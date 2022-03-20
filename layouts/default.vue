<template>
  <div class="root">
    <div class="bgSand"></div>
    <TheHeader class="root__header" />
    <main class="root__main">
      <Nuxt />
    </main>
    <TheFooter class="root__footer" />
  </div>
</template>

<script>
export default {
  name: 'default',
  mounted() {
    setInterval(this.randambackgroundPosition, 100)
  },
  methods: {
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
</style>