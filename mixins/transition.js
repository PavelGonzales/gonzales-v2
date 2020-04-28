import { TweenLite, Power3 } from 'gsap'

export default {
  data() {
    return {
      transitionBlock: null
    };
  },

  mounted() {
    this.transitionBlock = document.querySelector('#transitionBlock');
  },

  transition: {
    leave(el, done) {
      TweenLite.to(document.querySelector('#transitionBlock'), 1, {
        yPercent: -100,
        ease: Power3.easeIn,
        onComplete() {
          done()
        }
      })
    },

    enter(el, done) {
      TweenLite.to(document.querySelector('#transitionBlock'), 1, {
        yPercent: -200,
        ease: Power3.easeOut,
        onComplete() {
          done()
          TweenLite.to(document.querySelector('#transitionBlock'), 0.00001, {
            yPercent: 0
          })
        }
      })
    }
  }
}
