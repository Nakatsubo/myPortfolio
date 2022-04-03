<template>
  <div class="root__main--container">
    <div class="primaryBlock">
      <div class="primaryBlock__name">
        <div class="primaryBlock__name--greet textEn textEn-small">
          <span class="titEffect">
            <span class="titEffect__detail">Hello, my name is</span>
          </span>
        </div>
        <div class="headSet">
          <span>TOHMA KITANO</span>
          <span>TOHMA KITANO</span>
          <span>TOHMA KITANO</span>
          <strong class="textEn-large">,</strong>
        </div>
        <div class="primaryBlock__name--title textEn textEn-large">
          web developer
        </div>
      </div>
      <div class="primaryBlock__position textEn">
        Web Direction / Design / Coding 
      </div>
      <nuxt-link to="./" class="primaryBlock__btn">
        <div class="commonBtn textEn">
          <span class="commonBtn__wrap">
            <span class="commonBtn__wrap--text">CONTACT ME</span>
          </span>
        </div> 
      </nuxt-link>
      <div class="primaryBlock__scrollBar">
        <div class="primaryBlock__scrollBar--bar"></div>
        <div class="primaryBlock__scrollBar--dot"></div>
      </div>
    </div>

    <div class="dummy-box titEffect">
      <p class="dummy titleeffect__detail">Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
    let titEffect    = document.querySelector('.titEffect')
    let isTitVisible = titEffect.classList.contains('titEffect-visible')
    this.creareNewTitEffectContent(isTitVisible, titEffect)
  },
  methods: {
    setFillHeight() {
      const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'))
    },
    creareNewTitEffectContent(bool, el) {
      if (bool) {
        el.classList.add('titEffect-animated')
        el.find('.titEffect__clone').remove()
        el.find('.titEffect__cover').remove()
      }
      else {
        let titEffectContent     = el.textContent,
            titEffectClone       = '<span class="titEffect__clone" style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; width: 100%;">'.concat(titEffectContent, '</span>'),
            titEffectCover       = '<span class="titEffect__cover" style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; width: 100%; opacity: 0.25;">'.concat(titEffectContent, '</span>'),
            titEffectDuplication = '<span class="titEffect__detail" style="display: inline-block; opacity: 0;">'.concat(titEffectContent, '</span>')
        el.innerHTML = titEffectDuplication.concat(titEffectClone).concat(titEffectCover)
        this.animateNewTitEffectContent(bool, el)
      }
    },
    animateNewTitEffectContent (bool, el) {
      const GSAP = this.$gsap
      if (!bool) {
        let newTitEffectClone       = document.querySelector('.titEffect__clone'),
            newTitEffectCover       = document.querySelector('.titEffect__cover'),
            newtitEffectDuplication = document.querySelector('.titEffect__detail')
        let elemHeight = el.offsetHeight,
            elemWidth  = el.offsetWidth;
        let initialCloneRect  = 'rect(0px 0px '.concat(elemHeight, 'px 0px)'),
            archivedCloneRect = 'rect(0px '.concat(elemWidth, 'px ').concat(elemHeight, 'px 0px)'),
            initialCoverRect  = 'rect(0px '.concat(elemWidth, 'px ').concat(elemHeight, 'px 0px)'),
            archivedCoverRect = 'rect(0px '.concat(elemWidth, 'px ').concat(elemHeight, 'px ').concat(elemWidth, "px)")
        newTitEffectClone.style.clip = initialCloneRect
        newTitEffectCover.style.clip = initialCoverRect
        el.classList.add('titEffect-visible')
        GSAP.to(newTitEffectClone, 1.5, {
          clip: archivedCloneRect,
          ease: 'Power3.easeOut',
        })
        GSAP.to(newTitEffectCover, 1.5, {
          clip: archivedCoverRect,
          ease: 'Power3.easeOut',
          onComplete: () => {
            // el.classList.add('titEffect-animated')
            newtitEffectDuplication.style.opacity = 1
            newTitEffectClone.remove()
            newTitEffectCover.remove()
          }
        })
      }
    }
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
      font-size: 40px;
    }
  }
  &__position {
    margin: 24px 0 48px;
    font-size: 12px;
    color: $text-color-secondary;
  }
  &__btn {
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
  &__scrollBar {
    position: absolute;
    right: 12px;
    bottom: 12px;
    width: 21px;
    height: 65px;
    overflow: hidden;
    &--bar {
      position: absolute;
      top: 10px;
      left: 50%;
      width: 1px;
      height: 45px;
      background-image: url('/scroll_bar.png');
      background-size: 100% 100%;
    }
    &--dot {
      position: absolute;
      top: 0;
      left: 6px;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: $base-color-secondary;
      animation:1s ease-out infinite scrollDotAnimation;
    }
  }
  @include mq() {
    &__name {
      &--greet {
        font-size: 24px;
      }
      &--title {
        font-size: 60px;
      }
    }
    &__position {
      font-size: 18px;
    }
  }
}

@keyframes scrollDotAnimation {
	0% {
    transform:translateY(-50px);
  }
	30% {
    transform:translateY(-50px);
  }
	100% {
    transform:translateY(66px);
  }
}

.headSet {
  width: 267px;
  margin: 16px auto 4px;
  font-size: 40px;
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
    width: 520px;
    font-size: 80px;
    strong {
      margin-left: -16px;
    }
  }
}

.titEffect {
  backface-visibility: hidden;
  transition: all .8s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
  transition-property: transform, opacity;
  transform: translateX(15px);
  display: inline-block;
  position: relative;
  opacity: 0;
}

.titEffect__detail {
  display: inline-block;
  opacity: 0;
}

.titEffect__clone, .titEffect__cover {
  display: block;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%
}

.titEffect__cover {
  opacity: 0.25;
}

.titEffect-visible {
  transform: translateX(0);
  opacity: 1;
}

.titEffect-animated .titEffect__detail {
  opacity: 1;
}

p {
  font-size: 32px !important;
}
</style>
