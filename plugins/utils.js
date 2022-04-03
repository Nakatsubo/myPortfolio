// Promise で setTimeOut を返す
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// 背景を固定する
const bodyScrollPrevent = (flag) => {
  let currentPosition, body = document.getElementsByTagName('body')[0]
  let getuserAgent = window.navigator.userAgent.toLowerCase()
  let isUserAgent = getuserAgent.indexOf('iphone') > -1 || getuserAgent.indexOf('ipad') > -1 || getuserAgent.indexOf('macintosh')>-1 && 'ontouchend' in document
  let scrollBarWidth = window.innerWidth - document.body.clientWidth
  if (flag) {
    body.style.paddingRight = scrollBarWidth + 'px'
    if (isUserAgent) {
      currentPosition =- window.pageYOffset,
      body.style.position = 'fixed'
      body.style.width = '100%'
      body.style.top = currentPosition +'px'
    }
    else {
      body.style.overflow = 'hidden'
    }
  } else if (!flag) {
    body.style.paddingRight = ''
    if (isUserAgent) {
      currentPosition = parseInt(body.style.top.replace(/[^0-9]/g,''))
      body.style.position = ''
      body.style.width = ''
      body.style.top = ''
      window.scrollTo(0, currentPosition)
    }
    else {
      body.style.overflow = ''
    }
  }
}

// 画面の高さいっぱいに要素を表示させる
const setFillHeight = () => {
  const VIEW_WINDOW_HEIGHT = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', ''.concat(VIEW_WINDOW_HEIGHT, 'px'))
}

// ファーストビューでテキストをアニメーションさせる
const creareNewTitEffectContent = (bool, el) => {
  if (bool) {
    el.find('.titEffect__clone').remove()
    el.find('.titEffect__cover').remove()
  }
  else {
    let titEffectContent     = el.textContent,
        titEffectClone       = '<span class="titEffect__clone" style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; width: 100%;">'.concat(titEffectContent, '</span>'),
        titEffectCover       = '<span class="titEffect__cover" style="display: block; overflow: hidden; position: absolute; top: 0; left: 0; width: 100%; opacity: 0.25;">'.concat(titEffectContent, '</span>'),
        titEffectDuplication = '<span class="titEffect__detail" style="display: inline-block; opacity: 0;">'.concat(titEffectContent, '</span>')
    el.innerHTML = titEffectDuplication.concat(titEffectClone).concat(titEffectCover)
    animateNewTitEffectContent(bool, el)
  }
}

import { gsap } from 'gsap';
function animateNewTitEffectContent (bool, el) {
  const GSAP = gsap
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
    GSAP.to(newTitEffectClone, 2.5, {
      clip: archivedCloneRect,
      ease: 'Power3.easeOut',
    })
    GSAP.to(newTitEffectCover, 2.5, {
      clip: archivedCoverRect,
      ease: 'Power3.easeOut',
      onComplete: () => {
        newtitEffectDuplication.style.opacity = 1
        newTitEffectClone.remove()
        newTitEffectCover.remove()
      }
    })
  }
}


export default (context, inject) => {  
  inject('delay', delay)
  inject('bodyScrollPrevent', bodyScrollPrevent)
  inject('setFillHeight', setFillHeight)
  inject('creareNewTitEffectContent', creareNewTitEffectContent)
}