<template>
  <div class="root__footer-wrapper">
    <footer class="footer">
      <div class="footer__logo">
        <div class="headSet">
        <span>HOGEHOHE FUGAFUGA</span>
        <span>HOGEHOHE FUGAFUGA</span>
        <span>HOGEHOHE FUGAFUGA</span>
      </div>
      </div>
      <p class="footer__copyright textEn">
        <small> &copy; HOGEHOGE FUGAFUGA All rights reserved.</small>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: auto;
  padding: 48px 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  &__copyright {
    margin-left: 12px;
    small {
      color: $text-color-secondary;
    }
  }
  @include mq() {
    padding: 96px 48px;
  }
}

.headSet {
  width: 196px;
  font-size: 20px;
  letter-spacing: 1px;
  span:nth-of-type(2) {
    left: -1px;
  }
  span:nth-of-type(3) {
    left: 1px;
  }
  @include mq() {
    width: 265px;
    font-size: 28px;
    span:nth-of-type(2) {
      left: -1px;
    }
    span:nth-of-type(3) {
      left: 1px;
    }
  }
}
</style>