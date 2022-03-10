<template>
  <div class="root__header-wrapper">
    <header class="header">
      <component :is="isTopPage ? 'h1' : 'p'" class="header__logo">
        <nuxt-link to="/">YUSUKE NAKATSUBO</nuxt-link>
      </component>
      <div class="header__menu">
        <div class="header__menu--bg"></div>
        <div class="header__menu--g"></div>
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
  width: 100%;
  height: auto;
  z-index: 1;
  &__logo {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  &__menu {
    position: absolute;
    top: 36px;
    right: 36px;
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
}

.glMenu {
  // display: none;
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
}

.menuSet {
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  &__left {
    width: 100%;
    text-align: center;
    &--items {
      display: block;
      font-family: $font-base-bold;
      font-size: clamp(16px, 10vw, 100px);
      font-weight: 700;
      transition: 0.2s;
      &:hover {
        color: $text-color-secondary;
      } 
    }
  }
  &__right {
    text-align: center;
  }
  @include mq() {
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 900px;
    height: 100vh;
    margin-left: auto;
    margin-right: auto;
    &__left {
      width: 642px;
    }
  }
}
</style>