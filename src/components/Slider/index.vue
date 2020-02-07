<template>
  <div
    class="c-slider"
    :class="{'is-initialized': initialized, 'is-loading': !initialized }"
    v-if="$scopedSlots.slide"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <virtual
          v-for="(slide, index) in $scopedSlots.slide()"
          class="c-slider__item swiper-slide"
          :node="slide"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Autoplay } from 'swiper/js/swiper.esm.js'
import 'swiper/css/swiper.css'

Swiper.use([Autoplay])

export default {
  components: {
    Virtual: {
      props: ['node'],
      render() {
        return this.node
      },
    },
  },

  props: {
    speed: {
      default: 1000,
      type: Number,
    },

    delay: {
      default: 4000,
      type: Number,
    },
  },

  data() {
    return {
      initialized: false,
    }
  },

  methods: {
    initSwiper() {
      this.swiper = new Swiper(this.$refs.swiper, {
        loop: true,
        slidesPerView: 'auto',
        speed: this.speed,
        centeredSlides: true,
        loopedSlides: this.$scopedSlots.slide().length,
        autoplay: {
          delay: this.delay,
          disableOnInteraction: false,
        },
        on: {
          init: () => {
            this.$nextTick(() => {
              this.initialized = true
            })
          },
        },
      })

      this.swiper.autoplay.start()
    },

    onMouseEnter() {
      this.swiper.autoplay.stop()
    },

    onMouseLeave() {
      this.swiper.autoplay.start()
    },
  },

  mounted() {
    this.initSwiper()
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
