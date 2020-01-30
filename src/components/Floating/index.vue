<template>
  <canvas class="c-floating-avatars" :class="{ 'is-loaded': isLoaded }" resize></canvas>
</template>

<script>
import paper, { Raster, Point, Path, Group } from 'paper'

export default {
  props: {
    glyphs: {
      default: () => [],
      type: Array,
    },
  },

  data() {
    return {
      paper: null,
      isLoaded: false,
    }
  },

  mounted() {
    this.paper = paper.setup(this.$el)
    this.paper.install(window)

    function Ball(radius, point, vector) {
      this.radius = radius
      this.point = point
      this.vector = vector
      this.maxVec = 3
      this.numSegment = Math.floor(radius / 2 + 2)
      this.boundOffset = []
      this.boundOffsetBuff = []
      this.sidePoints = []
      this.path = new Path({
        // fillColor: {
        //   hue: Math.random() * 360,
        //   saturation: 1,
        //   brightness: 1,
        // },
      })

      for (var i = 0; i < this.numSegment; i ++) {
        this.boundOffset.push(this.radius)
        this.boundOffsetBuff.push(this.radius)
        this.path.add(new Point())
        this.sidePoints.push(new Point({
          angle: 360 / this.numSegment * i,
          length: 1,
        }))
      }
    }

    Ball.prototype = {
      iterate() {
        this.checkBorders()
        if (this.vector.length > this.maxVec) {
          this.vector.length = this.maxVec
        }
        this.point = this.point.add(this.vector)
        this.updateShape()
      },

      checkBorders() {
        var size = paper.view.size
        if (this.point.x < -this.radius) {
          this.point.x = size.width + this.radius
        }
        if (this.point.x > size.width + this.radius) {
          this.point.x = -this.radius
        }
        if (this.point.y < -this.radius) {
          this.point.y = size.height + this.radius
        }
        if (this.point.y > size.height + this.radius) {
          this.point.y = -this.radius
        }
      },

      updateShape() {
        var segments = this.path.segments
        for (var i = 0; i < this.numSegment; i ++) {
          segments[i].point = this.getSidePoint(i)
        }

        this.path.smooth()

        for (var i = 0; i < this.numSegment; i ++) {
          if (this.boundOffset[i] < this.radius / 4) {
            this.boundOffset[i] = this.radius / 4
          }
          var next = (i + 1) % this.numSegment
          var prev = (i > 0) ? i - 1 : this.numSegment - 1
          var offset = this.boundOffset[i]
          offset += (this.radius - offset) / 15
          offset += ((this.boundOffset[next] + this.boundOffset[prev]) / 2 - offset) / 3

          this.boundOffsetBuff[i] = this.boundOffset[i] = offset
        }
      },

      react(b) {
        var dist = this.point.getDistance(b.point)
        if (dist < this.radius + b.radius && dist != 0) {
          var overlap = this.radius + b.radius - dist
          var direc = this.point.subtract(b.point).normalize(overlap * 0.015)
          this.vector = this.vector.add(direc)
          b.vector = b.vector.subtract(direc)
          this.calcBounds(b)
          b.calcBounds(this)
          this.updateBounds()
          b.updateBounds()
        }
      },

      getBoundOffset(b) {
        var diff = this.point.subtract(b)
        var angle = (diff.angle + 180) % 360
        return this.boundOffset[Math.floor(angle / 360 * this.boundOffset.length)]
      },

      calcBounds(b) {
        for (var i = 0; i < this.numSegment; i ++) {
          var tp = this.getSidePoint(i)
          var bLen = b.getBoundOffset(tp)
          var td = tp.getDistance(b.point)

          if (td < bLen) {
            this.boundOffsetBuff[i] -= (bLen  - td) / 2
          }
        }
      },

      getSidePoint(index) {
        return this.point.add(this.sidePoints[index].multiply(this.boundOffset[index]))
      },

      updateBounds() {
        for (var i = 0; i < this.numSegment; i ++) {
          this.boundOffset[i] = this.boundOffsetBuff[i]
        }
      }
    }

    var rasters = []
    var balls = []
    var initialAngles = {}

    // for (var i = 0; i < this.images.length; i++) {
    //   var raster = new Raster(this.images[i])
    //   var position = Point.random().multiply(view.size)
    //   var vector = new Point({
    //     angle: 360 * Math.random(),
    //     length: Math.random() * 10
    //   })
    //   var resolution = this.$el.offsetWidth * this.$el.offsetHeight
    //   var radius = Math.min(Math.random() * resolution / 20000 + 60, 200)
    //   var width = radius * 2
    //   var imageWidth = raster.size.width
    //   var scale = width / imageWidth

    //   balls.push(new Ball(radius, position, vector))
    //   rasters.push(raster.clone().scale(scale))

    //   var group = new Group(balls[i].path, rasters[i])
    //   group.clipped = true
    //   raster.remove()
    // }



    // var numBalls = 18;

    // for (var i = 0; i < numBalls; i++) {
    //   var position = Point.random().multiply(view.size)
    //   var vector = new Point({
    //     angle: 360 * Math.random(),
    //     length: Math.random() * 10
    //   });
    //   var radius = Math.random() * 60 + 60;
    //   balls.push(new Ball(radius, position, vector));
    // }



    // var text = new PointText({
    //     point: [50, 50],
    //     content: '&',
    //     fillColor: 'black',
    //     fontFamily: 'Inter',
    //     fontWeight: 'bold',
    //     fontSize: 25
    // });


    // for (var i = 0; i < 1; i++) {
    //   var raster = new PointText({
    //     // point: [50, 50],
    //     content: '&',
    //     fillColor: 'black',
    //     fontFamily: 'Inter',
    //     fontWeight: 'bold',
    //     fontSize: 25
    //   });
    //   var position = Point.random().multiply(view.size)
    //   var vector = new Point({
    //     angle: 360 * Math.random(),
    //     length: Math.random() * 10
    //   })
    //   var resolution = this.$el.offsetWidth * this.$el.offsetHeight
    //   var radius = Math.min(Math.random() * resolution / 20000 + 60, 200)
    //   var width = radius * 2
    //   var imageWidth = raster.size.width
    //   var scale = width / imageWidth

    //   balls.push(new Ball(radius, position, vector))
    //   rasters.push(raster.clone().scale(scale))

    //   var group = new Group(balls[i].path, rasters[i])
    //   group.clipped = true
    //   raster.remove()
    // }

    console.log(this.glyphs.length)

    for (var i = 0; i < this.glyphs.length; i++) {
      var size = 150
      var raster = new PointText({
        // point: Point.random().multiply(view.size),
        content: this.glyphs[i],
        // fillColor: 'rgba(255, 255, 255, 0.1)',
        // fillColor: '#222',
        fillColor: '#FF624D',
        fontFamily: 'Inter',
        fontWeight: '900',
        fontSize: size
      });
      var position = Point.random().multiply(view.size)
      var vector = new Point({
        angle: 360 * Math.random(),
        length: Math.random() * 10
      })
      // var resolution = this.$el.offsetWidth * this.$el.offsetHeight
      // var radius = Math.min(Math.random() * resolution / 20000 + 60, 200)
      // var width = radius * 2
      // var imageWidth = raster.size.width
      // var scale = width / imageWidth

      // var radius = Math.random() * 60 + 60;
      var radius = size * 0.45

      balls.push(new Ball(radius, position, vector))
      // rasters.push(raster.clone().scale(scale))
      rasters.push(raster.clone())

      var group = new Group(balls[i].path, rasters[i])
      // group.clipped = true
      raster.remove()
    }

    this.paper.view.onFrame = () => {
      for (var i = 0; i < balls.length - 1; i++) {
        for (var j = i + 1; j < balls.length; j++) {
          balls[i].react(balls[j]);
        }
      }

      for (var i = 0, l = balls.length; i < l; i++) {
        balls[i].iterate()
        rasters[i].position = balls[i].path.position

        if (!this.isLoaded) {
          initialAngles[i] = balls[i].path.position.angle
        }

        rasters[i].rotation = balls[i].path.position.angle - initialAngles[i]
      }

      this.isLoaded = true
    }

  },

  beforeDestroy() {
    this.paper.remove()
    this.paper.clear()
    this.paper = null
  },
}
</script>

<style lang="scss" src="./style.scss"></style>