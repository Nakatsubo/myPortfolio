<template>
  <div class="root__header-wrapper">
    <header class="header">
      <component :is="isTopPage ? 'h1' : 'p'" class="header__logo">
        <nuxt-link to="/">YUSUKE NAKATSUBO</nuxt-link>
      </component>
      <button type="button" id="js-open-drawer" class="open-drawer-btn" aria-controls="js-drawer" aria-expanded="false">
        OPEN<span class="sr-only">メニューを開く</span>
      </button>
    </header>
    <div id="js-drawer" class="drawer" aria-expanded="false">
      <nav class="drawer-nav">
        <ul class="drawer-nav__items">
          <li class="drawer-nav__items--item"><a href="./">HOME</a></li>
          <li class="drawer-nav__items--item"><a href="./">MY PORTFOLIO</a></li>
          <li class="drawer-nav__items--item"><span>BLOG</span></li>
          <li class="drawer-nav__items--item"><a href="./">CONTACT</a></li>
        </ul>
      </nav>
      <button type="button" id="js-close-drawer" class="close-drawer-btn" aria-controls="js-drawer" aria-expanded="false">
        CLOSE<span class="sr-only">メニューを閉じる</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isTopPage() {
      if (this.$route.name === 'index') return true
      return false
    },
  },
}
</script>