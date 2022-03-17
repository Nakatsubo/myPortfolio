<template>
  <div class="root__main--container">
    <div class="primaryBlock">
      <div class="primaryBlock__name">
        <div class="textEn textEn-small">
          Hello, my name is
        </div>
        <div class="headSet">
          <span>HOGEHOHE FUGAFUGA</span>
          <span>HOGEHOHE FUGAFUGA</span>
          <span>HOGEHOHE FUGAFUGA</span>
          <span class="textEn-large">,</span>
        </div>
        <div class="textEn textEn-large">
          web developer
        </div>
      </div>
      <div class="primaryBlock__role">
        Web Direction / Design / Coding 
      </div>
      <div class="primaryBlock__btn">
        <div class="commonBtn textEn">
          CONTACT ME
        </div>
      </div>
    </div>

    <div class="dummy-box">
      <p class="dummy">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="dummy">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="dummy">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="dummy">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p class="dummy">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div> 
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.setFillHeight()
    let viewWindowWidth = window.innerWidth
    window.addEventListener('resize', () => {
      if (viewWindowWidth === window.innerWidth) return
      viewWindowWidth = window.innerWidth
      this.setFillHeight()
      console.log(viewWindowWidth)
    })
  },
  methods: {
    setFillHeight() {
      const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'))
    },
  }
}
</script>

<style lang="scss" scoped>
.primaryBlock {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
}

p {
  font-size: 32px !important;
}
</style>
