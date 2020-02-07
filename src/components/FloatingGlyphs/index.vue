<template>
  <div class="c-floating-glyphs" />
</template>

<script>
import collect from 'collect.js'
import Matter from 'matter-js'
import MatterWrap from 'matter-wrap'
import { scaleLinear } from 'd3-scale'

Matter.use(MatterWrap)

const {
  Engine,
  Render,
  World,
  Body,
  Bodies,
  Common,
} = Matter

export default {
  props: {
    images: {
      default: () => ([]),
      type: Array,
    },
  },

  data() {
    return {
      width: null,
      height: null,
    }
  },

  watch: {
    width() {
      this.reset()
      this.init()
    },
  },

  methods: {
    init() {
      this.engine = Engine.create()
      this.engine.world.gravity.x = 0
      this.engine.world.gravity.y = 0

      this.render = Render.create({
        element: this.$el,
        engine: this.engine,
        options: {
          wireframes: false,
          background: 'transparent',
          pixelRatio: 'auto',
          width: this.width,
          height: this.height,
          showDebug: false,
          showBroadphase: false,
          showBounds: false,
          showVelocity: false,
          showCollisions: false,
          showSeparations: false,
          showAxes: false,
          showPositions: false,
          showAngleIndicator: false,
          showIds: false,
          showShadows: false,
          showVertexNumbers: false,
          showConvexHulls: false,
          showInternalEdges: false,
          showMousePosition: false,
        },
      })

      const count = Math.floor((this.width * this.height) / 9000)
      const canvasStartX = -this.width * 0.5
      const canvasStartY = -this.height * 0.5
      const canvasEndX = this.width * 1.5
      const canvasEndY = this.height * 1.5
      const baseSize = scaleLinear()
        .domain([400, 1200])
        .range([50, 80])
        .clamp(true)(window.innerWidth)

      for (let i = 0; i < count; i += 1) {
        const image = collect(this.images).random()
        const spriteSize = image.width
        const size = Common.random(baseSize, baseSize * 1.8)
        const body = Bodies.rectangle(
          Common.random(canvasStartX, canvasEndX),
          Common.random(canvasStartY, canvasEndY),
          size,
          size,
          {
            friction: 0,
            frictionAir: 0,
            restitution: 1.05,
            slop: 0,
            render: {
              fillStyle: '#F25D48',
              sprite: {
                xScale: size / spriteSize,
                yScale: size / spriteSize,
                texture: image.src,
              },
            },
            plugin: {
              wrap: {
                min: {
                  x: canvasStartX,
                  y: canvasStartY,
                },
                max: {
                  x: canvasEndX,
                  y: canvasEndY,
                },
              },
            },
          },
        )

        Body.setVelocity(body, {
          // x: Common.random(-2, 2) + 2,
          // y: Common.random(-2, 2) + 2,
          x: Common.random(-3, 3),
          y: Common.random(-3, 3),
        })

        Body.rotate(body, Common.random(0, 360))

        World.add(this.engine.world, body)
      }

      Engine.run(this.engine)
      Render.run(this.render)
    },

    setDimensions() {
      this.width = this.$el.clientWidth
      this.height = this.$el.clientHeight
    },

    reset() {
      if (this.engine) {
        this.$el.innerHTML = ''
        World.clear(this.engine.world)
        Engine.clear(this.engine)
      }
    },
  },

  mounted() {
    window.addEventListener('resize', this.setDimensions)
    this.setDimensions()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.setDimensions)
    this.reset()
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
