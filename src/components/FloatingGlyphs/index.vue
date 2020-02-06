<template>
  <div class="c-floating-glyphs"></div>
</template>

<script>
import collect from 'collect.js'
import Matter from 'matter-js'
import MatterWrap from 'matter-wrap'

Matter.use(MatterWrap)

let Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Mouse = Matter.Mouse,
  Body = Matter.Body,
  Bodies = Matter.Bodies,
  Common = Matter.Common,
  Vertices = Matter.Vertices,
  Svg = Matter.Svg,
  Constraint = Matter.Constraint,
  Composites = Matter.Composites,
  MouseConstraint = Matter.MouseConstraint;

export default {
  props: {
    images: {
      default: () => ([]),
      type: Array,
    }
  },

  data() {
    return {
      width: null,
      height: null,
    }
  },

  watch: {
    width(newWidth, oldWidth) {
      this.reset()
      this.init()
    }
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
          showMousePosition: false
        }
      })

      const count = Math.floor((this.width * this.height) / 9000)
      const canvasStartX = -this.width * 0.5
      const canvasStartY = -this.height * 0.5
      const canvasEndX = this.width * 1.5
      const canvasEndY = this.height * 1.5

      for (let i = 0; i < count; i++) {
        const image = collect(this.images).random()
        const spriteSize = image.width
        const size = Common.random(80, 150)
        const body = Bodies.rectangle(
          Common.random(canvasStartX, canvasEndX), 
          Common.random(canvasStartY, canvasEndY),
          size,
          size,
          { 
            friction: 0,
            frictionAir: 0,
            restitution: 1.05,
            // rotation: 45,
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
          x: Common.random(-2, 2) + 2, 
          y: Common.random(-2, 2) + 2,
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
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
