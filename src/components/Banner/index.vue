<template>
  <div class="c-banner">
    <div class="c-banner__content">
      <div class="c-banner__content-inner">
        <slot />
      </div>
    </div>
    <div class="c-banner__background">
      <floating-glyphs :images="images" v-if="images.length" />
    </div>
  </div>
</template>

<script>
import load from 'load-asset'
import FloatingGlyphs from '@/components/FloatingGlyphs'
import tile from './tile.png'

export default {
  components: {
    FloatingGlyphs,
  },

  data() {
    return {
      images: [],
    }
  },

  methods: {
    imageDataToImage(imagedata) {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = imagedata.width
      canvas.height = imagedata.height
      ctx.putImageData(imagedata, 0, 0)
      const image = new Image()
      image.src = canvas.toDataURL()
      return image
    },
  },

  mounted() {
    load(tile)
      .then(image => {
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        canvas.width = image.width
        canvas.height = image.height
        ctx.drawImage(image, 0, 0)

        const tileWidth = 300
        const tileHeight = 300
        const tilesX = image.width / tileWidth
        const tilesY = image.height / tileHeight
        const totalTiles = tilesX * tilesY
        const images = []

        for (let i = 0; i < tilesY; i++) {
          for (let j = 0; j < tilesX; j++) {
            const imageData = ctx.getImageData(j * tileWidth, i * tileHeight, tileWidth, tileHeight)
            const image = this.imageDataToImage(imageData)
            images.push(image)
          }
        }

        this.images = images
      })
  },
}
</script>

<style lang="scss" src="./style.scss"></style>