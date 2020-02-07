<template>
  <Layout>
    <app-section color="red" clip-bottom>
      <template v-slot:background>
        <floating-glyphs :images="images" v-if="images.length" />
      </template>
      <template v-slot:default>
        <!-- <banner> -->
        <h1>
          Find the unicorn in the unicode
        </h1>
        <p class="large">
          Glyphfinder is the missing character search for designers, developers and writers.
        </p>
        <!-- </banner> -->
      </template>
    </app-section>

    <app-section color="black">
      <h2>
        large features
      </h2>
    </app-section>

    <app-section color="deep-black" clip-top>
      <h2>
        small features
      </h2>
    </app-section>
  </Layout>
</template>

<script>
import load from 'load-asset'
import FloatingGlyphs from '@/components/FloatingGlyphs'
import tile from '@/components/Banner/tile.png'
// import Banner from '@/components/Banner'
// import FloatingGlyphs from '@/components/FloatingGlyphs'
import AppSection from '@/components/AppSection'

export default {
  components: {
    // Banner,
    FloatingGlyphs,
    AppSection,
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
