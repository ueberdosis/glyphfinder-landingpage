<template>
  <div class="c-floating-glyphs"></div>
</template>

<script>
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
  methods: {
    init() {
      this.engine = Engine.create()
      this.engine.world.gravity.scale = 0

      this.render = Render.create({
        element: this.$el,
        engine: this.engine,
        options: {
          wireframes: false,
          background: 'transparent',
          pixelRatio: 'auto',
          width: this.$el.clientWidth,
          height: this.$el.clientHeight,
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

      for (let i = 0; i < 50; i++) {
        const spriteSize = 300
        const size = 100
        const body = Bodies.rectangle(
          Common.random(-this.render.options.width, this.render.options.width), 
          Common.random(-this.render.options.height, this.render.options.height),
          size,
          size,
          { 
            friction: 0,
            frictionAir: 0,
            render: {
              fillStyle: '#F25D48',
              sprite: {
                xScale: size / spriteSize,
                yScale: size / spriteSize,
                texture: 'https://drop.philipp-kuehn.com/hWVABOql3k.png',
              },
            },
            plugin: {
              wrap: {
                min: {
                  x: 0,
                  y: 0,
                },
                max: {
                  x: this.render.canvas.width,
                  y: this.render.canvas.height,
                },
              },
            },
          },
        )

        Body.setVelocity(body, {
          x: Common.random(-3, 3) + 3, 
          y: Common.random(-3, 3) + 3,
        })

        World.add(this.engine.world, body)
      }

      Engine.run(this.engine)
      Render.run(this.render)
    },
  },

  mounted() {
    this.init()
  },

  beforeDestroy() {
    World.clear(this.engine.world)
    Engine.clear(this.engine)
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
