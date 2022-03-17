<template>
  <div class="root__main--container">
    <div class="primaryBlock">
      <div class="primaryBlock__name">
        <div class="primaryBlock__name--greet textEn textEn-small">
          Hello, my name is
        </div>
        <div class="headSet">
          <span>HOGEHOHE FUGAFUGA</span>
          <span>HOGEHOHE FUGAFUGA</span>
          <span>HOGEHOHE FUGAFUGA</span>
          <strong class="textEn-large">,</strong>
        </div>
        <div class="primaryBlock__name--title textEn textEn-large">
          web developer
        </div>
      </div>
      <div class="primaryBlock__position textEn">
        Web Direction / Design / Coding 
      </div>
      <div class="primaryBlock__btn">
        <div class="commonBtn textEn">
          <span class="commonBtn__wrap">
            <span class="commonBtn__wrap--text">CONTACT ME</span>
          </span>
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
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  &__name {
    &--greet {
      font-size: 16px;
    }
    &--title {
      font-size: 32px;
    }
  }
  &__position {
    margin: 24px 0 48px;
    font-size: 12px;
    color: $text-color-secondary;
  }
}

.headSet {
  width: 315px;
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
    width: 266px;
    font-size: 28px;
    span:nth-of-type(2) {
      left: 1px;
    }
    span:nth-of-type(3) {
      left: 3px;
    }
  }
}

p {
  font-size: 32px !important;
}
</style>
