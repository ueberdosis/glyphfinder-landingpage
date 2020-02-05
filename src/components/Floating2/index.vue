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
      cancelAnimationFrame(this.idRAF)

      console.log(this)

      let width = this.$el.clientWidth
      let height = this.$el.clientHeight
      let offset = -1

      this.engine.events = {}
      World.clear(this.engine.world)
      Engine.clear(this.engine)

      this.engine = Engine.create()
      this.engine.world.gravity.x = 0
      this.engine.world.gravity.y = 0

      // create a renderer
      this.render = Render.create({
        element: this.$el,
        engine: this.engine,
        options: {
          wireframes: false,
          background: 'transparent',
          pixelRatio: 'auto',
          width: width,
          height: height,
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

      // create two boxes and a ground
      // add all of the bodies to the world
      World.add(this.engine.world, [
        Bodies.rectangle(width / 2, height - offset, width, 1, {
          isStatic: true,
          render: {
            fillStyle: '#FFFFFF'
          }
        }),
        Bodies.rectangle(width / 2, offset, width, 1, {
          isStatic: true,
          render: {
            fillStyle: '#FFFFFF'
          }
        }),
        Bodies.rectangle(offset, height / 2, 1, height, {
          isStatic: true,
          render: {
            fillStyle: '#FFFFFF'
          }
        }),
        Bodies.rectangle(width - offset, height / 2, 1, height, {
          isStatic: true,
          render: {
            fillStyle: '#FFFFFF'
          }
        })
      ])

      for (let i = 0; i < 50; i++) {
        // let radius = 2 + Math.random() * 40
        const size = 100

        World.add(
          this.engine.world,
          Bodies.rectangle(
            40 + Math.random() * width - 80,
            40 + Math.random() * 100,
            size,
            size,
            { 
              // chamfer: {
              //   radius: 12,
              // },
              // velocity: {
              //   x: Common.random(-3, 3) + 3, 
              //   y: Common.random(-3, 3) + 3
              // },
              render: {
                fillStyle: '#F25D48',
                sprite: {
                  xScale: 0.33,
                  yScale: 0.33,
                  texture: 'https://drop.philipp-kuehn.com/hWVABOql3k.png',
                },
              },
              // plugin: {
              //   wrap: {
              //       min: { x: this.render.bounds.min.x, y: this.render.bounds.min.y },
              //       max: { x: this.render.bounds.max.x, y: this.render.bounds.max.y }
              //   }
              // },
            },
          ),
        )
      }

      // run the engine
      Engine.run(this.engine)

      // run the renderer
      Render.run(this.render)

      this.inc = 0

      this.engine.world.gravity.y = 4

      this.update()
    },

    update() {
      if (this.inc > 8) {
        this.engine.world.gravity.x = Math.cos(this.inc / 55)
        this.engine.world.gravity.y = Math.sin(this.inc / 55)
      }
      this.inc++
      this.idRAF = requestAnimationFrame(this.update.bind(this))
    }
  },

  mounted() {
    this.engine = Engine.create()
    this.idRAF = null
    this.init()
  },

  beforeDestroy() {
    if (this.render) {
      this.render.canvas.remove()
      this.render.canvas = null
      this.render.context = null
      this.render.textures = {}
    }
  }
}
</script>

<style lang="scss" src="./style.scss"></style>
