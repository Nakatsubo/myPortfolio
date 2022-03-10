<template>
  <div class="root__header-wrapper">
    <header class="header">
      <component :is="isTopPage ? 'h1' : 'p'" class="header__logo">
        <nuxt-link to="/">YUSUKE NAKATSUBO</nuxt-link>
      </component>
      <div class="header__menu">
        <div class="header__menu-bg"></div>
        <div class="header__menu-g"></div>
      </div>
    </header>
    <div class="glMenu">
      <div class="glMenu__scroll">
        <div class="glMenu__scroll-content">
          <div class="menuSet">
            <div class="menuSet__left">
              <nuxt-link to="./" class="menuSet__left--items">HOME</nuxt-link>
              <nuxt-link to="./" class="menuSet__left--items">MY PORTFOLIO</nuxt-link>
              <!-- <nuxt-link to="./" class="menuSet__left--items">BLOG</nuxt-link> -->
              <span class="menuSet__left--items notActive">BLOG</span>
              <nuxt-link to="./" class="menuSet__left--items">CONTACT</nuxt-link>
            </div>
            <div class="menuSet__right"></div>
          </div>
        </div>
      </div>
      <div class="glMenu__close">
        <div class="glMenu__close--bg"></div>
        <div class="glmenu__close--g"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';
export default {
  computed: {
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  &__logo {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }
  &__menu {
    position: absolute;
    top: 3.6rem;
    right: 3.6rem;
    width: 4.8rem;
    height: 4.8rem;
    &--bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('images/menu_bg.png');
      background-size: contain;
    }
    &--g {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // background-image: url('~/assets/images/menu_open.png');
      background-size: contain;
    }
  }
}
</style>