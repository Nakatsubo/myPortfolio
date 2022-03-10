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
              <a href="./" class="menuSet__left--items">HOME</a>
              <a href="./" class="menuSet__left--items">MY PORTFOLIO</a>
              <!-- <a href="./" class="menuSet__left--items">BLOG</a> -->
              <span class="menuSet__left--items notActive">BLOG</span>
              <a href="./" class="menuSet__left--items">CONTACT</a>
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